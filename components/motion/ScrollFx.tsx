"use client";

import { usePathname } from "next/navigation";
import { gsap, useGSAP, ScrollTrigger, SplitText, MOTION_OK, focusFrom, FOCUS_TO } from "@/lib/gsap";

/*
  Site-wide scroll motion, declared in markup so server components can use it:

    data-split            headline whose words sharpen out of a soft blur, in place, as it enters
    data-reveal[=kind]    block enters: "up" (default; text sharpens in place, other blocks lift a little),
                          "fade", "start", "end", "scale"
    data-words            paragraph whose words light up as it scrolls past
    data-parallax=0.15    element drifts against the scroll by that factor
    data-steps            numbered list that plays in order: each [data-step-dot] appears, its
                          [data-step-body] sharpens, then its [data-step-link] draws down to the next dot
    data-progress         bar that fills with page scroll (reading progress)

  Everything is visible without JavaScript and with reduced motion. Before this runs,
  CSS hides the marked elements (`.js:not(.fx-ready)`) so nothing flashes; a CSS
  fallback shows them anyway if the script never arrives.
  Bespoke scenes (sticky stages) animate themselves and do not use these attributes.
*/

const TEXT = new Set(["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE"]);

const FROM: Record<string, (rtl: boolean, el: HTMLElement) => gsap.TweenVars> = {
  up: (_, el) => (TEXT.has(el.tagName) ? { autoAlpha: 0, filter: "blur(6px)" } : { autoAlpha: 0, y: 24 }),
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

        // Headlines: whole words (never letters, which would break Arabic joining) sharpen in reading order.
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          const split = SplitText.create(el, { type: "words" });
          gsap.fromTo(split.words, focusFrom(el), {
            ...FOCUS_TO,
            duration: 1.25,
            ease: "power2.out",
            stagger: 0.065,
            clearProps: "filter",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        // Blocks: one batch per moment, so things entering together stagger together.
        const blocks = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        blocks.forEach((el) => gsap.set(el, (FROM[el.dataset.reveal || "up"] ?? FROM.up)(rtl, el)));
        ScrollTrigger.batch(blocks, {
          start: "top 91%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: (_: number, el: HTMLElement) => (el.style.filter ? "blur(0px)" : "none"),
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.085,
              overwrite: true,
              clearProps: "filter",
            }),
        });

        // Numbered steps: a number appears, its text sharpens, and only then does the line draw on to the next number.
        gsap.utils.toArray<HTMLElement>("[data-steps]").forEach((list) => {
          const tl = gsap.timeline({ scrollTrigger: { trigger: list, start: "top 86%", once: true } });
          list.querySelectorAll<HTMLElement>("[data-step]").forEach((step, i) => {
            const at = i * 0.5;
            const dot = step.querySelector("[data-step-dot]");
            const body = step.querySelector("[data-step-body]");
            const link = step.querySelector("[data-step-link]");
            if (dot) tl.fromTo(dot, { autoAlpha: 0, scale: 0.4 }, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(2.2)" }, at);
            if (body) tl.fromTo(body, { autoAlpha: 0, filter: "blur(5px)" }, { autoAlpha: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out", clearProps: "filter" }, at + 0.08);
            if (link) tl.fromTo(link, { scaleY: 0 }, { scaleY: 1, transformOrigin: "50% 0%", duration: 0.3, ease: "power1.inOut" }, at + 0.18);
          });
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
