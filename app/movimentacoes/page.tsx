"use client";

import { FormEvent, useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Select } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useAppData } from "@/hooks/use-app-data";
import { dateFormatter, moneyFormatter } from "@/lib/formatters";
import type { MovementType, StockMovement } from "@/lib/types";

export default function MovimentacoesPage() {
  const { inventory, setInventory, movements, setMovements, ready } = useAppData();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  if (!ready) return <p className="rounded-2xl border border-blue-900 bg-zinc-700 p-6 text-sm text-blue-100">Carregando...</p>;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
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

    try {
      const response = await fetch("/api/movimentacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          itemId: form.itemId,
          tipo: form.tipo,
          quantidade,
          observacao: form.observacao.trim() || undefined,
        }),
      });
      const data = (await response.json()) as {
        message?: string;
        movement?: StockMovement;
        updatedItem?: { id: string; estoqueAtual: number };
      };

      if (!response.ok || !data.movement || !data.updatedItem) {
        setMessage(data.message ?? "Erro ao registrar movimentação.");
        return;
      }

      setMovements((prev) => [data.movement as StockMovement, ...prev]);
      setInventory((prev) =>
        prev.map((entry) => {
          if (entry.id !== data.updatedItem?.id) return entry;
          return { ...entry, estoqueAtual: data.updatedItem.estoqueAtual };
        }),
      );

      setForm({ itemId: "", tipo: "entrada", quantidade: "0", observacao: "" });
      setMessage("Movimentação registrada.");
      setIsModalOpen(false);
    } catch {
      setMessage("Erro de conexão ao registrar movimentação.");
    }
  }

  return (
    <PageShell
      title="Entradas e Saídas"
      subtitle="Controle de movimentação de estoque com validação de saldo."
      actions={
        <Button
          onClick={() => {
            setMessage(null);
            setIsModalOpen(true);
          }}
        >
          Nova movimentação
        </Button>
      }
    >
      {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}

      <Card>
        <CardHeader>
          <CardTitle>Histórico de movimentações</CardTitle>
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
                  <TableHead>Observação</TableHead>
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

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Nova movimentação"
        description="Registre entradas e saídas com validação de saldo em estoque."
      >
        {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}
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
              <option value="saida">saída</option>
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
            placeholder="Observação"
          />
          {selectedItem ? (
            <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-xs text-blue-100/80">
              Estoque atual: {selectedItem.estoqueAtual} {selectedItem.unidade}
            </p>
          ) : null}
          <Button className="w-full" type="submit">
            Registrar movimentação
          </Button>
        </form>
      </Modal>
    </PageShell>
  );
}

