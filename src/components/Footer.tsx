"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";
import FooterCredit from "@/components/FooterCredit";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="section-dark border-t border-white/10 pt-16 pb-10 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-4 mb-4 group">
              <Image
                src="/logo.svg"
                alt="Dzirksts Studio Logo"
                width={120}
                height={80}
                className="w-24 h-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm font-bold text-white/80 mb-1">{t("brand.slogan")}</p>
            <p className="text-white/50 leading-relaxed max-w-sm text-sm">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white/90">{t("footer.areas")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/agentur"
                  className="text-white/55 hover:text-accent-warm transition-colors"
                >
                  {t("gateway.card.media.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/elektro"
                  className="text-white/55 hover:text-accent-cool transition-colors"
                >
                  {t("gateway.card.elektro.title")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white/90">{t("footer.legal")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  {t("footer.impressum")}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
                  className="text-white/55 hover:text-white transition-colors text-left"
                >
                  {t("footer.cookies")}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <FooterCredit />
      </div>
    </footer>
  );
}
