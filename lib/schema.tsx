import type { CommonDict } from "@/content/dictionaries/en/common";
import type { LinaDict } from "@/content/dictionaries/en/lina";
import type { Article } from "@/content/articles/types";
import { SITE_URL, url, type Locale } from "./i18n";
import { plainText } from "./markdown";

/*
  One entity graph across the site. Every page emits the same Organization and WebSite nodes,
  and every @id a page points to (isPartOf, makesOffer, about) resolves on that page.
  Never add prices, ratings or reviews: none exist yet.
*/

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LINA_ID = `${SITE_URL}/#lina`;
const LOGO_ID = `${SITE_URL}/#logo`;
const FOUNDER_ID = `${SITE_URL}/#habib`;
const serviceId = (id: string) => `${SITE_URL}/#service-${id}`;
const blogId = (lang: Locale) => `${url(lang, "/insights")}#blog`;

/** Article dates are calendar days; publish them as 09:00 Gulf time so every reader gets the same day. */
export const dateTime = (day: string) => `${day}T09:00:00+03:00`;

const DESCRIPTION =
  "Flowramo designs, engineers and delivers AI systems and software products: AI agents, business automation, custom AI applications, SaaS engineering, AI knowledge systems and integrations.";

const KNOWS_ABOUT = [
  "AI agents",
  "Business process automation",
  "Custom AI applications",
  "SaaS product engineering",
  "Retrieval-augmented generation",
  "AI knowledge systems",
  "WhatsApp Business Platform",
  "Arabic and Gulf-dialect conversational AI",
  "AI receptionists for dental clinics",
];

/** Each capability in the vocabulary buyers and search engines use (keyed by the Solutions anchor). */
const SERVICE_TYPES: Record<string, string> = {
  "ai-agents": "AI agent development",
  automation: "Business process automation",
  "custom-ai": "Custom AI application development",
  saas: "SaaS product engineering",
  knowledge: "AI knowledge systems (retrieval-augmented generation)",
  integrations: "Systems and API integration",
};

function organization(lang: Locale, t: CommonDict) {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Flowramo",
    url: SITE_URL,
    // public/logo.png, rendered by scripts/og.cjs at 512×512.
    logo: { "@type": "ImageObject", "@id": LOGO_ID, url: `${SITE_URL}/logo.png`, contentUrl: `${SITE_URL}/logo.png`, width: 512, height: 512, caption: "Flowramo" },
    image: { "@id": LOGO_ID },
    email: "habib@flowramo.com",
    description: DESCRIPTION,
    founder: { "@type": "Person", "@id": FOUNDER_ID, name: "Habib", jobTitle: "Founder", url: url(lang, "/about"), worksFor: { "@id": ORG_ID } },
    knowsAbout: KNOWS_ABOUT,
    knowsLanguage: ["ar", "en"],
    contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "habib@flowramo.com", url: url(lang, "/contact"), availableLanguage: ["Arabic", "English"] },
    // The six services and Lina, each with a minimal node so the reference resolves on every page
    // (Lina stays untyped here: a typed SoftwareApplication without a price would be reported as an invalid rich result on every page).
    makesOffer: [
      ...t.capabilities.map((c) => ({ "@type": "Offer", itemOffered: { "@type": "Service", "@id": serviceId(c.id), name: c.name } })),
      { "@type": "Offer", itemOffered: { "@id": LINA_ID, name: "Lina", url: url(lang, "/products/lina") } },
    ],
  };
}

/** The same on every page, whatever the language. */
const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Flowramo",
  description: DESCRIPTION,
  inLanguage: ["en", "ar"],
  publisher: { "@id": ORG_ID },
};

const graph = (lang: Locale, t: CommonDict, nodes: object[]) => ({
  "@context": "https://schema.org",
  "@graph": [organization(lang, t), website, ...nodes],
});

const faqPage = (id: string, pageUrl: string, lang: Locale, items: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  "@id": id,
  url: pageUrl,
  inLanguage: lang,
  isPartOf: { "@id": WEBSITE_ID },
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plainText(f.a) } })),
});

/** Home: the company and the site. */
export function companySchema(lang: Locale, t: CommonDict, faq?: { q: string; a: string }[]) {
  return graph(lang, t, faq?.length ? [faqPage(`${url(lang)}#faq`, url(lang), lang, faq)] : []);
}

/** A simple page (About, Contact, legal): the page plus its breadcrumb. */
export function pageSchema(lang: Locale, t: CommonDict, path: string, name: string, description: string, type = "WebPage") {
  const pageUrl = url(lang, path);
  return graph(lang, t, [
    { "@type": type, "@id": `${pageUrl}#page`, url: pageUrl, name, description, inLanguage: lang, isPartOf: { "@id": WEBSITE_ID }, breadcrumb: { "@id": `${pageUrl}#breadcrumb` } },
    breadcrumbs(`${pageUrl}#breadcrumb`, [
      [t.blog.home, url(lang)],
      [name, pageUrl],
    ]),
  ]);
}

/** Solutions: the page lists the six services, one Service node each. */
export function solutionsSchema(lang: Locale, t: CommonDict, name: string, description: string, outcomes: Record<string, string>) {
  const pageUrl = url(lang, "/solutions");
  const services = t.capabilities.map((c) => ({
    "@type": "Service",
    "@id": serviceId(c.id),
    name: c.name,
    serviceType: SERVICE_TYPES[c.id],
    description: outcomes[c.id],
    provider: { "@id": ORG_ID },
    url: `${pageUrl}#${c.id}`,
    availableLanguage: ["ar", "en"],
  }));
  return graph(lang, t, [
    {
      "@type": "CollectionPage",
      "@id": `${pageUrl}#page`,
      url: pageUrl,
      name,
      description,
      inLanguage: lang,
      isPartOf: { "@id": WEBSITE_ID },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      mainEntity: {
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: s.url, item: { "@id": s["@id"] } })),
      },
    },
    ...services,
    breadcrumbs(`${pageUrl}#breadcrumb`, [
      [t.blog.home, url(lang)],
      [name, pageUrl],
    ]),
  ]);
}

/** Lina's product page: the page, the product, its FAQ and the breadcrumb. */
export function linaSchema(lang: Locale, t: LinaDict, common: CommonDict) {
  const pageUrl = url(lang, "/products/lina");
  const image = `${SITE_URL}/og/lina-${lang}.png`;
  return graph(lang, common, [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#page`,
      url: pageUrl,
      name: t.meta.title,
      description: t.meta.description,
      inLanguage: lang,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": LINA_ID },
      mainEntity: { "@id": LINA_ID },
      primaryImageOfPage: { "@type": "ImageObject", url: image, width: 1200, height: 630 },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": LINA_ID,
      name: "Lina",
      alternateName: "لينا",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "AI receptionist for dental clinics",
      operatingSystem: "WhatsApp, Web",
      description: t.meta.description,
      inLanguage: ["ar", "en", "tr"],
      url: pageUrl,
      image,
      featureList: t.schema.features,
      audience: { "@type": "BusinessAudience", audienceType: t.schema.audience },
      publisher: { "@id": ORG_ID },
      provider: { "@id": ORG_ID },
      creator: { "@id": ORG_ID },
    },
    faqPage(`${pageUrl}#faq`, pageUrl, lang, t.faq.items),
    breadcrumbs(`${pageUrl}#breadcrumb`, [
      [common.blog.home, url(lang)],
      [common.nav.lina, pageUrl],
    ]),
  ]);
}

const topicOf = (a: Article) => a.topic ?? "lina";

const blogNode = (lang: Locale, t: CommonDict) => ({
  "@type": "Blog",
  "@id": blogId(lang),
  url: url(lang, "/insights"),
  name: t.blog.title,
  description: t.blog.sub,
  inLanguage: lang,
  isPartOf: { "@id": WEBSITE_ID },
  publisher: { "@id": ORG_ID },
});

export function blogSchema(lang: Locale, t: CommonDict, articles: Article[]) {
  return graph(lang, t, [
    {
      ...blogNode(lang, t),
      blogPost: articles.map((a) => ({
        "@type": "BlogPosting",
        "@id": `${url(lang, `/insights/${a.slug}`)}#article`,
        headline: a[lang].title,
        url: url(lang, `/insights/${a.slug}`),
        datePublished: dateTime(a.published),
        dateModified: dateTime(a.updated),
      })),
    },
    breadcrumbs(`${url(lang, "/insights")}#breadcrumb`, [
      [t.blog.home, url(lang)],
      [t.blog.title, url(lang, "/insights")],
    ]),
  ]);
}

export function articleSchema(lang: Locale, t: CommonDict, a: Article) {
  const body = a[lang];
  const pageUrl = url(lang, `/insights/${a.slug}`);
  return graph(lang, t, [
    blogNode(lang, t),
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      mainEntityOfPage: pageUrl,
      url: pageUrl,
      headline: body.title,
      description: body.description,
      abstract: plainText(body.answer),
      inLanguage: lang,
      isPartOf: { "@id": blogId(lang) },
      articleSection: t.journal.topics[topicOf(a)],
      ...(topicOf(a) === "lina" ? { about: { "@id": LINA_ID } } : {}),
      datePublished: dateTime(a.published),
      dateModified: dateTime(a.updated),
      keywords: body.keywords.join(", "),
      image: [`${SITE_URL}/og/${a.slug}-${lang}.png`, `${SITE_URL}/media/covers/${a.slug}.webp`],
      // A named byline waits for Habib's approval; until then the studio is the author.
      author: { "@type": "Organization", "@id": ORG_ID, name: "Flowramo", url: SITE_URL },
      publisher: { "@id": ORG_ID },
      citation: body.sources.map((s) => s.url),
    },
    faqPage(`${pageUrl}#faq`, pageUrl, lang, body.faq),
    breadcrumbs(`${pageUrl}#breadcrumb`, [
      [t.blog.home, url(lang)],
      [t.blog.title, url(lang, "/insights")],
      [body.title, pageUrl],
    ]),
  ]);
}

function breadcrumbs(id: string, items: [string, string][]) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: items.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
