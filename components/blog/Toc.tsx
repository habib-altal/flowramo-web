"use client";

import { useEffect, useState } from "react";
import type Lenis from "lenis";

type Item = { id: string; text: string };

const lenis = () => (window as unknown as { __lenis?: Lenis }).__lenis;

/** Table of contents that tracks the section being read. */
export function Toc({ items, label }: { items: Item[]; label: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => !!el);
    const onScroll = () => {
      const line = window.innerHeight * 0.3;
      let current = headings[0]?.id;
      for (const h of headings) if (h.getBoundingClientRect().top <= line) current = h.id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <nav aria-label={label} className="text-[14px]">
      <p className="mb-3 font-medium text-ink">{label}</p>
      <ol className="flex flex-col border-s border-line">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={(e) => {
                const el = document.getElementById(item.id);
                const l = lenis();
                if (!el || !l) return;
                e.preventDefault();
                l.scrollTo(el, { offset: -96, duration: 1.1 });
                history.replaceState(null, "", `#${item.id}`);
              }}
              className="-ms-px block border-s border-transparent py-1.5 ps-4 leading-snug text-ink-3 transition-colors hover:text-ink aria-[current=location]:border-blue aria-[current=location]:text-ink"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Thin blue reading-progress line under the nav. */
export function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]" aria-hidden="true">
      <div className="h-full origin-left bg-blue rtl:origin-right" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
