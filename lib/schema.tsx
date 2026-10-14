import type { CommonDict } from "@/content/dictionaries/en/common";
import type { LinaDict } from "@/content/dictionaries/en/lina";
import type { Article } from "@/content/articles/types";
import { SITE_URL, url, type Locale } from "./i18n";

const ORG_ID = `${SITE_URL}/#organization`;

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Flowramo",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "habib@flowramo.com",
  description:
    "Flowramo designs, engineers and delivers AI systems and software products: AI agents, business automation, custom AI applications, SaaS engineering, AI knowledge systems and integrations.",
  knowsLanguage: ["ar", "en"],
  makesOffer: { "@type": "Offer", itemOffered: { "@id": `${SITE_URL}/#lina` } },
};

const lina = (lang: Locale, description: string) => ({
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#lina`,
  name: "Lina",
  alternateName: "لينا",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "AI receptionist for dental clinics",
  operatingSystem: "WhatsApp",
  description,
  inLanguage: ["ar", "en", "tr"],
  url: url(lang, "/products/lina"),
  publisher: { "@id": ORG_ID },
});

/** Home: the company and the site. */
export function companySchema(lang: Locale, t: CommonDict, faq?: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: url(lang),
        name: "Flowramo",
        description: t.meta.description,
        inLanguage: lang,
        publisher: { "@id": ORG_ID },
      },
      ...(faq?.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url(lang)}#faq`,
              inLanguage: lang,
              mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ]
        : []),
    ],
  };
}

/** A simple page (About, Contact, Solutions, legal): the page plus its breadcrumb. */
export function pageSchema(lang: Locale, t: CommonDict, path: string, name: string, description: string, type = "WebPage") {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      { "@type": type, "@id": `${url(lang, path)}#page`, url: url(lang, path), name, description, inLanguage: lang, isPartOf: { "@id": `${SITE_URL}/#website` } },
      breadcrumbs([
        [t.blog.home, url(lang)],
        [name, url(lang, path)],
      ]),
    ],
  };
}

/** Lina's product page. */
export function linaSchema(lang: Locale, t: LinaDict) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      lina(lang, t.meta.description),
      {
        "@type": "FAQPage",
        "@id": `${url(lang, "/products/lina")}#faq`,
        inLanguage: lang,
        mainEntity: t.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}

export function blogSchema(lang: Locale, t: CommonDict, articles: Article[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Blog",
        "@id": `${url(lang, "/insights")}#blog`,
        url: url(lang, "/insights"),
        name: t.blog.title,
        description: t.blog.sub,
        inLanguage: lang,
        publisher: { "@id": ORG_ID },
        blogPost: articles.map((a) => ({
          "@type": "BlogPosting",
          headline: a[lang].title,
          url: url(lang, `/insights/${a.slug}`),
          datePublished: a.published,
          dateModified: a.updated,
        })),
      },
      breadcrumbs([
        [t.blog.home, url(lang)],
        [t.blog.title, url(lang, "/insights")],
      ]),
    ],
  };
}

export function articleSchema(lang: Locale, t: CommonDict, a: Article) {
  const body = a[lang];
  const pageUrl = url(lang, `/insights/${a.slug}`);
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
        image: [`${SITE_URL}/og/${a.slug}-${lang}.png`, `${SITE_URL}/media/covers/${a.slug}.webp`],
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
        [t.blog.title, url(lang, "/insights")],
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
