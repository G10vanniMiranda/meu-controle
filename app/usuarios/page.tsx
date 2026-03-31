"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { Select } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import type { TeamUser, TeamUserRole, TeamUserStatus } from "@/lib/types";

const roleLabels: Record<TeamUserRole, string> = {
  admin: "Administrador",
  gerente: "Gerente",
  financeiro: "Financeiro",
  estoque: "Estoque",
  atendimento: "Atendimento",
  cozinha: "Cozinha",
};

const statusLabels: Record<TeamUserStatus, string> = {
  ativo: "Ativo",
  inativo: "Inativo",
  ferias: "Ferias",
};

const emptyForm = {
  nome: "",
  email: "",
  telefone: "",
  cargo: "",
  role: "atendimento" as TeamUserRole,
  status: "ativo" as TeamUserStatus,
  password: "",
  confirmPassword: "",
  observacoes: "",
};

function statusBadge(status: TeamUserStatus) {
  if (status === "ativo") return "success" as const;
  if (status === "ferias") return "warning" as const;
  return "secondary" as const;
}

export default function UsuariosPage() {
  const [users, setUsers] = useState<TeamUser[]>([]);
  const [ready, setReady] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    let active = true;

    async function loadUsers() {
      try {
        const response = await fetch("/api/usuarios", { cache: "no-store" });
        const data = (await response.json()) as TeamUser[] | { message?: string };

        if (!response.ok) {
          throw new Error("message" in data ? data.message : "Falha ao carregar usuarios");
        }

        if (active) setUsers(data as TeamUser[]);
      } catch (error) {
        if (active) {
          setUsers([]);
          setMessage(error instanceof Error ? error.message : "Nao foi possivel carregar os usuarios.");
        }
      } finally {
        if (active) setReady(true);
      }
    }

    loadUsers();

    return () => {
      active = false;
    };
  }, []);

  const counts = useMemo(() => ({
    total: users.length,
    ativos: users.filter((user) => user.status === "ativo").length,
    ferias: users.filter((user) => user.status === "ferias").length,
    admins: users.filter((user) => user.role === "admin").length,
  }), [users]);

  function resetForm() {
    setForm(emptyForm);
    setEditingUserId(null);
  }

  function startCreate() {
    setMessage(null);
    resetForm();
    setIsModalOpen(true);
  }

  function startEdit(user: TeamUser) {
    setMessage(null);
    setEditingUserId(user.id);
    setForm({
      nome: user.nome,
      email: user.email,
      telefone: user.telefone ?? "",
      cargo: user.cargo,
      role: user.role,
      status: user.status,
      password: "",
      confirmPassword: "",
      observacoes: user.observacoes ?? "",
    });
    setIsModalOpen(true);
  }

  async function onDelete(id: string) {
    setMessage(null);
    if (!window.confirm("Deseja realmente excluir este usuario da equipe?")) return;

    try {
      const response = await fetch(`/api/usuarios/${id}`, { method: "DELETE" });
      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        setMessage(data.message ?? "Erro ao remover usuario.");
        return;
      }

      setUsers((prev) => prev.filter((entry) => entry.id !== id));
      setMessage("Usuario removido com sucesso.");
    } catch {
      setMessage("Erro de conexao ao remover usuario.");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    if (!form.nome.trim() || !form.email.trim() || !form.cargo.trim()) {
      setMessage("Nome, email e cargo sao obrigatorios.");
      return;
    }

    if (!editingUserId && form.password.trim().length < 8) {
      setMessage("Defina uma senha com pelo menos 8 caracteres.");
      return;
    }

    if (form.password && form.password.length < 8) {
      setMessage("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("A confirmacao de senha nao confere.");
      return;
    }

    try {
      const response = await fetch(editingUserId ? `/api/usuarios/${editingUserId}` : "/api/usuarios", {
        method: editingUserId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome.trim(),
          email: form.email.trim(),
          telefone: form.telefone.trim() || undefined,
          cargo: form.cargo.trim(),
          role: form.role,
          status: form.status,
          password: form.password.trim() || undefined,
          observacoes: form.observacoes.trim() || undefined,
        }),
      });

      const data = (await response.json()) as TeamUser & { message?: string };
      if (!response.ok) {
        setMessage(data.message ?? "Erro ao salvar usuario.");
        return;
      }

      setIsModalOpen(false);
      resetForm();

      if (editingUserId) {
        setUsers((prev) => prev.map((entry) => (entry.id === editingUserId ? (data as TeamUser) : entry)));
        setMessage(`Usuario ${data.nome} atualizado com sucesso.`);
      } else {
        setUsers((prev) => [...prev, data as TeamUser]);
        setMessage(`Usuario ${data.nome} criado com sucesso.`);
      }
    } catch {
      setMessage("Erro de conexao ao salvar usuario.");
    }
  }

  if (!ready) {
    return <p className="rounded-2xl border border-blue-900 bg-zinc-700 p-6 text-sm text-blue-100">Carregando...</p>;
  }

  return (
    <PageShell
      title="Controle de Usuarios"
      subtitle="Cadastre a equipe com acesso real ao sistema, perfil operacional e status de trabalho."
      actions={<Button onClick={startCreate}>Novo usuario</Button>}
    >
      {message ? <p className="rounded-lg bg-blue-950/60 px-3 py-2 text-sm text-blue-100">{message}</p> : null}

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-blue-400/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Total da equipe</p>
            <p className="mt-2 text-4xl font-bold leading-none text-blue-50">{counts.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-blue-300/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Usuarios ativos</p>
            <p className="mt-2 text-4xl font-bold leading-none text-blue-300">{counts.ativos}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-yellow-400/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Em ferias</p>
            <p className="mt-2 text-4xl font-bold leading-none text-yellow-300">{counts.ferias}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="min-h-28 p-5">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-yellow-300/90" />
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">Perfis admin</p>
            <p className="mt-2 text-4xl font-bold leading-none text-yellow-300">{counts.admins}</p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Equipe cadastrada</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Cargo</TableHead>
                  <TableHead>Perfil</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Acesso</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead className="pr-0">Acoes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length ? users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium text-blue-50">{user.nome}</TableCell>
                    <TableCell>{user.cargo}</TableCell>
                    <TableCell>{roleLabels[user.role]}</TableCell>
                    <TableCell>
                      <Badge variant={statusBadge(user.status)}>{statusLabels[user.status]}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.hasPassword ? "success" : "warning"}>
                        {user.hasPassword ? "Com senha" : "Sem senha"}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.telefone ?? "-"}</TableCell>
                    <TableCell>{new Date(user.createdAt).toLocaleDateString("pt-BR")}</TableCell>
                    <TableCell className="pr-0">
                      <div className="flex items-center gap-2">
                        <Button type="button" size="sm" variant="ghost" onClick={() => startEdit(user)}>
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
                        <Button type="button" size="sm" variant="ghost" onClick={() => onDelete(user.id)}>
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
                )) : (
                  <TableRow>
                    <TableCell colSpan={9} className="py-8 text-center text-blue-100/70">
                      Nenhum usuario cadastrado ainda.
                    </TableCell>
                  </TableRow>
                )}
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
        title={editingUserId ? "Editar usuario" : "Novo usuario"}
        description={editingUserId ? "Atualize dados e, se quiser, defina uma nova senha de acesso." : "Cadastre a equipe com cargo, perfil, status e senha inicial."}
      >
        <form className="mt-4 grid gap-3 md:grid-cols-2" onSubmit={onSubmit}>
          <Input
            value={form.nome}
            placeholder="Nome completo"
            onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))}
          />
          <Input
            type="email"
            value={form.email}
            placeholder="email@empresa.com"
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
          />
          <Input
            value={form.cargo}
            placeholder="Cargo"
            onChange={(event) => setForm((prev) => ({ ...prev, cargo: event.target.value }))}
          />
          <Input
            value={form.telefone}
            placeholder="Telefone"
            onChange={(event) => setForm((prev) => ({ ...prev, telefone: event.target.value }))}
          />
          <Select value={form.role} onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value as TeamUserRole }))}>
            {Object.entries(roleLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <Select value={form.status} onChange={(event) => setForm((prev) => ({ ...prev, status: event.target.value as TeamUserStatus }))}>
            {Object.entries(statusLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
          <Input
            type="password"
            value={form.password}
            placeholder={editingUserId ? "Nova senha (opcional)" : "Senha inicial"}
            onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
          />
          <Input
            type="password"
            value={form.confirmPassword}
            placeholder={editingUserId ? "Confirmar nova senha" : "Confirmar senha"}
            onChange={(event) => setForm((prev) => ({ ...prev, confirmPassword: event.target.value }))}
          />
          <Textarea
            className="md:col-span-2 min-h-24"
            value={form.observacoes}
            placeholder="Observacoes de acesso, turnos ou responsabilidades"
            onChange={(event) => setForm((prev) => ({ ...prev, observacoes: event.target.value }))}
          />
          <p className="md:col-span-2 text-xs text-blue-100/70">
            {editingUserId ? "Se deixar a senha em branco, o acesso atual sera mantido." : "A senha inicial sera usada pelo usuario para acessar o painel."}
          </p>
          <Button className="md:col-span-2 w-full" type="submit">
            {editingUserId ? "Salvar alteracoes" : "Cadastrar usuario"}
          </Button>
        </form>
      </Modal>
    </PageShell>
  );
}



