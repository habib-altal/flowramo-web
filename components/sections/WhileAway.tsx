"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

const STATS = [
  { n: 17, label: "conversations handled" },
  { n: 4, label: "appointments booked" },
  { n: 3, label: "follow-ups completed" },
  { n: 1, label: "patient recovered" },
];

const CLOCKS = [
  { t: "18:30", c: "The last patient leaves." },
  { t: "01:42", c: "The clinic is closed." },
  { t: "03:18", c: "Still closed. Still answering." },
  { t: "07:45", c: "Dr. Kaya opens the dashboard." },
];

function Msg({ who, children }: { who: "p" | "l"; children: React.ReactNode }) {
  return (
    <div className={`max-w-[88%] ${who === "l" ? "self-end" : "self-start"}`}>
      <div
        className={`bubble ${
          who === "l" ? "bubble-lina" : "rounded-bl-[6px] border border-white/10 bg-white/[0.06] text-[var(--fg)]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function WhileAway() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const host = root.current!;
        const stage = host.querySelector<HTMLElement>(".stage")!;
        const q = gsap.utils.selector(host);
        const clocks = q(".wa-clock");
        const show = { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" };

        gsap.set(stage, { "--bg": "#faf9f6", "--fg": "#0c0c0b", "--fg2": "#5d5c57" });
        gsap.set(clocks, { autoAlpha: 0, y: 14 });
        gsap.set(clocks[0], { autoAlpha: 1, y: 0 });
        gsap.set(q(".wa-g1 > *, .wa-g2 > *"), { autoAlpha: 0, y: 12 });
        gsap.set(q(".wa-summary"), { autoAlpha: 0, y: 30 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: host, start: "top top", end: "bottom bottom", scrub: 0.7 },
        });

        const swapClock = (from: number, to: number, at: number) =>
          tl.to(clocks[from], { autoAlpha: 0, y: -14, duration: 0.3, ease: "power2.in" }, at).to(clocks[to], { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }, at + 0.25);

        // Dusk into night
        tl.to(stage, { "--bg": "#1b2033", "--fg": "#eeede8", "--fg2": "#9da0ab", duration: 0.9 }, 0.4)
          .to(stage, { "--bg": "#080b16", duration: 0.7 }, 1.3)
          .to(q(".wa-moon"), { autoAlpha: 1, duration: 1 }, 1);
        swapClock(0, 1, 1.5);

        tl.to(q(".wa-g1 > *"), { ...show, stagger: 0.55 }, 2.1);
        tl.to(q(".wa-g1"), { autoAlpha: 0, y: -20, duration: 0.4, ease: "power2.in" }, 4.6);
        swapClock(1, 2, 4.6);
        tl.to(q(".wa-g2 > *"), { ...show, stagger: 0.55 }, 5.0);

        // Sunrise
        tl.to(q(".wa-g2"), { autoAlpha: 0, y: -20, duration: 0.4, ease: "power2.in" }, 6.9)
          .to(q(".wa-moon"), { autoAlpha: 0, duration: 0.6 }, 6.9)
          .to(q(".wa-sun"), { autoAlpha: 1, duration: 0.8 }, 7.0)
          .to(stage, { "--bg": "#efe0cf", "--fg": "#0c0c0b", "--fg2": "#5d5c57", duration: 0.7 }, 7.0)
          .to(stage, { "--bg": "#faf9f6", duration: 0.8 }, 7.7);
        swapClock(2, 3, 7.0);

        tl.to(q(".wa-summary"), { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, 7.9);
        q(".wa-num").forEach((el, i) => {
          const o = { v: 0 };
          tl.to(o, { v: STATS[i].n, duration: 0.8, ease: "power1.out", onUpdate: () => (el.textContent = String(Math.round(o.v))) }, 8.2 + i * 0.12);
        });
        tl.to({}, { duration: 0.9 });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="away" className="scrolly h-[440vh]" aria-label="While you were away">
      {/* Marks the night portion of the scroll so the nav switches to its dark style */}
      <div data-nav="dark" className="pointer-events-none absolute inset-x-0 top-[50vh] h-[180vh]" aria-hidden="true" />

      <div
        className="stage"
        style={{ background: "var(--bg, #faf9f6)", color: "var(--fg, #0c0c0b)" } as React.CSSProperties}
      >
        {/* Higgsfield slot: a slow night-clinic shot can sit here behind the moon glow. */}
        <div
          className="wa-moon pointer-events-none absolute left-1/2 top-[-20%] h-[90vh] w-[90vh] -translate-x-1/2 rounded-full opacity-0"
          style={{ background: "radial-gradient(closest-side, rgba(117,147,255,0.22), rgba(117,147,255,0.05) 60%, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="wa-sun pointer-events-none absolute bottom-[-45%] left-1/2 h-[110vh] w-[130vw] -translate-x-1/2 rounded-full opacity-0"
          style={{ background: "radial-gradient(closest-side, rgba(255,196,140,0.45), rgba(255,214,170,0.12) 55%, transparent)" }}
          aria-hidden="true"
        />

        <div className="wrap relative flex h-full flex-col items-center pt-[clamp(96px,14vh,140px)] text-center">
          <div className="relative h-[clamp(5rem,13vw,10.5rem)] w-full">
            {CLOCKS.map((c) => (
              <div key={c.t} className="wa-clock absolute inset-x-0 top-0 flex flex-col items-center opacity-0 first:opacity-100">
                <div className="text-[clamp(4rem,12vw,9.5rem)] font-[520] leading-[0.9] tracking-[-0.05em] tabular-nums" style={{ fontStretch: "88%" }}>
                  {c.t}
                </div>
                <div className="mt-3 text-[clamp(1rem,1.4vw,1.2rem)]" style={{ color: "var(--fg2, #5d5c57)" }}>
                  {c.c}
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-[clamp(48px,8vh,80px)] w-full max-w-[460px] flex-1">
            <div className="wa-g1 absolute inset-x-0 top-0 flex flex-col gap-3 text-left motion-reduce:hidden">
              <Msg who="p">Do you have an appointment tomorrow?</Msg>
              <Msg who="l">Yes. 10:30 or 16:00 tomorrow. Which works for you?</Msg>
              <Msg who="p">10:30 please</Msg>
              <div className="sys flex items-center gap-2 self-end rounded-full bg-blue px-3 py-1.5 text-white">Booked · Tomorrow 10:30</div>
            </div>
            <div className="wa-g2 absolute inset-x-0 top-0 flex flex-col gap-3 text-left motion-reduce:hidden">
              <Msg who="p">Can I move my appointment to Friday?</Msg>
              <Msg who="l">Done. You&apos;re now on Friday at 16:00 with the same doctor.</Msg>
              <div className="sys flex items-center gap-2 self-end rounded-full bg-blue px-3 py-1.5 text-white">Rescheduled · Fri 16:00</div>
            </div>
          </div>

          <div className="wa-summary absolute inset-x-0 bottom-[clamp(40px,9vh,96px)] px-5">
            <div className="mx-auto max-w-[880px] rounded-[30px] border border-line bg-card p-6 text-left text-ink shadow-[0_40px_100px_-50px_rgba(12,12,11,0.4)] sm:p-9">
              <div className="flex items-center justify-between">
                <h3 className="text-[clamp(1.4rem,2.4vw,2rem)] font-[560] tracking-[-0.03em]">While you were away</h3>
                <span className="flex items-center gap-2 text-[13.5px] text-ink-2">
                  <span className="lina-dot scale-75" aria-hidden="true" /> 18:30 – 07:45
                </span>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label} className="border-t border-line pt-4">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="wa-num text-[clamp(2.4rem,4vw,3.4rem)] font-[560] leading-none tracking-[-0.04em] tabular-nums">{s.n}</dd>
                    <div className="mt-2 text-[14px] text-ink-2">{s.label}</div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
