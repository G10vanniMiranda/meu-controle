import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { isDatabaseUnavailableError } from "@/lib/db-error";

const movementSchema = z.object({
  itemId: z.string().trim().min(1, "itemId e obrigatorio"),
  tipo: z.enum(["entrada", "saida"]),
  quantidade: z.coerce.number().gt(0),
  observacao: z.string().trim().optional(),
});

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Banco nao configurado. Defina DATABASE_URL para leitura e escrita." },
      { status: 503 },
    );
  }

  try {
    const movements = await prisma.stockMovement.findMany({
      orderBy: { data: "desc" },
    });

    return NextResponse.json(
      movements.map((movement) => ({
        id: movement.id,
        data: movement.data.toISOString().slice(0, 10),
        itemId: movement.itemId,
        tipo: movement.tipo,
        quantidade: Number(movement.quantidade),
        observacao: movement.observacao,
      })),
    );
  } catch (error) {
    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao carregar movimentacoes" }, { status: 500 });
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
    const parsed = movementSchema.parse(body);

    const result = await prisma.$transaction(async (tx) => {
      const item = await tx.inventoryItem.findUnique({
        where: { id: parsed.itemId },
      });

      if (!item) {
        return { error: "Item nao encontrado." as const };
      }

      const quantidade = parsed.quantidade;
      const estoqueAtual = Number(item.estoqueAtual);
      if (parsed.tipo === "saida" && quantidade > estoqueAtual) {
        return { error: "Saida bloqueada: estoque insuficiente." as const };
      }

      const nextEstoque =
        parsed.tipo === "entrada" ? estoqueAtual + quantidade : estoqueAtual - quantidade;

      const updatedItem = await tx.inventoryItem.update({
        where: { id: item.id },
        data: { estoqueAtual: nextEstoque },
      });

      const movement = await tx.stockMovement.create({
        data: {
          data: new Date(),
          itemId: parsed.itemId,
          tipo: parsed.tipo,
          quantidade: parsed.quantidade,
          observacao: parsed.observacao || "Movimentacao manual",
        },
      });

      return { movement, updatedItem };
    });

    if ("error" in result) {
      return NextResponse.json({ message: result.error }, { status: 400 });
    }

    return NextResponse.json(
      {
        movement: {
          id: result.movement.id,
          data: result.movement.data.toISOString().slice(0, 10),
          itemId: result.movement.itemId,
          tipo: result.movement.tipo,
          quantidade: Number(result.movement.quantidade),
          observacao: result.movement.observacao,
        },
        updatedItem: {
          id: result.updatedItem.id,
          estoqueAtual: Number(result.updatedItem.estoqueAtual),
        },
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

    return NextResponse.json({ message: "Erro ao registrar movimentacao" }, { status: 500 });
  }
}
