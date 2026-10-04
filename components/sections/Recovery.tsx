"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useI18n } from "../I18n";

const COLS = 15;
const ROWS = 7;
const GAP = 38;
const X0 = 120;
const Y0 = 40;
const W = X0 + (COLS - 1) * GAP + 40;
const H = Y0 + (ROWS - 1) * GAP + 40;

// Deterministic "went quiet" set, Sara, and the ones Lina brings back.
const QUIET = new Set([3, 9, 17, 22, 26, 31, 38, 44, 47, 51, 58, 61, 67, 72, 79, 84, 88, 93, 97, 101]);
const SARA = 51;
const RECOVERED = [9, 26, 44, 72, 88, 101, 17];

const dots = Array.from({ length: COLS * ROWS }, (_, i) => ({
  i,
  cx: X0 + (i % COLS) * GAP,
  cy: Y0 + Math.floor(i / COLS) * GAP,
}));
const sara = dots[SARA];
const LINA = { x: 34, y: H / 2 };
const PATH = `M ${LINA.x} ${LINA.y} C ${LINA.x + 120} ${LINA.y - 10}, ${sara.cx - 160} ${sara.cy + 60}, ${sara.cx} ${sara.cy}`;


export function Recovery() {
  const root = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const r = t.recovery;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        const quiet = q(".rc-quiet");
        const saraDot = q(".rc-sara");
        const back = q(".rc-back");

        // Start: every patient active (ink), nothing recovered yet.
        gsap.set([...quiet, ...saraDot, ...back], { fill: "#0c0c0b" });

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.7 },
        });
        tl.fromTo(q(".rc-dot"), { autoAlpha: 0, scale: 0.4, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, duration: 1, stagger: { amount: 0.8, from: "random" } }, 0)
          .fromTo(q(".rc-l2"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 1.2)
          .to([...quiet, ...saraDot, ...back], { fill: "#d4d2ca", duration: 0.5, stagger: { amount: 0.9, from: "random" } }, 1.3)
          .fromTo(q(".rc-legend"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, 2)
          .fromTo(q(".rc-ring"), { autoAlpha: 0, scale: 0.5, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, duration: 0.5 }, 2.6)
          .fromTo(q(".rc-card"), { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 2.7)
          .fromTo(q(".rc-lina"), { autoAlpha: 0, scale: 0.5, transformOrigin: "50% 50%" }, { autoAlpha: 1, scale: 1, duration: 0.5 }, 3.2)
          .fromTo(q(".rc-path"), { drawSVG: "0%" }, { drawSVG: "100%", duration: 1.2, ease: "power1.inOut" }, 3.5);
        q(".rc-step").forEach((el, i) => {
          tl.fromTo(el, { autoAlpha: 0, x: -8 }, { autoAlpha: 1, x: 0, duration: 0.4 }, 4.8 + i * 0.8);
        });
        tl.to(saraDot, { fill: "#2b5cff", duration: 0.4 }, 6.4)
          .to(q(".rc-ring"), { stroke: "#2b5cff", duration: 0.4 }, 6.4)
          .fromTo(q(".rc-badge"), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 6.7)
          .to(back, { fill: "#2b5cff", duration: 0.4, stagger: 0.18 }, 7.3)
          .fromTo(q(".rc-close"), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 8.4)
          .to({}, { duration: 0.8 });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="recovery" className="scrolly h-[380vh]" aria-label={r.l2}>
      <div className="stage">
        <div className="wrap grid h-full content-center gap-8 pb-8 pt-[84px] lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center lg:gap-12">
          <div className="min-w-0">
            <h2 className="rc-title text-[clamp(2.1rem,4.2vw,4.1rem)] font-[560] leading-[1] tracking-[-0.042em]" style={{ fontStretch: "92%" }}>
              <span className="block">{r.l1}</span>
              <span className="rc-l2 block text-ink-3">{r.l2}</span>
            </h2>
            <div className="rc-legend mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-ink-2">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-ink" /> {r.legend.active}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d4d2ca]" /> {r.legend.quiet}
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue" /> {r.legend.recovered}
              </span>
            </div>
            <p className="rc-close lede mt-8 max-w-[28rem] text-ink">{r.close}</p>
          </div>

          <div className="relative min-w-0">
            <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full overflow-visible" role="img" aria-label={r.aria}>
              <path className="rc-path" d={PATH} fill="none" stroke="#2b5cff" strokeWidth="1.6" strokeLinecap="round" />
              {dots.map((d) => {
                const cls =
                  d.i === SARA ? "rc-sara" : RECOVERED.includes(d.i) ? "rc-back" : QUIET.has(d.i) ? "rc-quiet" : "";
                const fill = d.i === SARA || RECOVERED.includes(d.i) ? "#2b5cff" : QUIET.has(d.i) ? "#d4d2ca" : "#0c0c0b";
                return <circle key={d.i} className={`rc-dot ${cls}`} cx={d.cx} cy={d.cy} r={6.5} fill={fill} />;
              })}
              <circle className="rc-ring" cx={sara.cx} cy={sara.cy} r={15} fill="none" stroke="#0c0c0b" strokeWidth="1.5" />
              <g className="rc-lina">
                <circle cx={LINA.x} cy={LINA.y} r={22} fill="#2b5cff" opacity="0.12" />
                <circle cx={LINA.x} cy={LINA.y} r={9} fill="#2b5cff" />
                <text x={LINA.x} y={LINA.y + 40} textAnchor="middle" className="fill-blue font-mono text-[13px] tracking-[0.2em]">
                  {t.lina.core}
                </text>
              </g>
            </svg>

            <div
              className="rc-card relative mx-auto mt-5 w-full max-w-[320px] rounded-[20px] border border-line bg-card p-4 shadow-[0_24px_60px_-30px_rgba(12,12,11,0.45)] lg:absolute lg:left-[var(--l)] lg:top-[var(--t)] lg:mt-0 lg:w-[290px]"
              style={{ "--l": `${((sara.cx + 24) / W) * 100}%`, "--t": `${((sara.cy + 20) / H) * 100}%` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="text-[17px] font-[580] tracking-[-0.02em]">{r.card.name}</span>
                <span className="rc-badge rounded-full bg-blue px-2.5 py-1 text-[11.5px] font-medium text-white">{r.card.badge}</span>
              </div>
              <div className="mt-0.5 text-[13.5px] text-ink-2">{r.card.meta}</div>
              <ul className="mt-3 flex flex-col gap-1.5 border-t border-line pt-3">
                {r.card.steps.map((s) => (
                  <li key={s} className="rc-step flex items-center gap-2 text-[13.5px] text-ink-2">
                    <Check size={14} className="text-blue" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
