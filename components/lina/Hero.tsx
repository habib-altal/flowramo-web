"use client";

import { useRef } from "react";
import { gsap, useGSAP, DESKTOP, MOBILE, relPos } from "@/lib/gsap";
import { DemoButton } from "../Demo";
import { TryLinaButton } from "./TryLina";
import { useI18n } from "../I18n";
import { useLina } from "../PageDict";
import { FocusWords, wordCount } from "../motion/FocusWords";

function PatientBubble({ id }: { id?: string }) {
  const t = useLina();
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
  const t = useLina();
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
  const { rtl } = useI18n();
  const t = useLina();
  const STATUSES = t.hero.statuses;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(root);

      // Desktop: a thin blue thread carries the message from the patient into Lina's status "station"
      // (it passes behind the pill, never through the words), waits there while she works, then carries the booking out to the card.
      mm.add(DESKTOP, () => {
        const host = root.current!;
        const svg = host.querySelector<SVGSVGElement>(".hero-svg")!;
        const path = host.querySelector<SVGPathElement>(".hero-path")!;
        const dot = host.querySelector<SVGCircleElement>(".hero-traveler")!;
        const bubble = host.querySelector<HTMLElement>("#hero-bubble")!;
        const card = host.querySelector<HTMLElement>(".hero-card-desktop")!;
        const station = host.querySelector<HTMLElement>(".hero-station")!;
        const statuses = q(".hero-status-d");
        const k = rtl ? -1 : 1;
        const n = STATUSES.length;
        // Fractions of the thread's length where it slips behind the station and comes out again.
        let fIn = 0.5;
        let fOut = 0.6;

        const buildPath = () => {
          const W = host.offsetWidth;
          const H = host.offsetHeight;
          svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
          const b = relPos(bubble, host);
          const c = relPos(card, host);
          const s = relPos(station, host);
          const half = station.offsetWidth / 2;
          const cx = s.x + half;
          const cy = s.y + station.offsetHeight / 2;
          const inX = cx - k * half;
          const outX = cx + k * half;
          const sx = rtl ? b.x + bubble.offsetWidth - 34 : b.x + 34;
          const sy = b.y + bubble.offsetHeight + 10;
          const ex = rtl ? c.x + card.offsetWidth + 14 : c.x - 14;
          const ey = c.y + card.offsetHeight * 0.55;
          const a1 = Math.abs(inX - sx) * 0.55;
          const a2 = Math.abs(ex - outX) * 0.5;
          const leg1 = `M ${sx} ${sy} C ${sx} ${sy + (cy - sy) * 0.8}, ${inX - k * a1} ${cy}, ${inX} ${cy}`;
          const d = `${leg1} L ${outX} ${cy} C ${outX + k * a2} ${cy}, ${ex - k * a2 * 0.6} ${ey}, ${ex} ${ey}`;
          path.setAttribute("d", leg1);
          const l1 = path.getTotalLength();
          path.setAttribute("d", d);
          const total = path.getTotalLength() || 1;
          fIn = l1 / total;
          fOut = (l1 + 2 * half) / total;
          return d;
        };

        const T1 = 1.2; // bubble → station
        const STEP = 0.75; // one status per step while the message is inside the station
        const T2 = 0.9; // station → booked card
        const along = (start: number, end: number) => ({ path, align: path, alignOrigin: [0.5, 0.5], start, end });

        const build = () => {
          gsap.set(q(".hero-seq"), { opacity: 1 });
          gsap.set(path, { drawSVG: "0% 0%" });
          gsap.set(dot, { opacity: 0 });
          gsap.set(card, { opacity: 0, y: 14, scale: 0.97 });
          gsap.set(statuses, { opacity: 0, y: 6 });

          const exitAt = T1 + (n - 1) * STEP;
          const arrive = exitAt + T2;
          const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, delay: 1.4 });
          tl.to(dot, { opacity: 1, duration: 0.2 }, 0)
            .to(path, { drawSVG: `0% ${fIn * 100}%`, duration: T1, ease: "power1.inOut" }, 0)
            .to(dot, { motionPath: along(0, fIn), duration: T1, ease: "power1.inOut" }, 0)
            .set(dot, { opacity: 0 }, T1);
          // Each working status starts only once the message has reached the station.
          for (let i = 0; i < n - 1; i++) {
            const at = T1 + i * STEP;
            tl.fromTo(statuses[i], { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, at).to(
              statuses[i],
              { opacity: 0, y: -6, duration: 0.25, ease: "power2.in" },
              at + STEP - 0.25,
            );
          }
          // The booking leaves the station and lands as the card.
          tl.set(path, { drawSVG: `0% ${fOut * 100}%` }, exitAt)
            .set(dot, { opacity: 1 }, exitAt)
            .fromTo(statuses[n - 1], { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }, exitAt)
            .to(path, { drawSVG: "0% 100%", duration: T2, ease: "power1.inOut" }, exitAt)
            .to(dot, { motionPath: along(fOut, 1), duration: T2, ease: "power1.inOut" }, exitAt)
            .to(dot, { opacity: 0, duration: 0.25 }, arrive - 0.1)
            .to(card, { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "expo.out" }, arrive - 0.1)
            .fromTo(card.querySelector(".booked-ring"), { opacity: 0.9, scale: 1 }, { opacity: 0, scale: 1.08, duration: 1.1, ease: "power2.out" }, arrive)
            .to({}, { duration: 3.6 })
            .to(card, { opacity: 0, y: -8, duration: 0.5, ease: "power2.in" })
            .to(statuses[n - 1], { opacity: 0, y: -6, duration: 0.4 }, "<")
            .to(path, { drawSVG: "100% 100%", duration: 0.9, ease: "power2.inOut" }, "<");
          return tl;
        };

        let d = buildPath();
        let tl = build();
        // Rebuild when the layout moves (resize, late web fonts), so the thread always runs through the station.
        const rebuild = () => {
          const next = buildPath();
          if (next === d) return;
          d = next;
          const paused = tl.paused();
          tl.kill();
          tl = build();
          if (paused) tl.pause();
        };
        let timer = 0;
        const onResize = () => {
          window.clearTimeout(timer);
          timer = window.setTimeout(rebuild, 200);
        };
        window.addEventListener("resize", onResize);
        document.fonts?.ready.then(rebuild);

        // Pause the loop while the hero is off screen.
        const st = gsap.timeline({
          scrollTrigger: { trigger: host, start: "top top", end: "bottom top", onLeave: () => tl.pause(), onEnterBack: () => tl.resume() },
        });

        return () => {
          window.removeEventListener("resize", onResize);
          window.clearTimeout(timer);
          tl.kill();
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
      {/* Short desktop screens get extra top room so the patient's bubble never meets the nav. */}
      <div className="wrap relative z-10 flex flex-1 flex-col items-center justify-center pb-16 pt-[120px] text-center lg:pt-[max(104px,calc(920px_-_100svh))]">
        <div className="hero-in mb-8 self-start lg:hidden" style={{ "--d": "0.1s" } as React.CSSProperties}>
          <PatientBubble />
        </div>

        <div className="relative w-full">
          {/* Desktop: the patient's message sits at the start of the column, just above the headline (never on it). */}
          <div id="hero-bubble-wrap" aria-hidden="true" className="hero-seq absolute bottom-[calc(100%+28px)] start-0 hidden lg:block">
            <PatientBubble id="hero-bubble" />
          </div>
          <h1 className="hero-title text-[clamp(2.7rem,5.6vw,6.6rem)] font-[560] leading-[0.95] tracking-[-0.047em]" style={{ fontStretch: "92%" }}>
            <span className="block">
              <FocusWords text={t.hero.h1a} />
            </span>{" "}
            <span className="block">
              <FocusWords text={t.hero.h1b} from={wordCount(t.hero.h1a)} />
            </span>
          </h1>
        </div>
        <p className="hero-in lede mt-7 max-w-[36rem]" style={{ "--d": "0.6s" } as React.CSSProperties}>{t.hero.sub}</p>
        <div className="hero-in mt-9 flex flex-wrap items-center justify-center gap-3" style={{ "--d": "0.72s" } as React.CSSProperties}>
          <TryLinaButton className="btn btn-blue">{t.hero.primary}</TryLinaButton>
          <DemoButton className="btn btn-line">{t.hero.secondary}</DemoButton>
        </div>
        <p className="hero-in mt-4 max-w-[30rem] text-[13px] text-ink-3" style={{ "--d": "0.84s" } as React.CSSProperties}>{t.hero.trust}</p>

        {/* Lina's live status: a station the thread passes behind. Its statuses share one grid cell, so it is as wide as the longest. */}
        <div className="hero-seq relative mt-10 flex w-full justify-center" aria-live="off">
          <div className="hero-station relative z-10 grid rounded-full bg-paper px-3 py-1">
            {STATUSES.map((s, i) => (
              <div
                key={s}
                className={`hero-status-d hero-status-m sys col-start-1 row-start-1 flex items-center justify-center gap-2 whitespace-nowrap ${
                  i === STATUSES.length - 1 ? "text-blue" : "text-ink-2"
                } ${i === STATUSES.length - 1 ? "" : "opacity-0"}`}
              >
                <span className="lina-dot scale-75" aria-hidden="true" />
                {s}
              </div>
            ))}
          </div>
          {/* Desktop booked card at the end of the content column: level with the station on narrow desktops, just above it from xl. The phone copy below carries the same content. */}
          <div aria-hidden="true" className="absolute inset-y-0 end-0 hidden items-center lg:flex xl:inset-y-auto xl:bottom-[calc(50%+20px)]">
            <BookedCard className="hero-card-desktop hero-seq" />
          </div>
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
