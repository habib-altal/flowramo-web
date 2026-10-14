"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

type Principle = { title: string; text: string };

/*
  Principles as a stack: each card sticks a little lower than the one before, so they
  pile up as you read, and the card underneath steps back as the next one lands.
  The stacking is plain CSS (position: sticky); the step-back is the only motion.
*/
export function Principles({ h2, items }: { h2: string; items: Principle[] }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const cards = gsap.utils.toArray<HTMLElement>(".pc-card", root.current);
        cards.slice(0, -1).forEach((card, i) => {
          const next = cards[i + 1];
          gsap.to(card.querySelector(".pc-inner"), {
            scale: 0.94,
            opacity: 0.55,
            ease: "none",
            transformOrigin: "50% 0%",
            scrollTrigger: { trigger: next, start: "top 85%", end: () => `top ${parseFloat(getComputedStyle(next).top) + 1}px`, scrub: true, invalidateOnRefresh: true },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="bg-paper-2 py-[clamp(96px,12vw,160px)]" aria-labelledby="principles-title">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <h2 id="principles-title" className="display-md lg:sticky lg:top-[140px]" data-split>
            {h2}
          </h2>
        </div>
        <ol className="relative">
          {items.map((p, i) => (
            <li key={p.title} className="pc-card sticky" style={{ top: `calc(104px + ${i * 22}px)`, marginBottom: i < items.length - 1 ? "22vh" : 0 }}>
              <div className="pc-inner rounded-[28px] border border-line-strong bg-card p-7 shadow-[0_30px_60px_-46px_rgba(12,12,11,0.45)] sm:p-10">
                <span className="mb-6 block h-2 w-2 rounded-full bg-blue shadow-[0_0_0_5px_color-mix(in_oklab,var(--color-blue)_16%,transparent)]" aria-hidden="true" />
                <h3 className="text-[clamp(1.35rem,2.2vw,1.9rem)] font-[560] leading-tight tracking-[-0.025em]">{p.title}</h3>
                <p className="mt-3 max-w-[34rem] text-[16.5px] leading-[1.62] text-ink-2">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
