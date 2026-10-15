import { ARTICLES } from "@/content/articles";
import type { Article } from "@/content/articles/types";
import { getCommon, getHome, getLina } from "@/content/dictionaries";
import { LOCALES, SITE_URL, url, type Locale } from "@/lib/i18n";
import { absoluteLinks, blocksToMarkdown, plainText } from "@/lib/markdown";

export const dynamic = "force-static";

// llms-full.txt: the full text of every Insights article (English, then Arabic) and the home and Lina FAQs,
// as Markdown with absolute links, so a language model can read the site without crawling it.

function article(a: Article, lang: Locale) {
  const b = getCommon(lang).blog;
  const body = a[lang];
  return [
    `# ${body.title}`,
    `URL: ${url(lang, `/insights/${a.slug}`)}\n${b.updated}: ${a.updated}`,
    `> ${absoluteLinks(body.answer)}`,
    `## ${b.takeaways}\n\n${body.takeaways.map((k) => `- ${absoluteLinks(k)}`).join("\n")}`,
    blocksToMarkdown(body.blocks),
    `## ${b.faq}\n\n${body.faq.map((f) => `### ${f.q}\n\n${absoluteLinks(f.a)}`).join("\n\n")}`,
    `## ${b.sources}\n\n${body.sources.map((s) => `- [${s.label}](${s.url})`).join("\n")}`,
  ].join("\n\n");
}

const faq = (title: string, pageUrl: string, items: { q: string; a: string }[]) =>
  [`# ${title}`, `URL: ${pageUrl}`, ...items.map((f) => `## ${f.q}\n\n${plainText(f.a)}`)].join("\n\n");

export function GET() {
  const parts = [
    `# Flowramo: full text\n\n> Every Insights guide on ${SITE_URL}, in English and then Arabic, followed by the questions answered on the home page and the Lina page. The site map is at ${SITE_URL}/llms.txt.`,
    ...LOCALES.flatMap((lang) => ARTICLES.map((a) => article(a, lang))),
    ...LOCALES.flatMap((lang) => [
      faq(`Flowramo: ${getHome(lang).faq.h2}`, url(lang), getHome(lang).faq.items),
      faq(`Lina: ${getLina(lang).faq.h2}`, url(lang, "/products/lina"), getLina(lang).faq.items),
    ]),
  ];
  return new Response(`${parts.join("\n\n---\n\n")}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
