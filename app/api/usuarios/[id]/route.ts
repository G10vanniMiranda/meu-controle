import { NextResponse } from "next/server";
import { z } from "zod";
import { createPasswordHash } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getDatabaseErrorCode, isDatabaseUnavailableError } from "@/lib/db-error";

const paramsSchema = z.object({
  id: z.string().trim().min(1),
});

const teamUserUpdateSchema = z.object({
  nome: z.string().trim().min(1, "nome e obrigatorio"),
  email: z.string().trim().email("email invalido"),
  telefone: z.string().trim().optional(),
  cargo: z.string().trim().min(1, "cargo e obrigatorio"),
  role: z.enum(["admin", "gerente", "financeiro", "estoque", "atendimento", "cozinha"]),
  status: z.enum(["ativo", "inativo", "ferias"]),
  password: z.string().min(8, "senha deve ter pelo menos 8 caracteres").optional(),
  observacoes: z.string().trim().optional(),
});

function serializeTeamMember(member: {
  id: string;
  nome: string;
  email: string;
  telefone: string | null;
  cargo: string;
  role: "admin" | "gerente" | "financeiro" | "estoque" | "atendimento" | "cozinha";
  status: "ativo" | "inativo" | "ferias";
  passwordHash: string | null;
  observacoes: string | null;
  createdAt: Date;
}) {
  return {
    id: member.id,
    nome: member.nome,
    email: member.email,
    telefone: member.telefone ?? undefined,
    cargo: member.cargo,
    role: member.role,
    status: member.status,
    hasPassword: Boolean(member.passwordHash),
    observacoes: member.observacoes ?? undefined,
    createdAt: member.createdAt.toISOString(),
  };
}

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
    const parsed = teamUserUpdateSchema.parse(body);

    const user = await prisma.teamMember.update({
      where: { id: params.id },
      data: {
        nome: parsed.nome,
        email: parsed.email.toLowerCase(),
        telefone: parsed.telefone || null,
        cargo: parsed.cargo,
        role: parsed.role,
        status: parsed.status,
        passwordHash: parsed.password ? await createPasswordHash(parsed.password) : undefined,
        observacoes: parsed.observacoes || null,
      },
    });

    return NextResponse.json(serializeTeamMember(user));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Dados invalidos", issues: error.flatten() },
        { status: 400 },
      );
    }

    if (getDatabaseErrorCode(error) === "P2002") {
      return NextResponse.json({ message: "Ja existe um usuario com este email." }, { status: 409 });
    }

    if (getDatabaseErrorCode(error) === "P2025") {
      return NextResponse.json({ message: "Usuario nao encontrado." }, { status: 404 });
    }

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao atualizar usuario" }, { status: 500 });
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

    await prisma.teamMember.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if (getDatabaseErrorCode(error) === "P2025") {
      return NextResponse.json({ message: "Usuario nao encontrado." }, { status: 404 });
    }

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao remover usuario" }, { status: 500 });
  }
}
