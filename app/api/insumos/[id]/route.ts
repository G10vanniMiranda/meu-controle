import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { isDatabaseUnavailableError } from "@/lib/db-error";

const paramsSchema = z.object({
  id: z.string().trim().min(1),
});

const inventoryUpdateSchema = z.object({
  nome: z.string().trim().min(1, "nome é obrigatório"),
  categoria: z.enum(["peixe", "arroz", "embalagem", "bebida", "tempero", "outros"]),
  unidade: z.enum(["kg", "un", "l"]),
  estoqueAtual: z.coerce.number().min(0),
  estoqueMinimo: z.coerce.number().min(0),
  custoUnitario: z.coerce.number().min(0),
  fornecedorId: z.string().trim().optional(),
});

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Banco não configurado. Defina DATABASE_URL para habilitar escrita." },
      { status: 503 },
    );
  }

  try {
    const params = paramsSchema.parse(await context.params);
    const body = await request.json();
    const parsed = inventoryUpdateSchema.parse(body);

    if (parsed.fornecedorId) {
      const supplierExists = await prisma.supplier.findUnique({
        where: { id: parsed.fornecedorId },
        select: { id: true },
      });

      if (!supplierExists) {
        return NextResponse.json({ message: "fornecedorId inválido" }, { status: 400 });
      }
    }

    const item = await prisma.inventoryItem.update({
      where: { id: params.id },
      data: {
        nome: parsed.nome,
        categoria: parsed.categoria,
        unidade: parsed.unidade,
        estoqueAtual: parsed.estoqueAtual,
        estoqueMinimo: parsed.estoqueMinimo,
        custoUnitario: parsed.custoUnitario,
        fornecedorId: parsed.fornecedorId || null,
      },
    });

    return NextResponse.json({
      id: item.id,
      nome: item.nome,
      categoria: item.categoria,
      unidade: item.unidade,
      estoqueAtual: Number(item.estoqueAtual),
      estoqueMinimo: Number(item.estoqueMinimo),
      custoUnitario: Number(item.custoUnitario),
      fornecedorId: item.fornecedorId ?? undefined,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Dados inválidos", issues: error.flatten() },
        { status: 400 },
      );
    }

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponível no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao atualizar insumo" }, { status: 500 });
  }
}

export async function DELETE(_: Request, context: { params: Promise<{ id: string }> }) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Banco não configurado. Defina DATABASE_URL para habilitar escrita." },
      { status: 503 },
    );
  }

  try {
    const params = paramsSchema.parse(await context.params);

    await prisma.inventoryItem.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponível no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao remover insumo" }, { status: 500 });
  }
}
