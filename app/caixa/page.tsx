"use client";

import { FormEvent, useMemo, useState } from "react";
import { LineChartCard, MiniBarChart } from "@/components/charts";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Select } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppData } from "@/hooks/use-app-data";
import { formatDateOnly, moneyFormatter } from "@/lib/formatters";
import type { CashFlowEntry, MovementType } from "@/lib/types";

type CashFlowCategory = CashFlowEntry["categoria"];

export default function CaixaPage() {
  const { cashFlow, setCashFlow, loadErrorMessage, ready } = useAppData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEntryId, setEditingEntryId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    data: "",
    tipo: "entrada" as MovementType,
    categoria: "deposito" as CashFlowCategory,
    descricao: "",
    valor: "0",
  });

  const summary = useMemo(() => {
    const entradas = cashFlow
      .filter((entry) => entry.tipo === "entrada")
      .reduce((sum, entry) => sum + entry.valor, 0);
    const saidas = cashFlow
      .filter((entry) => entry.tipo === "saida")
      .reduce((sum, entry) => sum + entry.valor, 0);

    return {
      entradas,
      saidas,
      saldo: entradas - saidas,
    };
  }, [cashFlow]);

  const categoryChart = useMemo(() => {
    const data = cashFlow.reduce<Record<CashFlowCategory, number>>(
      (acc, entry) => {
        acc[entry.categoria] += entry.valor;
        return acc;
      },
      { venda: 0, compra: 0, taxa: 0, despesa_fixa: 0, deposito: 0 },
    );

    return [
      { label: "venda", value: data.venda, tone: "cold" as const },
      { label: "compra", value: data.compra, tone: "warm" as const },
      { label: "taxa", value: data.taxa, tone: "warm" as const },
      { label: "despesa fixa", value: data.despesa_fixa, tone: "warm" as const },
      { label: "deposito", value: data.deposito, tone: "cold" as const },
    ];
  }, [cashFlow]);

  const lineChart = useMemo(() => {
    const sorted = cashFlow.slice().sort((a, b) => a.data.localeCompare(b.data));
    const values = sorted.reduce<number[]>((acc, entry) => {
      const previous = acc[acc.length - 1] ?? 0;
      const next = previous + (entry.tipo === "entrada" ? entry.valor : -entry.valor);
      return [...acc, next];
    }, []);
    const labels = sorted.map((entry) => formatDateOnly(entry.data));

    return { values, labels };
  }, [cashFlow]);

  if (!ready) {
    return <p className="rounded-2xl border border-blue-900 bg-zinc-700 p-6 text-sm text-blue-100">Carregando...</p>;
  }

  function resetForm() {
    setForm({
      data: "",
      tipo: "entrada",
      categoria: "deposito",
      descricao: "",
      valor: "0",
    });
    setEditingEntryId(null);
  }

  function startCreate() {
    setMessage(null);
    resetForm();
    setIsModalOpen(true);
  }

  function startEdit(entry: CashFlowEntry) {
    setMessage(null);
    setEditingEntryId(entry.id);
    setForm({
      data: entry.data,
      tipo: entry.tipo,
      categoria: entry.categoria,
      descricao: entry.descricao,
      valor: String(entry.valor),
    });
    setIsModalOpen(true);
  }

  async function onDelete(id: string) {
    setMessage(null);
    if (!window.confirm("Deseja realmente excluir este lancamento de caixa?")) return;

    try {
      const response = await fetch(`/api/fluxo-caixa/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        setMessage(data.message ?? "Erro ao remover lancamento de caixa.");
        return;
      }

      setCashFlow((prev) => prev.filter((entry) => entry.id !== id));
      setMessage("Lancamento removido com sucesso.");
    } catch {
      setMessage("Erro de conexao ao remover lancamento.");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!form.data || !form.descricao.trim()) {
      setMessage("Preencha data e descricao.");
      return;
    }

    const valor = Number(form.valor);
    if (Number.isNaN(valor) || valor <= 0) {
      setMessage("Valor invalido.");
      return;
    }

    try {
      const response = await fetch(editingEntryId ? `/api/fluxo-caixa/${editingEntryId}` : "/api/fluxo-caixa", {
        method: editingEntryId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: form.data,
          tipo: form.tipo,
          categoria: form.categoria,
          descricao: form.descricao.trim(),
          valor,
        }),
      });

      const data = (await response.json()) as Partial<CashFlowEntry> & { message?: string };
      if (!response.ok) {
        setMessage(data.message ?? "Erro ao registrar lancamento de caixa.");
        return;
      }

      if (editingEntryId) {
        setCashFlow((prev) => prev.map((entry) => (entry.id === editingEntryId ? (data as CashFlowEntry) : entry)));
        setMessage("Lancamento atualizado com sucesso.");
      } else {
        setCashFlow((prev) => [data as CashFlowEntry, ...prev]);
        setMessage("Lancamento registrado com sucesso.");
      }

      resetForm();
      setIsModalOpen(false);
    } catch {
      setMessage("Erro de conexao ao registrar lancamento.");
    }
  }

  return (
    <PageShell
      title="Controle de Caixa"
      subtitle="Acompanhe o saldo atual do caixa e registre entradas e saidas."
      actions={<Button onClick={startCreate}>Novo lancamento</Button>}
    >
      {loadErrorMessage ? <p className="rounded-lg bg-red-950/60 px-3 py-2 text-sm text-red-100">{loadErrorMessage}</p> : null}
      {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-blue-300/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Saldo atual</p>
            <p className={`mt-2 text-4xl font-bold leading-none ${summary.saldo >= 0 ? "text-blue-300" : "text-yellow-300"}`}>
              {moneyFormatter.format(summary.saldo)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-blue-400/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Total de entradas</p>
            <p className="mt-2 text-4xl font-bold leading-none text-blue-50">{moneyFormatter.format(summary.entradas)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-yellow-400/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Total de saidas</p>
            <p className="mt-2 text-4xl font-bold leading-none text-yellow-300">{moneyFormatter.format(summary.saidas)}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-blue-300/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Lancamentos</p>
            <p className="mt-2 text-4xl font-bold leading-none text-blue-50">{cashFlow.length}</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <LineChartCard title="Evolucao do saldo de caixa" values={lineChart.values} labels={lineChart.labels} />
        <MiniBarChart title="Valores por categoria" data={categoryChart} />
      </section>

      <Card>
        <CardContent className="p-5">
          <h3 className="mb-4 text-base font-semibold text-yellow-300">Historico de lancamentos de caixa</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-blue-900/60 text-blue-200">
                  <TableHead>Data</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Descricao</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead className="pr-0">Acoes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cashFlow.map((entry) => (
                  <TableRow key={entry.id}>
                    <TableCell>{formatDateOnly(entry.data)}</TableCell>
                    <TableCell className={entry.tipo === "entrada" ? "text-blue-300" : "text-yellow-300"}>{entry.tipo}</TableCell>
                    <TableCell>{entry.categoria}</TableCell>
                    <TableCell>{entry.descricao}</TableCell>
                    <TableCell className="font-semibold">{moneyFormatter.format(entry.valor)}</TableCell>
                    <TableCell className="pr-0">
                      <div className="flex items-center gap-2">
                        <Button type="button" size="sm" variant="ghost" onClick={() => startEdit(entry)}>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-amber-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                          </svg>
                          <span className="sr-only">Editar</span>
                        </Button>
                        <Button type="button" size="sm" variant="ghost" onClick={() => onDelete(entry.id)}>
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="h-4 w-4 text-red-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 6h18" />
                            <path d="M8 6V4h8v2" />
                            <path d="M19 6l-1 14H6L5 6" />
                            <path d="M10 11v6" />
                            <path d="M14 11v6" />
                          </svg>
                          <span className="sr-only">Excluir</span>
                        </Button>
                      </div>
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
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        title={editingEntryId ? "Editar lancamento de caixa" : "Novo lancamento de caixa"}
        description={
          editingEntryId
            ? "Atualize os dados do lancamento para manter o caixa correto."
            : "Registre entradas e saidas para atualizar o saldo do caixa."
        }
      >
        {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <Input type="date" value={form.data} onChange={(event) => setForm((prev) => ({ ...prev, data: event.target.value }))} />
            <Input
              type="number"
              min="0.01"
              step="0.01"
              placeholder="Valor"
              value={form.valor}
              onChange={(event) => setForm((prev) => ({ ...prev, valor: event.target.value }))}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Select
              value={form.tipo}
              onChange={(event) => setForm((prev) => ({ ...prev, tipo: event.target.value as MovementType }))}
            >
              <option value="entrada">entrada</option>
              <option value="saida">saida</option>
            </Select>
            <Select
              value={form.categoria}
              onChange={(event) => setForm((prev) => ({ ...prev, categoria: event.target.value as CashFlowCategory }))}
            >
              <option value="venda">venda</option>
              <option value="compra">compra</option>
              <option value="taxa">taxa</option>
              <option value="despesa_fixa">despesa_fixa</option>
              <option value="deposito">deposito</option>
            </Select>
          </div>
          <Input
            placeholder="Descricao"
            value={form.descricao}
            onChange={(event) => setForm((prev) => ({ ...prev, descricao: event.target.value }))}
          />
          <Button className="w-full" type="submit">
            {editingEntryId ? "Salvar alteracoes" : "Registrar lancamento"}
          </Button>
        </form>
      </Modal>
    </PageShell>
  );
}
