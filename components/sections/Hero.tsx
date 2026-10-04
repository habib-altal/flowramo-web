"use client";

import { useRef } from "react";
import { gsap, useGSAP, DESKTOP, MOBILE, MOTION_OK, relPos } from "@/lib/gsap";
import { DemoButton, MeetLinaButton } from "../Demo";

const STATUSES = ["Understanding patient…", "Checking clinic knowledge…", "Finding availability…", "Consultation booked"];

function PatientBubble({ id }: { id?: string }) {
  return (
    <div id={id} className="w-[272px] max-w-full">
      <div className="mb-1.5 flex items-center gap-2 pl-1 text-[12.5px] text-ink-3">
        <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
        WhatsApp · 23:41
      </div>
      <div className="bubble bubble-patient shadow-[0_18px_40px_-28px_rgba(12,12,11,0.45)]">Hi, do you offer dental implants?</div>
    </div>
  );
}

function BookedCard({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-[264px] rounded-[22px] border border-line bg-card p-4 shadow-[0_24px_60px_-34px_rgba(12,12,11,0.5)] ${className}`}>
      <span className="booked-ring pointer-events-none absolute -inset-px rounded-[22px] border border-blue opacity-0" aria-hidden="true" />
      <div className="flex items-center gap-2 text-[13px] font-medium text-blue">
        <span className="lina-dot" aria-hidden="true" />
        Consultation booked
      </div>
      <div className="mt-2 text-[22px] font-[580] leading-tight tracking-[-0.03em]">Tuesday · 14:30</div>
      <div className="mt-1 text-[13.5px] text-ink-2">Dr. Kaya · Implant consultation</div>
    </div>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

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

        const buildPath = () => {
          const W = host.offsetWidth;
          const H = host.offsetHeight;
          svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
          const b = relPos(bubble, host);
          const c = relPos(card, host);
          const sx = b.x + 34;
          const sy = b.y + bubble.offsetHeight + 10;
          const ex = c.x - 14;
          const ey = c.y + card.offsetHeight * 0.55;
          const d = `M ${sx} ${sy} C ${sx - 10} ${sy + H * 0.42}, ${ex - W * 0.42} ${ey + H * 0.2}, ${ex} ${ey}`;
          path.setAttribute("d", d);
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
          .to(
            dot,
            { motionPath: { path, align: path, alignOrigin: [0.5, 0.5] }, duration: 3.4, ease: "power1.inOut" },
            0,
          );
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
        gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
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
    { scope: root },
  );

  return (
    <section ref={root} className="relative flex min-h-[100svh] flex-col" aria-label="Introduction">
      {/* Desktop floating story */}
      <svg className="hero-svg pointer-events-none absolute inset-0 hidden h-full w-full lg:block" aria-hidden="true">
        <path className="hero-path" fill="none" stroke="var(--color-blue)" strokeWidth="1.5" strokeLinecap="round" />
        <circle className="hero-traveler" r="5" fill="var(--color-blue)" />
      </svg>
      <div id="hero-bubble-wrap" className="hero-seq absolute left-[4.5vw] top-[19%] z-10 hidden lg:block">
        <PatientBubble id="hero-bubble" />
      </div>
      <div className="absolute right-[4.5vw] top-[63%] z-10 hidden lg:block">
        <BookedCard className="hero-card-desktop hero-seq" />
      </div>

      <div className="wrap relative z-10 flex flex-1 flex-col items-center justify-center pb-16 pt-[120px] text-center lg:pt-[104px]">
        <div className="load-in mb-8 self-start lg:hidden">
          <PatientBubble />
        </div>

        <h1 className="load-in text-[clamp(2.7rem,5.6vw,6.6rem)] font-[560] leading-[0.95] tracking-[-0.047em]" style={{ fontStretch: "92%" }}>
          <span className="block">Your clinic keeps moving.</span>
          <span className="block">Even when you don&apos;t.</span>
        </h1>
        <p className="load-in lede mt-7 max-w-[34rem]">
          Lina turns patient conversations into bookings, follow-ups and lasting relationships.
        </p>
        <div className="load-in mt-9 flex flex-wrap items-center justify-center gap-3">
          <MeetLinaButton className="btn btn-ink" />
          <DemoButton className="btn btn-line" />
        </div>

        {/* Lina's live status line */}
        <div className="hero-seq relative mt-12 h-6 w-full max-w-[340px]" aria-live="off">
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
          <BookedCard className="hero-card-mobile hero-seq text-left" />
        </div>
      </div>
    </section>
  );
}
