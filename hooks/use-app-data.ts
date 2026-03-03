"use client";

import {
  defaultAccounts,
  defaultCashFlow,
  defaultInventoryItems,
  defaultStockMovements,
  defaultSuppliers,
} from "@/lib/mock-data";
import { STORAGE_KEYS } from "@/lib/storage-keys";
import type { AccountEntry, CashFlowEntry, InventoryItem, StockMovement, Supplier } from "@/lib/types";
import { useLocalStorageState } from "@/hooks/use-local-storage";

export function useAppData() {
  const [inventory, setInventory, inventoryReady] = useLocalStorageState<InventoryItem[]>(
    STORAGE_KEYS.inventory,
    defaultInventoryItems,
  );
  const [suppliers, setSuppliers, suppliersReady] = useLocalStorageState<Supplier[]>(
    STORAGE_KEYS.suppliers,
    defaultSuppliers,
  );
  const [movements, setMovements, movementsReady] = useLocalStorageState<StockMovement[]>(
    STORAGE_KEYS.movements,
    defaultStockMovements,
  );
  const [accounts, setAccounts, accountsReady] = useLocalStorageState<AccountEntry[]>(
    STORAGE_KEYS.accounts,
    defaultAccounts,
  );
  const [cashFlow, setCashFlow, cashFlowReady] = useLocalStorageState<CashFlowEntry[]>(
    STORAGE_KEYS.cashFlow,
    defaultCashFlow,
  );

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
