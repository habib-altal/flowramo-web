"use client";

import { Fragment, useRef, useState } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger, DESKTOP } from "@/lib/gsap";
import { useI18n } from "../I18n";
import { useHome } from "../PageDict";
import { StageProgress } from "../motion/StageProgress";

/*
  Six capabilities. Desktop (and iPad landscape): the section holds still in a sticky
  stage while the scroll walks through the six, one at a time, with a thin bar filling
  under the current one; clicking a name jumps there. Below 1024px it is a disclosure
  list. Every panel is in the HTML, so the content reads without JavaScript and in search.
*/
const N = 6;

export function Capabilities() {
  const root = useRef<HTMLElement>(null);
  const t = useHome().build;
  const { t: common, locale } = useI18n();
  const names = Object.fromEntries(common.capabilities.map((c) => [c.id, c.name]));
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const stRef = useRef<ScrollTrigger | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP, () => {
        const fills = gsap.utils.toArray<HTMLElement>(".cap-fill", root.current);
        stRef.current = ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          onUpdate: (self) => {
            const pos = self.progress * N;
            const i = Math.min(N - 1, Math.floor(pos));
            if (i !== activeRef.current) {
              activeRef.current = i;
              setActive(i);
            }
            fills.forEach((f, n) => gsap.set(f, { scaleX: n < i ? 1 : n === i ? pos - i : 0 }));
          },
        });
        return () => {
          stRef.current = null;
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const choose = (i: number) => {
    const st = stRef.current;
    if (!st) {
      activeRef.current = i;
      setActive(i);
      return;
    }
    // Desktop: move the scroll to that capability's stretch of the stage.
    const y = st.start + ((i + 0.35) / N) * (st.end - st.start);
    const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(y, { duration: 1 });
    else window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section ref={root} id="build" className="pin-host relative lg:h-[460vh]" aria-labelledby="build-title">
      <div className="pin-stage py-[clamp(96px,12vw,150px)] lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0 lg:pt-[68px]">
        <StageProgress />
        <div className="wrap w-full">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
            <h2 id="build-title" className="display-lg" data-split>
              {t.h2}
            </h2>
            <p className="lede max-w-[26rem] lg:justify-self-end" data-reveal>
              {t.sub}
            </p>
          </div>

          <div className="mt-[clamp(40px,6vh,72px)] grid border-b border-line lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-[repeat(6,auto)_1fr] lg:gap-x-16 lg:border-b-0">
            {t.items.map((it, i) => {
              const open = active === i;
              return (
                <Fragment key={it.id}>
                  <h3 className="relative border-t border-line lg:col-start-1 lg:[&:nth-last-child(2)]:border-b" data-reveal="start">
                    <button
                      type="button"
                      id={`cap-btn-${it.id}`}
                      aria-expanded={open}
                      aria-controls={`cap-${it.id}`}
                      onClick={() => choose(i)}
                      className="group flex w-full items-center justify-between gap-6 py-5 text-start lg:py-[clamp(12px,1.9vh,22px)]"
                    >
                      <span
                        className={`text-[clamp(1.2rem,1.9vw,1.6rem)] font-[540] leading-tight tracking-[-0.02em] transition-colors duration-500 ${
                          open ? "text-ink" : "text-ink-3 group-hover:text-ink-2"
                        }`}
                      >
                        {names[it.id]}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`h-2 w-2 flex-none rounded-full transition-all duration-500 ${open ? "bg-blue shadow-[0_0_0_5px_color-mix(in_oklab,var(--color-blue)_16%,transparent)]" : "bg-line-strong"}`}
                      />
                    </button>
                    {/* Desktop: how far the scroll has walked through this capability. */}
                    <span className="cap-fill absolute -top-px start-0 hidden h-[2px] w-full origin-left scale-x-0 bg-blue rtl:origin-right lg:block" aria-hidden="true" />
                  </h3>
                  <div
                    id={`cap-${it.id}`}
                    role="region"
                    aria-labelledby={`cap-btn-${it.id}`}
                    hidden={!open}
                    className="lg:col-start-2 lg:row-span-7 lg:row-start-1"
                  >
                    <div key={open ? "open" : "closed"} className="cap-in pb-9 pt-1 lg:rounded-[28px] lg:border lg:border-line lg:bg-card lg:p-[clamp(28px,3.4vw,44px)] lg:shadow-[0_40px_80px_-60px_rgba(12,12,11,0.35)]">
                      <p className="max-w-[30ch] text-[clamp(1.25rem,2vw,1.7rem)] font-[500] leading-[1.3] tracking-[-0.022em] text-ink">{it.outcome}</p>

                      {/* The parts, drawn as a small system: each node appears, then its line reaches the next one. */}
                      <ul className="relative mt-8 flex flex-col gap-4 ps-8">
                        {it.parts.map((p, n) => (
                          <li key={p} className="cap-node relative text-[16px] leading-[1.5] text-ink-2" style={{ "--i": n } as React.CSSProperties}>
                            {n < it.parts.length - 1 && <span className="cap-link absolute -bottom-[22px] -start-[27px] top-[17px] w-px bg-blue" aria-hidden="true" />}
                            <span className="absolute -start-8 top-[6px] h-[11px] w-[11px] rounded-full border-[1.5px] border-blue bg-card" aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-9 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
                        <div className="flex flex-col items-start gap-2.5">
                          <span className="inline-flex items-center gap-2 rounded-full bg-blue-soft px-2.5 py-1 text-[12.5px] font-medium text-blue-deep">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue" aria-hidden="true" />
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
      </div>
    </section>
  );
}
