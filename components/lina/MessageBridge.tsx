"use client";

import { gsap, useGSAP, DESKTOP, docPos, relPos } from "@/lib/gsap";

/**
 * Desktop only: the patient's first message floats out of the hero and lands
 * as the first line of the journey conversation, so the story is visibly one
 * continuous thread.
 */
export function MessageBridge() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(DESKTOP, () => {
      const wrap = document.getElementById("hero-bubble-wrap");
      const bubble = document.getElementById("hero-bubble");
      const first = document.getElementById("journey-first");
      const section = document.getElementById("journey");
      const stage = section?.querySelector<HTMLElement>(".stage");
      if (!wrap || !bubble || !first || !section || !stage) return;

      const target = () => {
        const b = docPos(bubble);
        const f = relPos(first, stage);
        const j = docPos(section).y;
        return { x: f.x - b.x, y: f.y - b.y + j };
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          start: 0,
          end: () => docPos(section).y,
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });
      tl.to(wrap, { x: () => target().x, y: () => target().y, ease: "none", duration: 1 }, 0)
        .to(wrap, { autoAlpha: 0, duration: 0.06, ease: "none" }, 0.94)
        .fromTo(first, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.06, ease: "none", immediateRender: true }, 0.94);
    });
    return () => mm.revert();
  });

  return null;
}
