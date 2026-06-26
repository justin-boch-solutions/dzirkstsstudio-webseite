"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { SiteArea } from "@/lib/config";

interface HeaderProps {
  area?: SiteArea;
}

export default function Header({ area = "gateway" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleLangChange = (lang: "de" | "en" | "lv") => {
    setLanguage(lang);
    setLangOpen(false);
  };

  const areaLinks =
    area === "agentur"
      ? [
          { href: "#leistungen", label: t("nav.services") },
          { href: "#ablauf", label: t("nav.process") },
          { href: "#ueber-mich", label: t("nav.about") },
          { href: "#kontakt", label: t("nav.contact") },
        ]
      : area === "elektro"
        ? [
            { href: "#leistungen", label: t("nav.services") },
            { href: "#kontakt", label: t("nav.contact") },
          ]
        : [];

  const accentBar =
    area === "agentur"
      ? "bg-accent-warm"
      : area === "elektro"
        ? "bg-accent-cool"
        : "bg-foreground";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel-dark border-b border-white/10">
      <div className={`h-1 w-full ${accentBar}`} />
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center gap-4 md:gap-5 group min-w-0">
          <Image
            src="/logo.svg"
            alt="Dzirksts Studio Logo"
            width={300}
            height={200}
            className="w-20 md:w-28 h-auto shrink-0 drop-shadow-md group-hover:scale-[1.02] transition-transform duration-300"
            priority
          />
          <span className="hidden sm:block h-10 w-px bg-white/20 shrink-0" />
          <span className="hidden sm:block min-w-0">
            <span className="block text-xs md:text-sm font-bold tracking-wide text-white/90 leading-tight">
              {t("brand.slogan")}
            </span>
            <span className="block text-[10px] md:text-xs text-white/50 mt-0.5 tracking-wider uppercase">
              {t("brand.slogan.sub")}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-white/80">
          {area !== "gateway" && (
            <Link
              href="/"
              className="text-sm font-medium hover:text-white transition-colors"
            >
              {t("nav.back")}
            </Link>
          )}
          {areaLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="relative border-l border-white/15 pl-5">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm font-medium hover:text-white uppercase"
            >
              <Globe size={16} />
              {language}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-3 w-36 rounded-xl shadow-2xl border border-white/10 overflow-hidden bg-surface-darker text-white py-2">
                {(["de", "en", "lv"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLangChange(lang)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 ${language === lang ? "font-bold text-accent-cool" : ""}`}
                  >
                    {lang === "de" ? "Deutsch" : lang === "en" ? "English" : "Latviešu"}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-2 text-white/80">
          <button
            onClick={() =>
              handleLangChange(
                language === "de" ? "en" : language === "en" ? "lv" : "de",
              )
            }
            className="flex items-center gap-1 text-xs font-bold uppercase px-2 py-1 rounded-full border border-white/15"
          >
            <Globe size={14} />
            {language}
          </button>
          {area !== "gateway" && (
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </div>

      {mobileOpen && area !== "gateway" && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4 bg-surface-darker text-white">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            {t("nav.back")}
          </Link>
          {areaLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
