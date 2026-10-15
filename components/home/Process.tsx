"use client";

import { useRef } from "react";
import { LifeBuoy, Map, ScrollText, Server, Workflow } from "lucide-react";
import { gsap, useGSAP, DESKTOP } from "@/lib/gsap";
import { useI18n } from "../I18n";
import { useHome } from "../PageDict";
import { StageProgress } from "../motion/StageProgress";

const ICONS = [Map, ScrollText, Workflow, Server, LifeBuoy];

/*
  Five steps in order. Desktop (and iPad landscape): the section holds in a sticky stage
  and the steps travel sideways with the scroll, a blue rail filling as each one passes.
  Below 1024px they run down a vertical rail that draws itself.
*/
export function Process() {
  const root = useRef<HTMLElement>(null);
  const { rtl } = useI18n();
  const t = useHome().process;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(root);
      mm.add(DESKTOP, () => {
        const track = q(".pr-track")[0];
        // Travel until the last step meets the far edge of the content column.
        const distance = () => Math.max(0, track.scrollWidth - (track.parentElement as HTMLElement).clientWidth);
        const nodes = q(".pr-num");
        const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.8, invalidateOnRefresh: true } });
        // The rail runs inside the track from the first number to the last, so its blue tip reaches number i at exactly i / (n - 1).
        tl.to(track, { x: () => (rtl ? 1 : -1) * distance(), ease: "none", duration: 1 }, 0).fromTo(
          q(".pr-rail-fill"),
          { scaleX: 0 },
          { scaleX: 1, ease: "none", duration: 1, transformOrigin: rtl ? "100% 50%" : "0% 50%" },
          0,
        );
        nodes.forEach((n, i) => {
          if (i === 0) return;
          tl.fromTo(n, { backgroundColor: "#ffffff", color: "#0050f8" }, { backgroundColor: "#0050f8", color: "#ffffff", duration: 0.03, immediateRender: true }, i / (nodes.length - 1) - 0.015);
        });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [rtl] },
  );

  return (
    <section ref={root} id="how" className="pin-host relative border-t border-line lg:h-[380vh]" aria-labelledby="process-title">
      <div className="pin-stage py-[clamp(96px,12vw,150px)] lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:overflow-hidden lg:py-0 lg:pt-[68px]">
        <StageProgress />
        <div className="wrap w-full">
          <h2 id="process-title" className="display-md max-w-[22ch]" data-split>
            {t.h2}
          </h2>
        </div>

        {/* Desktop: a horizontal track inside the wrap's measure. */}
        <div className="wrap pr-view mt-[clamp(40px,7vh,80px)] hidden lg:block">
          <div className="relative">
            <div className="pr-track relative w-max will-change-transform">
            <span className="absolute end-[calc(min(430px,34vw)-28px)] start-[28px] top-[27px] h-px bg-line" aria-hidden="true" />
            <span className="pr-rail-fill absolute end-[calc(min(430px,34vw)-28px)] start-[28px] top-[27px] h-px origin-left bg-blue rtl:origin-right" aria-hidden="true" />
            <ol className="relative flex gap-6">
              {t.steps.map((s, i) => {
                const Icon = ICONS[i];
                return (
                  <li key={s.name} className="w-[min(430px,34vw)] flex-none">
                    <span className="pr-num relative z-10 grid h-14 w-14 place-items-center rounded-full border-[1.5px] border-blue bg-blue text-[17px] font-semibold tabular-nums text-white" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div className="mt-7 flex h-[clamp(250px,40vh,330px)] flex-col rounded-[28px] border border-line bg-card p-8">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-soft text-blue-deep" aria-hidden="true">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      {/* The phone list below carries the step headings; this desktop copy is a paragraph so each name is a heading once. */}
                      <p className="mt-6 text-[clamp(1.4rem,1.9vw,1.75rem)] font-[560] leading-tight tracking-[-0.025em]">{s.name}</p>
                      <p className="mt-3 text-[15.5px] leading-[1.62] text-ink-2">{s.text}</p>
                      <p className="mt-auto flex items-center gap-2 pt-5 text-[13.5px] font-medium text-blue-deep">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
                        {s.out}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
            </div>
          </div>
        </div>

        {/* Below 1024px: numbered steps that play in order, each line drawing on to the next number. */}
        <ol className="pr-list wrap relative mt-14 grid gap-10 ps-[calc(clamp(20px,4vw,40px)+52px)] lg:hidden" data-steps>
          {t.steps.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <li key={s.name} className="relative" data-step>
                {i < t.steps.length - 1 && <span className="absolute -bottom-10 -start-[34.5px] top-9 w-px bg-blue" data-step-link aria-hidden="true" />}
                <span className="absolute -start-[52px] top-0 grid h-9 w-9 place-items-center rounded-full border-[1.5px] border-blue bg-paper text-[13px] font-semibold tabular-nums text-blue" data-step-dot aria-hidden="true">
                  {i + 1}
                </span>
                <div data-step-body>
                  <div className="flex items-center gap-3">
                    <h3 className="text-[19px] font-[580] leading-tight tracking-[-0.015em]">{s.name}</h3>
                    <Icon size={17} strokeWidth={1.75} className="text-ink-3" aria-hidden="true" />
                  </div>
                  <p className="mt-2.5 max-w-[34rem] text-[15.5px] leading-[1.62] text-ink-2">{s.text}</p>
                  <p className="mt-3 flex items-center gap-2 text-[13.5px] font-medium text-blue-deep">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
                    {s.out}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
