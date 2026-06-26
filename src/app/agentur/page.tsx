"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Smartphone, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import AgencyTrustSections from "@/components/AgencyTrustSections";
import AnimatedBackground from "@/components/AnimatedBackground";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  { key: "social", icon: Smartphone, color: "text-amber-600 bg-amber-500/15" },
  { key: "photo", icon: Camera, color: "text-rose-600 bg-rose-500/15" },
  { key: "content", icon: Sparkles, color: "text-orange-600 bg-orange-500/15" },
] as const;

export default function AgenturPage() {
  const { t } = useLanguage();

  return (
    <>
      <AnimatedBackground variant="creative" />
      <Header area="agentur" />
      <main className="min-h-screen pt-20">
        <section className="section-light relative overflow-hidden py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-muted mb-6">
                <span className="w-8 h-px bg-accent-warm" />
                {t("agency.badge")}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.02] mb-6 max-w-4xl">
                {t("agency.hero.title.part1")}
                <br />
                <span className="italic font-light text-foreground/50">
                  {t("agency.hero.title.part2")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10">
                {t("agency.hero.desc")}
              </p>
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-3 bg-foreground text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                {t("agency.hero.cta")}
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </section>

        <section id="leistungen" className="section-warm py-24 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-14">
                {t("agency.services.title")}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map(({ key, icon: Icon, color }, i) => (
                <Reveal key={key} delay={i * 0.1}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="h-full rounded-3xl glass-panel p-8 border border-black/10 shadow-lg"
                  >
                    <span
                      className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-6 ${color}`}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="text-xl font-bold mb-3">
                      {t(`agency.services.${key}.title`)}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {t(`agency.services.${key}.desc`)}
                    </p>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <AgencyTrustSections />

        <section id="ueber-mich" className="section-light py-24 md:py-28">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                {t("agency.about.title")}
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {t("agency.about.desc")}
              </p>
            </Reveal>
          </div>
        </section>

        <ContactSection variant="warm" />
      </main>
      <Footer />
    </>
  );
}
