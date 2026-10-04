/**
 * Social proof goes after the product, and only with real clinics.
 * Add entries here once a clinic agrees to be quoted, with their real results.
 * While the list is empty the section does not render.
 */
type Testimonial = { clinic: string; doctor: string; quote: string; result: string; photo?: string };

const TESTIMONIALS: Testimonial[] = [];

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section className="py-[clamp(100px,13vw,180px)]" aria-label="Clinics using Lina">
      <div className="wrap grid gap-5 lg:grid-cols-3">
        {TESTIMONIALS.slice(0, 3).map((t) => (
          <figure key={t.clinic} className="flex flex-col justify-between gap-10 rounded-[32px] border border-line bg-card p-8">
            <blockquote className="text-[22px] font-[520] leading-[1.3] tracking-[-0.02em]">“{t.quote}”</blockquote>
            <figcaption>
              <div className="text-[34px] font-[580] tracking-[-0.04em] text-blue">{t.result}</div>
              <div className="mt-3 text-[15px] font-medium">{t.doctor}</div>
              <div className="text-[14px] text-ink-2">{t.clinic}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
