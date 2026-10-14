import type { Article } from "./types";
import aiAgents from "./ai-agents-for-business";
import aiReceptionist from "./ai-receptionist-for-dental-clinics";
import automation from "./ai-automation-for-business-processes";
import noShows from "./reduce-dental-no-shows";
import ownership from "./own-your-ai-system";
import whatsappBooking from "./whatsapp-appointment-booking-dental-clinic";
import scoping from "./how-to-scope-an-ai-project";
import reactivation from "./reactivate-inactive-dental-patients";

/** Insights order: the first article is featured on the index. Studio articles and Lina articles alternate. */
export const ARTICLES: Article[] = [aiAgents, aiReceptionist, automation, noShows, ownership, whatsappBooking, scoping, reactivation];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

/** Cover art (Higgsfield, `design/higgsfield/covers/`), 1280×720 WebP, one per slug. */
export const coverOf = (slug: string) => `/media/covers/${slug}.webp`;
