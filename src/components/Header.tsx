"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe, Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";
import type { SiteArea } from "@/lib/config";

interface HeaderProps {
  area?: SiteArea;
}

export default function Header({ area = "gateway" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep --header-height in sync with the header's natural (unscrolled) size so
  // page content can offset by exactly that much instead of a hardcoded value.
  useLayoutEffect(() => {
    if (scrolled) return;
    const el = headerRef.current;
    if (!el) return;
    const update = () => {
      document.documentElement.style.setProperty("--header-height", `${el.offsetHeight}px`);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [scrolled]);

  const handleLangChange = (lang: "de" | "en" | "lv") => {
    setLanguage(lang);
    setLangOpen(false);
  };

  const gatewayLinks = [
    { href: "/agentur", label: t("gateway.card.media.title") },
    { href: "/elektro", label: t("gateway.card.elektro.title") },
  ];

  const areaLinks =
    area === "agentur"
      ? [
          { href: "#leistungen", label: t("nav.services") },
          { href: "#ablauf", label: t("nav.process") },
          { href: "#insights", label: t("nav.insights") },
          { href: "#kontakt", label: t("nav.contact") },
        ]
      : area === "elektro"
        ? [
            { href: "#leistungen", label: t("nav.services") },
            { href: "#kontakt", label: t("nav.contact") },
          ]
        : gatewayLinks;

  const contactHref =
    area === "gateway"
      ? `mailto:${siteConfig.email}`
      : area === "agentur"
        ? "/agentur#kontakt"
        : "/elektro#kontakt";

  const accentBar =
    area === "agentur"
      ? "bg-accent-warm"
      : area === "elektro"
        ? "bg-accent-cool"
        : "bg-foreground";

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 glass-panel-dark border-b border-white/10 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className={`w-full transition-all duration-300 ${accentBar} ${scrolled ? "h-0.5" : "h-1"}`} />
      <div
        className={`container mx-auto px-6 md:px-12 flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3 md:py-4"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 md:gap-5 group min-w-0">
          <Image
            src="/logo.svg"
            alt="Dzirksts Studio Logo"
            width={300}
            height={200}
            className={`h-auto shrink-0 drop-shadow-md group-hover:scale-[1.02] transition-all duration-300 ${
              scrolled ? "w-14 md:w-20" : "w-20 md:w-28"
            }`}
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

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-white/80">
          {area !== "gateway" && (
            <Link href="/" className="text-sm font-medium hover:text-white transition-colors">
              {t("nav.back")}
            </Link>
          )}
          {areaLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/60 hover:text-white transition-colors"
          >
            <InstagramIcon size={18} />
          </a>

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

          <Link
            href={contactHref}
            className={`text-sm font-bold px-5 py-2.5 rounded-full transition-transform hover:scale-105 whitespace-nowrap ${
              area === "elektro"
                ? "bg-accent-cool text-surface-darker"
                : area === "agentur"
                  ? "bg-accent-warm text-foreground"
                  : "bg-white text-foreground"
            }`}
          >
            {t("nav.cta")}
          </Link>
        </nav>

        <div className="lg:hidden flex items-center gap-2 text-white/80">
          <Link
            href={contactHref}
            className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/15 border border-white/20"
          >
            {t("nav.cta")}
          </Link>
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
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden border-t border-white/10 bg-surface-darker text-white"
          >
            <div className="flex flex-col gap-1 px-3 py-3">
              {area !== "gateway" && (
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  {t("nav.back")}
                </Link>
              )}
              {areaLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10"
              >
                <InstagramIcon size={16} /> Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
