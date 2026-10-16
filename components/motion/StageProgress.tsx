"use client";

import { useRef } from "react";
import { useGSAP, ScrollTrigger } from "@/lib/gsap";
import { useI18n } from "../I18n";

/*
  The quiet guide on a pinned scroll story. While a sticky stage holds the screen, a short rail at the
  inline end fills with the story's progress, so a still screen never reads as a stuck or finished page.
  When the reader arrives (and, on wider screens, when they pause partway) a small "Keep scrolling" cue
  appears at the bottom and leaves as soon as they move.

  Place it as a direct child of the sticky stage. It follows the stage's scroller (the nearest .scrolly or
  section) from "top top" to "bottom bottom", and shows only while that stage really is sticky: not where
  the story becomes a normal list, nor with reduced motion. Without JS it stays hidden; the page is complete.

  The rail is centred on the stage's height. Where content runs to the screen edge at that height (a sideways
  track, a full-bleed board), pass `anchor`, a selector inside the stage, and the rail centres on that element
  instead, typically the headline, whose side of the screen is clear. The anchor applies from `anchorFrom` up
  (desktop by default): below it the headline usually spans the full width and the centre is the clear spot.
*/
export function StageProgress({
  tone = "light",
  anchor,
  anchorFrom = "(min-width: 1024px)",
}: {
  tone?: "light" | "dark" | "auto";
  anchor?: string;
  anchorFrom?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useI18n();

  useGSAP(() => {
    const el = ref.current!;
    const stage = el.parentElement!;
    const host = el.closest<HTMLElement>(".scrolly, section");
    if (!host) return;
    const cue = el.querySelector<HTMLElement>(".sp-cue")!;
    const wide = window.matchMedia("(min-width: 768px)");
    const isPinned = () => getComputedStyle(stage).position === "sticky" && host.offsetHeight > window.innerHeight * 1.5;
    let pinned = isPinned();
    let idle = 0;

    const place = () => {
      const a = anchor && window.matchMedia(anchorFrom).matches ? stage.querySelector<HTMLElement>(anchor) : null;
      if (!a || !a.offsetHeight) return el.style.removeProperty("--sp-y");
      const s = stage.getBoundingClientRect();
      const r = a.getBoundingClientRect();
      el.style.setProperty("--sp-y", `${Math.round(r.top - s.top + r.height / 2)}px`);
    };
    place();

    const showCue = (on: boolean) => cue.toggleAttribute("data-on", on);
    const sync = (self: ScrollTrigger) => {
      const on = pinned && self.isActive;
      el.toggleAttribute("data-on", on);
      el.style.setProperty("--p", self.progress.toFixed(4));
      window.clearTimeout(idle);
      showCue(on && self.progress < 0.025);
      // Someone who stops partway gets the cue again; phones keep the bottom clear for the story's newest message.
      if (on && wide.matches && self.progress < 0.9) idle = window.setTimeout(() => showCue(self.isActive), 3200);
    };

    ScrollTrigger.create({
      trigger: host,
      start: "top top",
      end: "bottom bottom",
      onUpdate: sync,
      onToggle: sync,
      onRefresh: (self) => {
        pinned = isPinned();
        place();
        sync(self);
      },
    });
    return () => window.clearTimeout(idle);
  });

  return (
    <div ref={ref} className="sp" data-tone={tone} aria-hidden="true">
      <div className="sp-rail">
        <div className="sp-fill" />
        <div className="sp-dot" />
      </div>
      <div className="sp-cue">
        <svg className="sp-cue-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 1.5v8.5M2.5 6.6 6 10.1l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{t.scrollCue}</span>
      </div>
    </div>
  );
}
