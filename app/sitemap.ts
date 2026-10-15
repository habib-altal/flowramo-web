import type { MetadataRoute } from "next";
import { LOCALES, SITE_URL, url } from "@/lib/i18n";
import { ARTICLES, coverOf } from "@/content/articles";

/** Each page's last real content change. Update a route's date when its copy changes; articles carry their own. */
const PAGES: { path: string; lastModified: string; priority: number }[] = [
  { path: "", lastModified: "2026-10-15", priority: 1 },
  { path: "/solutions", lastModified: "2026-10-15", priority: 0.9 },
  { path: "/products/lina", lastModified: "2026-10-15", priority: 0.9 },
  { path: "/about", lastModified: "2026-10-15", priority: 0.6 },
  { path: "/contact", lastModified: "2026-10-15", priority: 0.6 },
  { path: "/privacy", lastModified: "2026-10-15", priority: 0.2 },
  { path: "/terms", lastModified: "2026-10-15", priority: 0.2 },
];

/** The Insights index changes whenever an article does. */
const INSIGHTS_UPDATED = ["2026-10-15", ...ARTICLES.map((a) => a.updated)].sort().at(-1)!;

function entry(path: string, lastModified: string, priority: number, images?: string[]): MetadataRoute.Sitemap {
  const languages = { en: url("en", path), ar: url("ar", path), "x-default": url("en", path) };
  return LOCALES.map((lang) => ({ url: url(lang, path), lastModified, priority, alternates: { languages }, ...(images ? { images } : {}) }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.flatMap((p) => entry(p.path, p.lastModified, p.priority)),
    ...entry("/insights", INSIGHTS_UPDATED, 0.7),
    ...ARTICLES.flatMap((a) => entry(`/insights/${a.slug}`, a.updated, 0.8, [`${SITE_URL}${coverOf(a.slug)}`])),
  ];
}
