"use client";

import { useRef } from "react";
import { gsap, useGSAP, DESKTOP, MOBILE, MOTION_OK, relPos } from "@/lib/gsap";
import { DemoButton, MeetLinaButton } from "../Demo";
import { useI18n } from "../I18n";

function PatientBubble({ id }: { id?: string }) {
  const { t } = useI18n();
  return (
    <div id={id} className="w-[272px] max-w-full text-start">
      <div className="mb-1.5 flex items-center gap-2 ps-1 text-[12.5px] text-ink-3">
        <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
        {t.hero.bubbleMeta}
      </div>
      <div className="bubble bubble-patient shadow-[0_18px_40px_-28px_rgba(12,12,11,0.45)]">{t.hero.bubble}</div>
    </div>
  );
}

function BookedCard({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  return (
    <div className={`relative w-[264px] rounded-[22px] border border-line bg-card p-4 text-start shadow-[0_24px_60px_-34px_rgba(12,12,11,0.5)] ${className}`}>
      <span className="booked-ring pointer-events-none absolute -inset-px rounded-[22px] border border-blue opacity-0" aria-hidden="true" />
      <div className="flex items-center gap-2 text-[13px] font-medium text-blue">
        <span className="lina-dot" aria-hidden="true" />
        {t.hero.card.label}
      </div>
      <div className="mt-2 text-[22px] font-[580] leading-tight tracking-[-0.03em]">{t.hero.card.when}</div>
      <div className="mt-1 text-[13.5px] text-ink-2">{t.hero.card.who}</div>
    </div>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { t, rtl } = useI18n();
  const STATUSES = t.hero.statuses;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(root);

      mm.add(MOTION_OK, () => {
        gsap.to(q(".load-in"), { opacity: 1, y: 0, duration: 1.2, ease: "expo.out", stagger: 0.09, delay: 0.15 });
      });

      // Desktop: a thin blue thread carries the message from the patient to the booked slot.
      mm.add(DESKTOP, () => {
        const host = root.current!;
        const svg = host.querySelector<SVGSVGElement>(".hero-svg")!;
        const path = host.querySelector<SVGPathElement>(".hero-path")!;
        const dot = host.querySelector<SVGCircleElement>(".hero-traveler")!;
        const bubble = host.querySelector<HTMLElement>("#hero-bubble")!;
        const card = host.querySelector<HTMLElement>(".hero-card-desktop")!;
        const statuses = q(".hero-status-d");
        const k = rtl ? -1 : 1;

        const buildPath = () => {
          const W = host.offsetWidth;
          const H = host.offsetHeight;
          svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
          const b = relPos(bubble, host);
          const c = relPos(card, host);
          const sx = rtl ? b.x + bubble.offsetWidth - 34 : b.x + 34;
          const sy = b.y + bubble.offsetHeight + 10;
          const ex = rtl ? c.x + card.offsetWidth + 14 : c.x - 14;
          const ey = c.y + card.offsetHeight * 0.55;
          path.setAttribute("d", `M ${sx} ${sy} C ${sx - 10 * k} ${sy + H * 0.42}, ${ex - k * W * 0.42} ${ey + H * 0.2}, ${ex} ${ey}`);
        };
        buildPath();
        window.addEventListener("resize", buildPath);

        gsap.set(q(".hero-seq"), { opacity: 1 });
        gsap.set(path, { drawSVG: "0%" });
        gsap.set(dot, { opacity: 0 });
        gsap.set(card, { opacity: 0, y: 14, scale: 0.97 });
        gsap.set(statuses, { opacity: 0, y: 8 });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, delay: 1.4 });
        tl.to(dot, { opacity: 1, duration: 0.2 }, 0)
          .to(path, { drawSVG: "100%", duration: 3.4, ease: "power1.inOut" }, 0)
          .to(dot, { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, duration: 3.4, ease: "power1.inOut" }, 0);
        STATUSES.forEach((_, i) => {
          const at = i * 1.1;
          tl.to(statuses[i], { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, at);
          if (i < STATUSES.length - 1) tl.to(statuses[i], { opacity: 0, y: -8, duration: 0.3, ease: "power2.in" }, at + 0.85);
        });
        tl.to(dot, { opacity: 0, duration: 0.25 }, 3.35)
          .to(card, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "expo.out" }, 3.3)
          .fromTo(card.querySelector(".booked-ring"), { opacity: 0.9, scale: 1 }, { opacity: 0, scale: 1.08, duration: 1.1, ease: "power2.out" }, 3.4)
          .to({}, { duration: 4.2 })
          .to(card, { opacity: 0, y: -8, duration: 0.5, ease: "power2.in" })
          .to(statuses[STATUSES.length - 1], { opacity: 0, y: -8, duration: 0.4 }, "<")
          .to(path, { drawSVG: "100% 100%", duration: 0.9, ease: "power2.inOut" }, "<");

        // Pause the loop while the hero is off screen.
        const st = gsap.timeline({
          scrollTrigger: { trigger: host, start: "top top", end: "bottom top", onLeave: () => tl.pause(), onEnterBack: () => tl.resume() },
        });

        return () => {
          window.removeEventListener("resize", buildPath);
          st.kill();
        };
      });

      // Mobile: the same story told as a compact sequence under the buttons.
      mm.add(MOBILE, () => {
        const statuses = q(".hero-status-m");
        const bar = q(".hero-bar-m");
        const card = q(".hero-card-mobile");
        gsap.set(q(".hero-seq"), { opacity: 1 });
        gsap.set(statuses, { opacity: 0, y: 6 });
        gsap.set(bar, { scaleX: 0, transformOrigin: rtl ? "right center" : "left center" });
        gsap.set(card, { opacity: 0, y: 12 });
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, delay: 1.2 });
        STATUSES.forEach((_, i) => {
          const at = i * 1.0;
          tl.to(statuses[i], { opacity: 1, y: 0, duration: 0.3 }, at);
          tl.to(bar, { scaleX: (i + 1) / STATUSES.length, duration: 0.9, ease: "power1.inOut" }, at);
          if (i < STATUSES.length - 1) tl.to(statuses[i], { opacity: 0, y: -6, duration: 0.25 }, at + 0.8);
        });
        tl.to(card, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, 3.1)
          .to({}, { duration: 3.6 })
          .to([card, statuses[STATUSES.length - 1]], { opacity: 0, duration: 0.4 })
          .to(bar, { scaleX: 0, duration: 0.5 }, "<");
      });

      return () => mm.revert();
    },
    { scope: root, dependencies: [rtl] },
  );

  return (
    <section ref={root} className="relative flex min-h-[100svh] flex-col" aria-label={t.hero.h1a}>
      {/* Desktop floating story */}
      <svg className="hero-svg pointer-events-none absolute inset-0 hidden h-full w-full lg:block" aria-hidden="true">
        <path className="hero-path" fill="none" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round" />
        <circle className="hero-traveler" r="5" fill="var(--color-blue)" />
      </svg>
      <div id="hero-bubble-wrap" className="hero-seq absolute start-[4.5vw] top-[19%] z-10 hidden lg:block">
        <PatientBubble id="hero-bubble" />
      </div>
      <div className="absolute end-[4.5vw] top-[63%] z-10 hidden lg:block">
        <BookedCard className="hero-card-desktop hero-seq" />
      </div>

      <div className="wrap relative z-10 flex flex-1 flex-col items-center justify-center pb-16 pt-[120px] text-center lg:pt-[104px]">
        <div className="load-in mb-8 self-start lg:hidden">
          <PatientBubble />
        </div>

        <h1 className="hero-title load-in text-[clamp(2.7rem,5.6vw,6.6rem)] font-[560] leading-[0.95] tracking-[-0.047em]" style={{ fontStretch: "92%" }}>
          <span className="block">{t.hero.h1a}</span>
          <span className="block">{t.hero.h1b}</span>
        </h1>
        <p className="load-in lede mt-7 max-w-[36rem]">{t.hero.sub}</p>
        <div className="load-in mt-9 flex flex-wrap items-center justify-center gap-3">
          <MeetLinaButton className="btn btn-ink">{t.hero.primary}</MeetLinaButton>
          <DemoButton className="btn btn-line">{t.hero.secondary}</DemoButton>
        </div>
        <p className="load-in mt-4 max-w-[30rem] text-[13px] text-ink-3">{t.hero.trust}</p>

        {/* Lina's live status line */}
        <div className="hero-seq relative mt-10 h-6 w-full max-w-[340px]" aria-live="off">
          {STATUSES.map((s, i) => (
            <div
              key={s}
              className={`hero-status-d hero-status-m sys absolute inset-0 flex items-center justify-center gap-2 ${
                i === STATUSES.length - 1 ? "text-blue" : "text-ink-2"
              } ${i === STATUSES.length - 1 ? "" : "opacity-0"}`}
            >
              <span className="lina-dot scale-75" aria-hidden="true" />
              {s}
            </div>
          ))}
        </div>
        <div className="mt-3 h-px w-full max-w-[220px] bg-line lg:hidden">
          <div className="hero-bar-m h-px w-full bg-blue" />
        </div>
        <div className="mt-6 lg:hidden">
          <BookedCard className="hero-card-mobile hero-seq" />
        </div>
      </div>
    </section>
  );
}
