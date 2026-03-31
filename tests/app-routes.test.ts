import type { PrismaClient } from "@/generated/db/client";
import assert from "node:assert/strict";
import { GET as getCashFlow, POST as postCashFlow } from "@/app/api/fluxo-caixa/route";
import { GET as getAccounts, POST as postAccount } from "@/app/api/contas/route";
import { DELETE as deleteAccount, PUT as putAccount } from "@/app/api/contas/[id]/route";
import { GET as getSuppliers, POST as postSupplier } from "@/app/api/fornecedores/route";
import { DELETE as deleteSupplier } from "@/app/api/fornecedores/[id]/route";
import { GET as getInventory, POST as postInventory } from "@/app/api/insumos/route";
import { DELETE as deleteInventory, PUT as putInventory } from "@/app/api/insumos/[id]/route";
import { GET as getMovements, POST as postMovement } from "@/app/api/movimentacoes/route";
import { POST as postUser } from "@/app/api/usuarios/route";
import { PUT as putUser } from "@/app/api/usuarios/[id]/route";
import { isValidPasswordHash } from "@/lib/auth";

type TestCase = {
  name: string;
  run: () => Promise<void>;
};

type EnvKey = "DATABASE_URL";

type TeamMemberRecord = {
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
};

const ENV_KEYS: EnvKey[] = ["DATABASE_URL"];
const globalForTests = global as typeof globalThis & { prisma?: PrismaClient | undefined };

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

function createJsonRequest(url: string, body: unknown, method: "POST" | "PUT" = "POST") {
  return new Request(url, {
    method,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
}

function setFakePrisma(fakePrisma: unknown) {
  globalForTests.prisma = fakePrisma as PrismaClient;
}

function clearFakePrisma() {
  globalForTests.prisma = undefined;
}

export const appRouteTests: TestCase[] = [
  {
    name: "cash flow POST accepts deposito category and serializes numeric value",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";

      const createdAt = new Date("2026-03-30T00:00:00.000Z");
      let createArgs: unknown;

      setFakePrisma({
        cashFlowEntry: {
          create: async (args: unknown) => {
            createArgs = args;
            return {
              id: "cash-1",
              data: createdAt,
              tipo: "entrada",
              categoria: "deposito",
              descricao: "Aporte",
              valor: 500,
            };
          },
        },
      });

      try {
        const response = await postCashFlow(
          createJsonRequest("http://localhost/api/fluxo-caixa", {
            data: "2026-03-30",
            tipo: "entrada",
            categoria: "deposito",
            descricao: "Aporte",
            valor: 500,
          }),
        );
        const body = await response.json();

        assert.equal(response.status, 201);
        assert.equal(body.categoria, "deposito");
        assert.equal(body.valor, 500);
        assert.deepEqual(createArgs, {
          data: {
            data: new Date("2026-03-30T00:00:00.000Z"),
            tipo: "entrada",
            categoria: "deposito",
            descricao: "Aporte",
            valor: 500,
          },
        });
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "cash flow GET returns serialized entries from prisma",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";

      setFakePrisma({
        cashFlowEntry: {
          findMany: async () => [
            {
              id: "cash-1",
              data: new Date("2026-03-30T00:00:00.000Z"),
              tipo: "entrada",
              categoria: "deposito",
              descricao: "Aporte",
              valor: 500,
            },
          ],
        },
      });

      try {
        const response = await getCashFlow();
        const body = await response.json();

        assert.equal(response.status, 200);
        assert.deepEqual(body, [
          {
            id: "cash-1",
            data: "2026-03-30",
            tipo: "entrada",
            categoria: "deposito",
            descricao: "Aporte",
            valor: 500,
          },
        ]);
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "accounts POST serializes value and vencimento",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      let createArgs: unknown;

      setFakePrisma({
        accountEntry: {
          create: async (args: unknown) => {
            createArgs = args;
            return {
              id: "acc-1",
              descricao: "Fornecedor",
              tipo: "pagar",
              parceiro: "Peixaria",
              vencimento: new Date("2026-03-30T00:00:00.000Z"),
              valor: 120.5,
              status: "aberta",
            };
          },
        },
      });

      try {
        const response = await postAccount(
          createJsonRequest("http://localhost/api/contas", {
            descricao: "Fornecedor",
            tipo: "pagar",
            parceiro: "Peixaria",
            vencimento: "2026-03-30",
            valor: 120.5,
            status: "aberta",
          }),
        );
        const body = await response.json();

        assert.equal(response.status, 201);
        assert.equal(body.vencimento, "2026-03-30");
        assert.equal(body.valor, 120.5);
        assert.deepEqual(createArgs, {
          data: {
            descricao: "Fornecedor",
            tipo: "pagar",
            parceiro: "Peixaria",
            vencimento: new Date("2026-03-30T00:00:00.000Z"),
            valor: 120.5,
            status: "aberta",
          },
        });
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "accounts GET serializes rows from prisma",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";

      setFakePrisma({
        accountEntry: {
          findMany: async () => [
            {
              id: "acc-1",
              descricao: "Fornecedor",
              tipo: "pagar",
              parceiro: "Peixaria",
              vencimento: new Date("2026-03-30T00:00:00.000Z"),
              valor: "120.50",
              status: "aberta",
            },
          ],
        },
      });

      try {
        const response = await getAccounts();
        const body = await response.json();

        assert.equal(response.status, 200);
        assert.deepEqual(body[0], {
          id: "acc-1",
          descricao: "Fornecedor",
          tipo: "pagar",
          parceiro: "Peixaria",
          vencimento: "2026-03-30",
          valor: 120.5,
          status: "aberta",
        });
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "accounts PUT returns 404 when account does not exist",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";

      setFakePrisma({
        accountEntry: {
          update: async () => {
            throw { code: "P2025" };
          },
        },
      });

      try {
        const response = await putAccount(
          createJsonRequest(
            "http://localhost/api/contas/acc-1",
            {
              descricao: "Fornecedor",
              tipo: "pagar",
              parceiro: "Peixaria",
              vencimento: "2026-03-30",
              valor: 120.5,
              status: "aberta",
            },
            "PUT",
          ),
          { params: Promise.resolve({ id: "acc-1" }) },
        );
        const body = await response.json();

        assert.equal(response.status, 404);
        assert.equal(body.message, "Conta nao encontrada.");
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "accounts DELETE returns 404 when account does not exist",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";

      setFakePrisma({
        accountEntry: {
          delete: async () => {
            throw { code: "P2025" };
          },
        },
      });

      try {
        const response = await deleteAccount(new Request("http://localhost/api/contas/acc-1"), {
          params: Promise.resolve({ id: "acc-1" }),
        });
        const body = await response.json();

        assert.equal(response.status, 404);
        assert.equal(body.message, "Conta nao encontrada.");
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "supplier POST returns 409 when document already exists",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";

      setFakePrisma({ supplier: { create: async () => { throw { code: "P2002" }; } } });

      try {
        const response = await postSupplier(createJsonRequest("http://localhost/api/fornecedores", { nomeFantasia: "Fornecedor", documento: "123", contato: "Contato", telefone: "9999" }));
        const body = await response.json();
        assert.equal(response.status, 409);
        assert.equal(body.message, "Documento ja cadastrado para outro fornecedor.");
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "supplier DELETE returns 409 when linked inventory exists",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";

      setFakePrisma({ supplier: { delete: async () => { throw { code: "P2003" }; } } });

      try {
        const response = await deleteSupplier(new Request("http://localhost/api/fornecedores/sup-1"), { params: Promise.resolve({ id: "sup-1" }) });
        const body = await response.json();
        assert.equal(response.status, 409);
        assert.equal(body.message, "Nao e possivel excluir: fornecedor vinculado a insumos cadastrados.");
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "supplier GET returns suppliers from prisma",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";

      setFakePrisma({ supplier: { findMany: async () => [{ id: "sup-1", nomeFantasia: "Fornecedor", documento: "123", contato: "Contato", telefone: "9999", observacoes: null, createdAt: new Date("2026-03-30T00:00:00.000Z"), updatedAt: new Date("2026-03-30T00:00:00.000Z") }] } });

      try {
        const response = await getSuppliers();
        const body = await response.json();
        assert.equal(response.status, 200);
        assert.equal(body.length, 1);
        assert.equal(body[0].nomeFantasia, "Fornecedor");
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "inventory POST rejects unknown supplier",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      setFakePrisma({ supplier: { findUnique: async () => null } });
      try {
        const response = await postInventory(createJsonRequest("http://localhost/api/insumos", { nome: "Salmao", categoria: "peixe", unidade: "kg", estoqueMinimo: 1, custoUnitario: 10, fornecedorId: "sup-invalido" }));
        const body = await response.json();
        assert.equal(response.status, 400);
        assert.equal(body.message, "fornecedorId invalido");
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "inventory GET serializes supplier relation and numeric fields",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      setFakePrisma({ inventoryItem: { findMany: async () => [{ id: "itm-1", nome: "Salmao", categoria: "peixe", unidade: "kg", estoqueAtual: "15.00", estoqueMinimo: "10.00", custoUnitario: "99.90", fornecedorId: "sup-1", fornecedor: { id: "sup-1", nomeFantasia: "Fornecedor" } }] } });
      try {
        const response = await getInventory();
        const body = await response.json();
        assert.equal(response.status, 200);
        assert.deepEqual(body[0], { id: "itm-1", nome: "Salmao", categoria: "peixe", unidade: "kg", estoqueAtual: 15, estoqueMinimo: 10, custoUnitario: 99.9, fornecedorId: "sup-1", fornecedor: { id: "sup-1", nomeFantasia: "Fornecedor" } });
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "inventory PUT returns 404 when item does not exist",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      setFakePrisma({ supplier: { findUnique: async () => ({ id: "sup-1" }) }, inventoryItem: { update: async () => { throw { code: "P2025" }; } } });
      try {
        const response = await putInventory(createJsonRequest("http://localhost/api/insumos/itm-1", { nome: "Salmao", categoria: "peixe", unidade: "kg", estoqueMinimo: 1, custoUnitario: 10, fornecedorId: "sup-1" }, "PUT"), { params: Promise.resolve({ id: "itm-1" }) });
        const body = await response.json();
        assert.equal(response.status, 404);
        assert.equal(body.message, "Insumo nao encontrado.");
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "inventory DELETE returns 409 when movement exists",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      setFakePrisma({ inventoryItem: { delete: async () => { throw { code: "P2003" }; } } });
      try {
        const response = await deleteInventory(new Request("http://localhost/api/insumos/itm-1"), { params: Promise.resolve({ id: "itm-1" }) });
        const body = await response.json();
        assert.equal(response.status, 409);
        assert.equal(body.message, "Nao e possivel excluir: insumo possui movimentacoes vinculadas.");
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "movement POST blocks output when stock is insufficient",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      setFakePrisma({ $transaction: async (callback: (tx: { inventoryItem: { findUnique: (args: unknown) => Promise<{ id: string; estoqueAtual: number } | null> } }) => Promise<unknown>) => callback({ inventoryItem: { findUnique: async () => ({ id: "itm-1", estoqueAtual: 2 }) } } as never) });
      try {
        const response = await postMovement(createJsonRequest("http://localhost/api/movimentacoes", { itemId: "itm-1", tipo: "saida", quantidade: 5 }));
        const body = await response.json();
        assert.equal(response.status, 400);
        assert.equal(body.message, "Saida bloqueada: estoque insuficiente.");
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "movement POST updates stock and returns serialized response",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      setFakePrisma({ $transaction: async (callback: (tx: unknown) => Promise<unknown>) => callback({ inventoryItem: { findUnique: async () => ({ id: "itm-1", estoqueAtual: 10 }), update: async () => ({ id: "itm-1", estoqueAtual: 15 }) }, stockMovement: { create: async () => ({ id: "mov-1", data: new Date("2026-03-30T00:00:00.000Z"), itemId: "itm-1", tipo: "entrada", quantidade: 5, observacao: "Movimentacao manual" }) } }) });
      try {
        const response = await postMovement(createJsonRequest("http://localhost/api/movimentacoes", { itemId: "itm-1", tipo: "entrada", quantidade: 5 }));
        const body = await response.json();
        assert.equal(response.status, 201);
        assert.deepEqual(body, { movement: { id: "mov-1", data: "2026-03-30", itemId: "itm-1", tipo: "entrada", quantidade: 5, observacao: "Movimentacao manual" }, updatedItem: { id: "itm-1", estoqueAtual: 15 } });
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "movement GET serializes numeric quantity",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      setFakePrisma({ stockMovement: { findMany: async () => [{ id: "mov-1", data: new Date("2026-03-30T00:00:00.000Z"), itemId: "itm-1", tipo: "entrada", quantidade: "5.00", observacao: "Compra" }] } });
      try {
        const response = await getMovements();
        const body = await response.json();
        assert.equal(response.status, 200);
        assert.deepEqual(body[0], { id: "mov-1", data: "2026-03-30", itemId: "itm-1", tipo: "entrada", quantidade: 5, observacao: "Compra" });
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "users POST hashes password and normalizes email",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      let createArgs: { data: { passwordHash?: string; email?: string } } | undefined;
      setFakePrisma({ teamMember: { create: async (args: { data: { passwordHash: string; email: string } }) => { createArgs = args; return { id: "user-1", nome: "Maria", email: args.data.email, telefone: null, cargo: "Financeiro", role: "financeiro", status: "ativo", passwordHash: args.data.passwordHash, observacoes: null, createdAt: new Date("2026-03-30T00:00:00.000Z") } satisfies TeamMemberRecord; } } });
      try {
        const response = await postUser(createJsonRequest("http://localhost/api/usuarios", { nome: "Maria", email: "MARIA@EMPRESA.COM", cargo: "Financeiro", role: "financeiro", status: "ativo", password: "SenhaForte123" }));
        const body = await response.json();
        assert.equal(response.status, 201);
        assert.equal(body.email, "maria@empresa.com");
        assert.equal(body.hasPassword, true);
        assert.ok(createArgs?.data.passwordHash);
        assert.equal(createArgs?.data.email, "maria@empresa.com");
        assert.equal(await isValidPasswordHash("SenhaForte123", createArgs!.data.passwordHash!), true);
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
  {
    name: "users PUT keeps current password when password is omitted",
    async run() {
      const snapshot = snapshotEnv();
      process.env.DATABASE_URL = "postgresql://fake";
      let updateArgs: { where: { id: string }; data: { passwordHash?: string | undefined; email: string } } | undefined;
      setFakePrisma({ teamMember: { update: async (args: { where: { id: string }; data: { passwordHash?: string | undefined; email: string } }) => { updateArgs = args; return { id: "user-1", nome: "Maria", email: args.data.email, telefone: null, cargo: "Financeiro", role: "financeiro", status: "ativo", passwordHash: "existing-hash", observacoes: null, createdAt: new Date("2026-03-30T00:00:00.000Z") } satisfies TeamMemberRecord; } } });
      try {
        const response = await putUser(createJsonRequest("http://localhost/api/usuarios/user-1", { nome: "Maria", email: "MARIA@EMPRESA.COM", cargo: "Financeiro", role: "financeiro", status: "ativo" }, "PUT"), { params: Promise.resolve({ id: "user-1" }) });
        const body = await response.json();
        assert.equal(response.status, 200);
        assert.equal(body.email, "maria@empresa.com");
        assert.equal(updateArgs?.where.id, "user-1");
        assert.equal(updateArgs?.data.email, "maria@empresa.com");
        assert.equal(updateArgs?.data.passwordHash, undefined);
      } finally {
        clearFakePrisma();
        restoreEnv(snapshot);
      }
    },
  },
];
