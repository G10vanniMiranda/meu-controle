"use client";

import { LineChartCard, MiniBarChart } from "@/components/charts";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppData } from "@/hooks/use-app-data";
import { dateFormatter, moneyFormatter } from "@/lib/formatters";

function statusBadge(status: "aberta" | "paga" | "atrasada") {
  if (status === "paga") return "success";
  if (status === "atrasada") return "danger";
  return "warning";
}

export default function DashboardPage() {
  const { inventory, accounts, cashFlow, movements, ready } = useAppData();

  if (!ready) {
    return <p className="rounded-2xl border border-blue-900 bg-zinc-700 p-6 text-sm text-blue-100">Carregando...</p>;
  }

  const totalEstoque = inventory.reduce((sum, item) => sum + item.estoqueAtual * item.custoUnitario, 0);
  const itensAlerta = inventory.filter((item) => item.estoqueAtual <= item.estoqueMinimo).length;
  const contasPagar = accounts
    .filter((account) => account.tipo === "pagar" && account.status !== "paga")
    .reduce((sum, account) => sum + account.valor, 0);
  const contasReceber = accounts
    .filter((account) => account.tipo === "receber" && account.status !== "paga")
    .reduce((sum, account) => sum + account.valor, 0);
  const entradas = cashFlow
    .filter((entry) => entry.tipo === "entrada")
    .reduce((sum, entry) => sum + entry.valor, 0);
  const saidas = cashFlow
    .filter((entry) => entry.tipo === "saida")
    .reduce((sum, entry) => sum + entry.valor, 0);
  const saldo = entradas - saidas;

  const inventoryByCategory = Object.entries(
    inventory.reduce<Record<string, number>>((acc, item) => {
      const value = item.estoqueAtual * item.custoUnitario;
      acc[item.categoria] = (acc[item.categoria] ?? 0) + value;
      return acc;
    }, {}),
  ).map(([label, value]) => ({
    label,
    value,
    tone: "warm" as const,
  }));

  const cashFlowSeries = cashFlow
    .slice()
    .sort((a, b) => a.data.localeCompare(b.data))
    .map((entry) => (entry.tipo === "entrada" ? entry.valor : -entry.valor));
  const cashFlowLabels = cashFlow
    .slice()
    .sort((a, b) => a.data.localeCompare(b.data))
    .map((entry) => dateFormatter.format(new Date(entry.data)));

  return (
    <PageShell
      title="Dashboard"
      subtitle="Visão executiva da operação do sushi bar com estoque, contas e fluxo de caixa."
    >
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-blue-400/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Estoque total</p>
            <p className="mt-2 text-4xl font-bold leading-none text-blue-50">{moneyFormatter.format(totalEstoque)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-yellow-400/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Itens em alerta</p>
            <p className="mt-2 text-4xl font-bold leading-none text-yellow-300">{itensAlerta}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-yellow-400/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Contas a pagar</p>
            <p className="mt-2 text-4xl font-bold leading-none text-yellow-300">{moneyFormatter.format(contasPagar)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-blue-400/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Saldo operacional</p>
            <p className={`mt-2 text-4xl font-bold leading-none ${saldo >= 0 ? "text-blue-300" : "text-yellow-300"}`}>
              {moneyFormatter.format(saldo)}
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <MiniBarChart title="Valor de estoque por categoria" data={inventoryByCategory} />
        <LineChartCard title="Curva de caixa (entradas e saidas)" values={cashFlowSeries} labels={cashFlowLabels} />
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardContent className="p-6 md:p-7">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-yellow-300">Contas a pagar e receber</h3>
              <p className="text-sm text-blue-100/80">Receber: {moneyFormatter.format(contasReceber)}</p>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-blue-900/60 text-blue-200">
                    <TableHead>Descrição</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Parceiro</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead className="pr-0">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accounts.map((account) => (
                    <TableRow key={account.id}>
                      <TableCell>{account.descricao}</TableCell>
                      <TableCell className="font-medium">{account.tipo}</TableCell>
                      <TableCell>{account.parceiro}</TableCell>
                      <TableCell>{dateFormatter.format(new Date(account.vencimento))}</TableCell>
                      <TableCell>{moneyFormatter.format(account.valor)}</TableCell>
                      <TableCell className="pr-0">
                        <Badge variant={statusBadge(account.status) as "success" | "warning" | "danger"}>
                          {account.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 md:p-7">
            <h3 className="text-lg font-semibold text-yellow-300">Últimas movimentações</h3>
            <ul className="mt-5 space-y-3">
              {movements.slice(0, 5).map((movement) => {
                const item = inventory.find((entry) => entry.id === movement.itemId);
                return (
                  <li key={movement.id} className="rounded-xl border border-blue-900/60 bg-zinc-700/60 p-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{item?.nome ?? "Item removido"}</p>
                      <p className={movement.tipo === "entrada" ? "text-blue-300" : "text-yellow-300"}>
                        {movement.tipo}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-blue-100/80">
                      {dateFormatter.format(new Date(movement.data))} | Qtd: {movement.quantidade}
                    </p>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}


