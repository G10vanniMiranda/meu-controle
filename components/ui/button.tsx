import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";
type Size = "default" | "sm";

const variantClass: Record<Variant, string> = {
  default: "bg-blue-700 text-blue-50 hover:bg-blue-600",
  outline: "border border-blue-700 bg-zinc-700 text-blue-100 hover:bg-blue-950/50",
  ghost: "text-blue-200 hover:bg-blue-950/40 hover:text-blue-50",
};

const sizeClass: Record<Size, string> = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-8 px-3 text-xs",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({ className, variant = "default", size = "default", ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition disabled:pointer-events-none disabled:opacity-50",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
      {...props}
    />
  );
}

