"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { gsap, useGSAP, SplitText, TABLET_UP, PHONE } from "@/lib/gsap";
import { useI18n } from "../I18n";
import { useHome } from "../PageDict";

/*
  Scroll story: three problems pile up, then a blue line passes over them and each
  one is answered. Tablet and desktop scrub it inside a sticky stage; phones play
  each card's turn as it arrives. The markup is the answered state.
*/

const START = 23 * 60 + 48; // 23:48
const WAIT = 9 * 60 + 27; // until 09:15
const fmt = (m: number) => {
  const t = Math.round(m) % (24 * 60);
  return `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;
};

function Visual({ i }: { i: number }) {
  const l = useHome().problem.labels;
  if (i === 0)
    return (
      <div>
        <div className="pr-clock text-[clamp(2.4rem,3.6vw,3.2rem)] font-[560] leading-none tracking-[-0.04em] text-blue tabular-nums" dir="ltr">
          {fmt(START)}
        </div>
        <div className="relative mt-2 h-5 text-[13px] text-ink-3">
          <span className="pr-wait absolute inset-0 opacity-0">{l.waiting}</span>
          <span className="pr-replied absolute inset-0">{l.replied}</span>
        </div>
      </div>
    );
  if (i === 1)
    return (
      <div>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <span key={n} className={`pr-person h-7 w-7 rounded-full border-[1.5px] border-blue bg-blue ${n === 0 ? "pr-one" : ""}`} aria-hidden="true" />
          ))}
        </div>
        <div className="mt-3 text-[13px] text-ink-3">{l.knows}</div>
      </div>
    );
  return (
    <div>
      <div className="flex h-9 items-end gap-2" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5, 6].map((n) => (
          <span key={n} className={`pr-day w-5 rounded-[5px] ${n === 1 ? "pr-key h-9 border-[1.5px] border-blue bg-blue" : "h-6 bg-line-strong"}`} />
        ))}
      </div>
      <div className="mt-3 text-[13px] text-ink-3">{l.days}</div>
    </div>
  );
}

export function Problem() {
  const root = useRef<HTMLElement>(null);
  const t = useHome().problem;
  const { rtl } = useI18n();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(root);

      // Puts every card in its "problem" state; returns the flips that answer each card.
      const setup = () => {
        const clock = q(".pr-clock")[0];
        gsap.set(q(".pr-strike"), { scaleX: 0, transformOrigin: rtl ? "100% 50%" : "0% 50%" });
        gsap.set(q(".pr-before"), { color: "var(--color-ink)" });
        gsap.set(q(".pr-after"), { autoAlpha: 0, y: 8 });
        gsap.set(q(".pr-dot"), { backgroundColor: "var(--color-alert)" });
        gsap.set(q(".pr-card"), { borderColor: "var(--color-line)" });
        gsap.set(clock, { color: "var(--color-ink)" });
        gsap.set(q(".pr-wait"), { opacity: 1 });
        gsap.set(q(".pr-replied"), { opacity: 0 });
        gsap.set(q(".pr-person:not(.pr-one)"), { backgroundColor: "transparent", borderColor: "var(--color-line-strong)" });
        gsap.set(q(".pr-one"), { backgroundColor: "var(--color-ink)", borderColor: "var(--color-ink)" });
        gsap.set(q(".pr-key"), { backgroundColor: "transparent", borderColor: "var(--color-alert)", borderStyle: "dashed" });

        const flip = (i: number) => {
          const card = q(".pr-card")[i];
          const s = gsap.utils.selector(card);
          const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });
          tl.to(s(".pr-strike"), { scaleX: 1 }, 0)
            .to(s(".pr-before"), { color: "var(--color-ink-3)" }, 0)
            .to(s(".pr-dot"), { backgroundColor: "var(--color-blue)" }, 0)
            .to(card, { borderColor: "color-mix(in oklab, var(--color-blue) 35%, var(--color-line))" }, 0)
            .to(s(".pr-after"), { autoAlpha: 1, y: 0 }, 0.15);
          if (i === 0) tl.to(clock, { color: "var(--color-blue)" }, 0).to(s(".pr-wait"), { opacity: 0 }, 0).to(s(".pr-replied"), { opacity: 1 }, 0.1);
          if (i === 1) tl.to(s(".pr-person:not(.pr-one)"), { backgroundColor: "var(--color-blue)", borderColor: "var(--color-blue)", stagger: 0.06 }, 0).to(s(".pr-one"), { backgroundColor: "var(--color-blue)", borderColor: "var(--color-blue)" }, 0);
          if (i === 2) tl.to(s(".pr-key"), { backgroundColor: "var(--color-blue)", borderColor: "var(--color-blue)", borderStyle: "solid" }, 0);
          return tl;
        };
        return { clock, flip };
      };

      // Tablet and desktop: one scrubbed story inside the sticky stage.
      mm.add(TABLET_UP, () => {
        const { clock, flip } = setup();
        const host = root.current!;
        const time = { m: START, solved: 0 };
        const paint = () => {
          clock.textContent = time.solved > 0.5 ? fmt(START) : fmt(time.m);
        };
        const split = SplitText.create(q(".pr-h2")[0], { type: "lines", mask: "lines" });

        const tl = gsap.timeline({ defaults: { ease: "power2.out" }, scrollTrigger: { trigger: host, start: "top top", end: "bottom bottom", scrub: 0.7, invalidateOnRefresh: true } });
        tl.from(split.lines, { yPercent: 115, duration: 1, stagger: 0.12 }, 0)
          .from(q(".pr-card"), { autoAlpha: 0, y: 60, duration: 0.8, stagger: 1 }, 1)
          .to(time, { m: START + WAIT, duration: 1.6, ease: "none", onUpdate: paint }, 1.4)
          .from(q(".pr-day"), { scaleY: 0, transformOrigin: "50% 100%", duration: 0.25, stagger: 0.15 }, 3.2)
          .fromTo(q(".pr-sweep"), { autoAlpha: 0, x: 0 }, { autoAlpha: 1, duration: 0.2 }, 4.6)
          .to(q(".pr-sweep"), { x: () => (rtl ? -1 : 1) * q(".pr-grid")[0].offsetWidth, duration: 1.6, ease: "none" }, 4.7)
          .to(time, { solved: 1, duration: 0.01, onUpdate: paint }, 4.75)
          .add(flip(0), 4.75)
          .add(flip(1), 5.25)
          .add(flip(2), 5.75)
          .to(q(".pr-sweep"), { autoAlpha: 0, duration: 0.2 }, 6.3)
          .from(q(".pr-close"), { autoAlpha: 0, y: 30, duration: 0.7 }, 6.3)
          .to({}, { duration: 0.6 });
        return () => split.revert();
      });

      // Phones: each card plays its own turn when it arrives.
      mm.add(PHONE, () => {
        const { clock, flip } = setup();
        q(".pr-card").forEach((card, i) => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: "top 72%", once: true } });
          tl.from(card, { autoAlpha: 0, y: 40, duration: 0.7, ease: "expo.out" });
          if (i === 0) {
            const time = { m: START };
            tl.to(time, { m: START + WAIT, duration: 1.4, ease: "power1.inOut", onUpdate: () => (clock.textContent = fmt(time.m)) });
            tl.add(() => void (clock.textContent = fmt(START)), "+=0.35");
          }
          if (i === 2) tl.from(gsap.utils.selector(card)(".pr-day"), { scaleY: 0, transformOrigin: "50% 100%", duration: 0.25, stagger: 0.1 });
          tl.add(flip(i), "+=0.2");
        });
        gsap.from(q(".pr-close"), { autoAlpha: 0, y: 24, duration: 0.8, ease: "expo.out", scrollTrigger: { trigger: q(".pr-close")[0], start: "top 88%", once: true } });
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [rtl] },
  );

  return (
    <section ref={root} id="problem" className="relative bg-paper-2 md:h-[320vh]" aria-labelledby="problem-title">
      <div className="py-[clamp(88px,12vw,140px)] md:sticky md:top-0 md:flex md:h-svh md:flex-col md:justify-center md:py-0 md:pt-[68px]">
        <div className="wrap">
          <h2 id="problem-title" className="pr-h2 display-md max-w-[20ch]">
            {t.h2}
          </h2>

          <div className="relative mt-[clamp(36px,5vh,64px)]">
            {/* The blue line that answers each card as it passes. */}
            <span className="pr-sweep pointer-events-none absolute -bottom-4 -top-4 start-0 z-10 hidden w-px bg-blue opacity-0 shadow-[0_0_18px_2px_rgba(0,80,248,0.45)] md:block" aria-hidden="true" />
            <ul className="pr-grid grid gap-4 md:grid-cols-3 lg:gap-5">
              {t.items.map((it, i) => (
                <li key={it.title} className="pr-card flex flex-col rounded-[24px] border border-[color-mix(in_oklab,var(--color-blue)_35%,var(--color-line))] bg-card p-6 lg:p-7">
                  <div className="h-[86px]">
                    <Visual i={i} />
                  </div>
                  <h3 className="mt-5 text-[clamp(1.15rem,1.6vw,1.4rem)] font-[560] leading-tight tracking-[-0.02em]">{it.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-ink-2 md:max-lg:text-[14.5px]">{it.text}</p>
                  <div className="mt-auto pt-5">
                    <div className="border-t border-line pt-4">
                      <p className="pr-before relative inline-flex items-center gap-2 text-[13.5px] text-ink-3">
                        <span className="pr-dot h-1.5 w-1.5 flex-none rounded-full bg-blue" aria-hidden="true" />
                        <span className="relative">
                          {it.before}
                          <span className="pr-strike absolute inset-x-0 top-1/2 h-px bg-current" aria-hidden="true" />
                        </span>
                      </p>
                      <p className="pr-after mt-1.5 flex items-center gap-2 text-[14px] font-medium text-blue-deep">
                        <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                        {it.after}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="pr-close mt-[clamp(28px,4.5vh,56px)] max-w-[30ch] text-[clamp(1.35rem,2.2vw,1.9rem)] font-[520] leading-[1.25] tracking-[-0.025em]">{t.close}</p>
        </div>
      </div>
    </section>
  );
}
