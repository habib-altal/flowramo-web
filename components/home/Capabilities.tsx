"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { useI18n } from "../I18n";
import { useHome } from "../PageDict";

/*
  Six capabilities as a disclosure list. Desktop: names on one side, the open one's
  detail on the other. Mobile: the detail opens under its name. Every panel is in
  the HTML, so the content reads without JavaScript and in search.
*/
export function Capabilities() {
  const t = useHome().build;
  const { t: common, locale } = useI18n();
  const names = Object.fromEntries(common.capabilities.map((c) => [c.id, c.name]));
  const [active, setActive] = useState(0);

  return (
    <section id="build" className="py-[clamp(96px,12vw,168px)]" aria-labelledby="build-title">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <h2 id="build-title" className="display-lg">
            {t.h2}
          </h2>
          <p className="lede max-w-[26rem] lg:justify-self-end">{t.sub}</p>
        </div>

        <div className="mt-[clamp(48px,6vw,88px)] grid border-b border-line lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-[repeat(6,auto)_1fr] lg:gap-x-16 lg:border-b-0">
          {t.items.map((it, i) => {
            const open = active === i;
            return (
              <Fragment key={it.id}>
                <h3 className="border-t border-line lg:col-start-1 lg:[&:nth-last-child(2)]:border-b">
                  <button
                    type="button"
                    id={`cap-btn-${it.id}`}
                    aria-expanded={open}
                    aria-controls={`cap-${it.id}`}
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-start lg:py-6"
                  >
                    <span
                      className={`text-[clamp(1.2rem,1.9vw,1.65rem)] font-[540] leading-tight tracking-[-0.02em] transition-colors duration-300 ${
                        open ? "text-ink" : "text-ink-3 group-hover:text-ink-2"
                      }`}
                    >
                      {names[it.id]}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 flex-none rounded-full transition-all duration-300 ${open ? "bg-blue shadow-[0_0_0_5px_color-mix(in_oklab,var(--color-blue)_16%,transparent)]" : "bg-line-strong"}`}
                    />
                  </button>
                </h3>
                <div
                  id={`cap-${it.id}`}
                  role="region"
                  aria-labelledby={`cap-btn-${it.id}`}
                  hidden={!open}
                  className="lg:col-start-2 lg:row-span-7 lg:row-start-1"
                >
                  <div key={open ? "open" : "closed"} className="cap-in pb-9 pt-1 lg:sticky lg:top-[120px] lg:rounded-[28px] lg:border lg:border-line lg:bg-card lg:p-11">
                    <p className="max-w-[30ch] text-[clamp(1.25rem,2vw,1.75rem)] font-[500] leading-[1.3] tracking-[-0.022em] text-ink">{it.outcome}</p>

                    {/* The parts, drawn as a small system: nodes on one line. */}
                    <ul className="relative mt-9 flex flex-col gap-4 ps-8">
                      <span className="absolute bottom-[9px] start-[5px] top-[9px] w-px bg-line-strong" aria-hidden="true" />
                      {it.parts.map((p) => (
                        <li key={p} className="relative text-[16px] leading-[1.5] text-ink-2">
                          <span className="absolute -start-8 top-[6px] h-[11px] w-[11px] rounded-full border-[1.5px] border-blue bg-card" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
                      <div className="flex flex-col items-start gap-2.5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft px-2.5 py-1 text-[12.5px] font-medium text-blue-deep">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
                          {t.inLina}
                        </span>
                        <p className="max-w-[30rem] text-[15px] leading-[1.55] text-ink-2">{it.lina}</p>
                      </div>
                      <Link href={`/${locale}/products/lina`} className="flex-none text-[14.5px] font-medium text-blue-deep underline decoration-blue/30 underline-offset-4 transition-colors hover:decoration-blue">
                        {t.explore}
                      </Link>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
