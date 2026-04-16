import { NextResponse } from "next/server";
import { z } from "zod";
import { getDatabaseErrorCode, isDatabaseUnavailableError } from "@/lib/db-error";
import { prisma } from "@/lib/prisma";

const paramsSchema = z.object({
  id: z.string().trim().min(1),
});

const cashFlowUpdateSchema = z.object({
  data: z.string().trim().min(1, "data e obrigatoria"),
  tipo: z.enum(["entrada", "saida"]),
  categoria: z.enum(["venda", "compra", "taxa", "despesa_fixa", "deposito"]),
  descricao: z.string().trim().min(1, "descricao e obrigatoria"),
  valor: z.coerce.number().gt(0),
});

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Banco nao configurado. Defina DATABASE_URL para habilitar escrita." },
      { status: 503 },
    );
  }

  try {
    const params = paramsSchema.parse(await context.params);
    const body = await request.json();
    const parsed = cashFlowUpdateSchema.parse(body);

    const entry = await prisma.cashFlowEntry.update({
      where: { id: params.id },
      data: {
        data: new Date(`${parsed.data}T00:00:00.000Z`),
        tipo: parsed.tipo,
        categoria: parsed.categoria,
        descricao: parsed.descricao,
        valor: parsed.valor,
      },
    });

    return NextResponse.json({
      id: entry.id,
      data: entry.data.toISOString().slice(0, 10),
      tipo: entry.tipo,
      categoria: entry.categoria,
      descricao: entry.descricao,
      valor: Number(entry.valor),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Dados invalidos", issues: error.flatten() },
        { status: 400 },
      );
    }

    if (getDatabaseErrorCode(error) === "P2025") {
      return NextResponse.json({ message: "Lancamento de caixa nao encontrado." }, { status: 404 });
    }

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao atualizar lancamento de caixa" }, { status: 500 });
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Banco nao configurado. Defina DATABASE_URL para habilitar escrita." },
      { status: 503 },
    );
  }

  try {
    const params = paramsSchema.parse(await context.params);

    await prisma.cashFlowEntry.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (getDatabaseErrorCode(error) === "P2025") {
      return NextResponse.json({ message: "Lancamento de caixa nao encontrado." }, { status: 404 });
    }

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao remover lancamento de caixa" }, { status: 500 });
  }
}
