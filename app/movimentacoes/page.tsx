"use client";

import { FormEvent, useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useAppData } from "@/hooks/use-app-data";
import { dateFormatter, moneyFormatter } from "@/lib/formatters";
import { generateId } from "@/lib/id";
import type { MovementType, StockMovement } from "@/lib/types";

export default function MovimentacoesPage() {
  const { inventory, setInventory, movements, setMovements, ready } = useAppData();
  const [message, setMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    itemId: "",
    tipo: "entrada" as MovementType,
    quantidade: "0",
    observacao: "",
  });

  const selectedItem = useMemo(
    () => inventory.find((item) => item.id === form.itemId),
    [form.itemId, inventory],
  );

  if (!ready) return <p className="rounded-2xl border border-blue-900 bg-zinc-950 p-6 text-sm text-blue-100">Carregando...</p>;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!form.itemId) {
      setMessage("Selecione um insumo.");
      return;
    }

    const quantidade = Number(form.quantidade);
    if (Number.isNaN(quantidade) || quantidade <= 0) {
      setMessage("Quantidade invalida.");
      return;
    }

    const item = inventory.find((entry) => entry.id === form.itemId);
    if (!item) {
      setMessage("Item nao encontrado.");
      return;
    }

    if (form.tipo === "saida" && quantidade > item.estoqueAtual) {
      setMessage("Saida bloqueada: estoque insuficiente.");
      return;
    }

    const movement: StockMovement = {
      id: generateId("mov"),
      data: new Date().toISOString().slice(0, 10),
      itemId: form.itemId,
      tipo: form.tipo,
      quantidade,
      observacao: form.observacao.trim() || "Movimentacao manual",
    };

    setMovements((prev) => [movement, ...prev]);
    setInventory((prev) =>
      prev.map((entry) => {
        if (entry.id !== form.itemId) return entry;
        const nextValue =
          form.tipo === "entrada" ? entry.estoqueAtual + quantidade : entry.estoqueAtual - quantidade;
        return { ...entry, estoqueAtual: nextValue };
      }),
    );

    setForm({ itemId: "", tipo: "entrada", quantidade: "0", observacao: "" });
    setMessage("Movimentacao registrada.");
  }

  return (
    <PageShell title="Entradas e Saidas" subtitle="Controle de movimentacao de estoque com validacao de saldo.">
      <section className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-1">
          <CardHeader>
            <CardTitle>Nova movimentacao</CardTitle>
          </CardHeader>
          <CardContent>
          {message ? <p className="mt-3 rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}
          <form className="mt-4 space-y-3" onSubmit={onSubmit}>
            <Select
              value={form.itemId}
              onChange={(event) => setForm((prev) => ({ ...prev, itemId: event.target.value }))}
            >
              <option value="">Selecione o item</option>
              {inventory.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome}
                </option>
              ))}
            </Select>
            <div className="grid grid-cols-2 gap-3">
              <Select
                value={form.tipo}
                onChange={(event) => setForm((prev) => ({ ...prev, tipo: event.target.value as MovementType }))}
              >
                <option value="entrada">entrada</option>
                <option value="saida">saida</option>
              </Select>
              <Input
                type="number"
                min="0.01"
                step="0.01"
                value={form.quantidade}
                onChange={(event) => setForm((prev) => ({ ...prev, quantidade: event.target.value }))}
                placeholder="Quantidade"
              />
            </div>
            <Textarea
              value={form.observacao}
              onChange={(event) => setForm((prev) => ({ ...prev, observacao: event.target.value }))}
              placeholder="Observacao"
            />
            {selectedItem ? (
              <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-xs text-blue-100/80">
                Estoque atual: {selectedItem.estoqueAtual} {selectedItem.unidade}
              </p>
            ) : null}
            <Button className="w-full" type="submit">
              Registrar movimentacao
            </Button>
          </form>
          </CardContent>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Historico de movimentacoes</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-blue-900/60 text-blue-200">
                  <TableHead>Data</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Observacao</TableHead>
                  <TableHead className="pr-0">Valor aprox.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {movements.map((movement) => {
                  const item = inventory.find((entry) => entry.id === movement.itemId);
                  const amount = item ? movement.quantidade * item.custoUnitario : 0;
                  return (
                    <TableRow key={movement.id}>
                      <TableCell>{dateFormatter.format(new Date(movement.data))}</TableCell>
                      <TableCell>{item?.nome ?? "Item removido"}</TableCell>
                      <TableCell className={`font-semibold ${movement.tipo === "entrada" ? "text-blue-300" : "text-yellow-300"}`}>
                        {movement.tipo}
                      </TableCell>
                      <TableCell>{movement.quantidade}</TableCell>
                      <TableCell>{movement.observacao}</TableCell>
                      <TableCell className="pr-0">{moneyFormatter.format(amount)}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
