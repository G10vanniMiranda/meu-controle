import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { isDatabaseUnavailableError } from "@/lib/db-error";

const inventorySchema = z.object({
  nome: z.string().trim().min(1, "nome e obrigatorio"),
  categoria: z.enum(["peixe", "arroz", "embalagem", "bebida", "tempero", "outros"]),
  unidade: z.enum(["kg", "un", "l"]),
  estoqueMinimo: z.number().min(0),
  custoUnitario: z.number().min(0),
  fornecedorId: z.string().trim().optional(),
});

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Banco nao configurado. Defina DATABASE_URL para leitura e escrita." },
      { status: 503 },
    );
  }

  try {
    const items = await prisma.inventoryItem.findMany({
      include: {
        fornecedor: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(
      items.map((item) => ({
        id: item.id,
        nome: item.nome,
        categoria: item.categoria,
        unidade: item.unidade,
        estoqueAtual: Number(item.estoqueAtual),
        estoqueMinimo: Number(item.estoqueMinimo),
        custoUnitario: Number(item.custoUnitario),
        fornecedorId: item.fornecedorId ?? undefined,
        fornecedor: item.fornecedor
          ? {
              id: item.fornecedor.id,
              nomeFantasia: item.fornecedor.nomeFantasia,
            }
          : null,
      })),
    );
  } catch (error) {
    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao carregar insumos" }, { status: 500 });
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
    const parsed = inventorySchema.parse(body);

    if (parsed.fornecedorId) {
      const supplierExists = await prisma.supplier.findUnique({
        where: { id: parsed.fornecedorId },
        select: { id: true },
      });

      if (!supplierExists) {
        return NextResponse.json({ message: "fornecedorId invalido" }, { status: 400 });
      }
    }

    const item = await prisma.inventoryItem.create({
      data: {
        nome: parsed.nome,
        categoria: parsed.categoria,
        unidade: parsed.unidade,
        estoqueAtual: 0,
        estoqueMinimo: parsed.estoqueMinimo,
        custoUnitario: parsed.custoUnitario,
        fornecedorId: parsed.fornecedorId || null,
      },
    });

    return NextResponse.json(
      {
        id: item.id,
        nome: item.nome,
        categoria: item.categoria,
        unidade: item.unidade,
        estoqueAtual: Number(item.estoqueAtual),
        estoqueMinimo: Number(item.estoqueMinimo),
        custoUnitario: Number(item.custoUnitario),
        fornecedorId: item.fornecedorId ?? undefined,
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

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao criar insumo" }, { status: 500 });
  }
}
