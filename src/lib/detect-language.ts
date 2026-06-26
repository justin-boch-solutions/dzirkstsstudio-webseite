export type AppLanguage = "de" | "en" | "lv";

const DE_COUNTRIES = new Set(["DE", "AT", "CH", "LI", "LU"]);
const LV_COUNTRIES = new Set(["LV"]);

function fromBrowserLanguage(): AppLanguage {
  const lang = navigator.language.split("-")[0]?.toLowerCase();
  if (lang === "lv") return "lv";
  if (lang === "de") return "de";
  return "en";
}

export async function detectLanguageFromLocation(): Promise<AppLanguage> {
  try {
    const res = await fetch("https://ipapi.co/json/", {
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) throw new Error("geo lookup failed");
    const data = (await res.json()) as { country_code?: string };
    const code = data.country_code?.toUpperCase();
    if (code && LV_COUNTRIES.has(code)) return "lv";
    if (code && DE_COUNTRIES.has(code)) return "de";
    return "en";
  } catch {
    return fromBrowserLanguage();
  }
}
