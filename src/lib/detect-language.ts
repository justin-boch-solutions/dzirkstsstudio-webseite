export type AppLanguage = "de" | "en" | "lv";

/** Detects UI language from the browser – no third-party geo services. */
export function detectLanguageFromBrowser(): AppLanguage {
  if (typeof navigator === "undefined") return "lv";

  const lang = navigator.language.split("-")[0]?.toLowerCase();
  if (lang === "lv") return "lv";
  if (lang === "de") return "de";
  return "en";
}
