export const COOKIE_CONSENT_KEY = "cookie-consent";

export type CookiePreferences = {
  essential: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export function parseCookieConsent(value: string | null): CookiePreferences | null {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as Partial<CookiePreferences>;
    return {
      essential: true,
      functional: !!parsed.functional,
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
    };
  } catch {
    return null;
  }
}

export function readCookieConsent(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  return parseCookieConsent(localStorage.getItem(COOKIE_CONSENT_KEY));
}

export function hasFunctionalConsent(): boolean {
  const consent = readCookieConsent();
  return consent?.functional === true;
}

export function hasAnalyticsConsent(): boolean {
  const consent = readCookieConsent();
  return consent?.analytics === true;
}

export function saveCookieConsent(preferences: CookiePreferences) {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new Event("cookie-consent-updated"));
}
