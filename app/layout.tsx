import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VICE CLOUD — Jogue sem limites",
  description: "Sua próxima experiência de cloud gaming começa aqui.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}