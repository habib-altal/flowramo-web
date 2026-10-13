/** The opening of every inner page: one large headline, one plain sentence. */
export function PageHeader({ h1, sub, children }: { h1: string; sub?: string; children?: React.ReactNode }) {
  return (
    <header className="wrap pb-[clamp(56px,7vw,96px)] pt-[clamp(132px,13vw,184px)]">
      <h1 className="display-lg max-w-[18ch]">{h1}</h1>
      {sub && <p className="lede mt-7 max-w-[40rem]">{sub}</p>}
      {children}
    </header>
  );
}

/** A quiet closing band that sends the reader to the project form. */
export function PageCta({ h2, text, cta, href }: { h2: string; text?: string; cta: string; href: string }) {
  return (
    <section className="border-t border-line" aria-labelledby="page-cta">
      <div className="wrap flex flex-col gap-8 py-[clamp(96px,12vw,160px)] lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 id="page-cta" className="display-md max-w-[18ch]">
            {h2}
          </h2>
          {text && <p className="lede mt-5 max-w-[34rem]">{text}</p>}
        </div>
        <a href={href} className="btn btn-ink h-[54px] flex-none self-start px-7 text-[16px] lg:self-auto">
          {cta}
        </a>
      </div>
    </section>
  );
}
