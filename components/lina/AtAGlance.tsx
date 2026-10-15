import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { LinaDict } from "@/content/dictionaries/en/lina";

/**
 * Lina's facts in one quiet list before the FAQ: what a skimming clinic owner, and an AI search
 * engine quoting the page, should take away. Facts only (.claude/product-marketing.md).
 */
export function AtAGlance({ t, lang }: { t: LinaDict["glance"]; lang: Locale }) {
  const row = "grid gap-1 border-b border-line py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-6";
  const term = "text-[14.5px] leading-[1.6] text-ink-3";
  const value = "text-[16px] leading-[1.6] text-ink";
  return (
    <section id="at-a-glance" className="wrap grid gap-8 pt-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20 lg:pt-36" aria-labelledby="glance-title">
      <h2 id="glance-title" className="text-[clamp(1.6rem,2.4vw,2.1rem)] font-[560] leading-tight tracking-[-0.03em]" data-reveal>
        {t.h2}
      </h2>
      <dl className="border-t border-line" data-reveal>
        <div className={row}>
          <dt className={term}>{t.builtBy}</dt>
          <dd className={value}>
            <Link href={`/${lang}`} className="font-medium underline decoration-line underline-offset-[4px] transition-colors hover:decoration-ink-3">
              Flowramo
            </Link>
          </dd>
        </div>
        {t.items.map((f) => (
          <div key={f.k} className={row}>
            <dt className={term}>{f.k}</dt>
            <dd className={value}>{f.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
