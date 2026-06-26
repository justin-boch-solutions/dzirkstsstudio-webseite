"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Plug, Shield, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  { key: "install", icon: Plug, color: "text-sky-400 bg-sky-500/15" },
  { key: "repair", icon: Wrench, color: "text-yellow-400 bg-yellow-500/15" },
  { key: "modern", icon: Shield, color: "text-cyan-300 bg-cyan-500/15" },
] as const;

export default function ElektroPage() {
  const { t } = useLanguage();

  return (
    <>
      <AnimatedBackground variant="elektro" />
      <Header area="elektro" />
      <main className="min-h-screen pt-20">
        <section className="section-dark relative overflow-hidden py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-6">
                <span className="w-8 h-px bg-accent-cool" />
                {t("elektro.badge")}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.02] mb-6 max-w-4xl text-white">
                {t("elektro.hero.title.part1")}
                <br />
                <span className="italic font-light text-white/45">
                  {t("elektro.hero.title.part2")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10">
                {t("elektro.hero.desc")}
              </p>
              <Link
                href="#kontakt"
                className="inline-flex items-center gap-3 bg-accent-cool text-surface-darker px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-sky-500/20"
              >
                {t("elektro.hero.cta")}
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-accent-cool to-transparent opacity-60 hidden lg:block"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </section>

        <section id="leistungen" className="section-cool py-24 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-14">
                {t("elektro.services.title")}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map(({ key, icon: Icon, color }, i) => (
                <Reveal key={key} delay={i * 0.1}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    className="h-full rounded-3xl bg-white/20 backdrop-blur border border-white/30 p-8 shadow-lg"
                  >
                    <span
                      className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center mb-6 ${color}`}
                    >
                      <Icon size={22} />
                    </span>
                    <h3 className="text-xl font-bold mb-3">
                      {t(`elektro.services.${key}.title`)}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {t(`elektro.services.${key}.desc`)}
                    </p>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-light py-24 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <div className="max-w-3xl rounded-3xl border border-black/10 bg-white/30 backdrop-blur p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6">
                  {t("elektro.trust.title")}
                </h2>
                <p className="text-lg text-muted leading-relaxed">
                  {t("elektro.trust.desc")}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactSection variant="cool" />
      </main>
      <Footer />
    </>
  );
}
