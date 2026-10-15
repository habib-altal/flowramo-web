import { ARTICLES } from "@/content/articles";
import { getCommon, getHome } from "@/content/dictionaries";
import { SITE_URL, url } from "@/lib/i18n";
import { LINA_DEMO_WHATSAPP } from "@/lib/config";
import { plainText } from "@/lib/markdown";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): a plain map of the site for language models. The full text of
// every article and FAQ is in /llms-full.txt. Built from the dictionaries and ARTICLES, so it stays current.
export function GET() {
  const en = getCommon("en");
  const outcomes = Object.fromEntries(getHome("en").build.items.map((it) => [it.id, it.outcome]));

  const solutions = en.capabilities.map((c) => `- [${c.name}](${url("en", "/solutions")}#${c.id}): ${outcomes[c.id]}`).join("\n");

  const insights = (topic: "studio" | "lina") =>
    ARTICLES.filter((a) => (a.topic ?? "lina") === topic)
      .map((a) => `- [${a.en.title}](${url("en", `/insights/${a.slug}`)}): ${plainText(a.en.answer)} Arabic: [${a.ar.title}](${url("ar", `/insights/${a.slug}`)})`)
      .join("\n");

  const page = (name: string, path: string, about: string) => `- [${name}](${url("en", path)}): ${about} ([Arabic](${url("ar", path)}))`;

  const body = `# Flowramo

> Flowramo is a founder-led AI systems and product engineering studio. It designs, engineers and installs AI agents, business automation, custom AI applications, SaaS products, AI knowledge systems and integrations for businesses whose work runs through conversations, documents and repeatable steps. It works in Arabic and English, installs each system on infrastructure the client chooses and owns, connects it to the client's own accounts, and sells systems as projects rather than subscriptions.

Its flagship system is Lina (لينا), an AI receptionist for dental clinics that runs the clinic's WhatsApp on the official WhatsApp Business Platform. Lina answers patients day and night in Arabic, English and Turkish; answers only from knowledge the clinic approves; books, reschedules and confirms appointments in the clinic calendar; follows up with patients who go quiet; sends aftercare and recall messages; and hands urgent, clinical or sensitive conversations to the clinic team with full context. It does not diagnose. Lina is installed on hosting the clinic owns, so patient data stays with the clinic.

The site is in English (/en) and Arabic (/ar). Full text of every guide and FAQ: ${SITE_URL}/llms-full.txt

## Key facts

- Business model: each system is sold as a project, priced after a call and fixed in a written blueprint before any build begins. There is no subscription to Flowramo; hosting and messaging are billed by those providers to the client's own accounts.
- Ownership: systems are installed on hosting the client chooses and owns, connected to the client's own accounts (WhatsApp, calendar, CRM and other tools). The client keeps the system and the data.
- Languages: Arabic (including Gulf dialect in customer conversations) and English. Lina also speaks Turkish.
- Lina runs in production on WhatsApp, on the official WhatsApp Business Platform. Lina does not diagnose: urgent, clinical or sensitive cases go to the clinic team with the full conversation.
- Founder-led: Habib designs and engineers the systems, and clients talk to him directly.
- Contact: habib@flowramo.com · project requests: ${url("en", "/contact")} · try Lina on WhatsApp: https://wa.me/${LINA_DEMO_WHATSAPP}

## Pages

${page("Home", "", "what Flowramo builds and how it works.")}
${page("Solutions", "/solutions", "the six kinds of systems, what goes into each and where each fits.")}
${page("Lina", "/products/lina", "the AI receptionist for dental clinics, from a patient's first WhatsApp message to their next check-up.")}
${page("About", "/about", "who builds the systems and how Flowramo works.")}
${page("Insights", "/insights", "practical guides on AI systems for business and for dental clinics.")}
${page("Start a project", "/contact", "the project request form.")}

## Solutions

${solutions}

## Insights: AI systems for business

${insights("studio")}

## Insights: Dental clinics

${insights("lina")}

## Optional

${page("Privacy notice", "/privacy", "how Flowramo handles information shared through the site and the Lina demo.")}
${page("Terms of use", "/terms", "the terms for using the site and the Lina demo.")}
- [Insights RSS (English)](${url("en", "/insights/feed.xml")}) · [Arabic](${url("ar", "/insights/feed.xml")})
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
