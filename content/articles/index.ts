import type { Article } from "./types";
import aiReceptionist from "./ai-receptionist-for-dental-clinics";
import noShows from "./reduce-dental-no-shows";
import whatsappBooking from "./whatsapp-appointment-booking-dental-clinic";
import reactivation from "./reactivate-inactive-dental-patients";

/** Journal order: the first article is featured on the index. */
export const ARTICLES: Article[] = [aiReceptionist, noShows, whatsappBooking, reactivation];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

/** Cover art (Higgsfield, `design/higgsfield/covers/`), 1280×720 WebP, one per slug. */
export const coverOf = (slug: string) => `/media/covers/${slug}.webp`;
