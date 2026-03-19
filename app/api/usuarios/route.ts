import { NextResponse } from "next/server";
import { z } from "zod";
import { createPasswordHash } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getDatabaseErrorCode, isDatabaseUnavailableError } from "@/lib/db-error";

const teamUserSchema = z.object({
  nome: z.string().trim().min(1, "nome e obrigatorio"),
  email: z.string().trim().email("email invalido"),
  telefone: z.string().trim().optional(),
  cargo: z.string().trim().min(1, "cargo e obrigatorio"),
  role: z.enum(["admin", "gerente", "financeiro", "estoque", "atendimento", "cozinha"]),
  status: z.enum(["ativo", "inativo", "ferias"]),
  password: z.string().min(8, "senha deve ter pelo menos 8 caracteres"),
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

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { message: "Banco nao configurado. Defina DATABASE_URL para leitura e escrita." },
      { status: 503 },
    );
  }

  try {
    const users = await prisma.teamMember.findMany({
      orderBy: [{ status: "asc" }, { nome: "asc" }],
    });

    return NextResponse.json(users.map(serializeTeamMember));
  } catch (error) {
    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao carregar usuarios" }, { status: 500 });
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
    const parsed = teamUserSchema.parse(body);
    const passwordHash = await createPasswordHash(parsed.password);

    const user = await prisma.teamMember.create({
      data: {
        nome: parsed.nome,
        email: parsed.email.toLowerCase(),
        telefone: parsed.telefone || null,
        cargo: parsed.cargo,
        role: parsed.role,
        status: parsed.status,
        passwordHash,
        observacoes: parsed.observacoes || null,
      },
    });

    return NextResponse.json(serializeTeamMember(user), { status: 201 });
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

    if (isDatabaseUnavailableError(error)) {
      return NextResponse.json({ message: "Banco indisponivel no momento." }, { status: 503 });
    }

    return NextResponse.json({ message: "Erro ao criar usuario" }, { status: 500 });
  }
}
