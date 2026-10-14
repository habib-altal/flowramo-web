import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { HomeDict } from "@/content/dictionaries/en/home";

export function HomeClosing({ t, lang, email }: { t: HomeDict["closing"]; lang: Locale; email: string }) {
  return (
    <section className="border-t border-line" aria-labelledby="closing-title">
      <div className="wrap py-[clamp(120px,15vw,216px)]">
        <h2 id="closing-title" className="display-xl max-w-[14ch]" data-split>
          {t.l1}
        </h2>
        <p data-reveal className="mt-6 max-w-[32ch] text-[clamp(1.5rem,2.8vw,2.4rem)] font-[500] leading-[1.2] tracking-[-0.03em] text-ink-2">{t.l2}</p>
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5" data-reveal>
          <Link href={`/${lang}/contact`} className="btn btn-ink h-[54px] px-7 text-[16px]">
            {t.primary}
          </Link>
          <a href={`mailto:${email}`} className="text-[15.5px] text-ink-2 underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink hover:decoration-ink">
            {t.email}
          </a>
        </div>
      </div>
    </section>
  );
}
