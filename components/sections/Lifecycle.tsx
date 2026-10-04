"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, MOTION_OK, ScrollTrigger } from "@/lib/gsap";

const STAGES = [
  {
    name: "Discover",
    line: "A new patient finds you at 23:00 and sends a message.",
    actions: ["Answers within seconds, day or night", "Replies in the patient's own language", "Shares your real services and prices"],
  },
  {
    name: "Ask",
    line: "They want to know what a treatment involves before they commit.",
    actions: ["Answers from your clinic's own documents", "Explains treatments in plain words", "Shares before-and-after photos you approved"],
  },
  {
    name: "Trust",
    line: "Price and fear are the two reasons patients stall.",
    actions: ["Notices hesitation and slows down", "Answers worries before suggesting a booking", "Brings the doctor in when it matters"],
  },
  {
    name: "Book",
    line: "The moment they're ready, the slot is already there.",
    actions: ["Finds availability", "Confirms appointment", "Updates patient record"],
  },
  {
    name: "Visit",
    line: "Fewer no-shows, without anyone picking up the phone.",
    actions: ["Sends reminders before the visit", "Handles reschedules in the chat", "Shares directions and preparation"],
  },
  {
    name: "Recover",
    line: "Some patients go quiet. Lina doesn't forget them.",
    actions: ["Detects inactive patients", "Sends personalised follow-up", "Restarts the conversation"],
  },
  {
    name: "Return",
    line: "Treatment ends. The relationship doesn't.",
    actions: ["Remembers past treatments", "Invites patients back for check-ups", "Asks happy patients for a Google review"],
  },
];

export function Lifecycle() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(3);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: root.current,
      start: "top 70%",
      end: "bottom 30%",
      onToggle: (self) => setInView(self.isActive),
    });
    return () => st.kill();
  }, []);

  // On narrow screens the track scrolls sideways; keep the active stage in view.
  useEffect(() => {
    const c = track.current;
    if (!c || c.scrollWidth <= c.clientWidth) return;
    const tab = c.querySelectorAll<HTMLElement>("[role=tab]")[active];
    if (tab) c.scrollTo({ left: tab.offsetLeft - c.clientWidth / 2 + tab.offsetWidth / 2, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    if (!auto || !inView) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % STAGES.length), 4200);
    return () => window.clearTimeout(id);
  }, [active, auto, inView]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        gsap.fromTo(q(".lc-action"), { autoAlpha: 0, x: -10 }, { autoAlpha: 1, x: 0, duration: 0.5, stagger: 0.09, ease: "power3.out" });
        gsap.fromTo(q(".lc-line"), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [active], revertOnUpdate: true },
  );

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };
  const stage = STAGES[active];
  const pct = (active / (STAGES.length - 1)) * 100;

  return (
    <section
      ref={root}
      id="lifecycle"
      className="relative z-10 -mt-10 rounded-t-[36px] bg-paper pb-[clamp(90px,12vw,170px)] pt-[clamp(90px,11vw,150px)] lg:rounded-t-[48px]"
      aria-label="From first hello to loyal patient"
    >
      <div className="wrap">
        <h2 className="display-lg max-w-[12ch]">From first hello to loyal patient.</h2>

        {/* Stage track */}
        <div ref={track} className="relative mt-[clamp(48px,7vw,88px)] overflow-x-auto pb-2 [scrollbar-width:none]">
          <div className="relative min-w-[640px]">
            <div className="absolute left-[7%] right-[7%] top-[15px] h-px bg-line" aria-hidden="true" />
            <div
              className="absolute left-[7%] top-[15px] h-px bg-blue transition-[width] duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
              style={{ width: `calc(${pct}% * 0.86)` }}
              aria-hidden="true"
            />
            <div role="tablist" aria-label="Patient lifecycle" className="relative grid grid-cols-7">
              {STAGES.map((s, i) => (
                <button
                  key={s.name}
                  role="tab"
                  aria-selected={i === active}
                  aria-controls="lifecycle-panel"
                  onClick={() => pick(i)}
                  className="group flex cursor-pointer flex-col items-center gap-3 rounded-xl py-1 focus-visible:outline-offset-4"
                >
                  <span
                    className={`grid h-[31px] w-[31px] place-items-center rounded-full border transition-all duration-500 ${
                      i === active
                        ? "border-blue bg-blue"
                        : i < active
                          ? "border-blue/40 bg-paper"
                          : "border-line bg-paper group-hover:border-ink-3"
                    }`}
                  >
                    <span className={`h-2 w-2 rounded-full transition-colors ${i === active ? "bg-white" : i < active ? "bg-blue" : "bg-line"}`} />
                  </span>
                  <span
                    className={`text-[15px] font-medium transition-colors ${i === active ? "text-ink" : "text-ink-3 group-hover:text-ink-2"}`}
                  >
                    {s.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stage detail */}
        <div
          id="lifecycle-panel"
          role="tabpanel"
          className="mt-10 grid gap-8 rounded-[32px] border border-line bg-card p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:p-14"
        >
          <div className="flex min-w-0 flex-col justify-between gap-8">
            <div>
              <div className="text-[15px] font-medium text-blue">{stage.name}</div>
              <p className="lc-line mt-3 text-[clamp(1.6rem,2.6vw,2.35rem)] font-[540] leading-[1.12] tracking-[-0.03em]">{stage.line}</p>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-paper-2">
              <div
                key={`${active}-${auto && inView}`}
                className={`h-full rounded-full bg-blue/70 ${auto && inView ? "lc-timer" : "w-0"}`}
              />
            </div>
          </div>
          <ul className="flex min-w-0 flex-col justify-center">
            {stage.actions.map((a) => (
              <li key={a} className="lc-action flex items-center gap-4 border-b border-line py-5 text-[clamp(1.05rem,1.4vw,1.25rem)] last:border-b-0">
                <span className="lina-dot" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        .lc-timer { width: 0; animation: lc-fill 4.2s linear forwards; }
        @keyframes lc-fill { to { width: 100%; } }
      `}</style>
    </section>
  );
}
