import en, { type Dictionary } from "./en";
import ar from "./ar";
import type { Locale } from "@/lib/i18n";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
export type { Dictionary };
