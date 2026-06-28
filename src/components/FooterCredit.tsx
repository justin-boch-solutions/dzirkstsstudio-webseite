"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/config";
import { partnerConfig } from "@/lib/partner";

export default function FooterCredit() {
  const { t } = useLanguage();

  return (
    <div className="border-t border-white/10 pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <p className="text-sm text-white/40">
        &copy; {new Date().getFullYear()} {siteConfig.name}. {t("footer.rights")}
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/40 hover:text-white transition-colors"
        >
          Instagram
        </a>

        <Link
          href={partnerConfig.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 hover:bg-white/10 hover:border-white/20 transition-colors"
        >
          <Image
            src={partnerConfig.logoSrc}
            alt={partnerConfig.name}
            width={140}
            height={46}
            className="h-7 w-auto opacity-80 group-hover:opacity-100 transition-opacity brightness-0 invert"
          />
          <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors hidden sm:inline">
            {t("footer.credit")}
          </span>
        </Link>
      </div>
    </div>
  );
}
