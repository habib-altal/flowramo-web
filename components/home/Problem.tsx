import type { HomeDict } from "@/content/dictionaries/en/home";

export function Problem({ t }: { t: HomeDict["problem"] }) {
  return (
    <section className="bg-paper-2 py-[clamp(96px,12vw,168px)]" aria-labelledby="problem-title">
      <div className="wrap">
        <h2 id="problem-title" className="display-md max-w-[20ch]">
          {t.h2}
        </h2>
        <ul className="mt-[clamp(48px,6vw,88px)] grid gap-x-10 md:grid-cols-3">
          {t.items.map((it) => (
            <li key={it.title} className="border-t border-line-strong py-7 md:py-8">
              <h3 className="text-[clamp(1.25rem,1.7vw,1.5rem)] font-[560] leading-tight tracking-[-0.02em]">{it.title}</h3>
              <p className="mt-3 max-w-[22rem] text-[16px] leading-[1.65] text-ink-2">{it.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[30ch] text-[clamp(1.35rem,2.2vw,1.9rem)] font-[520] leading-[1.25] tracking-[-0.025em] md:mt-14">
          {t.close}
        </p>
      </div>
    </section>
  );
}
