-- CreateEnum
CREATE TYPE "TeamUserRole" AS ENUM ('admin', 'gerente', 'financeiro', 'estoque', 'atendimento', 'cozinha');

-- CreateEnum
CREATE TYPE "TeamUserStatus" AS ENUM ('ativo', 'inativo', 'ferias');

-- CreateTable
CREATE TABLE "TeamMember" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT,
    "cargo" TEXT NOT NULL,
    "role" "TeamUserRole" NOT NULL,
    "status" "TeamUserStatus" NOT NULL DEFAULT 'ativo',
    "observacoes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TeamMember_email_key" ON "TeamMember"("email");

-- CreateIndex
CREATE INDEX "TeamMember_status_idx" ON "TeamMember"("status");

-- CreateIndex
CREATE INDEX "TeamMember_role_idx" ON "TeamMember"("role");
