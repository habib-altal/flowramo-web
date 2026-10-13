import { ARTICLES } from "@/content/articles";
import { url } from "@/lib/i18n";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): a plain map of the site for language models.
export function GET() {
  const articles = (lang: "en" | "ar") =>
    ARTICLES.map((a) => `- [${a[lang].title}](${url(lang, `/insights/${a.slug}`)}): ${a[lang].answer}`).join("\n");

  const body = `# Flowramo

> Flowramo is an AI systems and product engineering studio. It designs, engineers and installs AI agents, business automation, custom AI applications, SaaS products, AI knowledge systems and integrations for businesses whose work runs through conversations, documents and repeatable steps. It works in Arabic and English, installs each system on infrastructure the client chooses and owns, connects it to the client's own accounts, and sells systems as projects rather than subscriptions.

Its flagship system is Lina (لينا), an AI receptionist for dental clinics that runs the clinic's WhatsApp on the official WhatsApp Business Platform. Lina answers patients day and night in Arabic, English and Turkish; answers only from knowledge the clinic approves; books, reschedules and confirms appointments in the clinic calendar; follows up with patients who go quiet; sends aftercare and recall messages; and hands urgent, clinical or sensitive conversations to the clinic team with full context. It does not diagnose. Lina is installed on hosting the clinic owns, so patient data stays with the clinic.

## Site

- [Home](${url("en")}): what Flowramo builds and how ([Arabic](${url("ar")})).
- [Solutions](${url("en", "/solutions")}): the six kinds of systems, what goes into each and where each fits.
- [Lina](${url("en", "/products/lina")}): the AI receptionist for dental clinics, from a patient's first WhatsApp message to their next check-up.
- [About](${url("en", "/about")}): how Flowramo works.
- [Insights](${url("en", "/insights")}): guides on AI receptionists, WhatsApp booking, no-shows and patient reactivation for dental clinics.
- [Start a project](${url("en", "/contact")}): the project request form.

## Insights (English)

${articles("en")}

## Insights (Arabic)

${articles("ar")}

## Contact

- Email: habib@flowramo.com
- Project requests: ${url("en", "/contact")}
- Try Lina on WhatsApp: https://wa.me/905510380320
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
