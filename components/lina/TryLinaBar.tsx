"use client";

import { useRef } from "react";
import { useGSAP, ScrollTrigger } from "@/lib/gsap";
import { TryLinaButton } from "./TryLina";

/**
 * Phones only: once the hero has scrolled away, "Try Lina on WhatsApp" stays in reach at the bottom of the screen.
 * It steps aside for the closing section, which has its own buttons. Without JS it never shows (the hero button is enough).
 */
export function TryLinaBar() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current!;
    ScrollTrigger.create({
      start: () => window.innerHeight * 0.9,
      endTrigger: "#start",
      end: "top bottom",
      onToggle: (self) => el.toggleAttribute("data-on", self.isActive),
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
