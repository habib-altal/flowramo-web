"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { DemoButton } from "./Demo";
import { useI18n } from "./I18n";
import { ScrollTrigger } from "@/lib/gsap";

export function Nav() {
  const { t, locale } = useI18n();
  const pathname = usePathname() ?? `/${locale}`;
  const other = locale === "ar" ? "en" : "ar";
  const switchHref = pathname.replace(/^\/(en|ar)(?=\/|$)/, `/${other}`);
  const onLina = pathname.startsWith(`/${locale}/products/lina`);

  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  const LINKS = [
    { label: t.nav.solutions, href: `/${locale}/solutions` },
    { label: t.nav.lina, href: `/${locale}/products/lina`, tag: t.nav.productTag },
    { label: t.nav.insights, href: `/${locale}/insights` },
    { label: t.nav.about, href: `/${locale}/about` },
    { label: t.nav.contact, href: `/${locale}/contact` },
  ];
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setMenu(false);
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Flip the nav to light-on-dark while a dark section sits under it.
    setDark(false);
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-nav='dark']")).map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 36px",
        end: "bottom 36px",
        onToggle: (self) => setDark(self.isActive),
      }),
    );
    return () => {
      window.removeEventListener("scroll", onScroll);
      triggers.forEach((tr) => tr.kill());
    };
  }, [pathname]);

  const tone = dark ? "text-moon-2 hover:text-moon" : "text-ink-2 hover:text-ink";
  const activeTone = dark ? "text-moon" : "text-ink";
  const cta = `btn h-10 px-[18px] text-[14.5px] ${dark ? "btn-moon" : "btn-ink"}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${dark ? "text-moon" : "text-ink"}`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        {locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}
      </a>
      <div
        className={`absolute inset-0 -z-10 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled ? (dark ? "bg-night/70 backdrop-blur-xl" : "bg-paper/75 backdrop-blur-xl") : "bg-transparent"
        } ${scrolled ? (dark ? "border-b border-night-line" : "border-b border-line/70") : "border-b border-transparent"}`}
      />
      <nav className="wrap flex h-[68px] items-center justify-between gap-6" aria-label="Main">
        <Link href={`/${locale}`} aria-label={t.nav.home} className="flex-none">
          <Logo onDark={dark} />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${isActive(l.href) ? activeTone : tone}`}
              >
                {l.label}
                {l.tag && (
                  <span
                    className={`rounded-full px-2 py-px text-[11.5px] font-medium ${
                      dark ? "bg-night-3 text-cyan" : "bg-blue-soft text-blue-deep"
                    }`}
                  >
                    {l.tag}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-none items-center gap-1.5">
          <Link
            href={switchHref}
            hrefLang={other}
            aria-label={t.nav.switchAria}
            className={`hidden h-10 items-center gap-1.5 rounded-full px-3 text-[14px] font-medium transition-colors sm:inline-flex ${tone}`}
          >
            <Globe size={15} aria-hidden="true" />
            <span lang={other}>{t.nav.switchLabel}</span>
          </Link>
          {onLina ? (
            <DemoButton className={`${cta} hidden sm:inline-flex`}>{t.nav.demo}</DemoButton>
          ) : (
            <Link href={`/${locale}/contact`} className={`${cta} hidden sm:inline-flex`}>
              {t.nav.cta}
            </Link>
          )}
          <button
            className="grid h-10 w-10 place-items-center rounded-full lg:hidden"
            aria-label={menu ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menu && (
        <div id="mobile-menu" className="wrap lg:hidden">
          <div className="mb-3 flex flex-col gap-1 rounded-3xl border border-line bg-paper p-3 text-ink shadow-[0_20px_50px_-24px_rgba(12,12,11,0.3)]">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-[17px] font-medium hover:bg-paper-2 aria-[current=page]:bg-paper-2"
              >
                <span className="flex items-center gap-2">
                  {l.label}
                  {l.tag && <span className="rounded-full bg-blue-soft px-2 py-px text-[12px] font-medium text-blue-deep">{l.tag}</span>}
                </span>
                <ArrowUpRight size={16} className="text-ink-3 rtl:-scale-x-100" aria-hidden="true" />
              </Link>
            ))}
            <Link href={switchHref} hrefLang={other} className="flex items-center gap-2 rounded-2xl px-4 py-3 text-[17px] font-medium hover:bg-paper-2">
              <Globe size={17} aria-hidden="true" />
              <span lang={other}>{t.nav.switchLabel}</span>
            </Link>
            {onLina ? (
              <DemoButton className="btn btn-ink mt-1 w-full">{t.nav.demo}</DemoButton>
            ) : (
              <Link href={`/${locale}/contact`} className="btn btn-ink mt-1 w-full">
                {t.nav.cta}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
