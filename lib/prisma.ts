import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/db/client";

declare global {
  // Avoid opening new connections on each hot reload in development.
  var prisma: PrismaClient | undefined;
}

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL nao configurada.");
  }

  const adapter = new PrismaPg({
    connectionString,
    connectionTimeoutMillis: 15_000,
  });

  return new PrismaClient({ adapter });
}

export function getPrismaClient() {
  if (!global.prisma) {
    global.prisma = createPrismaClient();
  }

  return global.prisma;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, property) {
    const client = getPrismaClient();
    const value = Reflect.get(client, property, client);

    return typeof value === "function" ? value.bind(client) : value;
  },
});
