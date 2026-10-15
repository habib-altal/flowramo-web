import { ARTICLES } from "@/content/articles";
import { getCommon } from "@/content/dictionaries";
import { LOCALES, hasLocale, url } from "@/lib/i18n";
import { plainText } from "@/lib/markdown";
import { dateTime } from "@/lib/schema";

// RSS 2.0 feed of the Insights articles, one per language (/en/insights/feed.xml, /ar/insights/feed.xml),
// announced on /insights through <link rel="alternate" type="application/rss+xml">.

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const xml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
const rfc822 = (day: string) => new Date(dateTime(day)).toUTCString();

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) return new Response("Not found", { status: 404 });
  const t = getCommon(lang);
  const self = url(lang, "/insights/feed.xml");
  const latest = ARTICLES.map((a) => a.updated).sort().at(-1);

  const items = ARTICLES.map((a) => {
    const link = url(lang, `/insights/${a.slug}`);
    return `    <item>
      <title>${xml(a[lang].title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${rfc822(a.published)}</pubDate>
      <category>${xml(t.journal.topics[a.topic ?? "lina"])}</category>
      <description>${xml(plainText(a[lang].answer))}</description>
    </item>`;
  }).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(t.blog.title)}</title>
    <link>${url(lang, "/insights")}</link>
    <description>${xml(t.blog.sub)}</description>
    <language>${lang}</language>
${latest ? `    <lastBuildDate>${rfc822(latest)}</lastBuildDate>\n` : ""}    <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
