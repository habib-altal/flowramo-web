import type { Metadata } from "next";
import { alternates, url, type Locale } from "./i18n";

/**
 * Metadata for an inner page. Child metadata replaces the layout's openGraph object
 * wholesale, so every page restates its own URL, title and image.
 */
export function pageMetadata(lang: Locale, path: string, title: string, description: string, image = `/og/home-${lang}.png`): Metadata {
  return {
    title,
    description,
    alternates: alternates(lang, path),
    openGraph: {
      type: "website",
      siteName: "Flowramo",
      locale: lang === "ar" ? "ar_SA" : "en_GB",
      url: url(lang, path),
      title: `${title} · Flowramo`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title: `${title} · Flowramo`, description, images: [image] },
  };
}
