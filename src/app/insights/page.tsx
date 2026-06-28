"use client";

import Link from "next/link";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useLanguage } from "@/context/LanguageContext";
import { insights } from "@/lib/insights";

export default function InsightsIndexPage() {
  const { t } = useLanguage();

  return (
    <>
      <AnimatedBackground variant="neutral" />
      <Header area="agentur" />
      <main className="min-h-screen pt-32 pb-20 section-light">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black mb-12">{t("insights.title")}</h1>
          <ul className="space-y-6">
            {insights.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="block rounded-2xl border border-black/10 bg-white/40 p-6 hover:shadow-lg transition-shadow"
                >
                  <time className="text-xs font-bold uppercase tracking-widest text-muted">
                    {a.date}
                  </time>
                  <span className="block text-xl font-bold mt-2">{t(a.titleKey)}</span>
                  <p className="text-sm text-muted mt-2">{t(a.excerptKey)}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
