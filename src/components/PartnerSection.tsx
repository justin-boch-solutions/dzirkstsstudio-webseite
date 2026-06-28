"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { partnerConfig } from "@/lib/partner";

export default function PartnerSection() {
  const { language, t } = useLanguage();
  const tagline =
    partnerConfig.tagline[language] ?? partnerConfig.tagline.de;
  const description =
    partnerConfig.description[language] ?? partnerConfig.description.de;

  return (
    <section className="border-t border-black/10 bg-black/[0.03] py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/45 mb-3">
            {t("partner.badge")}
          </p>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-10 max-w-2xl">
            {t("partner.title")}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href={partnerConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center gap-6 rounded-3xl border border-black/10 bg-white/35 backdrop-blur p-6 md:p-8 max-w-3xl hover:border-black/20 hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={partnerConfig.logoSrc}
              alt={partnerConfig.name}
              width={200}
              height={66}
              className="h-10 md:h-12 w-auto shrink-0 opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="min-w-0">
              <p className="font-bold text-lg group-hover:text-foreground/80 transition-colors">
                {partnerConfig.name}
              </p>
              <p className="text-sm text-muted mt-1">{tagline}</p>
              <p className="text-sm text-foreground/65 mt-3 leading-relaxed">
                {description}
              </p>
              <span className="inline-block mt-4 text-sm font-bold text-foreground/70 group-hover:text-foreground transition-colors">
                {t("partner.visit")} →
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
