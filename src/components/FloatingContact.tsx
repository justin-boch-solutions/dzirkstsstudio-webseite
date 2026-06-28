"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingContact() {
  const { t } = useLanguage();
  const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t("floating.waMessage"))}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:scale-105 transition-transform animate-pulse-soft"
      >
        <MessageCircle size={20} />
        <span className="text-sm font-bold hidden sm:inline">{t("floating.whatsapp")}</span>
      </a>
    </div>
  );
}
