import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CommonDict } from "@/content/dictionaries/en/common";
import { readingTime, type Locale } from "@/lib/i18n";
import { ARTICLES, coverOf } from "@/content/articles";

/** Home: the three latest guides as cover cards (a swipeable row below 1024px, three columns from there). */
export function JournalTeaser({ lang, t }: { lang: Locale; t: CommonDict }) {
  return (
    <section className="wrap pb-[clamp(88px,10vw,140px)]" aria-labelledby="journal-title">
      <div className="flex items-baseline justify-between gap-6">
        <h2 id="journal-title" className="text-[clamp(1.6rem,2.6vw,2.3rem)] font-[560] tracking-[-0.03em]" data-split>
          {t.journal.h2}
        </h2>
        <Link href={`/${lang}/insights`} className="flex flex-none items-center gap-1.5 text-[14.5px] font-medium text-ink-2 hover:text-ink">
          {t.journal.all}
          <ArrowRight size={15} className="rtl:rotate-180" aria-hidden="true" />
        </Link>
      </div>
      {/* Below 1024px the row scrolls; its far edge fades so a card is never cut mid-word. */}
      <ul className="-mx-[clamp(20px,4vw,40px)] mt-8 grid snap-x snap-mandatory auto-cols-[min(78%,340px)] grid-flow-col gap-4 overflow-x-auto scroll-px-[clamp(20px,4vw,40px)] px-[clamp(20px,4vw,40px)] pb-2 [mask-image:linear-gradient(to_right,#000_84%,transparent)] [scrollbar-width:none] rtl:[mask-image:linear-gradient(to_left,#000_84%,transparent)] lg:mx-0 lg:grid-flow-row lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:[mask-image:none] [&::-webkit-scrollbar]:hidden">
        {ARTICLES.slice(0, 3).map((a) => (
          <li key={a.slug} className="snap-start" data-reveal>
            <Link href={`/${lang}/insights/${a.slug}`} className="group flex h-full flex-col rounded-[20px] outline-offset-4">
              <span className="block overflow-hidden rounded-[20px] border border-line bg-night">
                <img src={coverOf(a.slug)} alt="" width={1280} height={720} loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover object-[70%_50%] transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
              </span>
              <span className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px]">
                <span className="font-medium text-ink-2">{t.journal.topics[a.topic ?? "lina"]}</span>
                <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden="true" />
                <span className="text-ink-3">{readingTime(lang, t.blog.minutes, a[lang].minutes)}</span>
              </span>
              <span className="mt-2.5 text-pretty text-[clamp(1.1rem,1.4vw,1.25rem)] font-[560] leading-[1.3] tracking-[-0.008em] transition-colors group-hover:text-blue-deep">{a[lang].title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
