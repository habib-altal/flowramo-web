import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { readingTime, type Locale } from "@/lib/i18n";
import { getCommon } from "@/content/dictionaries";
import { ARTICLES } from "@/content/articles";

/** The dental-clinic Insights articles (topic "lina"), read from ARTICLES so new ones appear on their own. */
export function ClinicGuides({ h2, lang }: { h2: string; lang: Locale }) {
  const guides = ARTICLES.filter((a) => (a.topic ?? "lina") === "lina");
  if (guides.length === 0) return null;
  const b = getCommon(lang).blog;
  return (
    <section id="guides" className="wrap grid gap-8 pt-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20 lg:pt-28" aria-labelledby="guides-title">
      <h2 id="guides-title" className="text-[clamp(1.6rem,2.4vw,2.1rem)] font-[560] leading-tight tracking-[-0.02em]" data-reveal>
        {h2}
      </h2>
      <ul className="border-t border-line">
        {guides.map((a) => (
          <li key={a.slug} className="border-b border-line" data-reveal>
            <Link href={`/${lang}/insights/${a.slug}`} className="group flex items-start justify-between gap-6 py-5">
              <span className="min-w-0">
                <span className="block text-[clamp(1.05rem,1.4vw,1.2rem)] font-[540] leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-blue-deep">{a[lang].title}</span>
                <span className="mt-1.5 block text-[14px] text-ink-3">{readingTime(lang, b.minutes, a[lang].minutes)}</span>
              </span>
              <ArrowRight size={18} className="mt-1 flex-none text-ink-3 transition-transform group-hover:translate-x-1 group-hover:text-blue rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
