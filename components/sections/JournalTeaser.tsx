import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content/dictionaries/en";
import type { Locale } from "@/lib/i18n";
import { ARTICLES } from "@/content/articles";

export function JournalTeaser({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <section className="wrap pb-12" aria-labelledby="journal-title">
      <div className="flex items-end justify-between gap-6 border-b border-line pb-5">
        <h2 id="journal-title" className="text-[clamp(1.5rem,2.3vw,2rem)] font-[560] tracking-[-0.03em]">
          {t.journal.h2}
        </h2>
        <Link href={`/${lang}/blog`} className="flex items-center gap-1.5 text-[14.5px] font-medium text-ink-2 hover:text-ink">
          {t.journal.all}
          <ArrowRight size={15} className="rtl:rotate-180" aria-hidden="true" />
        </Link>
      </div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
        {ARTICLES.map((a) => (
          <li key={a.slug} className="border-b border-line sm:odd:border-e lg:border-e lg:last:border-e-0">
            <Link href={`/${lang}/blog/${a.slug}`} className="group flex h-full flex-col gap-4 py-6 sm:px-5 sm:first:ps-0 lg:min-h-[190px]">
              <span className="text-[13px] text-ink-3">{t.blog.minutes.replace("{n}", String(a[lang].minutes))}</span>
              <span className="text-[17px] font-[560] leading-[1.3] tracking-[-0.015em] transition-colors group-hover:text-blue-deep">{a[lang].title}</span>
              <ArrowRight size={16} className="mt-auto text-ink-3 transition-transform group-hover:translate-x-1 group-hover:text-ink rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
