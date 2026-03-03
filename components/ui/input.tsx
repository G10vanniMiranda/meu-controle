import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-blue-900 bg-zinc-900/80 px-3 py-2 text-sm text-blue-50",
        "placeholder:text-blue-200/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500",
        className,
      )}
      {...props}
    />
  );
}
