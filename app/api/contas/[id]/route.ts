import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { isDatabaseUnavailableError } from "@/lib/db-error";

const paramsSchema = z.object({
  id: z.string().trim().min(1),
});

const accountUpdateSchema = z.object({
  descricao: z.string().trim().min(1, "descricao e obrigatoria"),
  tipo: z.enum(["pagar", "receber"]),
  parceiro: z.string().trim().min(1, "parceiro e obrigatorio"),
  vencimento: z.string().trim().min(1, "vencimento e obrigatorio"),
  valor: z.coerce.number().gt(0),
  status: z.enum(["aberta", "paga", "atrasada"]),
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
    const parsed = accountUpdateSchema.parse(body);

    const account = await prisma.accountEntry.update({
      where: { id: params.id },
      data: {
        descricao: parsed.descricao,
        tipo: parsed.tipo,
        parceiro: parsed.parceiro,
        vencimento: new Date(`${parsed.vencimento}T00:00:00.000Z`),
        valor: parsed.valor,
        status: parsed.status,
      },
    });

    return NextResponse.json({
      id: account.id,
      descricao: account.descricao,
      tipo: account.tipo,
      parceiro: account.parceiro,
      vencimento: account.vencimento.toISOString().slice(0, 10),
      valor: Number(account.valor),
      status: account.status,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Dados invalidos", issues: error.flatten() },
        { status: 400 },
      );
    }

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao atualizar conta" }, { status: 500 });
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

    await prisma.accountEntry.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao remover conta" }, { status: 500 });
  }
}
