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
import { generateId } from "@/lib/id";
import type { Supplier } from "@/lib/types";

export default function FornecedoresPage() {
  const { suppliers, setSuppliers, ready } = useAppData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    nomeFantasia: "",
    documento: "",
    contato: "",
    telefone: "",
    observacoes: "",
  });

  if (!ready) return <p className="rounded-2xl border border-blue-900 bg-zinc-700 p-6 text-sm text-blue-100">Carregando...</p>;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!form.nomeFantasia.trim() || !form.documento.trim()) {
      setMessage("Nome fantasia e documento sao obrigatorios.");
      return;
    }

    const newSupplier: Supplier = {
      id: generateId("sup"),
      nomeFantasia: form.nomeFantasia.trim(),
      documento: form.documento.trim(),
      contato: form.contato.trim() || "Nao informado",
      telefone: form.telefone.trim() || "Nao informado",
      observacoes: form.observacoes.trim() || undefined,
    };

    setSuppliers((prev) => [newSupplier, ...prev]);
    setForm({
      nomeFantasia: "",
      documento: "",
      contato: "",
      telefone: "",
      observacoes: "",
    });
    setMessage("Fornecedor cadastrado com sucesso.");
    setIsModalOpen(false);
  }

  return (
    <PageShell
      title="Cadastro de Fornecedores"
      subtitle="Gestao de parceiros e contatos comerciais."
      actions={
        <Button
          onClick={() => {
            setMessage(null);
            setIsModalOpen(true);
          }}
        >
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
                  <TableHead className="pr-0">Observacoes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell>{supplier.nomeFantasia}</TableCell>
                    <TableCell>{supplier.documento}</TableCell>
                    <TableCell>{supplier.contato}</TableCell>
                    <TableCell>{supplier.telefone}</TableCell>
                    <TableCell className="pr-0">{supplier.observacoes ?? "-"}</TableCell>
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
        title="Novo fornecedor"
        description="Preencha os dados para cadastrar um novo parceiro comercial."
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
              Cadastrar fornecedor
            </Button>
          </form>
      </Modal>
    </PageShell>
  );
}

