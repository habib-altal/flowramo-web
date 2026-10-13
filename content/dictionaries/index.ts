import type { Locale } from "@/lib/i18n";
import enCommon from "./en/common";
import arCommon from "./ar/common";
import enLina from "./en/lina";
import arLina from "./ar/lina";
import enHome from "./en/home";
import arHome from "./ar/home";
import enPages from "./en/pages";
import arPages from "./ar/pages";

export const getCommon = (locale: Locale) => (locale === "ar" ? arCommon : enCommon);
export const getLina = (locale: Locale) => (locale === "ar" ? arLina : enLina);
export const getHome = (locale: Locale) => (locale === "ar" ? arHome : enHome);
export const getPages = (locale: Locale) => (locale === "ar" ? arPages : enPages);
