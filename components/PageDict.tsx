"use client";

import { createContext, useContext } from "react";
import type { LinaDict } from "@/content/dictionaries/en/lina";
import type { HomeDict } from "@/content/dictionaries/en/home";

// Page-level copy (a page's own dictionary), provided below the site-wide I18nProvider.
const Ctx = createContext<unknown>(null);

export function PageDictProvider<T>({ value, children }: { value: T; children: React.ReactNode }) {
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

function usePageDict<T>(name: string): T {
  const value = useContext(Ctx);
  if (!value) throw new Error(`${name} must be used inside PageDictProvider`);
  return value as T;
}

export const useLina = () => usePageDict<LinaDict>("useLina");
export const useHome = () => usePageDict<HomeDict>("useHome");
