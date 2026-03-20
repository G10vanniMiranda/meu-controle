/* eslint-disable @typescript-eslint/no-require-imports */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.cashFlowEntry.deleteMany();
  await prisma.stockMovement.deleteMany();
  await prisma.accountEntry.deleteMany();
  await prisma.inventoryItem.deleteMany();
  await prisma.supplier.deleteMany();

  await prisma.supplier.createMany({
    data: [
      {
        id: "sup-1",
        nomeFantasia: "Peixaria Norte",
        documento: "12.345.678/0001-90",
        contato: "Carlos Souza",
        telefone: "(92) 99999-1111",
        observacoes: "Entrega de segunda a sabado.",
      },
      {
        id: "sup-2",
        nomeFantasia: "Armazem Oriental",
        documento: "98.765.432/0001-55",
        contato: "Marina Yamada",
        telefone: "(92) 98888-2222",
        observacoes: "Insumos importados e embalagens.",
      },
    ],
  });

  await prisma.inventoryItem.createMany({
    data: [
      {
        id: "itm-1",
        nome: "Salmao fresco",
        categoria: "peixe",
        unidade: "kg",
        estoqueAtual: 15,
        estoqueMinimo: 12,
        custoUnitario: 98,
        fornecedorId: "sup-1",
      },
      {
        id: "itm-2",
        nome: "Arroz japones",
        categoria: "arroz",
        unidade: "kg",
        estoqueAtual: 52,
        estoqueMinimo: 30,
        custoUnitario: 22,
        fornecedorId: "sup-2",
      },
      {
        id: "itm-3",
        nome: "Alga nori",
        categoria: "outros",
        unidade: "un",
        estoqueAtual: 180,
        estoqueMinimo: 120,
        custoUnitario: 0.85,
        fornecedorId: "sup-2",
      },
      {
        id: "itm-4",
        nome: "Embalagem delivery",
        categoria: "embalagem",
        unidade: "un",
        estoqueAtual: 420,
        estoqueMinimo: 300,
        custoUnitario: 1.2,
        fornecedorId: "sup-2",
      },
      {
        id: "itm-5",
        nome: "Shoyu premium",
        categoria: "tempero",
        unidade: "l",
        estoqueAtual: 8,
        estoqueMinimo: 10,
        custoUnitario: 14,
        fornecedorId: "sup-2",
      },
    ],
  });

  await prisma.stockMovement.createMany({
    data: [
      {
        id: "mov-1",
        data: new Date("2026-03-02T00:00:00.000Z"),
        itemId: "itm-1",
        tipo: "entrada",
        quantidade: 8,
        observacao: "Compra semanal",
      },
      {
        id: "mov-2",
        data: new Date("2026-03-02T00:00:00.000Z"),
        itemId: "itm-4",
        tipo: "saida",
        quantidade: 90,
        observacao: "Consumo no delivery do fim de semana",
      },
      {
        id: "mov-3",
        data: new Date("2026-03-01T00:00:00.000Z"),
        itemId: "itm-5",
        tipo: "saida",
        quantidade: 4,
        observacao: "Preparo de molhos",
      },
      {
        id: "mov-4",
        data: new Date("2026-03-01T00:00:00.000Z"),
        itemId: "itm-2",
        tipo: "entrada",
        quantidade: 20,
        observacao: "Reposicao mensal",
      },
    ],
  });

  await prisma.accountEntry.createMany({
    data: [
      {
        id: "acc-1",
        descricao: "Compra de frutos do mar",
        tipo: "pagar",
        parceiro: "Peixaria Norte",
        vencimento: new Date("2026-03-05T00:00:00.000Z"),
        valor: 2180,
        status: "aberta",
      },
      {
        id: "acc-2",
        descricao: "Recebimento ifood",
        tipo: "receber",
        parceiro: "ifood",
        vencimento: new Date("2026-03-04T00:00:00.000Z"),
        valor: 5420,
        status: "aberta",
      },
      {
        id: "acc-3",
        descricao: "Aluguel do ponto",
        tipo: "pagar",
        parceiro: "Imobiliaria Centro",
        vencimento: new Date("2026-03-01T00:00:00.000Z"),
        valor: 3500,
        status: "atrasada",
      },
      {
        id: "acc-4",
        descricao: "Evento corporativo",
        tipo: "receber",
        parceiro: "Tech Manaus",
        vencimento: new Date("2026-02-28T00:00:00.000Z"),
        valor: 3900,
        status: "paga",
      },
    ],
  });

  await prisma.cashFlowEntry.createMany({
    data: [
      {
        id: "cash-1",
        data: new Date("2026-03-02T00:00:00.000Z"),
        tipo: "entrada",
        categoria: "venda",
        descricao: "Vendas balcao + delivery",
        valor: 3210,
      },
      {
        id: "cash-2",
        data: new Date("2026-03-02T00:00:00.000Z"),
        tipo: "saida",
        categoria: "compra",
        descricao: "Compra de salmao",
        valor: 1260,
      },
      {
        id: "cash-3",
        data: new Date("2026-03-01T00:00:00.000Z"),
        tipo: "saida",
        categoria: "despesa_fixa",
        descricao: "Folha de pagamento parcial",
        valor: 1890,
      },
      {
        id: "cash-4",
        data: new Date("2026-03-01T00:00:00.000Z"),
        tipo: "entrada",
        categoria: "venda",
        descricao: "Vendas do salao",
        valor: 2740,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seed concluido.");
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
