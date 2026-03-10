import { NextResponse } from "next/server";
import { z } from "zod";
import { defaultCashFlow } from "@/lib/mock-data";
import { prisma } from "@/lib/prisma";

const cashFlowSchema = z.object({
  data: z.string().trim().min(1, "data e obrigatoria"),
  tipo: z.enum(["entrada", "saida"]),
  categoria: z.enum(["venda", "compra", "taxa", "despesa_fixa"]),
  descricao: z.string().trim().min(1, "descricao e obrigatoria"),
  valor: z.coerce.number().gt(0),
});

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(defaultCashFlow);
  }

  const entries = await prisma.cashFlowEntry.findMany({
    orderBy: { data: "desc" },
  });

  return NextResponse.json(
    entries.map((entry) => ({
      id: entry.id,
      data: entry.data.toISOString().slice(0, 10),
      tipo: entry.tipo,
      categoria: entry.categoria,
      descricao: entry.descricao,
      valor: Number(entry.valor),
    })),
  );
}

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Banco nao configurado. Defina DATABASE_URL para habilitar escrita." },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const parsed = cashFlowSchema.parse(body);

    const entry = await prisma.cashFlowEntry.create({
      data: {
        data: new Date(`${parsed.data}T00:00:00.000Z`),
        tipo: parsed.tipo,
        categoria: parsed.categoria,
        descricao: parsed.descricao,
        valor: parsed.valor,
      },
    });

    return NextResponse.json(
      {
        id: entry.id,
        data: entry.data.toISOString().slice(0, 10),
        tipo: entry.tipo,
        categoria: entry.categoria,
        descricao: entry.descricao,
        valor: Number(entry.valor),
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Dados invalidos", issues: error.flatten() },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "Erro ao criar lancamento de caixa" }, { status: 500 });
  }
}
