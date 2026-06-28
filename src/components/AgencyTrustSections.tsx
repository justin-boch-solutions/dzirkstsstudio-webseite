"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const processSteps = ["step1", "step2", "step3", "step4"] as const;
const deliverables = ["item1", "item2", "item3", "item4"] as const;

export default function AgencyTrustSections() {
  const { t } = useLanguage();

  return (
    <>
      <section id="ablauf" className="section-dark py-24 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">
                {t("agency.process.title")}
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                {t("agency.process.desc")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.08}>
                <article className="rounded-2xl glass-panel-dark p-6 h-full text-white border border-white/10">
                  <span className="text-xs font-bold tracking-widest text-accent-warm uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2">
                    {t(`agency.process.${step}.title`)}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {t(`agency.process.${step}.desc`)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-24 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12">
              {t("agency.deliverables.title")}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
            {deliverables.map((item, i) => (
              <Reveal key={item} delay={i * 0.08} className="h-full w-full">
                <div className="flex h-full min-h-[5.5rem] w-full items-start gap-4 rounded-2xl border border-black/10 bg-white/40 p-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="leading-relaxed text-foreground/80">
                    {t(`agency.deliverables.${item}`)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-warm py-24 md:py-28">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <div className="max-w-3xl rounded-3xl bg-foreground text-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-accent-warm/30 blur-3xl" />
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 relative">
                {t("agency.early.title")}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 relative">
                {t("agency.early.desc")}
              </p>
              <Link
                href="#kontakt"
                className="relative inline-flex items-center gap-3 bg-white text-foreground px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                {t("agency.early.cta")}
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
