"use client";

import { useRef } from "react";
import { useGSAP, ScrollTrigger } from "@/lib/gsap";
import { TryLinaButton } from "./TryLina";

/** True while a scroll story's sticky stage fills the screen (its section between "top top" and "bottom bottom"). */
function stagePinned() {
  const vh = window.innerHeight;
  for (const el of document.querySelectorAll<HTMLElement>(".scrolly")) {
    const stage = el.querySelector<HTMLElement>(":scope > .stage");
    // Reduced motion (and hidden desktop-only stories) leave the stage in normal flow: nothing is pinned.
    if (!stage || !el.offsetHeight || getComputedStyle(stage).position !== "sticky") continue;
    const r = el.getBoundingClientRect();
    if (r.top <= 40 && r.bottom >= vh - 40) return true;
  }
  return false;
}

/**
 * Phones only: once the hero has scrolled away, "Try Lina on WhatsApp" stays in reach at the bottom of the screen.
 * It steps aside while a scroll story is pinned (its newest message lands at the bottom, where the bar would sit)
 * and for the closing section, which has its own buttons. Without JS it never shows (the hero button is enough).
 */
export function TryLinaBar() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current!;
    let shown: boolean | null = null;
    const update = (inRange: boolean) => {
      const on = inRange && el.offsetWidth > 0 && !stagePinned();
      if (on === shown) return;
      shown = on;
      el.toggleAttribute("data-on", on);
    };
    ScrollTrigger.create({
      start: () => window.innerHeight * 0.9,
      endTrigger: "#start",
      end: "top bottom",
      onToggle: (self) => update(self.isActive),
      onUpdate: (self) => update(self.isActive),
      onRefresh: (self) => update(self.isActive),
    });
  });

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 translate-y-full px-4 pb-[max(14px,env(safe-area-inset-bottom))] pt-3 opacity-0 transition duration-300 ease-out data-[on]:pointer-events-auto data-[on]:translate-y-0 data-[on]:opacity-100 motion-reduce:transition-none md:hidden"
    >
      <TryLinaButton className="btn btn-blue w-full shadow-[0_14px_40px_-12px_rgba(0,80,248,0.55)]" />
    </div>
  );
}
