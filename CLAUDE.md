# flowramo-web

Marketing website for **Flowramo** (HABIB ALTAL LTD, UK): a B2B SaaS that gives dental clinics an AI WhatsApp receptionist named **Lina (لينا)**. The audience is clinic owners and doctors. The site's one job is to get a clinic to try Lina or book a demo.

Read `docs/website-plan.md` before starting any work here. It holds the agreed design direction, page structure and open questions.

## Language
- The founder (Habib) works in Arabic (Gulf colloquial + English tech terms). Reply in Arabic.
- The site copy is English (Habib's brief, 2026-10-04). Demo conversations inside the site use Arabic, English and Turkish. An Arabic version of the site comes later.
- Never apply `letter-spacing` to Arabic text, because it breaks letter joining.

## Stack and structure
- Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4 (tokens in `app/globals.css` under `@theme`).
- Motion: GSAP 3 (ScrollTrigger, MotionPath, DrawSVG) through `useGSAP`, Lenis smooth scroll (`components/SmoothScroll.tsx`). Every animation runs inside `gsap.matchMedia()` with a reduced-motion check; markup renders the final state so the page is complete without JS.
- Scroll stories use CSS `position: sticky` stages (`.scrolly` + `.stage`), not GSAP pinning.
- One file per section in `components/sections/`, composed in `app/page.tsx`.
- Visual QA: `npm run dev`, then `node qa/shoot.cjs <name> <w> <h> <sectionId>:<fraction> ...` (Playwright; set `NODE_PATH=$(npm root -g)`). Screenshots go to `qa/` (git-ignored).
- Project skills live in `.claude/skills/` (ui-ux-pro-max, frontend-design, GSAP official skills). Use them for design and animation work.

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

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
