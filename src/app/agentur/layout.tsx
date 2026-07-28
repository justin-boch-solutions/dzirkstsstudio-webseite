import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Social Media & Fotografie",
  description:
    "Ich helfe dir, online professionell aufzutreten – von der Social-Media-Strategie über Content-Produktion bis zur Fotografie, die zu deiner Marke passt.",
  alternates: {
    canonical: `${siteConfig.url}/agentur`,
  },
  openGraph: {
    title: "Social Media & Fotografie | Dzirksts Studio",
    description:
      "Social-Media-Strategie, Content-Produktion und Fotografie aus Lettland – professioneller Auftritt für deine Marke.",
    url: `${siteConfig.url}/agentur`,
  },
  twitter: {
    title: "Social Media & Fotografie | Dzirksts Studio",
    description:
      "Social-Media-Strategie, Content-Produktion und Fotografie aus Lettland.",
  },
};

export default function AgenturLayout({ children }: { children: React.ReactNode }) {
  return children;
}
