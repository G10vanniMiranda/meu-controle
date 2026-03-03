"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/insumos", label: "Insumos" },
  { href: "/fornecedores", label: "Fornecedores" },
  { href: "/movimentacoes", label: "Movimentacoes" },
  { href: "/contas", label: "Contas" },
];

export function SidebarNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden">
        <Button variant="outline" className="w-full justify-between" onClick={() => setOpen((prev) => !prev)}>
          Menu de navegacao
          <span>{open ? "Fechar" : "Abrir"}</span>
        </Button>
      </div>
      <aside
        className={cn(
          "w-full lg:sticky lg:top-6 lg:block lg:h-[calc(100vh-3rem)] lg:w-72",
          open ? "block" : "hidden lg:block",
        )}
      >
        <Card className="h-full">
          <CardContent className="p-4">
            <div className="mb-6 rounded-xl bg-zinc-700 p-4 text-white">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200">SushiFlow</p>
                <Badge variant="warning">Pro</Badge>
              </div>
              <h1 className="mt-1 text-xl font-semibold text-yellow-300">ERP Profissional</h1>
              <p className="mt-2 text-sm text-blue-100/80">Operacao, estoque e financeiro em um painel.</p>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm font-medium transition",
                      isActive
                        ? "bg-yellow-300/90 text-zinc-800 ring-1 ring-yellow-400"
                        : "text-blue-100 hover:bg-blue-950/50 hover:text-yellow-300",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </CardContent>
        </Card>
      </aside>
    </>
  );
}

