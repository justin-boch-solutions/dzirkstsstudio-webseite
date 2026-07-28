"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import AreaSelector from "@/components/AreaSelector";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroContactBar from "@/components/HeroContactBar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <AnimatedBackground variant="neutral" />
      <Header area="gateway" />

      <main className="min-h-screen flex flex-col lg:flex-row pt-[var(--header-height)]">
        <section className="section-warm w-full lg:w-[52%] min-h-[55vh] lg:min-h-screen flex flex-col justify-center px-8 md:px-14 lg:px-20 py-12 lg:py-24 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-xl"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full glass-panel-dark text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              {t("gateway.badge")}
            </span>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-[1.02] mb-6 text-foreground">
              {t("gateway.title.part1")}
              <br />
              <span className="italic font-light text-foreground/55">
                {t("gateway.title.part2")}
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
              {t("gateway.description")}
            </p>

            <p className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/45 mb-8">
              {t("hero.role")}
            </p>

            <HeroContactBar variant="light" className="mb-10" />

            <AreaSelector />
          </motion.div>
        </section>

        <section className="section-dark w-full lg:w-[48%] min-h-[45vh] lg:min-h-screen relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={siteConfig.portraitSrc}
              alt={siteConfig.portraitAlt}
              fill
              className="object-cover object-center opacity-80"
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-darker via-surface-darker/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-darker/80 via-transparent to-transparent lg:opacity-100 opacity-60" />
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 glass-panel rounded-2xl p-5 md:p-6 text-white max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <p className="text-sm font-bold tracking-wide">{siteConfig.name}</p>
            <p className="text-xs text-white/50 mt-1">{t("hero.role")}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs text-accent-warm mt-3 inline-block hover:underline"
            >
              {siteConfig.email}
            </a>
          </motion.div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
