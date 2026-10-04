"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { DemoButton, MeetLinaButton } from "../Demo";
import { Logo } from "../Logo";

export function Closing() {
  const root = useRef<HTMLElement>(null);

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
    <section ref={root} id="start" className="flex min-h-[100svh] flex-col" aria-label="Get started">
      <div className="wrap flex flex-1 flex-col items-center justify-center py-32 text-center">
        <h2 className="display-xl max-w-[13ch]">
          <span className="c-1 block">Your patients are already talking.</span>
        </h2>
        <p className="c-2 mt-6 text-[clamp(1.6rem,3vw,2.6rem)] font-[520] tracking-[-0.03em] text-ink-2">Make every conversation count.</p>
        <div className="c-3 mt-10 flex flex-wrap justify-center gap-3">
          <MeetLinaButton className="btn btn-line" />
          <DemoButton className="btn btn-ink">Book a private demo</DemoButton>
        </div>
      </div>
      <footer className="wrap flex flex-wrap items-center justify-between gap-4 pb-8 text-[13.5px] text-ink-3">
        <Logo className="text-ink" />
        <span>© 2026 HABIB ALTAL LTD</span>
      </footer>
    </section>
  );
}
