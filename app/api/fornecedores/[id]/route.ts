import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { getDatabaseErrorCode, isDatabaseUnavailableError } from "@/lib/db-error";

const paramsSchema = z.object({
  id: z.string().trim().min(1),
});

const supplierUpdateSchema = z.object({
  nomeFantasia: z.string().trim().min(1, "nomeFantasia e obrigatorio"),
  documento: z.string().trim().min(1, "documento e obrigatorio"),
  contato: z.string().trim().min(1, "contato e obrigatorio"),
  telefone: z.string().trim().min(1, "telefone e obrigatorio"),
  observacoes: z.string().trim().optional(),
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
    const parsed = supplierUpdateSchema.parse(body);

    const updated = await prisma.supplier.update({
      where: { id: params.id },
      data: {
        nomeFantasia: parsed.nomeFantasia,
        documento: parsed.documento,
        contato: parsed.contato,
        telefone: parsed.telefone,
        observacoes: parsed.observacoes || null,
      },
    });

    return NextResponse.json(updated);
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

    if (getDatabaseErrorCode(error) === "P2025") {
      return NextResponse.json({ message: "Fornecedor nao encontrado." }, { status: 404 });
    }

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao atualizar fornecedor" }, { status: 500 });
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

    await prisma.supplier.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (getDatabaseErrorCode(error) === "P2003") {
      return NextResponse.json(
        { message: "Nao e possivel excluir: fornecedor vinculado a insumos cadastrados." },
        { status: 409 },
      );
    }

    if (getDatabaseErrorCode(error) === "P2025") {
      return NextResponse.json({ message: "Fornecedor nao encontrado." }, { status: 404 });
    }

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao remover fornecedor" }, { status: 500 });
  }
}
