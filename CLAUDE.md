# flowramo-web

Marketing website for **Flowramo** (HABIB ALTAL LTD, UK): a B2B SaaS that gives dental clinics an AI WhatsApp receptionist named **Lina (لينا)**. The audience is clinic owners and doctors. The site's one job is to get a clinic to try Lina or book a demo.

Read `docs/website-plan.md` before starting any work here. It holds the agreed design direction, page structure and open questions.

## Language
- The founder (Habib) works in Arabic (Gulf colloquial + English tech terms). Reply in Arabic.
- The site is Arabic-first (RTL), with English second; Turkish later.
- Never apply `letter-spacing` to Arabic text, because it breaks letter joining.

## Backend this site talks to (verified 2026-10-04)
- Supabase project `rfoebtyreltajblsryep` ("FLOWRANO N8N"). Use only the public anon key in the browser.
  - `website_leads` (doctor_name, clinic_name, whatsapp, country, email, source, language, status): the RLS policy `website_leads_public_insert` allows anon INSERT. The demo-request form writes here.
  - `articles`: the RLS policy `public_read_published_articles` allows anon SELECT where `status = 'approved_published'`. The blog reads from here.
- n8n at `n8n.flowramo.com` runs the product (WhatsApp, booking, admin bot). The website must not change any live workflow without Habib's explicit approval.
- The `Web Chat Gateway` workflow (`/webhook/webchat`) is known to be unreliable. Do not put it on the site until it is fixed; use a WhatsApp click-to-chat link for the live demo instead.

## Hosting
- Vercel team `habibthiyazen-6000's projects` is connected through the Vercel MCP (no projects yet).
- The domain is `flowramo.com`.

## Content rules
- Never invent testimonials, clinic names presented as customers, reviews or usage numbers. Only real data goes on the site.
- AI-generated imagery (Higgsfield) is for atmosphere only: no fake doctor portraits presented as customers.
