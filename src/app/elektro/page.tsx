"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plug, Shield, Wrench } from "lucide-react";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroContactBar from "@/components/HeroContactBar";
import HeroActions from "@/components/HeroActions";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";

const services = [
  { key: "install", icon: Plug, color: "text-sky-400 bg-sky-500/15" },
  { key: "repair", icon: Wrench, color: "text-yellow-400 bg-yellow-500/15" },
  { key: "modern", icon: Shield, color: "text-cyan-300 bg-cyan-500/15" },
] as const;

const trustChips = ["chip1", "chip2", "chip3"] as const;

export default function ElektroPage() {
  const { t } = useLanguage();

  return (
    <>
      <AnimatedBackground variant="elektro" />
      <Header area="elektro" />
      <main className="min-h-screen pt-[var(--header-height)]">
        <section className="section-dark relative overflow-hidden py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <Reveal>
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-6">
                    <span className="w-8 h-px bg-accent-cool" />
                    {t("elektro.badge")}
                  </span>
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-[1.02] mb-6 text-white">
                    {t("elektro.hero.title.part1")}
                    <br />
                    <span className="italic font-light text-white/45">
                      {t("elektro.hero.title.part2")}
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-6">
                    {t("elektro.hero.desc")}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {trustChips.map((chip) => (
                      <span
                        key={chip}
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/15 bg-white/10 text-white/70"
                      >
                        {t(`elektro.hero.${chip}`)}
                      </span>
                    ))}
                  </div>
                  <HeroContactBar variant="dark" className="mb-8" />
                  <HeroActions
                    primaryHref="#kontakt"
                    primaryLabel={t("elektro.hero.cta")}
                    variant="cool"
                  />
                </Reveal>
              </div>

              <Reveal delay={0.15} className="lg:col-span-5 hidden lg:block">
                <div className="relative aspect-square max-w-md mx-auto lg:ml-auto rounded-[2rem] overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                    alt=""
                    fill
                    className="object-cover opacity-70"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cool/20 to-surface-darker/80" />
                  <motion.div
                    className="absolute inset-8 border border-accent-cool/40 rounded-2xl"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
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
                    className="card-breathe h-full rounded-3xl bg-white/20 backdrop-blur border border-white/30 p-8 shadow-lg"
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

        <section className="section-warm py-24 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <div className="max-w-3xl rounded-3xl border border-black/10 bg-white/35 backdrop-blur p-8 md:p-12">
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

        <ContactSection variant="cool" area="elektro" />
      </main>
      <SiteFooter />
    </>
  );
}
