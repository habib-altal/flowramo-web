# Flowramo website plan

Status: proposed on 2026-10-04, waiting for Habib's approval.
Visual preview of the direction: https://claude.ai/artifact/ShLRcdAfCJctE1drPX1ECH

## Concept: one night at a dental clinic
The whole homepage tells one story. It opens in the dark: 2:14 AM, the clinic is closed and a patient is in pain. Lina answers and books them. As the visitor scrolls, dawn breaks. At 8:00 AM the doctor opens WhatsApp and finds the work already done.

The story is the argument: a clinic never loses a patient, even while everyone is asleep.

Proposed hero line: **العيادة نايمة. ولينا صاحية.**

## Identity
| Token | Name | Use |
|---|---|---|
| `#0A1315` | ليل العيادة (clinic night) | Hero and night sections |
| `#F0F4F2` | مينا (tooth enamel) | Morning sections, main light background |
| `#F2B47E` | ضوء الفجر (dawn light) | Accent and primary buttons |
| `#2FBF8F` | لينا متصلة (Lina online) | Online status, WhatsApp ticks |

Type:
- Display: Amiri (classical naskh), for large headings only.
- Body: IBM Plex Sans Arabic.
- Times and numbers: IBM Plex Mono.

The single bold moment is the night-to-dawn gradient transition. Everything else stays quiet.

## Homepage order
1. **Night hero:** headline, Higgsfield video of an empty clinic at night, an example patient chat at 02:14.
2. **What happened overnight:** counters that run as the visitor scrolls (messages answered, appointments booked, emergency escalated).
3. **Lina with patients:** booking and rescheduling, reading tooth photos, voice notes, Arabic, Turkish and English.
4. **The doctor runs the clinic from WhatsApp:** close days, offers, send photos to patients, today's appointments, reports.
5. **After the appointment:** reminders, Google review requests, recall of patients absent for 90 days.
6. **Try it yourself:** button that opens a WhatsApp chat with the demo Lina.
7. **Plans and pricing.**
8. **Book a demo:** short form that writes to Supabase `website_leads`.

Other pages: `/pricing`, `/blog` (published `articles` from Supabase), `/demo`, `/privacy` and `/terms` (Meta requires these for WhatsApp Business).

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS.
- Motion: Framer Motion or GSAP for the scroll story, with Lenis for smooth scrolling. Respect `prefers-reduced-motion`.
- i18n: `ar` (default, RTL) and `en`.
- Fonts self-hosted through `@fontsource` packages.
- Deploy: Vercel, then point `flowramo.com` at it.

## Higgsfield assets
- Hero video: empty dental clinic at night, reception lights off, a phone on the counter lighting up with a message. 6–8 s seamless loop.
- Dawn scene: the same clinic with sunlight coming through the window.
- Textures: close-ups of clinic surfaces and instruments for section backgrounds.
- No generated doctor faces presented as customers, and no invented reviews.

Higgsfield API access: key from console.higgsfield.ai, pay-as-you-go balance, requests to `api.higgsfield.ai`. In the cloud environment, store it as the environment variable `HIGGSFIELD_API_KEY` and add `api.higgsfield.ai` (plus whichever host serves the generated files) to the allowed domains.

## Working loop
1. Build in this repo and commit every step.
2. Deploy each round to Vercel and send Habib the preview link.
3. Before sending, screenshot the site at phone and desktop widths and fix what's broken.
4. Iterate on Habib's feedback, then connect `flowramo.com`.

## Open questions for Habib
1. Higgsfield API key and balance, or Habib generates the assets from prompts we write.
2. WhatsApp number for the demo Lina.
3. Plans and prices, or "contact us" for now.
4. Logo file, if one exists.
5. Approval of this direction, or what to change.
