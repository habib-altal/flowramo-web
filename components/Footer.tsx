"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useI18n } from "./I18n";

export function Footer() {
  const { t, locale } = useI18n();
  const other = locale === "ar" ? "en" : "ar";
  return (
    <footer className="wrap flex flex-wrap items-center justify-between gap-4 pb-8 text-[13.5px] text-ink-3">
      <Link href={`/${locale}`} aria-label={t.nav.home}>
        <Logo className="text-ink" />
      </Link>
      <nav className="flex flex-wrap items-center gap-5" aria-label="Footer">
        <Link href={`/${locale}/blog`} className="hover:text-ink">
          {t.closing.blog}
        </Link>
        <Link href={`/${other}`} hrefLang={other} lang={other} className="hover:text-ink">
          {t.nav.switchLabel}
        </Link>
        <span>{t.closing.rights}</span>
      </nav>
    </footer>
  );
}
