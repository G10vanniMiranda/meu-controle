import type { PrismaClient } from "@/generated/db/client";
import assert from "node:assert/strict";
import { POST } from "@/app/api/auth/login/route";
import { AUTH_COOKIE_NAME, createPasswordHash } from "@/lib/auth";

type TestCase = {
  name: string;
  run: () => Promise<void>;
};

const ENV_KEYS = [
  "APP_ADMIN_EMAIL",
  "APP_ADMIN_PASSWORD",
  "APP_ADMIN_PASSWORD_HASH",
  "APP_AUTH_SECRET",
  "DATABASE_URL",
] as const;

function snapshotEnv() {
  return Object.fromEntries(ENV_KEYS.map((key) => [key, process.env[key]]));
}

function restoreEnv(snapshot: Record<string, string | undefined>) {
  for (const key of ENV_KEYS) {
    const value = snapshot[key];
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
}

function createJsonRequest(body: unknown) {
  return new Request("http://localhost/api/auth/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

const globalForTests = global as typeof globalThis & { prisma?: PrismaClient | undefined };

export const loginRouteTests: TestCase[] = [
  {
    name: "login route returns 401 for invalid credentials",
    async run() {
      const snapshot = snapshotEnv();

      delete process.env.DATABASE_URL;
      process.env.APP_ADMIN_EMAIL = "admin@example.com";
      process.env.APP_ADMIN_PASSWORD = "senha-correta";
      process.env.APP_AUTH_SECRET = "auth-secret";
      delete process.env.APP_ADMIN_PASSWORD_HASH;

      try {
        const response = await POST(createJsonRequest({ email: "admin@example.com", password: "errada" }));
        const body = await response.json();

        assert.equal(response.status, 401);
        assert.equal(body.message, "Email ou senha invalidos.");
        assert.equal(response.cookies.get(AUTH_COOKIE_NAME), undefined);
      } finally {
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "login route sets an auth cookie for valid legacy credentials",
    async run() {
      const snapshot = snapshotEnv();

      delete process.env.DATABASE_URL;
      process.env.APP_ADMIN_EMAIL = "admin@example.com";
      process.env.APP_ADMIN_PASSWORD = "senha-correta";
      process.env.APP_AUTH_SECRET = "auth-secret";
      delete process.env.APP_ADMIN_PASSWORD_HASH;

      try {
        const response = await POST(createJsonRequest({ email: "admin@example.com", password: "senha-correta" }));
        const body = await response.json();
        const cookie = response.cookies.get(AUTH_COOKIE_NAME);

        assert.equal(response.status, 200);
        assert.equal(body.ok, true);
        assert.ok(cookie);
        assert.equal(cookie.name, AUTH_COOKIE_NAME);
        assert.match(cookie.value, /^legacy:/);
      } finally {
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "login route sets an auth cookie for valid database credentials",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      process.env.APP_AUTH_SECRET = "auth-secret";
      delete process.env.APP_ADMIN_EMAIL;
      delete process.env.APP_ADMIN_PASSWORD;
      delete process.env.APP_ADMIN_PASSWORD_HASH;

      const passwordHash = await createPasswordHash("senha-correta");
      globalForTests.prisma = {
        teamMember: {
          count: async () => 1,
          findUnique: async ({ where }: { where: { email?: string; id?: string } }) => {
            if (where.email === "db@example.com") {
              return {
                id: "user-1",
                email: "db@example.com",
                passwordHash,
                status: "ativo",
              } as never;
            }

            return null;
          },
        },
      } as unknown as PrismaClient;

      try {
        const response = await POST(createJsonRequest({ email: "db@example.com", password: "senha-correta" }));
        const body = await response.json();
        const cookie = response.cookies.get(AUTH_COOKIE_NAME);

        assert.equal(response.status, 200);
        assert.equal(body.ok, true);
        assert.ok(cookie);
        assert.equal(cookie.name, AUTH_COOKIE_NAME);
        assert.match(cookie.value, /^user:user-1:/);
      } finally {
        globalForTests.prisma = undefined;
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "login route validates payload shape",
    async run() {
      const snapshot = snapshotEnv();

      delete process.env.DATABASE_URL;
      process.env.APP_ADMIN_EMAIL = "admin@example.com";
      process.env.APP_ADMIN_PASSWORD = "senha-correta";
      process.env.APP_AUTH_SECRET = "auth-secret";
      delete process.env.APP_ADMIN_PASSWORD_HASH;

      try {
        const response = await POST(createJsonRequest({ email: "invalido", password: "" }));
        const body = await response.json();

        assert.equal(response.status, 400);
        assert.equal(body.message, "Dados invalidos");
      } finally {
        restoreEnv(snapshot);
      }
    },
  },
];

