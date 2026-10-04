"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { DemoButton } from "./Demo";
import { scrollToId } from "./SmoothScroll";
import { ScrollTrigger } from "@/lib/gsap";

const LINKS = [
  { label: "Product", id: "product" },
  { label: "Lina", id: "lina" },
  { label: "Solutions", id: "lifecycle" },
  { label: "Resources", id: "integrations" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Flip the nav to light-on-dark while a dark section sits under it.
    const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-nav='dark']")).map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 36px",
        end: "bottom 36px",
        onToggle: (self) => setDark(self.isActive),
      }),
    );
    return () => {
      window.removeEventListener("scroll", onScroll);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const go = (id: string) => {
    setMenu(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        dark ? "text-moon" : "text-ink"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div
        className={`absolute inset-0 -z-10 transition-all duration-300 ${
          scrolled ? (dark ? "bg-night/70 backdrop-blur-xl" : "bg-paper/75 backdrop-blur-xl") : "bg-transparent"
        } ${scrolled ? (dark ? "border-b border-night-line" : "border-b border-line/70") : "border-b border-transparent"}`}
      />
      <nav className="wrap flex h-[68px] items-center justify-between" aria-label="Main">
        <a href="#top" onClick={(e) => (e.preventDefault(), go("top"))} aria-label="Flowramo home">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => (e.preventDefault(), go(l.id))}
                className={`rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                  dark ? "text-moon-2 hover:text-moon" : "text-ink-2 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <DemoButton className={`btn hidden h-10 px-[18px] text-[14.5px] sm:inline-flex ${dark ? "btn-moon" : "btn-ink"}`} />
          <button
            className="grid h-10 w-10 place-items-center rounded-full md:hidden"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
          >
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menu && (
        <div className="wrap md:hidden">
          <div className="mb-3 flex flex-col gap-1 rounded-3xl border border-line bg-paper p-3 text-ink shadow-[0_20px_50px_-24px_rgba(12,12,11,0.3)]">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => (e.preventDefault(), go(l.id))}
                className="rounded-2xl px-4 py-3 text-[17px] font-medium hover:bg-paper-2"
              >
                {l.label}
              </a>
            ))}
            <DemoButton className="btn btn-ink mt-1 w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
