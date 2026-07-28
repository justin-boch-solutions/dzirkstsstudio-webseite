import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Insights",
  description: "Kurze Tipps zu Social Media in Lettland und Elektro-Standards.",
  alternates: {
    canonical: `${siteConfig.url}/insights`,
  },
  openGraph: {
    title: "Insights | Dzirksts Studio",
    description: "Kurze Tipps zu Social Media in Lettland und Elektro-Standards.",
    url: `${siteConfig.url}/insights`,
  },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
