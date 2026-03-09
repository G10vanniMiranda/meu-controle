import { NextResponse } from "next/server";
import { z } from "zod";
import { defaultAccounts } from "@/lib/mock-data";
import { prisma } from "@/lib/prisma";

const accountSchema = z.object({
  descricao: z.string().trim().min(1, "descricao e obrigatoria"),
  tipo: z.enum(["pagar", "receber"]),
  parceiro: z.string().trim().min(1, "parceiro e obrigatorio"),
  vencimento: z.string().trim().min(1, "vencimento e obrigatorio"),
  valor: z.coerce.number().gt(0),
  status: z.enum(["aberta", "paga", "atrasada"]),
});

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(defaultAccounts);
  }

  const accounts = await prisma.accountEntry.findMany({
    orderBy: { vencimento: "desc" },
  });

  return NextResponse.json(
    accounts.map((account) => ({
      id: account.id,
      descricao: account.descricao,
      tipo: account.tipo,
      parceiro: account.parceiro,
      vencimento: account.vencimento.toISOString().slice(0, 10),
      valor: Number(account.valor),
      status: account.status,
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
    const parsed = accountSchema.parse(body);

    const account = await prisma.accountEntry.create({
      data: {
        descricao: parsed.descricao,
        tipo: parsed.tipo,
        parceiro: parsed.parceiro,
        vencimento: new Date(`${parsed.vencimento}T00:00:00.000Z`),
        valor: parsed.valor,
        status: parsed.status,
      },
    });

    return NextResponse.json(
      {
        id: account.id,
        descricao: account.descricao,
        tipo: account.tipo,
        parceiro: account.parceiro,
        vencimento: account.vencimento.toISOString().slice(0, 10),
        valor: Number(account.valor),
        status: account.status,
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

    return NextResponse.json({ message: "Erro ao criar conta" }, { status: 500 });
  }
}
