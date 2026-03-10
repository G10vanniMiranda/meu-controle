"use client";

import { FormEvent, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useAppData } from "@/hooks/use-app-data";
import type { Supplier } from "@/lib/types";

export default function FornecedoresPage() {
  const { suppliers, setSuppliers, ready } = useAppData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSupplierId, setEditingSupplierId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    nomeFantasia: "",
    documento: "",
    contato: "",
    telefone: "",
    observacoes: "",
  });

  if (!ready) return <p className="rounded-2xl border border-blue-900 bg-zinc-700 p-6 text-sm text-blue-100">Carregando...</p>;

  function resetForm() {
    setForm({
      nomeFantasia: "",
      documento: "",
      contato: "",
      telefone: "",
      observacoes: "",
    });
    setEditingSupplierId(null);
  }

  function startCreate() {
    setMessage(null);
    resetForm();
    setIsModalOpen(true);
  }

  function startEdit(supplier: Supplier) {
    setMessage(null);
    setEditingSupplierId(supplier.id);
    setForm({
      nomeFantasia: supplier.nomeFantasia,
      documento: supplier.documento,
      contato: supplier.contato,
      telefone: supplier.telefone,
      observacoes: supplier.observacoes ?? "",
    });
    setIsModalOpen(true);
  }

  async function onDelete(id: string) {
    setMessage(null);
    if (!window.confirm("Deseja realmente excluir este fornecedor?")) return;

    try {
      const response = await fetch(`/api/fornecedores/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        setMessage(data.message ?? "Erro ao remover fornecedor.");
        return;
      }

      setSuppliers((prev) => prev.filter((entry) => entry.id !== id));
      setMessage("Fornecedor removido com sucesso.");
    } catch {
      setMessage("Erro de conexao ao remover fornecedor.");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!form.nomeFantasia.trim() || !form.documento.trim()) {
      setMessage("Nome fantasia e documento sao obrigatorios.");
      return;
    }

    try {
      const response = await fetch(
        editingSupplierId ? `/api/fornecedores/${editingSupplierId}` : "/api/fornecedores",
        {
        method: editingSupplierId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nomeFantasia: form.nomeFantasia.trim(),
          documento: form.documento.trim(),
          contato: form.contato.trim() || "Nao informado",
          telefone: form.telefone.trim() || "Nao informado",
          observacoes: form.observacoes.trim() || undefined,
        }),
      });
      const data = (await response.json()) as Partial<Supplier> & { message?: string };

      if (!response.ok) {
        setMessage(data.message ?? "Erro ao cadastrar fornecedor.");
        return;
      }

      if (editingSupplierId) {
        setSuppliers((prev) => prev.map((entry) => (entry.id === editingSupplierId ? (data as Supplier) : entry)));
        setMessage("Fornecedor atualizado com sucesso.");
      } else {
        setSuppliers((prev) => [data as Supplier, ...prev]);
        setMessage("Fornecedor cadastrado com sucesso.");
      }

      resetForm();
      setIsModalOpen(false);
    } catch {
      setMessage("Erro de conexao ao cadastrar fornecedor.");
    }
  }

  return (
    <PageShell
      title="Cadastro de Fornecedores"
      subtitle="Gestao de parceiros e contatos comerciais."
      actions={
        <Button onClick={startCreate}>
          Novo fornecedor
        </Button>
      }
    >
      {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}

      <Card>
        <CardHeader>
          <CardTitle>Lista de fornecedores</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-blue-900/60 text-blue-200">
                  <TableHead>Nome fantasia</TableHead>
                  <TableHead>Documento</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Observacoes</TableHead>
                  <TableHead className="pr-0">Acoes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell>{supplier.nomeFantasia}</TableCell>
                    <TableCell>{supplier.documento}</TableCell>
                    <TableCell>{supplier.contato}</TableCell>
                    <TableCell>{supplier.telefone}</TableCell>
                    <TableCell>{supplier.observacoes ?? "-"}</TableCell>
                    <TableCell className="pr-0">
                      <div className="flex items-center gap-2">
                        <Button type="button" size="sm" variant="ghost" onClick={() => startEdit(supplier)}>
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
                        <Button type="button" size="sm" variant="ghost" onClick={() => onDelete(supplier.id)}>
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
        title={editingSupplierId ? "Editar fornecedor" : "Novo fornecedor"}
        description={editingSupplierId ? "Atualize os dados do fornecedor." : "Preencha os dados para cadastrar um novo parceiro comercial."}
      >
        {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
            <Input
              value={form.nomeFantasia}
              placeholder="Nome fantasia"
              onChange={(event) => setForm((prev) => ({ ...prev, nomeFantasia: event.target.value }))}
            />
            <Input
              value={form.documento}
              placeholder="CNPJ ou CPF"
              onChange={(event) => setForm((prev) => ({ ...prev, documento: event.target.value }))}
            />
            <Input
              value={form.contato}
              placeholder="Contato"
              onChange={(event) => setForm((prev) => ({ ...prev, contato: event.target.value }))}
            />
            <Input
              value={form.telefone}
              placeholder="Telefone"
              onChange={(event) => setForm((prev) => ({ ...prev, telefone: event.target.value }))}
            />
            <Textarea
              className="min-h-24"
              value={form.observacoes}
              placeholder="Observacoes"
              onChange={(event) => setForm((prev) => ({ ...prev, observacoes: event.target.value }))}
            />
            <Button className="w-full" type="submit">
              {editingSupplierId ? "Salvar alteracoes" : "Cadastrar fornecedor"}
            </Button>
          </form>
      </Modal>
    </PageShell>
  );
}

