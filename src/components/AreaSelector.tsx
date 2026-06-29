"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const panels = [
  {
    href: "/elektro",
    labelKey: "gateway.card.elektro.label",
    titleKey: "gateway.card.elektro.title",
    descKey: "gateway.card.elektro.desc",
    previewKey: "gateway.panel.elektro.preview",
    icon: Zap,
    gradient: "from-sky-500/30 via-cyan-400/20 to-blue-600/10",
    hoverBorder: "group-hover:border-sky-400/60",
    iconWrap: "bg-sky-500/25 text-sky-900",
  },
  {
    href: "/agentur",
    labelKey: "gateway.card.media.label",
    titleKey: "gateway.card.media.title",
    descKey: "gateway.card.media.desc",
    previewKey: "gateway.panel.media.preview",
    icon: Camera,
    gradient: "from-amber-500/30 via-rose-500/20 to-orange-600/10",
    hoverBorder: "group-hover:border-amber-400/60",
    iconWrap: "bg-amber-500/25 text-amber-900",
  },
] as const;

export default function AreaSelector() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
      {panels.map((panel, i) => {
        const Icon = panel.icon;
        return (
          <motion.div
            key={panel.href}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="min-h-[220px] md:min-h-[280px]"
          >
            <Link href={panel.href} className="group block h-full">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`relative h-full overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br ${panel.gradient} ${panel.hoverBorder} p-6 md:p-7 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-shadow duration-500`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-line" />
                <div className="relative">
                  <span className={`inline-flex w-11 h-11 rounded-2xl items-center justify-center mb-4 ${panel.iconWrap}`}>
                    <Icon size={22} />
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/45 block mb-1">
                    {t(panel.labelKey)}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black leading-tight">
                    {t(panel.titleKey)}
                  </h3>
                </div>
                <div className="relative mt-4">
                  <p className="text-sm text-muted mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {t(panel.descKey)}
                  </p>
                  <p className="text-xs font-medium text-foreground/50 mb-4 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                    {t(panel.previewKey)}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold">
                    {t("gateway.enter")}
                    <span className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center group-hover:bg-foreground group-hover:text-white transition-colors">
                      <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform" />
                    </span>
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
