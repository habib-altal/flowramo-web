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
*/
export function StageProgress({ tone = "light" }: { tone?: "light" | "dark" | "auto" }) {
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
