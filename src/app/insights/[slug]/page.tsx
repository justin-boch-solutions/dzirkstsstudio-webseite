"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useLanguage } from "@/context/LanguageContext";
import { getInsight } from "@/lib/insights";

export default function InsightArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t } = useLanguage();
  const article = getInsight(slug);

  if (!article) notFound();

  return (
    <>
      <AnimatedBackground variant="neutral" />
      <Header area="agentur" />
      <main className="min-h-screen pt-32 pb-20 section-light">
        <article className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Link
            href="/agentur#insights"
            className="text-sm font-bold text-muted hover:text-foreground mb-8 inline-block"
          >
            ← {t("insights.back")}
          </Link>
          <time className="text-xs font-bold uppercase tracking-widest text-muted">
            {article.date}
          </time>
          <h1 className="text-4xl md:text-5xl font-black mt-4 mb-8 leading-tight">
            {t(article.titleKey)}
          </h1>
          <p className="text-lg text-muted leading-relaxed">{t(article.bodyKey)}</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
