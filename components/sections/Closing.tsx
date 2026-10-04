"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { DemoButton, MeetLinaButton } from "../Demo";
import { Footer } from "../Footer";
import { useI18n } from "../I18n";

export function Closing() {
  const root = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const c = t.closing;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 75%", end: "center 55%", scrub: 0.6 } });
        tl.from(q(".c-1"), { autoAlpha: 0, y: 30, duration: 1 })
          .from(q(".c-2"), { autoAlpha: 0, y: 30, duration: 1 }, 0.7)
          .from(q(".c-3"), { autoAlpha: 0, y: 16, duration: 0.8 }, 1.3);
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="start" className="flex min-h-[100svh] flex-col" aria-label={c.l1}>
      <div className="wrap flex flex-1 flex-col items-center justify-center py-32 text-center">
        <h2 className="display-xl max-w-[13ch]">
          <span className="c-1 block">{c.l1}</span>
        </h2>
        <p className="c-2 mt-6 text-[clamp(1.6rem,3vw,2.6rem)] font-[520] tracking-[-0.03em] text-ink-2">{c.l2}</p>
        <div className="c-3 mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <MeetLinaButton className="btn btn-line">{c.primary}</MeetLinaButton>
            <DemoButton className="btn btn-ink">{c.secondary}</DemoButton>
          </div>
          <p className="text-[13.5px] text-ink-3">{c.note}</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
