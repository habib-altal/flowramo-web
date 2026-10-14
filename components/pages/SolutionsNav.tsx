"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

type Item = { id: string; name: string };

/** The six capabilities as a bar that stays under the site nav and marks the one you are reading. */
export function SolutionsNav({ label, items }: { label: string; items: Item[] }) {
  const [active, setActive] = useState<string | null>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers = items.map((c) =>
      ScrollTrigger.create({
        trigger: `#${c.id}`,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => self.isActive && setActive(c.id),
      }),
    );
    return () => triggers.forEach((t) => t.kill());
  }, [items]);

  // Keep the current chip in view on narrow screens, where the bar scrolls sideways.
  useEffect(() => {
    if (!active) return;
    bar.current?.querySelector<HTMLElement>(`[data-id="${active}"]`)?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [active]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string, o?: object) => void } }).__lenis;
    if (!lenis) return;
    e.preventDefault();
    lenis.scrollTo(`#${id}`, { offset: -140, duration: 1.2 });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <nav aria-label={label} className="sticky top-[68px] z-30 bg-paper/85 backdrop-blur-xl" data-reveal="fade">
      <div ref={bar} className="wrap flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((c) => (
          <a
            key={c.id}
            data-id={c.id}
            href={`#${c.id}`}
            onClick={(e) => go(e, c.id)}
            aria-current={active === c.id ? "true" : undefined}
            className={`chip h-9 flex-none px-3.5 text-[14px] transition-colors duration-300 ${
              active === c.id ? "border-blue bg-blue-soft text-blue-deep" : "text-ink-2 hover:border-ink-3 hover:text-ink"
            }`}
          >
            {c.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
