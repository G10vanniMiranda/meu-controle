"use client";

import { FormEvent, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Select } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAppData } from "@/hooks/use-app-data";
import { moneyFormatter } from "@/lib/formatters";
import { generateId } from "@/lib/id";
import type { InventoryCategory, InventoryItem, UnitType } from "@/lib/types";

const categories: InventoryCategory[] = ["peixe", "arroz", "embalagem", "bebida", "tempero", "outros"];
const units: UnitType[] = ["kg", "un", "l"];

export default function InsumosPage() {
  const { inventory, setInventory, suppliers, ready } = useAppData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    nome: "",
    categoria: "outros" as InventoryCategory,
    unidade: "un" as UnitType,
    estoqueAtual: "0",
    estoqueMinimo: "0",
    custoUnitario: "0",
    fornecedorId: "",
  });

  if (!ready) return <p className="rounded-2xl border border-blue-900 bg-zinc-700 p-6 text-sm text-blue-100">Carregando...</p>;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!form.nome.trim()) {
      setMessage("Informe o nome do insumo.");
      return;
    }

    const estoqueAtual = Number(form.estoqueAtual);
    const estoqueMinimo = Number(form.estoqueMinimo);
    const custoUnitario = Number(form.custoUnitario);
    if ([estoqueAtual, estoqueMinimo, custoUnitario].some((value) => Number.isNaN(value) || value < 0)) {
      setMessage("Campos numericos invalidos.");
      return;
    }

    const newItem: InventoryItem = {
      id: generateId("itm"),
      nome: form.nome.trim(),
      categoria: form.categoria,
      unidade: form.unidade,
      estoqueAtual,
      estoqueMinimo,
      custoUnitario,
      fornecedorId: form.fornecedorId || undefined,
    };

    setInventory((prev) => [newItem, ...prev]);
    setForm({
      nome: "",
      categoria: "outros",
      unidade: "un",
      estoqueAtual: "0",
      estoqueMinimo: "0",
      custoUnitario: "0",
      fornecedorId: "",
    });
    setMessage("Insumo cadastrado com sucesso.");
    setIsModalOpen(false);
  }

  return (
    <PageShell
      title="Cadastro de Insumos"
      subtitle="Gestao completa dos itens de estoque do sushi bar."
      actions={
        <Button
          onClick={() => {
            setMessage(null);
            setIsModalOpen(true);
          }}
        >
          Novo insumo
        </Button>
      }
    >
      {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}

      <Card>
        <CardHeader>
          <h3 className="mb-4 text-base font-semibold text-yellow-300">Lista de insumos</h3>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-blue-900/60 text-blue-200">
                  <TableHead>Nome</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Estoque</TableHead>
                  <TableHead>Minimo</TableHead>
                  <TableHead>Custo</TableHead>
                  <TableHead className="pr-0">Fornecedor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory.map((item) => {
                  const supplier = suppliers.find((entry) => entry.id === item.fornecedorId);
                  return (
                    <TableRow key={item.id}>
                      <TableCell>{item.nome}</TableCell>
                      <TableCell>{item.categoria}</TableCell>
                      <TableCell>
                        {item.estoqueAtual} {item.unidade}
                      </TableCell>
                      <TableCell>
                        {item.estoqueMinimo} {item.unidade}
                      </TableCell>
                      <TableCell>{moneyFormatter.format(item.custoUnitario)}</TableCell>
                      <TableCell className="pr-0">{supplier?.nomeFantasia ?? "-"}</TableCell>
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
        title="Novo insumo"
        description="Cadastre um item de estoque com valores, unidade e fornecedor."
      >
        {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
            <Input
              placeholder="Nome do insumo"
              value={form.nome}
              onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))}
            />
            <div className="grid grid-cols-2 gap-3">
              <Select
                value={form.categoria}
                onChange={(event) => setForm((prev) => ({ ...prev, categoria: event.target.value as InventoryCategory }))}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
              <Select
                value={form.unidade}
                onChange={(event) => setForm((prev) => ({ ...prev, unidade: event.target.value as UnitType }))}
              >
                {units.map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </Select>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Input
                type="number"
                min="0"
                step="0.01"
                value={form.estoqueAtual}
                onChange={(event) => setForm((prev) => ({ ...prev, estoqueAtual: event.target.value }))}
                placeholder="Atual"
              />
              <Input
                type="number"
                min="0"
                step="0.01"
                value={form.estoqueMinimo}
                onChange={(event) => setForm((prev) => ({ ...prev, estoqueMinimo: event.target.value }))}
                placeholder="Minimo"
              />
              <Input
                type="number"
                min="0"
                step="0.01"
                value={form.custoUnitario}
                onChange={(event) => setForm((prev) => ({ ...prev, custoUnitario: event.target.value }))}
                placeholder="Custo"
              />
            </div>
            <Select
              value={form.fornecedorId}
              onChange={(event) => setForm((prev) => ({ ...prev, fornecedorId: event.target.value }))}
            >
              <option value="">Selecione fornecedor</option>
              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.id}>
                  {supplier.nomeFantasia}
                </option>
              ))}
            </Select>
            <Button className="w-full" type="submit">
              Cadastrar insumo
            </Button>
          </form>
      </Modal>
    </PageShell>
  );
}

