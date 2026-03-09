"use client";

import { FormEvent, useMemo, useState } from "react";
import { MiniBarChart } from "@/components/charts";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Select } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppData } from "@/hooks/use-app-data";
import { dateFormatter, moneyFormatter } from "@/lib/formatters";
import type { AccountEntry, AccountStatus, AccountType } from "@/lib/types";

function statusClass(status: AccountStatus) {
  if (status === "paga") return "success";
  if (status === "atrasada") return "danger";
  return "warning";
}

export default function ContasPage() {
  const { accounts, setAccounts, ready } = useAppData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    descricao: "",
    tipo: "pagar" as AccountType,
    parceiro: "",
    vencimento: "",
    valor: "0",
    status: "aberta" as AccountStatus,
  });

  const summary = useMemo(() => {
    const pagar = accounts
      .filter((account) => account.tipo === "pagar" && account.status !== "paga")
      .reduce((sum, account) => sum + account.valor, 0);
    const receber = accounts
      .filter((account) => account.tipo === "receber" && account.status !== "paga")
      .reduce((sum, account) => sum + account.valor, 0);
    return { pagar, receber };
  }, [accounts]);

  const statusChart = useMemo(() => {
    const aberta = accounts.filter((account) => account.status === "aberta").reduce((sum, account) => sum + account.valor, 0);
    const atrasada = accounts.filter((account) => account.status === "atrasada").reduce((sum, account) => sum + account.valor, 0);
    const paga = accounts.filter((account) => account.status === "paga").reduce((sum, account) => sum + account.valor, 0);
    return [
      { label: "aberta", value: aberta, tone: "cold" as const },
      { label: "atrasada", value: atrasada, tone: "warm" as const },
      { label: "paga", value: paga, tone: "cold" as const },
    ];
  }, [accounts]);

  if (!ready) return <p className="rounded-2xl border border-blue-900 bg-zinc-700 p-6 text-sm text-blue-100">Carregando...</p>;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!form.descricao.trim() || !form.parceiro.trim() || !form.vencimento) {
      setMessage("Preencha descricao, parceiro e vencimento.");
      return;
    }

    const valor = Number(form.valor);
    if (Number.isNaN(valor) || valor <= 0) {
      setMessage("Valor invalido.");
      return;
    }

    try {
      const response = await fetch("/api/contas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          descricao: form.descricao.trim(),
          tipo: form.tipo,
          parceiro: form.parceiro.trim(),
          vencimento: form.vencimento,
          valor,
          status: form.status,
        }),
      });
      const data = (await response.json()) as Partial<AccountEntry> & { message?: string };

      if (!response.ok) {
        setMessage(data.message ?? "Erro ao registrar conta.");
        return;
      }

      setAccounts((prev) => [data as AccountEntry, ...prev]);
      setForm({
        descricao: "",
        tipo: "pagar",
        parceiro: "",
        vencimento: "",
        valor: "0",
        status: "aberta",
      });
      setMessage("Conta registrada com sucesso.");
      setIsModalOpen(false);
    } catch {
      setMessage("Erro de conexao ao registrar conta.");
    }
  }

  return (
    <PageShell
      title="Contas"
      subtitle="Controle de contas a pagar e receber com status financeiro."
      actions={
        <Button
          onClick={() => {
            setMessage(null);
            setIsModalOpen(true);
          }}
        >
          Nova conta
        </Button>
      }
    >
      {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardContent className="min-h-28 p-5">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-yellow-400/90" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Contas a pagar</p>
          <p className="mt-2 text-4xl font-bold leading-none text-yellow-300">{moneyFormatter.format(summary.pagar)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-blue-400/90" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Contas a receber</p>
          <p className="mt-2 text-4xl font-bold leading-none text-blue-300">{moneyFormatter.format(summary.receber)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-blue-300/80" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Total de contas</p>
          <p className="mt-2 text-4xl font-bold leading-none text-blue-50">{accounts.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-yellow-300/80" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Saldo previsto</p>
          <p className="mt-2 text-4xl font-bold leading-none text-blue-50">{moneyFormatter.format(summary.receber - summary.pagar)}</p>
          </CardContent>
        </Card>
      </section>

      <MiniBarChart title="Distribuicao de valores por status" data={statusChart} />

      <Card>
        <CardContent className="p-5">
        <h3 className="mb-4 text-base font-semibold text-yellow-300">Tabela de contas</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-blue-900/60 text-blue-200">
                <TableHead>Descricao</TableHead>
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
                  <TableCell>{account.tipo}</TableCell>
                  <TableCell>{account.parceiro}</TableCell>
                  <TableCell>{dateFormatter.format(new Date(account.vencimento))}</TableCell>
                  <TableCell>{moneyFormatter.format(account.valor)}</TableCell>
                  <TableCell className="pr-0">
                    <Badge variant={statusClass(account.status) as "success" | "warning" | "danger"}>
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

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Nova conta"
        description="Registre contas a pagar ou receber com status e vencimento."
      >
        {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
          <Input
            placeholder="Descricao"
            value={form.descricao}
            onChange={(event) => setForm((prev) => ({ ...prev, descricao: event.target.value }))}
          />
          <div className="grid grid-cols-2 gap-3">
            <Select
              value={form.tipo}
              onChange={(event) => setForm((prev) => ({ ...prev, tipo: event.target.value as AccountType }))}
            >
              <option value="pagar">pagar</option>
              <option value="receber">receber</option>
            </Select>
            <Select
              value={form.status}
              onChange={(event) => setForm((prev) => ({ ...prev, status: event.target.value as AccountStatus }))}
            >
              <option value="aberta">aberta</option>
              <option value="paga">paga</option>
              <option value="atrasada">atrasada</option>
            </Select>
          </div>
          <Input
            placeholder="Parceiro"
            value={form.parceiro}
            onChange={(event) => setForm((prev) => ({ ...prev, parceiro: event.target.value }))}
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="date"
              value={form.vencimento}
              onChange={(event) => setForm((prev) => ({ ...prev, vencimento: event.target.value }))}
            />
            <Input
              type="number"
              min="0.01"
              step="0.01"
              value={form.valor}
              onChange={(event) => setForm((prev) => ({ ...prev, valor: event.target.value }))}
              placeholder="Valor"
            />
          </div>
          <Button className="w-full" type="submit">
            Salvar conta
          </Button>
        </form>
      </Modal>
    </PageShell>
  );
}

