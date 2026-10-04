"use client";

import { useRef } from "react";
import { LayoutGrid, MessageCircle, CalendarDays, Users, Settings, Search } from "lucide-react";
import { gsap, useGSAP, DESKTOP } from "@/lib/gsap";
import { useI18n } from "../I18n";
import { BriefingCard, AppointmentsCard, LossRadarCard, RecoveryCard, ActivityCard, IntelligenceCard } from "./DashboardCards";

// Design-space size of the dashboard; it is scaled to fit the viewport.
const DW = 1200;
const DH = 720;

const CARDS = [
  { key: "briefing", el: <BriefingCard />, area: "1 / 1 / 2 / 8" },
  { key: "appts", el: <AppointmentsCard />, area: "1 / 8 / 3 / 13" },
  { key: "radar", el: <LossRadarCard />, area: "2 / 1 / 3 / 5" },
  { key: "money", el: <RecoveryCard />, area: "2 / 5 / 3 / 8" },
  { key: "live", el: <ActivityCard />, area: "3 / 1 / 4 / 8" },
  { key: "intel", el: <IntelligenceCard />, area: "3 / 8 / 4 / 13" },
];

// Where each card waits in the "deck" before the dashboard assembles.
const DECK = [
  { x: 0, y: 0, r: 0 },
  { x: 46, y: -26, r: 2 },
  { x: -52, y: 30, r: -2.5 },
  { x: 70, y: 40, r: 1.5 },
  { x: -30, y: -44, r: -1.5 },
  { x: 24, y: 58, r: 2.5 },
];

function Headline({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  return (
    <h2 className={`text-[clamp(2.1rem,4.4vw,4.4rem)] font-[560] leading-[1] tracking-[-0.044em] ${className}`} style={{ fontStretch: "92%" }}>
      <span className="block">{t.product.h2a}</span>
      <span className="block text-ink-3">{t.product.h2b}</span>
    </h2>
  );
}

export function ProductReveal() {
  const root = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const c = t.product.chrome;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP, () => {
        const host = root.current!;
        const stage = host.querySelector<HTMLElement>(".pr-stage")!;
        const board = host.querySelector<HTMLElement>(".pr-board")!;
        const grid = host.querySelector<HTMLElement>(".pr-grid")!;
        const cards = gsap.utils.toArray<HTMLElement>(host.querySelectorAll(".pr-card"));
        const q = gsap.utils.selector(host);

        const fit = () => Math.min((stage.clientWidth - 64) / DW, (stage.clientHeight * 0.72) / DH);
        // Offset that moves a card from its grid cell to the centre of the board.
        const toCenter = (el: HTMLElement, i: number) => ({
          x: DW / 2 - (grid.offsetLeft + el.offsetLeft + el.offsetWidth / 2) + DECK[i].x,
          y: DH / 2 - (grid.offsetTop + el.offsetTop + el.offsetHeight / 2) + DECK[i].y,
        });

        gsap.set(board, { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%" });

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: { trigger: host, start: "top top", end: "bottom bottom", scrub: 0.8, invalidateOnRefresh: true },
        });

        tl.fromTo(board, { scale: () => fit() * 1.18, y: () => stage.clientHeight * 0.04 }, { scale: () => fit() * 1.18, y: () => stage.clientHeight * 0.04, duration: 0.01 }, 0);
        tl.fromTo(q(".pr-chrome"), { autoAlpha: 0 }, { autoAlpha: 0, duration: 0.01 }, 0);
        tl.fromTo(q(".pr-intro"), { autoAlpha: 1 }, { autoAlpha: 1, duration: 0.01 }, 0);

        cards.forEach((el, i) => {
          tl.fromTo(
            el,
            {
              x: () => toCenter(el, i).x + (i === 0 ? 0 : DW * 1.15),
              y: () => toCenter(el, i).y,
              rotation: DECK[i].r + (i === 0 ? 0 : 5),
              scale: 1.04,
              boxShadow: "0 40px 90px -40px rgba(12,12,11,0.45)",
            },
            { x: () => toCenter(el, i).x, y: () => toCenter(el, i).y, rotation: DECK[i].r, scale: 1.04, duration: 1, ease: "power3.out" },
            i === 0 ? 0 : 0.4 + (i - 1) * 0.9,
          );
        });

        const settle = 0.4 + 4 * 0.9 + 1.2;
        tl.to(q(".pr-intro"), { autoAlpha: 0, y: -12, duration: 0.6 }, settle - 0.4);
        cards.forEach((el, i) => {
          tl.to(el, { x: 0, y: 0, rotation: 0, scale: 1, boxShadow: "0 0px 0px 0px rgba(12,12,11,0)", duration: 1.4, ease: "power3.inOut" }, settle + i * 0.08);
        });
        const pull = settle + 1.9;
        tl.to(q(".pr-chrome"), { autoAlpha: 1, duration: 0.8 }, pull)
          .to(board, { scale: () => fit() * 0.92, y: () => stage.clientHeight * 0.1, duration: 1.6, ease: "power2.inOut" }, pull)
          .fromTo(q(".pr-head"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" }, pull + 0.7)
          .to({}, { duration: 0.8 });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="product" className="relative" aria-label={t.product.h2a}>
      {/* Desktop: cards arrive one by one, then assemble into the dashboard */}
      <div className="scrolly hidden h-[480vh] lg:motion-safe:block">
        <div className="stage pr-stage">
          <div className="pr-head absolute inset-x-0 top-[88px] z-10 text-center opacity-0">
            <Headline />
          </div>
          <div className="pr-intro absolute inset-x-0 top-[96px] z-10 text-center">
            <p className="text-[15px] font-medium text-ink-2">{t.product.intro}</p>
          </div>

          <div className="pr-board absolute left-1/2 top-1/2" style={{ width: DW, height: DH }}>
            <div className="pr-chrome absolute inset-0 rounded-[30px] border border-line bg-paper-2/70 shadow-[0_50px_120px_-50px_rgba(12,12,11,0.35)]">
              <div className="absolute bottom-0 start-0 top-0 flex w-16 flex-col items-center gap-5 border-e border-line pt-5 text-ink-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-paper">
                  <span className="h-3 w-3 rounded-full bg-blue" />
                </span>
                <LayoutGrid size={19} className="text-ink" />
                <MessageCircle size={19} />
                <CalendarDays size={19} />
                <Users size={19} />
                <Settings size={19} className="mt-auto mb-5" />
              </div>
              <div className="absolute end-0 start-16 top-0 flex h-14 items-center justify-between border-b border-line px-5 text-[13.5px]">
                <span className="font-medium">{c.today}</span>
                <span className="flex h-8 w-[300px] items-center gap-2 rounded-full border border-line bg-card px-3 text-ink-3">
                  <Search size={14} /> {c.search}
                </span>
                <span className="flex items-center gap-2 text-ink-2">
                  {c.clinic} <span className="rounded-full bg-paper px-2 py-0.5 text-[11.5px] text-ink-3">{c.demo}</span>
                </span>
              </div>
            </div>
            <div
              className="pr-grid absolute grid gap-4"
              style={{ insetInlineStart: 84, top: 76, width: DW - 104, height: DH - 96, gridTemplateColumns: "repeat(12, minmax(0, 1fr))", gridTemplateRows: "230px 180px minmax(0, 1fr)" }}
            >
              {CARDS.map((c, i) => (
                <div key={c.key} className="pr-card relative min-h-0 rounded-[20px]" style={{ gridArea: c.area, zIndex: 10 + i }}>
                  {c.el}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and reduced motion: the same dashboard as a simple stack */}
      <div className="wrap py-[clamp(80px,12vw,140px)] lg:motion-safe:hidden">
        <Headline />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {CARDS.map((c) => (
            <div key={c.key} className={c.key === "briefing" || c.key === "live" ? "sm:col-span-2" : ""}>
              {c.el}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
