"use client";

import { useRef } from "react";
import { Database, KeyRound, Server, Users } from "lucide-react";
import { gsap, useGSAP, SplitText, TABLET_UP, PHONE, focusFrom, FOCUS_TO } from "@/lib/gsap";
import { MARK_PATH, MARK_VIEWBOX } from "../brand-paths";
import { useI18n } from "../I18n";
import { useHome } from "../PageDict";

/*
  "Yours to keep", drawn: a boundary marked as your infrastructure draws itself, the
  system sits inside it, and your accounts, your data and the no-subscription key move
  in from outside and connect. Each ledger row lights as its piece docks. Scrubbed in a
  sticky stage on tablet and desktop, played once on phones. Markup is the final state.
*/

const [mvx, mvy, mvs] = MARK_VIEWBOX.split(" ").map(Number);
// Tile slots in a 480 × 480 drawing, and where each tile starts outside the boundary.
const SLOTS = [
  { x: 128, y: 120, fx: -150, fy: -110, icon: Users },
  { x: 352, y: 120, fx: 150, fy: -110, icon: Database },
  { x: 240, y: 378, fx: 0, fy: 150, icon: KeyRound },
];
const LINKS = ["M 196 240 H 128 V 152", "M 284 240 H 352 V 152", "M 240 292 V 346"];

export function Ownership() {
  const root = useRef<HTMLElement>(null);
  const t = useHome().own;
  const { rtl } = useI18n();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(root);

      const build = (tl: gsap.core.Timeline) => {
        const k = rtl ? -1 : 1;
        tl.from(q(".ow-border"), { drawSVG: "0%", duration: 1.2, ease: "power1.inOut" }, 0.3)
          .from(q(".ow-label"), { autoAlpha: 0, y: 10, duration: 0.5 }, 0.6)
          .to(q(".ow-row")[0], { color: "var(--color-ink)", duration: 0.3 }, 0.6)
          .from(q(".ow-row-dot")[0], { scale: 0, duration: 0.3 }, 0.6)
          .from(q(".ow-core"), { autoAlpha: 0, scale: 0.8, transformOrigin: "50% 50%", duration: 0.6, ease: "back.out(1.6)" }, 1.2);
        SLOTS.forEach((s, i) => {
          const at = 1.9 + i * 0.9;
          tl.from(q(".ow-tile")[i], { x: s.fx * k, y: s.fy, autoAlpha: 0, scale: 0.92, duration: 0.8, ease: "power3.out" }, at)
            .from(q(".ow-link")[i], { drawSVG: "0%", duration: 0.5, ease: "power1.inOut" }, at + 0.6)
            .to(q(".ow-row")[i + 1], { color: "var(--color-ink)", duration: 0.3 }, at + 0.5)
            .from(q(".ow-row-dot")[i + 1], { scale: 0, duration: 0.3 }, at + 0.5);
        });
        tl.fromTo(q(".ow-glow"), { opacity: 0 }, { opacity: 1, duration: 0.6 }, 4.7).to({}, { duration: 0.6 });
      };

      mm.add(TABLET_UP, () => {
        gsap.set(q(".ow-row"), { color: "var(--color-ink-3)" });
        const h2 = q(".ow-h2")[0];
        const split = SplitText.create(h2, { type: "words" });
        const tl = gsap.timeline({ defaults: { ease: "power2.out" }, scrollTrigger: { trigger: root.current, start: "top 30%", end: "bottom bottom", scrub: 0.7 } });
        tl.fromTo(split.words, focusFrom(h2), { ...FOCUS_TO, duration: 0.7, stagger: 0.06 }, 0).fromTo(q(".ow-sub"), { autoAlpha: 0, filter: "blur(6px)" }, { ...FOCUS_TO, duration: 0.6 }, 0.3);
        build(tl);
        return () => split.revert();
      });

      mm.add(PHONE, () => {
        gsap.set(q(".ow-row"), { color: "var(--color-ink-3)" });
        const tl = gsap.timeline({ defaults: { ease: "power2.out" }, scrollTrigger: { trigger: q(".ow-art")[0], start: "top 70%", once: true } });
        build(tl);
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [rtl] },
  );

  const k = 104 / mvs;
  return (
    <section ref={root} className="relative bg-paper-2 md:h-[300vh]" aria-labelledby="own-title">
      <div className="py-[clamp(96px,12vw,150px)] md:sticky md:top-0 md:flex md:h-svh md:items-center md:py-0 md:pt-[68px]">
        <div className="wrap grid w-full items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10 lg:gap-20">
          <div>
            <h2 id="own-title" className="ow-h2 display-lg">
              {t.h2}
            </h2>
            <p className="ow-sub lede mt-5 max-w-[24rem]">{t.sub}</p>
            <dl className="mt-[clamp(28px,4.5vh,48px)] border-t border-line-strong">
              {t.items.map((it, i) => (
                <div key={it.title} className="ow-row grid gap-1 border-b border-line-strong py-[clamp(14px,2.4vh,22px)] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-6">
                  <dt className="flex items-center gap-2.5 text-[clamp(1.05rem,1.5vw,1.25rem)] font-[560] leading-tight tracking-[-0.02em]">
                    <span className="ow-row-dot h-1.5 w-1.5 flex-none rounded-full bg-blue" aria-hidden="true" />
                    {it.title}
                  </dt>
                  <dd className="text-[15.5px] leading-[1.55] text-ink-2">{it.text}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* The drawing */}
          <div className="ow-art relative mx-auto aspect-square w-full max-w-[min(480px,62svh)] max-md:order-first max-md:max-w-[340px]" aria-hidden="true">
            <svg viewBox="0 0 480 480" className="absolute inset-0 h-full w-full overflow-visible">
              <rect className="ow-glow" x="24" y="24" width="432" height="432" rx="34" fill="color-mix(in oklab, var(--color-blue) 5%, transparent)" stroke="none" opacity="1" />
              <rect className="ow-border" x="24" y="24" width="432" height="432" rx="34" fill="none" stroke="var(--color-blue)" strokeWidth="1.5" />
              {LINKS.map((d) => (
                <path key={d} className="ow-link" d={rtl ? mirror(d) : d} fill="none" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              ))}
              <g className="ow-core">
                <rect x="188" y="188" width="104" height="104" rx="26" fill="var(--color-card)" stroke="var(--color-line)" />
                <g transform={`translate(${240 - (mvs * k * 0.56) / 2} ${240 - (mvs * k * 0.56) / 2}) scale(${k * 0.56}) translate(${-mvx} ${-mvy})`}>
                  <path d={MARK_PATH} fill="var(--color-blue)" fillRule="evenodd" />
                </g>
              </g>
            </svg>

            <span className="ow-label absolute start-[9%] top-[5%] -translate-y-1/2 rounded-full border border-blue/30 bg-paper-2 px-3 py-1.5 text-[13px] font-medium text-blue-deep">
              <span className="inline-flex items-center gap-1.5">
                <Server size={14} strokeWidth={2} />
                {t.items[0].title}
              </span>
            </span>

            {SLOTS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="ow-tile absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 whitespace-nowrap rounded-2xl border border-line bg-card px-3.5 py-3 text-[clamp(12.5px,1.2vw,14.5px)] font-medium shadow-[0_18px_40px_-30px_rgba(12,12,11,0.4)]"
                  style={{ left: `${((rtl ? 480 - s.x : s.x) / 480) * 100}%`, top: `${(s.y / 480) * 100}%` }}
                >
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-blue-soft text-blue-deep">
                    <Icon size={15} strokeWidth={2} />
                  </span>
                  {t.items[i + 1].title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mirror an "M x y H x V y" path across the 480-wide drawing for right-to-left pages. */
function mirror(d: string) {
  return d.replace(/([MH]) (\d+)/g, (_, c: string, x: string) => `${c} ${480 - Number(x)}`);
}
