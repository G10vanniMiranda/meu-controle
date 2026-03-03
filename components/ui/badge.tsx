import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "success" | "warning" | "danger" | "secondary";

const variants: Record<Variant, string> = {
  default: "bg-blue-700 text-blue-50",
  success: "bg-blue-200 text-blue-900",
  warning: "bg-yellow-300 text-yellow-900",
  danger: "bg-yellow-200 text-yellow-900",
  secondary: "bg-blue-950 text-blue-200",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold", variants[variant], className)} {...props} />
  );
}
