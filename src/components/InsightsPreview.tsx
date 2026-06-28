"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { insights } from "@/lib/insights";
import Reveal from "@/components/Reveal";

export default function InsightsPreview() {
  const { t } = useLanguage();

  return (
    <section id="insights" className="section-light py-24 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            {t("insights.title")}
          </h2>
          <p className="text-muted max-w-2xl mb-12 text-lg">{t("insights.desc")}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.1}>
              <Link
                href={`/insights/${article.slug}`}
                className="group block rounded-3xl border border-black/10 bg-white/40 p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <time className="text-xs font-bold uppercase tracking-widest text-muted">
                  {article.date}
                </time>
                <h3 className="text-xl font-black mt-3 mb-2 group-hover:text-foreground/80">
                  {t(article.titleKey)}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {t(article.excerptKey)}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-bold">
                  {t("insights.read")} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
