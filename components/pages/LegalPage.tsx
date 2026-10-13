type Legal = { h1: string; updated: string; intro: string; sections: { h2: string; body: string[] }[] };

/** Plain-language legal notice: one column, the article type scale, nothing hidden. */
export function LegalPage({ t }: { t: Legal }) {
  return (
    <main id="main" className="wrap pb-[clamp(96px,12vw,160px)] pt-[clamp(132px,13vw,184px)]">
      <article className="mx-auto max-w-[44rem]">
        <h1 className="article-title text-[clamp(2.4rem,4.6vw,3.8rem)] font-[560] leading-[1.02] tracking-[-0.04em]">{t.h1}</h1>
        <p className="mt-4 text-[14px] text-ink-3">{t.updated}</p>
        <div className="prose-f mt-10">
          <p className="text-[19px] leading-[1.65] text-ink">{t.intro}</p>
          {t.sections.map((s) => (
            <section key={s.h2} className="[&>*+*]:mt-[1.15em]">
              <h2>{s.h2}</h2>
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
