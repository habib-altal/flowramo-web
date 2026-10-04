# flowramo-web

Marketing website for **Flowramo** (HABIB ALTAL LTD, UK): a B2B SaaS that gives dental clinics an AI WhatsApp receptionist named **Lina (لينا)**. The audience is clinic owners and doctors. The site's one job is to get a clinic to try Lina or book a demo.

Read `docs/website-plan.md` before starting any work here. It holds the agreed design direction, page structure and open questions.

## Language
- The founder (Habib) works in Arabic (Gulf colloquial + English tech terms). Reply in Arabic.
- The site is bilingual: English at `/en`, Arabic at `/ar` (RTL). Every string lives in `content/dictionaries/en.ts` and `ar.ts` (same shape; `ar.ts` is typed by `en.ts`). Write Arabic natively, never as a word-for-word translation.
- Demo conversations inside the site use Arabic, English and Turkish.
- Never apply `letter-spacing` to Arabic text, because it breaks letter joining (globals.css forces it to 0 under `html[dir="rtl"]`).

## Stack and structure
- Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4 (tokens in `app/globals.css` under `@theme`).
- Motion: GSAP 3 (ScrollTrigger, MotionPath, DrawSVG) through `useGSAP`, Lenis smooth scroll (`components/SmoothScroll.tsx`). Every animation runs inside `gsap.matchMedia()` with a reduced-motion check; markup renders the final state so the page is complete without JS.
- Scroll stories use CSS `position: sticky` stages (`.scrolly` + `.stage`), not GSAP pinning.
- Locale routing: `app/[lang]/` is the root layout (`lang` = `en` | `ar`, `dynamicParams = false`); `proxy.ts` redirects un-prefixed paths by Accept-Language. Client components read copy with `useI18n()` (`components/I18n.tsx`); server components call `getDictionary(lang)`.
- RTL: use logical utilities (`start-*`, `end-*`, `ps-*`, `border-e`, `text-start`, `rtl:` variants). Arabic headings use Alexandria, body IBM Plex Sans Arabic; Arabic display sizes are stepped down in the unlayered RTL block at the end of `globals.css`.
- One file per section in `components/sections/`, composed in `app/[lang]/page.tsx`.
- Visual QA: `npm run dev`, then `node qa/shoot.cjs <name> <w> <h> <sectionId>:<fraction> ...` (Playwright; set `NODE_PATH=$(npm root -g)`). Screenshots go to `qa/` (git-ignored).
- Project skills live in `.claude/skills/`: ui-ux-pro-max, frontend-design, GSAP official skills (design and animation); geo-optimizer (GEO audits; `geo` CLI from pip, audits public URLs only); gsc-* (Search Console reports, need the `search-console` MCP); openseo-* (keyword research, audits, competitors; need the `openseo` MCP).
- `.mcp.json` declares two MCP servers: `search-console` (`uvx mcp-search-console`, needs a Google service-account JSON at the path in env `GSC_CREDENTIALS_PATH` and the domain verified in Search Console) and `openseo` (hosted at app.openseo.so, sign-in required). Never put credentials in the repo or chat.

## Journal (blog) and SEO
- Articles are typed TS files in `content/articles/<slug>.ts` (shape in `types.ts`, EN + AR in one file, same slug in both languages), registered in `content/articles/index.ts`. Pages: `app/[lang]/blog/page.tsx` and `app/[lang]/blog/[slug]/page.tsx`.
- Every article: a 40–60 word direct answer, key takeaways, H2 sections with stable ids, one `{ t: "cta" }` block, FAQ, and sources. Every number needs a cited, verified source; no vendor-blog statistics.
- Structured data in `lib/schema.tsx` (Organization, WebSite, SoftwareApplication, FAQPage, Blog, BlogPosting, BreadcrumbList). `app/sitemap.ts` (hreflang alternates), `app/robots.ts` (AI search crawlers allowed), `app/llms.txt/route.ts`.
- Canonical origin is `SITE_URL` in `lib/i18n.ts` (`https://flowramo.com`, override with `NEXT_PUBLIC_SITE_URL`).
- OG images and `public/logo.png` are rendered by a real browser so Arabic shapes correctly: start the dev server on port 3100, then `NODE_PATH=$(npm root -g) node scripts/og.cjs`. Re-run after adding or retitling an article.

## Backend this site talks to (verified 2026-10-04)
- Supabase project `rfoebtyreltajblsryep` ("FLOWRANO N8N"). Use only the public anon key in the browser.
  - `website_leads` (doctor_name, clinic_name, whatsapp, country, email, source, language, status): the RLS policy `website_leads_public_insert` allows anon INSERT. The demo-request form writes here.
  - `articles`: the RLS policy `public_read_published_articles` allows anon SELECT where `status = 'approved_published'`. The site's Journal currently ships its articles as TS files (`content/articles/`), not from this table.
- n8n at `n8n.flowramo.com` runs the product (WhatsApp, booking, admin bot). The website must not change any live workflow without Habib's explicit approval.
- The `Web Chat Gateway` workflow (`/webhook/webchat`) is known to be unreliable. Do not put it on the site until it is fixed; use a WhatsApp click-to-chat link for the live demo instead.

## Hosting
- Vercel team `habibthiyazen-6000's projects`, project `flowramo-web` (`prj_STfFaJvHziMCPAsDyopca5n46VWR`), production URL https://flowramo-web.vercel.app (behind Vercel Authentication until Habib makes it public).
- The Vercel project is not linked to GitHub yet, so pushes do not auto-deploy, and `create_deployment` with a `gitSource` fails with `git_info_fail`. Inline-file deploys stopped being practical once the Journal landed (~450 KB of source plus OG images). Once Habib links `habib-altal/flowramo-web` under Project → Settings → Git, deploy with `create_deployment` + `gitSource` (or let pushes deploy).
- The domain is `flowramo.com` (not connected yet).

## Content rules
- Never invent testimonials, clinic names presented as customers, reviews or usage numbers. Only real data goes on the site.
- AI-generated imagery (Higgsfield) is for atmosphere only: no fake doctor portraits presented as customers.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
