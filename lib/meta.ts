import type { Metadata } from "next";
import { alternates, url, type Locale } from "./i18n";

/** The openGraph fields every page restates: a child's openGraph replaces the layout's object wholesale. */
export const ogBase = (lang: Locale) => ({
  siteName: "Flowramo",
  locale: lang === "ar" ? "ar_SA" : "en_GB",
  alternateLocale: lang === "ar" ? ["en_GB"] : ["ar_SA"],
});

type Options = {
  /** OG/Twitter image, a path under /public. Defaults to the home card. */
  image?: string;
  /** The title already names Flowramo, so the "· Flowramo" template is skipped. */
  absolute?: boolean;
  /** An RSS feed announced with <link rel="alternate" type="application/rss+xml">. */
  feed?: { url: string; title: string };
};

/**
 * Metadata for an inner page. Child metadata replaces the layout's openGraph object
 * wholesale, so every page restates its own URL, title and image.
 */
export function pageMetadata(lang: Locale, path: string, title: string, description: string, { image = `/og/home-${lang}.png`, absolute = false, feed }: Options = {}): Metadata {
  const full = absolute ? title : `${title} · Flowramo`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { ...alternates(lang, path), ...(feed ? { types: { "application/rss+xml": [{ url: feed.url, title: feed.title }] } } : {}) },
    openGraph: {
      type: "website",
      ...ogBase(lang),
      url: url(lang, path),
      title: full,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title: full, description, images: [image] },
  };
}
