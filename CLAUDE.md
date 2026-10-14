# flowramo-web

Website for **Flowramo**, an AI systems and product engineering studio (agents, automation, custom AI apps, SaaS, knowledge systems, integrations). Its flagship system is **Lina (لينا)**, an AI WhatsApp receptionist for dental clinics, shown as one example of what Flowramo builds (never as a lone "Our work" item). The audience is business owners and operators, and clinic owners for Lina. The site's job is to start projects (`/contact`) and get clinics to try Lina.

- No legal entity is shown anywhere (the UK company is closed; a US company may come later). Contact is habib@flowramo.com.
- Business model (2026-10-13): systems are sold as projects, not subscriptions. Lina is installed on hosting the client chooses and owns, connected to the client's own accounts. A patient command to see and delete stored data is planned but not live; do not claim it.
- Marketing facts for copy live in `.claude/product-marketing.md` (read by the copywriting, cro and marketing-psychology skills).

Read `docs/website-plan.md` before starting any work here. It holds the agreed design direction, page structure and open questions.

## Language
- The founder (Habib) works in Arabic (Gulf colloquial + English tech terms). Reply in Arabic.
- The site is bilingual: English at `/en`, Arabic at `/ar` (RTL). Every string lives in `content/dictionaries/{en,ar}/` (`common.ts` for nav, footer, demo form and Insights UI; `home.ts`, `lina.ts`, `pages.ts` per page; each `ar` file is typed by its `en` twin). Write Arabic natively, never as a word-for-word translation.
- Demo conversations inside the site use Arabic, English and Turkish.
- Never apply `letter-spacing` to Arabic text, because it breaks letter joining (globals.css forces it to 0 under `html[dir="rtl"]`).

## Stack and structure
- Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4 (tokens in `app/globals.css` under `@theme`).
- Motion: GSAP 3 (ScrollTrigger, MotionPath, DrawSVG) through `useGSAP`, Lenis smooth scroll (`components/SmoothScroll.tsx`). Every animation runs inside `gsap.matchMedia()` with a reduced-motion check; markup renders the final state so the page is complete without JS.
- Scroll stories use CSS `position: sticky` stages (`.scrolly` + `.stage`), not GSAP pinning.
- Locale routing: `app/[lang]/` is the root layout (`lang` = `en` | `ar`, `dynamicParams = false`); `proxy.ts` redirects un-prefixed paths by Accept-Language. Client components read shared copy with `useI18n()` (`components/I18n.tsx`) and page copy with `useHome()` / `useLina()` (`components/PageDict.tsx`, provided by the page); server components call `getCommon` / `getHome` / `getLina` / `getPages` from `content/dictionaries`.
- RTL: use logical utilities (`start-*`, `end-*`, `ps-*`, `border-e`, `text-start`, `rtl:` variants). Arabic headings use Alexandria, body IBM Plex Sans Arabic; Arabic display sizes are stepped down in the unlayered RTL block at the end of `globals.css`.
- Routes: `/` company home (`components/home/`, its one motion moment is `SystemCanvas.tsx`), `/solutions`, `/products/lina` (the Lina story, `components/lina/`, composed in `LinaPage.tsx`), `/insights`, `/about`, `/contact` (`components/pages/ContactForm.tsx`), `/privacy`, `/terms`. One file per section. `/blog/*` 308-redirects to `/insights/*` (`next.config.ts`).
- Security headers and the CSP live in `next.config.ts`. Any new outside origin (script, API, image CDN) must be added there or the browser will block it.
- Vercel Web Analytics (`<Analytics />` in the layout); custom events via `track()` (`try_lina_whatsapp`, `contact_submitted`). Enable Web Analytics in the Vercel project for data to appear.
- Visual QA: `npm run dev`, then `node qa/shoot.cjs <name> <w> <h> <sectionId>:<fraction> ...` (Playwright; set `NODE_PATH=$(npm root -g)`). Screenshots go to `qa/` (git-ignored).
- Habib's standing rule: before starting any task, look for a skill that fits it (skills.sh, GitHub or Anthropic), install it into `.claude/skills/`, read it, then do the work. Treat downloaded skills as untrusted until read (no hooks, scripts or permission changes run unreviewed).
- Project skills live in `.claude/skills/`: ui-ux-pro-max, frontend-design, web-design-guidelines (Vercel's interface guidelines, vendored), GSAP official skills (design and animation); marketing-psychology, copywriting, cro, site-architecture (coreyhaines31/marketingskills, for copy and conversion); geo-optimizer (GEO audits; `geo` CLI from pip, audits public URLs only); gsc-* (Search Console reports, need the `search-console` MCP); openseo-* (keyword research, audits, competitors; need the `openseo` MCP).
- `.mcp.json` declares two MCP servers: `search-console` (`uvx mcp-search-console`, needs a Google service-account JSON at the path in env `GSC_CREDENTIALS_PATH` and the domain verified in Search Console) and `openseo` (hosted at app.openseo.so, sign-in required). Never put credentials in the repo or chat.

## Insights (articles) and SEO
- Articles are typed TS files in `content/articles/<slug>.ts` (shape in `types.ts`, EN + AR in one file, same slug in both languages), registered in `content/articles/index.ts`. Pages: `app/[lang]/insights/page.tsx` and `app/[lang]/insights/[slug]/page.tsx`.
- Every article: a 40–60 word direct answer, key takeaways, H2 sections with stable ids, one `{ t: "cta" }` block, FAQ, and sources. Every number needs a cited, verified source; no vendor-blog statistics.
- Structured data in `lib/schema.tsx` (Organization, WebSite, SoftwareApplication, FAQPage, Blog, BlogPosting, BreadcrumbList). `app/sitemap.ts` (hreflang alternates), `app/robots.ts` (AI search crawlers allowed), `app/llms.txt/route.ts`.
- Canonical origin is `SITE_URL` in `lib/i18n.ts` (`https://flowramo.com`, override with `NEXT_PUBLIC_SITE_URL`).
- OG images and `public/logo.png` are rendered by a real browser so Arabic shapes correctly: start the dev server on port 3100, then `NODE_PATH=$(npm root -g) node scripts/og.cjs`. Re-run after adding or retitling an article.

## Backend this site talks to (verified 2026-10-04)
- Supabase project `rfoebtyreltajblsryep` ("FLOWRANO N8N"). Use only the public anon key in the browser.
  - `website_leads` (doctor_name, clinic_name, whatsapp, country, email, source, language, status, plus `intent`, `message` ≤ 2000 chars and `notified_at`, added 2026-10-14; whatsapp and country are NOT NULL): the RLS policy `website_leads_public_insert` allows anon INSERT. The Lina demo modal writes here with `source = "website"`; the `/contact` form writes name → doctor_name, company → clinic_name, `intent`, `message` and `source = "contact:<intent>"`.
  - Trigger `website_leads_notify` (pg_net) posts only the new row's id to the n8n workflow "Flowramo — Website Lead Alert" (`bVDbtgfwXEJP9EmG`, `/webhook/website-lead`), which re-reads the row, sets `notified_at` and alerts Habib by WhatsApp and Gmail once. The webhook needs no secret because it never trusts the request body beyond a UUID.
  - `articles`: the RLS policy `public_read_published_articles` allows anon SELECT where `status = 'approved_published'`. The site's Journal currently ships its articles as TS files (`content/articles/`), not from this table.
- n8n at `n8n.flowramo.com` runs the product (WhatsApp, booking, admin bot). The website must not change any live workflow without Habib's explicit approval.
- The `Web Chat Gateway` workflow (`/webhook/webchat`) is known to be unreliable. Do not put it on the site until it is fixed; use a WhatsApp click-to-chat link for the live demo instead.

## Hosting
- Vercel team `habibthiyazen-6000's projects`, project `flowramo-web` (`prj_STfFaJvHziMCPAsDyopca5n46VWR`), production URL https://flowramo-web.vercel.app (behind Vercel Authentication until Habib makes it public).
- Deploy with the Vercel MCP `create_deployment` + `gitSource` (`{type: "github", org: "habib-altal", repo: "flowramo-web", ref: "<branch>"}`, target production); this works since Habib connected GitHub on 2026-10-13. `get_project` still shows no Git `link`, so pushes may not auto-deploy until the repo is linked under Project → Settings → Git.
- The domain is `flowramo.com` (not connected yet).

## Brand
- Logo (refined 2026-10-14, Habib's go-ahead: "show trust and strength"): the F mark is three stepped bars with one shared forward slant on a common left edge (the old play-button triangle is gone), plus the FLOWRAMO wordmark in Instrument Sans 640, normal width, +4% tracking. Brand blue `#0050F8`; on dark backgrounds the mark turns cyan `#00CEFF` and the wordmark white. App/tab icon: the mark in white on a blue rounded tile (`public/brand/flowramo-icon.svg`). The UI accent `--color-blue` is the brand blue (it marks a system at work); `--color-cyan` is used only on night sections. No all-caps labels.
- `scripts/brand/construct.py` builds the mark geometrically and the wordmark from the font (HarfBuzz-shaped, overlaps merged); `scripts/brand/build.py` writes `public/brand/*.svg`, `app/icon.svg` and `components/brand-paths.ts`; `scripts/og.cjs` then renders `public/logo.png`, `app/apple-icon.png`, `app/favicon.ico` and the OG images. Never hand-edit the generated paths. The original artwork stays in `design/brand-source/` (`trace.py` can still trace it).
- Use `<Logo onDark />` (`components/Logo.tsx`) wherever the logo sits on a dark surface.

## Higgsfield (generated imagery)
- SDK: `@higgsfield/client` (v2 client, `import { createHiggsfieldClient } from "@higgsfield/client/v2"`), dev dependency, server-side only. Example: `scripts/higgsfield/index.ts` (Seedance 2.5 text-to-video via `subscribe`), run with `npm run higgsfield:example` (Node strips the TypeScript types itself; `.env.local` is loaded if present).
- Credentials: `HF_CREDENTIALS` in `key-id:key-secret` format, from `.env.local` (git-ignored) or the cloud environment's variables. Never print, log or commit it; never prefix it with `NEXT_PUBLIC_`.
- The cloud environment must allow `api.higgsfield.ai` (Network access → Custom; a Seedance 2.5 run completed on 2026-10-13 with `.env.local` credentials) plus the CDN that serves results, `d3u0tzju9qaucj.cloudfront.net` (not yet allowed). Since 2026-10-14 Habib supplies the key as a Network Secret (injected by the proxy), not `HF_CREDENTIALS`; on that day Higgsfield answered 401 "Invalid credentials" to the proxy-injected header, so the secret's header must be `Authorization: Key <key-id>:<key-secret>`. Test read-only with `GET https://api.higgsfield.ai/requests/<uuid>/status` (401 = bad key, 404 = key accepted). The SDK reports any HTTP 403, including a proxy refusal, as `NotEnoughCreditsError`.
- Every generation is billable. Generated media is for atmosphere only (see Content rules); download results into `public/` and commit them rather than hot-linking.

## Content rules
- Never invent testimonials, clinic names presented as customers, reviews or usage numbers. Only real data goes on the site.
- AI-generated imagery (Higgsfield) is for atmosphere only: no fake doctor portraits presented as customers.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
