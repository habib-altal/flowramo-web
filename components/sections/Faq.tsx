import { Plus } from "lucide-react";
import type { Dictionary } from "@/content/dictionaries/en";

/** Objections answered in plain HTML (details/summary), so it reads without JS and in AI search. */
export function Faq({ t }: { t: Dictionary["faq"] }) {
  return (
    <section id="faq" className="wrap grid gap-10 py-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20 lg:py-36" aria-labelledby="faq-title">
      <div>
        <div className="lg:sticky lg:top-[120px]">
          <h2 id="faq-title" className="display-md max-w-[14ch]">
            {t.h2}
          </h2>
          <p className="lede mt-6 max-w-[26rem]">{t.sub}</p>
        </div>
      </div>
      <div className="border-t border-line">
        {t.items.map((f, i) => (
          <details key={f.q} className="group border-b border-line" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[clamp(1.05rem,1.5vw,1.25rem)] font-[540] leading-snug tracking-[-0.01em]">
              <h3>{f.q}</h3>
              <Plus size={20} className="mt-1 flex-none text-ink-3 transition-transform duration-300 group-open:rotate-45 group-open:text-blue" aria-hidden="true" />
            </summary>
            <p className="max-w-[38rem] pb-7 pe-10 text-[16.5px] leading-[1.7] text-ink-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
