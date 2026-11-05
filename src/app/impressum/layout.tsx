import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Dzirksts Studio, SIA – Registerdaten, Kontakt und Vertretungsberechtigung.",
  alternates: {
    canonical: `${siteConfig.url}/impressum`,
  },
};

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return children;
}
