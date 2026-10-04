import type { Dictionary } from "@/content/dictionaries/en";
import type { Article } from "@/content/articles/types";
import { SITE_URL, url, type Locale } from "./i18n";

const ORG_ID = `${SITE_URL}/#organization`;

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Flowramo",
  legalName: "HABIB ALTAL LTD",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "Flowramo builds Lina, an AI receptionist that answers dental patients on WhatsApp, books appointments and follows up.",
  areaServed: ["SA", "AE", "KW", "QA", "BH", "OM", "TR", "GB"],
  knowsLanguage: ["ar", "en", "tr"],
};

export function homeSchema(lang: Locale, t: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: url(lang),
        name: "Flowramo",
        inLanguage: lang,
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "SoftwareApplication",
        name: "Lina by Flowramo",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "AI receptionist for dental clinics",
        operatingSystem: "WhatsApp",
        description: t.meta.description,
        inLanguage: ["ar", "en", "tr"],
        url: url(lang),
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "FAQPage",
        "@id": `${url(lang)}#faq`,
        inLanguage: lang,
        mainEntity: t.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

export function blogSchema(lang: Locale, t: Dictionary, articles: Article[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Blog",
        "@id": `${url(lang, "/blog")}#blog`,
        url: url(lang, "/blog"),
        name: t.blog.title,
        description: t.blog.sub,
        inLanguage: lang,
        publisher: { "@id": ORG_ID },
        blogPost: articles.map((a) => ({
          "@type": "BlogPosting",
          headline: a[lang].title,
          url: url(lang, `/blog/${a.slug}`),
          datePublished: a.published,
          dateModified: a.updated,
        })),
      },
      breadcrumbs([
        [t.blog.home, url(lang)],
        [t.blog.title, url(lang, "/blog")],
      ]),
    ],
  };
}

export function articleSchema(lang: Locale, t: Dictionary, a: Article) {
  const body = a[lang];
  const pageUrl = url(lang, `/blog/${a.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        mainEntityOfPage: pageUrl,
        url: pageUrl,
        headline: body.title,
        description: body.description,
        abstract: body.answer,
        inLanguage: lang,
        datePublished: a.published,
        dateModified: a.updated,
        keywords: body.keywords.join(", "),
        image: `${SITE_URL}/og/${a.slug}-${lang}.png`,
        author: { "@type": "Organization", name: "Flowramo", url: SITE_URL },
        publisher: { "@id": ORG_ID },
        citation: body.sources.map((s) => s.url),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: body.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
        })),
      },
      breadcrumbs([
        [t.blog.home, url(lang)],
        [t.blog.title, url(lang, "/blog")],
        [body.title, pageUrl],
      ]),
    ],
  };
}

function breadcrumbs(items: [string, string][]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
