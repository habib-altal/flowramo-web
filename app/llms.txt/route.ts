import { ARTICLES } from "@/content/articles";
import { url } from "@/lib/i18n";

export const dynamic = "force-static";

// llms.txt (https://llmstxt.org): a plain map of the site for language models.
export function GET() {
  const articles = (lang: "en" | "ar") =>
    ARTICLES.map((a) => `- [${a[lang].title}](${url(lang, `/blog/${a.slug}`)}): ${a[lang].answer}`).join("\n");

  const body = `# Flowramo

> Flowramo (HABIB ALTAL LTD, UK) makes Lina, an AI receptionist for dental clinics that runs the clinic's WhatsApp on the official WhatsApp Business Platform. Lina answers patients in seconds, day and night, in Arabic, English and Turkish; answers only from knowledge the clinic approves; books, reschedules and confirms appointments in the clinic calendar; follows up with patients who go quiet; sends aftercare and recall messages; and hands urgent, clinical or sensitive conversations to the clinic team with full context. It does not diagnose.

Who it is for: owners and managing doctors of private dental clinics, mainly in Saudi Arabia, the UAE, Kuwait, Qatar, Bahrain, Oman, Türkiye and the UK.

## Site

- [Flowramo, English](${url("en")}): how Lina works, from a patient's first WhatsApp message to their next check-up.
- [Flowramo, Arabic](${url("ar")}): the same site in Arabic.
- [The Flowramo Journal](${url("en", "/blog")}): guides for dental clinics on AI receptionists, WhatsApp booking, no-shows and patient reactivation.

## Journal (English)

${articles("en")}

## Journal (Arabic)

${articles("ar")}

## Contact

- Book a private demo from any page on ${url("en")} (the "Book a Demo" button).
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
