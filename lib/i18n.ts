export const LOCALES = ["en", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const hasLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);

export const dirOf = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

/** Canonical origin. Override with NEXT_PUBLIC_SITE_URL until flowramo.com points at Vercel. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://flowramo.com").replace(/\/$/, "");

/** Absolute URL for a locale-prefixed path, e.g. url("ar", "/blog"). */
export const url = (locale: Locale, path = "") => `${SITE_URL}/${locale}${path}`;

/** hreflang alternates for a path that exists in every locale. */
export function alternates(locale: Locale, path = "") {
  return {
    canonical: url(locale, path),
    languages: {
      en: url("en", path),
      ar: url("ar", path),
      "x-default": url("en", path),
    },
  };
}

/** "4 October 2026" / "4 أكتوبر 2026" (Gregorian, Western digits in both languages). */
export const formatDate = (locale: Locale, iso: string) =>
  new Intl.DateTimeFormat(locale === "ar" ? "ar-u-ca-gregory-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(iso),
  );
