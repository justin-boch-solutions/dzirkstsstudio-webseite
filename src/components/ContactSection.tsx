"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

type Variant = "warm" | "cool" | "default";
type Area = "agentur" | "elektro";

interface ContactSectionProps {
  variant?: Variant;
  area: Area;
}

export default function ContactSection({
  variant = "default",
  area,
}: ContactSectionProps) {
  const { t } = useLanguage();

  const styles = {
    warm: "bg-foreground text-white",
    cool: "bg-surface-darker text-white",
    default: "section-dark text-white",
  }[variant];

  return (
    <section id="kontakt" className={`py-24 md:py-32 relative overflow-hidden ${styles}`}>
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.12), transparent 55%)",
        }}
      />
      <div className="container mx-auto px-6 md:px-12 relative">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-white/65 text-lg max-w-xl mx-auto">{t("contact.desc")}</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm area={area} />
        </Reveal>
      </div>
    </section>
  );
}
