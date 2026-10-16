"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useLina } from "../PageDict";
import { StageProgress } from "../motion/StageProgress";

type Pos = { x: number; y: number; mx: number; my: number };
// Where each of Lina's actions floats before it is pulled into the blue dot (labels come from the dictionary).
const POSITIONS: Pos[] = [
  { x: 16, y: 19, mx: 30, my: 13 },
  { x: 50, y: 14, mx: 70, my: 19 },
  { x: 81, y: 19, mx: 34, my: 25 },
  { x: 24, y: 29, mx: 68, my: 31 },
  { x: 76, y: 66, mx: 31, my: 66 },
  { x: 21, y: 70, mx: 69, my: 72 },
  { x: 83, y: 80, mx: 33, my: 92 },
];

export function LinaMoment() {
  const root = useRef<HTMLElement>(null);
  const t = useLina();
  const ACTIONS = t.lina.actions.map((label, i) => ({ label, pos: POSITIONS[i] }));
  // Sentence case, never tracked caps (the name may arrive capitalised from the dictionary).
  const name = t.lina.core.charAt(0) + t.lina.core.slice(1).toLowerCase();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const host = root.current!;
        const q = gsap.utils.selector(host);
        const chips = q(".lm-chip") as HTMLElement[];
        const core = host.querySelector<HTMLElement>(".lm-core")!;

        gsap.set([...chips, core], { xPercent: -50, yPercent: -50 });

        // Night arrives as a dark sheet rising over the day (no paper-to-grey wash), and its first line sharpens
        // into focus as it comes up, so the dark is never empty.
        gsap.fromTo(
          q(".lm-l1"),
          { autoAlpha: 0, filter: "blur(10px)" },
          { autoAlpha: 1, filter: "blur(0px)", ease: "power2.out", scrollTrigger: { trigger: host, start: "top 75%", end: "top 30%", scrub: 0.5 } },
        );

        const delta = (el: HTMLElement) => {
          const c = getComputedStyle(el);
          const d = getComputedStyle(core);
          return {
            x: parseFloat(d.left) - parseFloat(c.left),
            y: parseFloat(d.top) - parseFloat(c.top),
          };
        };

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: { trigger: host, start: "top top", end: "bottom bottom", scrub: 0.8, invalidateOnRefresh: true },
        });

        tl.fromTo(q(".lm-l2"), { autoAlpha: 0, filter: "blur(8px)" }, { autoAlpha: 1, filter: "blur(0px)", duration: 1 }, 0.2);

        chips.forEach((chip, i) => {
          tl.fromTo(
            chip,
            { autoAlpha: 0, scale: 0.94, filter: "blur(6px)" },
            { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.7 },
            1.3 + i * 0.45,
          );
        });

        tl.fromTo(core, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 0.8, ease: "back.out(2)" }, 5.2);

        chips.forEach((chip, i) => {
          tl.to(
            chip,
            {
              x: () => delta(chip).x,
              y: () => delta(chip).y,
              scale: 0.35,
              autoAlpha: 0,
              duration: 1.6,
              ease: "power3.in",
            },
            5.6 + i * 0.12,
          );
        });

        tl.to(q(".lm-glow"), { opacity: 1, scale: 1.25, duration: 1.2, ease: "power2.out" }, 6.7)
          .fromTo(q(".lm-ring"), { scale: 1, opacity: 0.55 }, { scale: 4.2, opacity: 0, duration: 1.6, stagger: 0.35, ease: "power2.out" }, 7.2)
          .fromTo(q(".lm-name"), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 7.4)
          .to({}, { duration: 1.2 });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="lina" data-nav="dark" className="scrolly h-[330vh] overflow-clip rounded-t-[36px] bg-night text-moon lg:rounded-t-[48px]" aria-label={t.lina.l2}>
      <div className="stage">
        <StageProgress tone="dark" />
        <div className="absolute inset-0">
          {ACTIONS.map((a) => (
            <div
              key={a.label}
              className="lm-chip absolute left-[var(--mx)] top-[var(--my)] lg:left-[var(--x)] lg:top-[var(--y)]"
              style={
                {
                  "--x": `${a.pos.x}%`,
                  "--y": `${a.pos.y}%`,
                  "--mx": `${a.pos.mx}%`,
                  "--my": `${a.pos.my}%`,
                } as React.CSSProperties
              }
            >
              <span className="inline-flex h-8 items-center gap-2 whitespace-nowrap rounded-full border border-night-line bg-night-2/80 px-3 text-[12.5px] text-moon/85 lg:h-9 lg:text-[14px]">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-bright" aria-hidden="true" />
                {a.label}
              </span>
            </div>
          ))}

          <div className="lm-core absolute left-1/2 top-[82%] lg:top-[80%]">
            <div className="relative grid place-items-center">
              <span className="lm-glow absolute h-[520px] w-[520px] rounded-full opacity-50" style={{ background: "radial-gradient(closest-side, rgba(43,92,255,0.32), rgba(43,92,255,0.08) 55%, transparent)" }} aria-hidden="true" />
              <span className="lm-ring absolute h-5 w-5 rounded-full border border-blue-bright opacity-0" aria-hidden="true" />
              <span className="lm-ring absolute h-5 w-5 rounded-full border border-blue-bright opacity-0" aria-hidden="true" />
              <span className="relative h-5 w-5 rounded-full bg-blue shadow-[0_0_30px_6px_rgba(43,92,255,0.55)]" />
              <span className="lm-name absolute top-8 whitespace-nowrap text-[15px] font-medium text-blue-bright">{name}</span>
            </div>
          </div>
        </div>

        <div className="wrap relative flex h-full flex-col items-center justify-center pb-[6vh] text-center">
          <h2 className="text-[clamp(2.3rem,4.9vw,5rem)] font-[560] leading-[1.08] tracking-[-0.027em]" style={{ fontStretch: "96%" }}>
            <span className="lm-l1 block">{t.lina.l1}</span>{" "}
            <span className="lm-l2 block text-moon-2">{t.lina.l2}</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
