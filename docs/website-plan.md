# Flowramo website

Status: first full build on 2026-10-04, following Habib's brief (calm like CoreShift, with Flowramo's own story and signature moments).

## Direction
- Warm white background, black type, very light borders, large soft cards, big tight typography.
- **Motion Blue (`#2b5cff`) belongs to Lina.** Whenever Lina does something, blue appears.
- 80% calm, 20% wow. Signature moments: the hero message becoming a booking, the Lina convergence, the dashboard assembling, and the night section.
- One patient's story runs through the page instead of separate feature blocks.

## Sections (in `components/sections/`)
| Section | File | What happens |
|---|---|---|
| Hero | `Hero.tsx` | "Your clinic keeps moving. Even when you don't." A patient message travels along a blue thread through Lina's status line and becomes "Consultation booked · Tuesday 14:30" without scrolling. |
| One message, a whole journey | `Journey.tsx` + `MessageBridge.tsx` | The hero message floats down and becomes the first line of a conversation that follows the same patient from first question to a check-up six months later. |
| Lina moment | `LinaMoment.tsx` | Dark. "Lina doesn't answer messages. She runs the conversation." Seven actions appear, then drift into one blue dot: LINA. |
| Watch Lina think | `WatchLina.tsx` | Product UI: an Arabic conversation on one side, what Lina understands on the other, then a live booking with calendar slots. |
| From first hello to loyal patient | `Lifecycle.tsx` | Interactive timeline: Discover, Ask, Trust, Book, Visit, Recover, Return. |
| Money recovery | `Recovery.tsx` | Patients go quiet; Lina's line reaches Sara; she replies and books; more patients come back. |
| Product reveal | `ProductReveal.tsx` + `DashboardCards.tsx` | Cards arrive one by one, then assemble into the Flowramo dashboard. |
| While you were away | `WhileAway.tsx` | Day turns to night, Lina books at 01:42 and reschedules at 03:18, sunrise brings the overnight summary. Slot left for a Higgsfield night shot. |
| Languages | `Multilingual.tsx` | The same conversation in Arabic, English and Turkish, with the patient's context unchanged. |
| Integrations | `Integrations.tsx` | Events travel between WhatsApp, Lina, clinic knowledge, patient data, calendar and analytics. |
| Human + AI | `HumanAI.tsx` | "Lina knows when not to be Lina." Urgent case escalated to the doctor. |
| Social proof | `Testimonials.tsx` | Hidden until real clinics agree to be quoted. Never invent testimonials or results. |
| FAQ | `Faq.tsx` | Seven objections answered plainly (replace the receptionist? official WhatsApp? emergencies at 2 am?). Also emitted as FAQPage structured data. |
| From the Journal | `JournalTeaser.tsx` | Links to the four articles. |
| Closing | `Closing.tsx` | "Your patients are already talking. Make every conversation count." |

## Data
- "Book a Demo" writes to Supabase `website_leads` with the publishable key (RLS allows anon insert only). Verified as the `anon` role on 2026-10-04.
- Dashboard and conversation numbers are demo values inside product mockups (the dashboard is labelled "Demo").

## Languages
English (`/en`) and Arabic (`/ar`, RTL) since 2026-10-04. Copy in `content/dictionaries/`.

## Journal
Four articles, each in English and Arabic, chosen for search intent across the buying journey:
| Slug | Intent |
|---|---|
| `ai-receptionist-for-dental-clinics` | Evaluating an AI receptionist (commercial) |
| `reduce-dental-no-shows` | Fixing no-shows (problem-aware) |
| `whatsapp-appointment-booking-dental-clinic` | Booking on WhatsApp in the Gulf (how-to, high intent) |
| `reactivate-inactive-dental-patients` | Revenue from the existing patient list |

## Open items
1. WhatsApp number for the demo Lina: set `NEXT_PUBLIC_LINA_DEMO_WHATSAPP` and "Meet Lina" opens WhatsApp. Until then it scrolls to "Watch Lina think".
2. Higgsfield: one or two cinematic shots at most (night clinic behind "While you were away"), plus article cover art.
3. Real testimonials once clinics agree.
4. Pricing page, privacy and terms pages.
5. Connect `flowramo.com` to the Vercel project, then verify it in Google Search Console, submit `/sitemap.xml`, and run `geo audit` against the public URL.
