import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santorini Marcenaria | Móveis Planejados Sob Medida",
  description: "Móveis planejados e projetos sob medida com acabamento premium.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}