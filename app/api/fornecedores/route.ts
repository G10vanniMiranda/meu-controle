import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getDatabaseErrorCode, isDatabaseUnavailableError } from "@/lib/db-error";

const supplierSchema = z.object({
  nomeFantasia: z.string().trim().min(1, "nomeFantasia e obrigatorio"),
  documento: z.string().trim().min(1, "documento e obrigatorio"),
  contato: z.string().trim().min(1).default("nao informado"),
  telefone: z.string().trim().min(1).default("nao informado"),
  observacoes: z.string().trim().optional(),
});

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Banco nao configurado. Defina DATABASE_URL para leitura e escrita." },
      { status: 503 },
    );
  }

  try {
    const suppliers = await prisma.supplier.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(suppliers);
  } catch (error) {
    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao carregar fornecedores" }, { status: 500 });
  }
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
    const parsed = supplierSchema.parse(body);

    const supplier = await prisma.supplier.create({
      data: {
        nomeFantasia: parsed.nomeFantasia,
        documento: parsed.documento,
        contato: parsed.contato,
        telefone: parsed.telefone,
        observacoes: parsed.observacoes || null,
      },
    });

    return NextResponse.json(supplier, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Dados invalidos", issues: error.flatten() },
        { status: 400 },
      );
    }

    if (getDatabaseErrorCode(error) === "P2002") {
      return NextResponse.json({ message: "Documento ja cadastrado para outro fornecedor." }, { status: 409 });
    }

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao criar fornecedor" }, { status: 500 });
  }
}
