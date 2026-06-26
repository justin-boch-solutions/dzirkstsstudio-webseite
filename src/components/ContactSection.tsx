"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";
import Reveal from "@/components/Reveal";

type Variant = "warm" | "cool" | "default";

interface ContactSectionProps {
  variant?: Variant;
}

export default function ContactSection({ variant = "default" }: ContactSectionProps) {
  const { t } = useLanguage();

  const styles = {
    warm: "bg-foreground text-white",
    cool: "bg-surface-darker text-white",
    default: "section-dark text-white",
  }[variant];

  const btnStyles = {
    warm: "bg-accent-warm text-foreground",
    cool: "bg-accent-cool text-surface-darker",
    default: "bg-white text-foreground",
  }[variant];

  return (
    <section id="kontakt" className={`py-24 md:py-32 relative overflow-hidden ${styles}`}>
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="container mx-auto px-6 md:px-12 text-center relative">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto">
            {t("contact.desc")}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className={`inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl ${btnStyles}`}
          >
            {siteConfig.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
