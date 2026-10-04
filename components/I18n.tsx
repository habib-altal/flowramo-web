"use client";

import { createContext, useContext } from "react";
import type { Dictionary } from "@/content/dictionaries/en";
import type { Locale } from "@/lib/i18n";

type I18n = { locale: Locale; rtl: boolean; t: Dictionary };
const Ctx = createContext<I18n | null>(null);

export function I18nProvider({ locale, t, children }: { locale: Locale; t: Dictionary; children: React.ReactNode }) {
  return <Ctx.Provider value={{ locale, rtl: locale === "ar", t }}>{children}</Ctx.Provider>;
}

export function useI18n(): I18n {
  const value = useContext(Ctx);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}

/** Fill {placeholders} in a dictionary string. */
export const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
