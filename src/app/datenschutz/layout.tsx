import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Dzirksts Studio, SIA – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: {
    canonical: `${siteConfig.url}/datenschutz`,
  },
};

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return children;
}
