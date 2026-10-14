"use client";

import { usePathname } from "next/navigation";
import { gsap, useGSAP, ScrollTrigger, SplitText, MOTION_OK } from "@/lib/gsap";

/*
  Site-wide scroll motion, declared in markup so server components can use it:

    data-split            headline lines rise out of a mask as they enter
    data-reveal[=kind]    block enters: "up" (default), "fade", "start", "end", "scale"
    data-words            paragraph whose words light up as it scrolls past
    data-parallax=0.15    element drifts against the scroll by that factor
    data-draw=x|y         line grows along its axis as its parent scrolls through
    data-progress         bar that fills with page scroll (reading progress)

  Everything is visible without JavaScript and with reduced motion. Before this runs,
  CSS hides the marked elements (`.js:not(.fx-ready)`) so nothing flashes; a CSS
  fallback shows them anyway if the script never arrives.
  Bespoke scenes (sticky stages) animate themselves and do not use these attributes.
*/

const FROM: Record<string, (rtl: boolean) => gsap.TweenVars> = {
  up: () => ({ autoAlpha: 0, y: 34 }),
  fade: () => ({ autoAlpha: 0 }),
  start: (rtl) => ({ autoAlpha: 0, x: rtl ? 26 : -26 }),
  end: (rtl) => ({ autoAlpha: 0, x: rtl ? -26 : 26 }),
  scale: () => ({ autoAlpha: 0, y: 18, scale: 0.96 }),
};

export function ScrollFx() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const html = document.documentElement;
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        const rtl = html.dir === "rtl";

        // Headlines: lines (never letters, which would break Arabic joining) rise from a mask.
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 118,
                duration: 1.2,
                ease: "expo.out",
                stagger: 0.1,
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              }),
          });
        });

        // Blocks: one batch per moment, so things entering together stagger together.
        const blocks = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        blocks.forEach((el) => gsap.set(el, (FROM[el.dataset.reveal || "up"] ?? FROM.up)(rtl)));
        ScrollTrigger.batch(blocks, {
          start: "top 91%",
          once: true,
          onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1.1, ease: "expo.out", stagger: 0.085, overwrite: true }),
        });

        // Paragraphs read in as you scroll: each word lights up in turn.
        gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
          SplitText.create(el, {
            type: "words",
            autoSplit: true,
            onSplit: (self) =>
              gsap.fromTo(
                self.words,
                { opacity: 0.14 },
                { opacity: 1, ease: "none", stagger: 0.1, scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 52%", scrub: true } },
              ),
          });
        });

        // Depth: quiet drift against the scroll.
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const k = parseFloat(el.dataset.parallax || "0.15");
          gsap.fromTo(
            el,
            { y: () => k * 140 },
            { y: () => -k * 140, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true } },
          );
        });

        // Lines that draw themselves along with the content they connect.
        gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((el) => {
          const x = el.dataset.draw === "x";
          gsap.fromTo(
            el,
            x ? { scaleX: 0 } : { scaleY: 0 },
            {
              ...(x ? { scaleX: 1 } : { scaleY: 1 }),
              ease: "none",
              transformOrigin: x ? (rtl ? "100% 50%" : "0% 50%") : "50% 0%",
              scrollTrigger: { trigger: el.parentElement ?? el, start: "top 78%", end: "bottom 62%", scrub: 0.6 },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-progress]").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0 },
            { scaleX: 1, ease: "none", transformOrigin: rtl ? "100% 50%" : "0% 50%", scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.3 } },
          );
        });

        html.classList.add("fx-ready");
        return () => html.classList.remove("fx-ready");
      });

      return () => mm.revert();
    },
    { dependencies: [pathname] },
  );

  return null;
}
