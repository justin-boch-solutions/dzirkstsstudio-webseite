"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

interface HeroActionsProps {
  primaryHref: string;
  primaryLabel: string;
  variant?: "warm" | "cool" | "neutral";
}

export default function HeroActions({
  primaryHref,
  primaryLabel,
  variant = "neutral",
}: HeroActionsProps) {
  const { t } = useLanguage();
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t("floating.waMessage"))}`;

  const primaryClass =
    variant === "cool"
      ? "bg-accent-cool text-surface-darker shadow-sky-500/20"
      : "bg-foreground text-white";

  const secondaryClass =
    variant === "cool"
      ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
      : "border-black/10 bg-white/30 backdrop-blur text-foreground";

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
      <Link
        href={primaryHref}
        className={`btn-glow inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg ${primaryClass}`}
      >
        {primaryLabel}
        <ArrowRight size={18} />
      </Link>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 ${secondaryClass}`}
      >
        <MessageCircle size={18} className="text-[#25D366]" />
        {t("hero.whatsapp")}
      </a>
    </div>
  );
}
