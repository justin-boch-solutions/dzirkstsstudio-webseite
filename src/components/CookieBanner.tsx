"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  DEFAULT_COOKIE_PREFERENCES,
  readCookieConsent,
  saveCookieConsent,
  type CookiePreferences,
} from "@/lib/cookie-consent";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [hasDecided, setHasDecided] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(DEFAULT_COOKIE_PREFERENCES);

  useEffect(() => {
    setMounted(true);

    let timer: ReturnType<typeof setTimeout> | null = null;
    const stored = readCookieConsent();

    if (stored) {
      setPreferences(stored);
      setHasDecided(true);
    } else {
      timer = setTimeout(() => setIsVisible(true), 900);
    }

    const openSettings = () => {
      const current = readCookieConsent();
      if (current) setPreferences(current);
      setIsVisible(true);
      setShowDetails(true);
    };

    window.addEventListener("open-cookie-settings", openSettings);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  function applyConsent(next: CookiePreferences) {
    saveCookieConsent(next);
    setPreferences(next);
    setIsVisible(false);
    setShowDetails(false);
    setHasDecided(true);
  }

  function acceptAll() {
    applyConsent({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  }

  function acceptEssential() {
    applyConsent(DEFAULT_COOKIE_PREFERENCES);
  }

  function saveCustom() {
    applyConsent(preferences);
  }

  function togglePreference(key: "functional" | "analytics" | "marketing") {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  if (!mounted) return null;

  if (!isVisible) {
    if (!hasDecided) return null;

    return (
      <button
        type="button"
        onClick={() => {
          setIsVisible(true);
          setShowDetails(true);
        }}
        className="fixed bottom-6 left-6 z-40 rounded-full border border-white/15 bg-black/80 p-3 text-white/70 shadow-lg backdrop-blur-md transition-colors hover:border-white/30 hover:text-white"
        aria-label={t("cookies.settingsAria")}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex max-h-[100dvh] items-end justify-center bg-black/60 p-4 backdrop-blur-sm md:items-center">
      <div className="relative flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111] text-white shadow-2xl">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-accent-warm to-accent-cool" />

        <div className="overflow-y-auto p-6 md:p-8">
          <h2 className="mb-3 text-xl font-black">{t("cookies.title")}</h2>
          <p className="mb-6 text-sm leading-relaxed text-white/65">
            {t("cookies.intro")}{" "}
            <Link
              href="/datenschutz"
              className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white"
            >
              {t("footer.privacy")}
            </Link>
            .
          </p>

          {showDetails ? (
            <div className="mb-8 space-y-4 border-t border-white/10 pt-6">
              <CookieToggle
                title={t("cookies.essential.title")}
                description={t("cookies.essential.desc")}
                enabled
                locked
              />
              <CookieToggle
                title={t("cookies.functional.title")}
                description={t("cookies.functional.desc")}
                enabled={preferences.functional}
                onToggle={() => togglePreference("functional")}
              />
              <CookieToggle
                title={t("cookies.analytics.title")}
                description={t("cookies.analytics.desc")}
                enabled={preferences.analytics}
                onToggle={() => togglePreference("analytics")}
              />
              <CookieToggle
                title={t("cookies.marketing.title")}
                description={t("cookies.marketing.desc")}
                enabled={preferences.marketing}
                onToggle={() => togglePreference("marketing")}
              />
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={acceptAll}
              className="order-1 w-full flex-1 rounded-full bg-white px-4 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02] sm:order-3"
            >
              {t("cookies.acceptAll")}
            </button>

            {showDetails ? (
              <button
                type="button"
                onClick={saveCustom}
                className="order-2 w-full flex-1 rounded-full border border-white/15 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                {t("cookies.saveSelection")}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="order-2 w-full flex-1 rounded-full border border-white/15 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                {t("cookies.customize")}
              </button>
            )}

            {!showDetails ? (
              <button
                type="button"
                onClick={acceptEssential}
                className="order-3 w-full flex-1 rounded-full border border-white/15 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 sm:order-1"
              >
                {t("cookies.essentialOnly")}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieToggle({
  title,
  description,
  enabled,
  locked,
  onToggle,
}: {
  title: string;
  description: string;
  enabled: boolean;
  locked?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
      <div className="pr-2">
        <h3 className="text-sm font-bold text-white">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-white/55">{description}</p>
      </div>
      {locked ? (
        <div
          className="relative inline-flex h-6 w-11 cursor-not-allowed items-center rounded-full bg-white/20 opacity-60"
          aria-hidden="true"
        >
          <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white" />
        </div>
      ) : (
        <button
          type="button"
          onClick={onToggle}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
            enabled ? "bg-accent-warm" : "bg-white/20"
          }`}
          aria-pressed={enabled}
          aria-label={title}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              enabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      )}
    </div>
  );
}
