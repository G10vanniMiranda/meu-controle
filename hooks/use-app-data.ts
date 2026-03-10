"use client";

import { useEffect, useState } from "react";
import {
  defaultCashFlow,
  defaultAccounts,
  defaultInventoryItems,
  defaultStockMovements,
  defaultSuppliers,
} from "@/lib/mock-data";
import type { AccountEntry, CashFlowEntry, InventoryItem, StockMovement, Supplier } from "@/lib/types";

export function useAppData() {
  const [inventory, setInventory] = useState<InventoryItem[]>(defaultInventoryItems);
  const [suppliers, setSuppliers] = useState<Supplier[]>(defaultSuppliers);
  const [movements, setMovements] = useState<StockMovement[]>(defaultStockMovements);
  const [accounts, setAccounts] = useState<AccountEntry[]>(defaultAccounts);
  const [cashFlow, setCashFlow] = useState<CashFlowEntry[]>(defaultCashFlow);
  const [inventoryReady, setInventoryReady] = useState(false);
  const [suppliersReady, setSuppliersReady] = useState(false);
  const [movementsReady, setMovementsReady] = useState(false);
  const [accountsReady, setAccountsReady] = useState(false);
  const [cashFlowReady, setCashFlowReady] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadSuppliers() {
      try {
        const response = await fetch("/api/fornecedores", { cache: "no-store" });
        if (!response.ok) throw new Error("Falha ao carregar fornecedores");
        const data = (await response.json()) as Supplier[];
        if (active) setSuppliers(data);
      } catch {
        if (active) setSuppliers(defaultSuppliers);
      } finally {
        if (active) setSuppliersReady(true);
      }
    }

    loadSuppliers();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function loadCashFlow() {
      try {
        const response = await fetch("/api/fluxo-caixa", { cache: "no-store" });
        if (!response.ok) throw new Error("Falha ao carregar fluxo de caixa");
        const data = (await response.json()) as CashFlowEntry[];
        if (active) setCashFlow(data);
      } catch {
        if (active) setCashFlow(defaultCashFlow);
      } finally {
        if (active) setCashFlowReady(true);
      }
    }

    loadCashFlow();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function loadInventory() {
      try {
        const response = await fetch("/api/insumos", { cache: "no-store" });
        if (!response.ok) throw new Error("Falha ao carregar insumos");
        const data = (await response.json()) as InventoryItem[];
        if (active) setInventory(data);
      } catch {
        if (active) setInventory(defaultInventoryItems);
      } finally {
        if (active) setInventoryReady(true);
      }
    }

    loadInventory();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function loadMovements() {
      try {
        const response = await fetch("/api/movimentacoes", { cache: "no-store" });
        if (!response.ok) throw new Error("Falha ao carregar movimentacoes");
        const data = (await response.json()) as StockMovement[];
        if (active) setMovements(data);
      } catch {
        if (active) setMovements(defaultStockMovements);
      } finally {
        if (active) setMovementsReady(true);
      }
    }

    loadMovements();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    async function loadAccounts() {
      try {
        const response = await fetch("/api/contas", { cache: "no-store" });
        if (!response.ok) throw new Error("Falha ao carregar contas");
        const data = (await response.json()) as AccountEntry[];
        if (active) setAccounts(data);
      } catch {
        if (active) setAccounts(defaultAccounts);
      } finally {
        if (active) setAccountsReady(true);
      }
    }

    loadAccounts();

    return () => {
      active = false;
    };
  }, []);

  return {
    inventory,
    setInventory,
    suppliers,
    setSuppliers,
    movements,
    setMovements,
    accounts,
    setAccounts,
    cashFlow,
    setCashFlow,
    ready: inventoryReady && suppliersReady && movementsReady && accountsReady && cashFlowReady,
  };
}
