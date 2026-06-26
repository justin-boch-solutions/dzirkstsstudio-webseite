"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const cards = [
  {
    href: "/agentur",
    labelKey: "gateway.card.media.label",
    titleKey: "gateway.card.media.title",
    descKey: "gateway.card.media.desc",
    icon: Camera,
    accent: "from-amber-500/20 to-rose-500/10 hover:from-amber-500/30",
    border: "hover:border-amber-400/50",
    iconBg: "bg-amber-500/20 text-amber-700",
  },
  {
    href: "/elektro",
    labelKey: "gateway.card.elektro.label",
    titleKey: "gateway.card.elektro.title",
    descKey: "gateway.card.elektro.desc",
    icon: Zap,
    accent: "from-sky-500/20 to-yellow-400/10 hover:from-sky-500/30",
    border: "hover:border-sky-400/50",
    iconBg: "bg-sky-500/20 text-sky-800",
  },
] as const;

export default function AreaSelector() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-5">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.href}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
          >
            <Link href={card.href} className="block group">
              <div
                className={`relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br ${card.accent} ${card.border} p-6 md:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-line" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/45">
                      {t(card.labelKey)}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black mt-2 mb-2">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-sm md:text-base text-muted max-w-sm">
                      {t(card.descKey)}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    <span
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.iconBg}`}
                    >
                      <Icon size={22} />
                    </span>
                    <span className="w-11 h-11 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-foreground group-hover:text-white transition-all duration-300">
                      <ArrowRight
                        size={18}
                        className="group-hover:-rotate-45 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
