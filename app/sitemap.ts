import type { MetadataRoute } from "next";
import { LOCALES, url } from "@/lib/i18n";
import { ARTICLES } from "@/content/articles";

const SITE_UPDATED = "2026-10-04";

function entry(path: string, lastModified: string, priority: number): MetadataRoute.Sitemap {
  const languages = { en: url("en", path), ar: url("ar", path), "x-default": url("en", path) };
  return LOCALES.map((lang) => ({ url: url(lang, path), lastModified, priority, alternates: { languages } }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entry("", SITE_UPDATED, 1),
    ...entry("/blog", ARTICLES.map((a) => a.updated).sort().at(-1) ?? SITE_UPDATED, 0.7),
    ...ARTICLES.flatMap((a) => entry(`/blog/${a.slug}`, a.updated, 0.8)),
  ];
}
