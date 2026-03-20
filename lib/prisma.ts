import { PrismaClient } from "@prisma/client";

declare global {
  // Avoid opening new connections on each hot reload in development.
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
