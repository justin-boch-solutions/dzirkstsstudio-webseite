import type { Metadata } from "next";
import { getInsight } from "@/lib/insights";
import { extraTranslations } from "@/lib/extra-translations";
import { siteConfig } from "@/lib/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};

  const translations = extraTranslations as Record<string, { de: string; en: string; lv: string }>;
  const title = translations[article.titleKey]?.de ?? "Insights";
  const description = translations[article.excerptKey]?.de ?? siteConfig.name;

  return {
    title: { absolute: `${title} | Dzirksts Studio` },
    description,
    alternates: {
      canonical: `${siteConfig.url}/insights/${slug}`,
    },
    openGraph: {
      title: `${title} | Dzirksts Studio`,
      description,
      url: `${siteConfig.url}/insights/${slug}`,
      type: "article",
    },
  };
}

export default function InsightSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
