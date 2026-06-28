"use client";

import Image from "next/image";
import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import ContactSection from "@/components/ContactSection";
import AgencyTrustSections from "@/components/AgencyTrustSections";
import AnimatedBackground from "@/components/AnimatedBackground";
import InsightsPreview from "@/components/InsightsPreview";
import HeroContactBar from "@/components/HeroContactBar";
import HeroActions from "@/components/HeroActions";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { Camera, Smartphone, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";

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
        <section className="section-light relative overflow-hidden py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <Reveal>
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-muted mb-6">
                    <span className="w-8 h-px bg-accent-warm" />
                    {t("agency.badge")}
                  </span>
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-[1.02] mb-6">
                    {t("agency.hero.title.part1")}
                    <br />
                    <span className="italic font-light text-foreground/50">
                      {t("agency.hero.title.part2")}
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-4">
                    {t("agency.hero.desc")}
                  </p>
                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/40 mb-8">
                    {t("hero.role")}
                  </p>
                  <HeroContactBar variant="light" className="mb-8" />
                  <HeroActions
                    primaryHref="#kontakt"
                    primaryLabel={t("agency.hero.cta")}
                    variant="warm"
                  />
                </Reveal>
              </div>

              <Reveal delay={0.15} className="lg:col-span-5">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto rounded-[2rem] overflow-hidden border border-black/10 shadow-2xl"
                >
                  <Image
                    src={siteConfig.portraitSrc}
                    alt={siteConfig.portraitAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-bold">{siteConfig.name}</p>
                    <p className="text-sm text-white/60 mt-1">{t("brand.slogan")}</p>
                  </div>
                </motion.div>
              </Reveal>
            </div>
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
                    className="card-breathe h-full rounded-3xl glass-panel p-8 border border-black/10 shadow-lg"
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

        <section id="ueber-mich" className="section-cool py-24 md:py-28">
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

        <InsightsPreview />

        <ContactSection variant="warm" area="agentur" />
      </main>
      <SiteFooter />
    </>
  );
}
