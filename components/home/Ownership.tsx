import type { HomeDict } from "@/content/dictionaries/en/home";

/* What the client keeps, set as a short ledger rather than a grid of cards. */
export function Ownership({ t }: { t: HomeDict["own"] }) {
  return (
    <section className="bg-paper-2 py-[clamp(96px,12vw,168px)]" aria-labelledby="own-title">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <h2 id="own-title" className="display-lg">
            {t.h2}
          </h2>
          <p className="lede mt-6 max-w-[24rem]">{t.sub}</p>
        </div>
        <dl className="border-t border-line-strong">
          {t.items.map((it) => (
            <div key={it.title} className="grid gap-1.5 border-b border-line-strong py-7 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-8 sm:py-8">
              <dt className="text-[clamp(1.15rem,1.6vw,1.4rem)] font-[560] leading-tight tracking-[-0.02em]">{it.title}</dt>
              <dd className="text-[16.5px] leading-[1.6] text-ink-2">{it.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
