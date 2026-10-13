"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "./I18n";

export function Footer() {
  const { t, locale } = useI18n();
  const f = t.footer;
  const pathname = usePathname() ?? `/${locale}`;
  const other = locale === "ar" ? "en" : "ar";
  const switchHref = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);
  const link = "text-[14.5px] text-ink-2 transition-colors hover:text-ink";
  const head = "mb-4 text-[14px] font-semibold text-ink";

  return (
    <footer className="border-t border-line bg-paper">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1fr_0.8fr] lg:gap-10 lg:py-20">
        <div className="flex flex-col items-start gap-5">
          <Link href={`/${locale}`} aria-label={t.nav.home} className="text-ink">
            <Logo />
          </Link>
          <p className="max-w-[22rem] text-[15px] leading-[1.6] text-ink-2">{f.statement}</p>
          <a
            href={`mailto:${f.email}`}
            className="group mt-1 inline-flex items-center gap-2 border-b border-line pb-1 text-[15px] font-medium text-ink transition-colors hover:border-ink"
          >
            <span className="text-ink-3">{f.emailLabel}</span>
            <span dir="ltr">{f.email}</span>
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" aria-hidden="true" />
          </a>
        </div>

        <nav aria-label={f.company}>
          <p className={head}>{f.company}</p>
          <ul className="flex flex-col gap-2.5">
            <li><Link href={`/${locale}/about`} className={link}>{t.nav.about}</Link></li>
            <li><Link href={`/${locale}/insights`} className={link}>{t.nav.insights}</Link></li>
            <li><Link href={`/${locale}/contact`} className={link}>{t.nav.contact}</Link></li>
          </ul>
        </nav>

        <nav aria-label={f.capabilities}>
          <p className={head}>{f.capabilities}</p>
          <ul className="flex flex-col gap-2.5">
            {t.capabilities.map((c) => (
              <li key={c.id}>
                <Link href={`/${locale}/solutions#${c.id}`} className={link}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={f.product}>
          <p className={head}>{f.product}</p>
          <Link href={`/${locale}/products/lina`} className="group flex flex-col gap-1">
            <span className="flex items-center gap-2 text-[15px] font-medium text-ink">
              <span className="lina-dot scale-75" aria-hidden="true" />
              Lina
            </span>
            <span className="text-[13.5px] leading-[1.5] text-ink-3 transition-colors group-hover:text-ink-2">{f.linaLine}</span>
          </Link>
        </nav>

        <nav aria-label={f.legal}>
          <p className={head}>{f.legal}</p>
          <ul className="flex flex-col gap-2.5">
            <li><Link href={`/${locale}/privacy`} className={link}>{f.privacy}</Link></li>
            <li><Link href={`/${locale}/terms`} className={link}>{f.terms}</Link></li>
          </ul>
        </nav>
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-[13.5px] text-ink-3">
        <span>{f.rights}</span>
        <Link href={switchHref} hrefLang={other} className="inline-flex items-center gap-1.5 transition-colors hover:text-ink">
          <Globe size={14} aria-hidden="true" />
          <span lang={other}>{t.nav.switchLabel}</span>
        </Link>
      </div>
    </footer>
  );
}
