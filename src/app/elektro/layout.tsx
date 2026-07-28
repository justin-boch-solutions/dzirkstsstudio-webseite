import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Elektrotechnik",
  description:
    "Ausgebildeter Elektriker aus Deutschland – jetzt in Lettland für private und gewerbliche Aufträge. Installation, Fehlerbehebung und Modernisierung mit klarem Ablauf und fairer Kommunikation.",
  alternates: {
    canonical: `${siteConfig.url}/elektro`,
  },
  openGraph: {
    title: "Elektrotechnik | Dzirksts Studio",
    description:
      "Sichere Elektroinstallationen mit handwerklicher Präzision – ausgebildeter Elektriker aus Deutschland, jetzt in Lettland.",
    url: `${siteConfig.url}/elektro`,
  },
  twitter: {
    title: "Elektrotechnik | Dzirksts Studio",
    description:
      "Sichere Elektroinstallationen mit handwerklicher Präzision in Lettland.",
  },
};

export default function ElektroLayout({ children }: { children: React.ReactNode }) {
  return children;
}
