export type MovementType = "entrada" | "saida";

export type InventoryCategory =
  | "peixe"
  | "arroz"
  | "embalagem"
  | "bebida"
  | "tempero"
  | "outros";

export type UnitType = "kg" | "un" | "l";

export type AccountType = "pagar" | "receber";
export type AccountStatus = "aberta" | "paga" | "atrasada";

export type InventoryItem = {
  id: string;
  nome: string;
  categoria: InventoryCategory;
  unidade: UnitType;
  estoqueAtual: number;
  estoqueMinimo: number;
  custoUnitario: number;
  fornecedorId?: string;
};

export type Supplier = {
  id: string;
  nomeFantasia: string;
  documento: string;
  contato: string;
  telefone: string;
  observacoes?: string;
};

export type StockMovement = {
  id: string;
  data: string;
  itemId: string;
  tipo: MovementType;
  quantidade: number;
  observacao: string;
};

export type AccountEntry = {
  id: string;
  descricao: string;
  tipo: AccountType;
  parceiro: string;
  vencimento: string;
  valor: number;
  status: AccountStatus;
};

export type CashFlowEntry = {
  id: string;
  data: string;
  tipo: MovementType;
  categoria: "venda" | "compra" | "taxa" | "despesa_fixa";
  descricao: string;
  valor: number;
};
