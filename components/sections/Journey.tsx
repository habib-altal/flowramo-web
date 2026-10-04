"use client";

import { useRef } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

const STAGES = [
  "Asks",
  "Lina answers",
  "Asks the price",
  "Hesitates",
  "Disappears",
  "Lina remembers",
  "Lina follows up",
  "Comes back",
  "Books",
  "Visits",
  "Gets aftercare",
  "Returns months later",
];

type Item = { kind: "patient" | "lina" | "divider" | "system"; text: string; stage: number };

const ITEMS: Item[] = [
  { kind: "patient", text: "Hi, do you offer dental implants?", stage: 0 },
  { kind: "lina", text: "We do. Dr. Kaya places implants here every week. Is it for one tooth or a few?", stage: 1 },
  { kind: "patient", text: "Just one. Roughly how much?", stage: 2 },
  {
    kind: "lina",
    text: "Usually €650–900 including the crown. The exact plan comes after a quick x-ray. Shall I hold a free consultation for you?",
    stage: 2,
  },
  { kind: "patient", text: "Ok thanks, I'll think about it.", stage: 3 },
  { kind: "divider", text: "No reply for 6 days", stage: 4 },
  { kind: "system", text: "Remembered: implant, price shared, not booked", stage: 5 },
  {
    kind: "lina",
    text: "Hi Omar, most people weighing up an implant ask about healing time, so here's what to expect. Tuesday 14:30 is free if you'd like to talk it through.",
    stage: 6,
  },
  { kind: "patient", text: "Actually yes. Tuesday works.", stage: 7 },
  { kind: "system", text: "Consultation booked · Tue 14:30", stage: 8 },
  { kind: "divider", text: "Tuesday, after the visit", stage: 9 },
  {
    kind: "lina",
    text: "How are you feeling, Omar? Soft food today and no hot drinks tonight. Message me if the swelling grows.",
    stage: 10,
  },
  { kind: "divider", text: "6 months later", stage: 11 },
  { kind: "lina", text: "It's been six months since your implant. Time for a check-up? Thursday morning is free.", stage: 11 },
  { kind: "patient", text: "Perfect, book it.", stage: 11 },
];

function Row({ item, index }: { item: Item; index: number }) {
  if (index === 0) {
    return (
      <div id="journey-first" className="j-item w-[272px] max-w-full self-start">
        <div className="mb-1.5 flex items-center gap-2 pl-1 text-[12.5px] text-ink-3">
          <span className="h-1.5 w-1.5 rounded-full bg-ok" aria-hidden="true" />
          WhatsApp · 23:41
        </div>
        <div className="bubble bubble-patient">{item.text}</div>
      </div>
    );
  }
  if (item.kind === "divider") {
    return (
      <div className="j-item flex items-center gap-3 py-2 text-[12.5px] font-medium text-ink-3">
        <span className="h-px flex-1 bg-line" />
        {item.text}
        <span className="h-px flex-1 bg-line" />
      </div>
    );
  }
  if (item.kind === "system") {
    return (
      <div className="j-item sys flex items-center gap-2 self-end rounded-full bg-blue-soft px-3 py-1.5 text-blue-deep">
        <span className="lina-dot scale-75" aria-hidden="true" />
        {item.text}
      </div>
    );
  }
  return (
    <div className={`j-item max-w-[84%] ${item.kind === "lina" ? "self-end" : "self-start"}`}>
      <div className={`bubble ${item.kind === "lina" ? "bubble-lina" : "bubble-patient"}`}>{item.text}</div>
    </div>
  );
}

export function Journey() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const host = root.current!;
        const viewport = host.querySelector<HTMLElement>(".j-viewport")!;
        const column = host.querySelector<HTMLElement>(".j-column")!;
        const items = gsap.utils.toArray<HTMLElement>(host.querySelectorAll(".j-item"));
        const railItems = gsap.utils.toArray<HTMLElement>(host.querySelectorAll(".j-stage"));
        const fill = host.querySelector<HTMLElement>(".j-fill");
        const label = host.querySelector<HTMLElement>(".j-label");
        const count = host.querySelector<HTMLElement>(".j-count");

        const offsetFor = (i: number) => {
          const el = items[i];
          const bottom = el.offsetTop + el.offsetHeight;
          const visible = viewport.clientHeight - 28;
          return -Math.max(0, bottom - visible);
        };

        let current = -1;
        const setStage = (s: number) => {
          if (s === current) return;
          current = s;
          railItems.forEach((el, i) => {
            el.dataset.state = i < s ? "past" : i === s ? "active" : "future";
          });
          if (label) label.textContent = STAGES[s];
          if (count) count.textContent = `${s + 1} / ${STAGES.length}`;
        };
        setStage(0);

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: host,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.7,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const t = self.progress * (self.animation?.duration() ?? ITEMS.length);
              const step = Math.min(ITEMS.length - 1, Math.max(0, Math.floor(t + 0.25)));
              setStage(ITEMS[step].stage);
            },
          },
        });

        items.forEach((el, i) => {
          if (i === 0) return;
          tl.fromTo(el, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.45 }, i);
          tl.to(column, { y: () => offsetFor(i), duration: 0.5, ease: "power2.inOut" }, i);
        });
        if (fill) {
          tl.fromTo(fill, { scaleY: 1 / STAGES.length }, { scaleY: 1, duration: ITEMS.length - 1, ease: "none" }, 1);
        }
        tl.to({}, { duration: 0.6 });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="journey" className="scrolly h-[560vh]" aria-label="One patient journey">
      <div className="stage">
        <div className="wrap grid h-full grid-rows-[auto_1fr] gap-5 pb-6 pt-[86px] lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:grid-rows-1 lg:items-center lg:gap-[clamp(40px,7vw,120px)] lg:pb-10 lg:pt-[96px]">
          {/* Conversation */}
          <div className="relative order-2 h-full min-h-0 lg:order-1 lg:h-[min(640px,76svh)]">
            <div className="j-viewport relative h-full overflow-hidden rounded-[28px] border border-line bg-card/70">
              <div className="j-column relative flex flex-col gap-3 p-5">
                {ITEMS.map((item, i) => (
                  <Row key={i} item={item} index={i} />
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-card/80 to-transparent" />
            </div>
          </div>

          {/* Story rail */}
          <div className="order-1 flex min-w-0 flex-col lg:order-2">
            <h2 className="text-[clamp(2rem,4.6vw,4.6rem)] font-[560] leading-[0.97] tracking-[-0.044em]" style={{ fontStretch: "92%" }}>
              <span className="block">One message.</span>
              <span className="block">An entire patient journey.</span>
            </h2>
            <div className="mt-3 flex items-center gap-2 text-[14px] text-ink-2 lg:hidden">
              <span className="lina-dot scale-75" aria-hidden="true" />
              <span className="j-label font-medium text-ink">{STAGES[0]}</span>
              <span className="j-count tabular-nums text-ink-3">1 / {STAGES.length}</span>
            </div>

            <ol className="relative mt-10 hidden max-w-[420px] flex-col lg:flex">
              <span className="absolute bottom-[14px] left-[3.5px] top-[14px] w-px bg-line" aria-hidden="true" />
              <span
                className="j-fill absolute bottom-[14px] left-[3.5px] top-[14px] w-px origin-top bg-blue"
                aria-hidden="true"
              />
              {STAGES.map((s, i) => (
                <li
                  key={s}
                  data-state={i === 0 ? "active" : "future"}
                  className="j-stage group flex items-center gap-3 py-[5px] text-[15px] transition-colors duration-300 data-[state=active]:text-ink data-[state=future]:text-ink-3 data-[state=past]:text-ink-2"
                >
                  <span className="relative z-10 h-2 w-2 rounded-full bg-line transition-all duration-300 group-data-[state=active]:scale-125 group-data-[state=active]:bg-blue group-data-[state=past]:bg-blue/50" />
                  <span className="group-data-[state=active]:font-medium">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
