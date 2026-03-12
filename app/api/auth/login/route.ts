import { NextResponse } from "next/server";
import { z } from "zod";
import {
  AUTH_COOKIE_NAME,
  createSessionToken,
  isAuthConfigured,
  isValidAdminCredentials,
} from "@/lib/auth";

const loginSchema = z.object({
  email: z.string().trim().email("email inválido"),
  password: z.string().min(1, "senha obrigatória"),
});

export async function POST(request: Request) {
  if (!isAuthConfigured()) {
    return NextResponse.json(
      { message: "Autenticação não configurada no ambiente." },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();
    const parsed = loginSchema.parse(body);

    if (!(await isValidAdminCredentials(parsed.email, parsed.password))) {
      return NextResponse.json({ message: "Email ou senha inválidos." }, { status: 401 });
    }

    const sessionToken = await createSessionToken();
    if (!sessionToken) {
      return NextResponse.json(
        { message: "Falha ao criar sessão de autenticação." },
        { status: 500 },
      );
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: sessionToken,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    });

    return response;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Dados inválidos", issues: error.flatten() },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: "Erro ao autenticar." }, { status: 500 });
  }
}
