import type { Article } from "./types";
import aiReceptionist from "./ai-receptionist-for-dental-clinics";
import noShows from "./reduce-dental-no-shows";
import whatsappBooking from "./whatsapp-appointment-booking-dental-clinic";
import reactivation from "./reactivate-inactive-dental-patients";

/** Journal order: the first article is featured on the index. */
export const ARTICLES: Article[] = [aiReceptionist, noShows, whatsappBooking, reactivation];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
