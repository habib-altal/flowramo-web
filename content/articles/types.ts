import type { Locale } from "@/lib/i18n";

/** Inline text supports **bold** and [label](href). */
export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; id: string; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "callout"; title?: string; text: string }
  | { t: "quote"; text: string; cite: string }
  | { t: "table"; head: string[]; rows: string[][]; caption?: string }
  | { t: "cta" };

export type ArticleBody = {
  /** H1 on the page. */
  title: string;
  /** <title> tag, under ~60 characters. */
  seoTitle: string;
  /** Meta description, ~150 characters. */
  description: string;
  /** 40–60 word direct answer shown first (what AI search engines quote). */
  answer: string;
  takeaways: string[];
  blocks: Block[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  keywords: string[];
  minutes: number;
};

export type Article = {
  slug: string;
  published: string;
  updated: string;
  related: string[];
} & Record<Locale, ArticleBody>;
