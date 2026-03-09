import type { Metadata } from "next";
import { SidebarNav } from "@/components/sidebar-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SushiFlow ERP",
    template: "%s | SushiFlow ERP",
  },
  description: "Sistema profissional de controle de estoque, financeiro e operacao para sushi bar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,#1f3f6d_0%,#162234_45%,#0e1726_100%)]">
          <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 p-4 lg:flex-row lg:gap-6 lg:p-6">
            <SidebarNav />
            <main className="min-w-0 flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

