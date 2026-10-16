import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { HomeDict } from "@/content/dictionaries/en/home";
import { AmbientVideo } from "../motion/AmbientVideo";

/* The last word on home, at night: an empty studio where a system keeps working (Higgsfield loop). */
export function HomeClosing({ t, lang, email }: { t: HomeDict["closing"]; lang: Locale; email: string }) {
  return (
    <section data-nav="dark" className="relative isolate overflow-hidden bg-night text-moon" aria-labelledby="closing-title">
      <AmbientVideo name="studio-night" portrait="studio-night-portrait" position="62% 50%" className="-z-10" />
      {/* Darkest behind the words (the start side), so the scene reads as atmosphere, not a picture. */}
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_right,rgba(7,8,11,0.92),rgba(7,8,11,0.7)_45%,rgba(7,8,11,0.25))] md:block rtl:-scale-x-100" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(to_bottom,rgba(7,8,11,0.55),transparent_30%,transparent_70%,rgba(7,8,11,0.8))] md:block" aria-hidden="true" />
      {/* Phones: the words sit at the top, so the room shows through below them. */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(7,8,11,0.88),rgba(7,8,11,0.62)_45%,rgba(7,8,11,0.15)_78%,rgba(7,8,11,0.55))] md:hidden" aria-hidden="true" />
      <div className="wrap py-[clamp(140px,17vw,240px)]">
        <h2 id="closing-title" className="display-xl max-w-[14ch]" data-split>
          {t.l1}
        </h2>
        <p data-reveal className="mt-6 max-w-[32ch] text-[clamp(1.5rem,2.8vw,2.4rem)] font-[500] leading-[1.2] tracking-[-0.02em] text-moon-2">{t.l2}</p>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5" data-reveal>
          <Link href={`/${lang}/contact`} className="btn btn-moon h-[54px] px-7 text-[16px]">
            {t.primary}
          </Link>
          <a href={`mailto:${email}`} className="text-[15.5px] text-moon-2 underline decoration-white/25 underline-offset-4 transition-colors hover:text-moon hover:decoration-moon">
            {t.email}
          </a>
        </div>
      </div>
    </section>
  );
}
