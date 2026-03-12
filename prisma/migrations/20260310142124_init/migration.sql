-- CreateEnum
CREATE TYPE "InventoryCategory" AS ENUM ('peixe', 'arroz', 'embalagem', 'bebida', 'tempero', 'outros');

-- CreateEnum
CREATE TYPE "UnitType" AS ENUM ('kg', 'un', 'l');

-- CreateEnum
CREATE TYPE "MovementType" AS ENUM ('entrada', 'saida');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('pagar', 'receber');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('aberta', 'paga', 'atrasada');

-- CreateEnum
CREATE TYPE "CashFlowCategory" AS ENUM ('venda', 'compra', 'taxa', 'despesa_fixa');

-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "nomeFantasia" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "observacoes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventoryItem" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" "InventoryCategory" NOT NULL,
    "unidade" "UnitType" NOT NULL,
    "estoqueAtual" DECIMAL(10,2) NOT NULL,
    "estoqueMinimo" DECIMAL(10,2) NOT NULL,
    "custoUnitario" DECIMAL(10,2) NOT NULL,
    "fornecedorId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockMovement" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "itemId" TEXT NOT NULL,
    "tipo" "MovementType" NOT NULL,
    "quantidade" DECIMAL(10,2) NOT NULL,
    "observacao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StockMovement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountEntry" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tipo" "AccountType" NOT NULL,
    "parceiro" TEXT NOT NULL,
    "vencimento" TIMESTAMP(3) NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "status" "AccountStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AccountEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CashFlowEntry" (
    "id" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "tipo" "MovementType" NOT NULL,
    "categoria" "CashFlowCategory" NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CashFlowEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_documento_key" ON "Supplier"("documento");

-- CreateIndex
CREATE INDEX "InventoryItem_fornecedorId_idx" ON "InventoryItem"("fornecedorId");

-- CreateIndex
CREATE INDEX "StockMovement_itemId_idx" ON "StockMovement"("itemId");

-- CreateIndex
CREATE INDEX "StockMovement_data_idx" ON "StockMovement"("data");

-- CreateIndex
CREATE INDEX "AccountEntry_vencimento_idx" ON "AccountEntry"("vencimento");

-- CreateIndex
CREATE INDEX "AccountEntry_status_idx" ON "AccountEntry"("status");

-- CreateIndex
CREATE INDEX "CashFlowEntry_data_idx" ON "CashFlowEntry"("data");

-- CreateIndex
CREATE INDEX "CashFlowEntry_tipo_idx" ON "CashFlowEntry"("tipo");

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockMovement" ADD CONSTRAINT "StockMovement_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "InventoryItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

