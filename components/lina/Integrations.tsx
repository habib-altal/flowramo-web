"use client";

import { useRef } from "react";
import { MessageCircle, CalendarDays, UserRound, BookOpen, Sparkles, BarChart3 } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useLina } from "../PageDict";

type NodeId = "wa" | "cal" | "pt" | "an" | "kn" | "ai";
type Node = { id: NodeId; icon: React.ReactNode; x: number; y: number; mx: number; my: number };

const NODES: Node[] = [
  { id: "wa", icon: <MessageCircle size={16} />, x: 50, y: 9, mx: 50, my: 8 },
  { id: "cal", icon: <CalendarDays size={16} />, x: 86, y: 30, mx: 78, my: 30 },
  { id: "pt", icon: <UserRound size={16} />, x: 86, y: 70, mx: 78, my: 70 },
  { id: "an", icon: <BarChart3 size={16} />, x: 50, y: 91, mx: 50, my: 92 },
  { id: "kn", icon: <BookOpen size={16} />, x: 14, y: 70, mx: 22, my: 70 },
  { id: "ai", icon: <Sparkles size={16} />, x: 14, y: 30, mx: 22, my: 30 },
];

// Route of one event through the system; labels come from the dictionary in the same order.
const FLOW: [string, string][] = [
  ["wa", "core"],
  ["core", "ai"],
  ["core", "kn"],
  ["core", "pt"],
  ["core", "cal"],
  ["core", "an"],
  ["core", "wa"],
];

export function Integrations() {
  const root = useRef<HTMLElement>(null);
  const t = useLina();
  const g = t.integrations;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const host = root.current!;
        const map = host.querySelector<HTMLElement>(".ig-map")!;
        const pill = host.querySelector<HTMLElement>(".ig-pill")!;
        const text = host.querySelector<HTMLElement>(".ig-pill-text")!;
        const core = host.querySelector<HTMLElement>(".ig-core")!;
        // Centre of a node (or of the core) in px inside the map.
        const center = (id: string) => {
          if (id === "core") return { x: map.clientWidth / 2, y: map.clientHeight / 2 };
          const cs = getComputedStyle(host.querySelector<HTMLElement>(`[data-node="${id}"]`)!);
          return { x: parseFloat(cs.left), y: parseFloat(cs.top) };
        };
        // Where the pill starts or stops: a node's centre, or for the core a point just outside its ring on the way to
        // the other end, so the pill never sits on the "Lina" label (it fades out there and the core lights up instead).
        const pos = (id: string, other: string) => {
          const p = center(id);
          if (id === "core") {
            const o = center(other);
            const dx = o.x - p.x;
            const dy = o.y - p.y;
            const len = Math.hypot(dx, dy) || 1;
            const ux = dx / len;
            const uy = dy / len;
            const reach = core.offsetWidth / 2 + 8 + (Math.abs(ux) * pill.offsetWidth + Math.abs(uy) * pill.offsetHeight) / 2;
            const d = Math.min(reach, len * 0.6);
            p.x += ux * d;
            p.y += uy * d;
          }
          return { left: `${(p.x / map.clientWidth) * 100}%`, top: `${(p.y / map.clientHeight) * 100}%` };
        };
        const node = (id: string) => host.querySelector(`[data-node="${id}"] .ig-node`);

        gsap.set(pill, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
        const tl = gsap.timeline({ repeat: -1, paused: true, onRepeat: () => tl.invalidate() });
        FLOW.forEach(([from, to], i) => {
          const label = g.flow[i];
          const at = i * 1.5;
          const intoCore = to === "core";
          const target = intoCore ? core : node(to);
          // The label changes first, so the stop point is measured with the pill's new width.
          tl.call(() => void (text.textContent = label), undefined, at)
            .set(pill, { left: () => pos(from, to).left, top: () => pos(from, to).top }, at)
            .to(pill, { autoAlpha: 1, duration: 0.2 }, at)
            .to(pill, { left: () => pos(to, from).left, top: () => pos(to, from).top, duration: 1.05, ease: "power2.inOut" }, at)
            .to(target, { borderColor: "#0050f8", color: "#0050f8", duration: 0.2 }, at + 0.95)
            .to(target, { borderColor: "#e6e4dd", color: "#0c0c0b", duration: 0.4 }, at + 1.4)
            .to(pill, { autoAlpha: 0, duration: 0.2 }, intoCore ? at + 0.9 : at + 1.25);
        });
        const st = gsap.timeline({
          scrollTrigger: { trigger: map, start: "top 80%", end: "bottom 20%", onToggle: (s) => (s.isActive ? tl.play() : tl.pause()) },
        });
        return () => {
          st.kill();
          tl.kill();
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="integrations" className="border-t border-line py-[clamp(100px,13vw,180px)]" aria-label={g.h2}>
      <div className="wrap grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="min-w-0">
          <h2 className="display-md max-w-[14ch]">{g.h2}</h2>
          <p className="lede mt-6 max-w-[30rem]">{g.sub}</p>
        </div>

        <div className="ig-map relative mx-auto aspect-[1/1] w-full max-w-[600px] sm:aspect-[5/4]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {NODES.map((n) => (
              <g key={n.id}>
                <line className="hidden sm:block" x1="50" y1="50" x2={n.x} y2={n.y} stroke="#e6e4dd" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <line className="sm:hidden" x1="50" y1="50" x2={n.mx} y2={n.my} stroke="#e6e4dd" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              </g>
            ))}
          </svg>

          <div className="ig-core absolute left-1/2 top-1/2 grid h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-card text-ink sm:h-[124px] sm:w-[124px]">
            <span className="absolute inset-3 rounded-full bg-blue/[0.06]" aria-hidden="true" />
            <span className="relative flex flex-col items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-blue shadow-[0_0_24px_4px_rgba(43,92,255,0.35)]" />
              <span className="text-[13px] font-[600] tracking-[-0.01em]">{g.core}</span>
            </span>
          </div>

          {NODES.map((n) => (
            <div
              key={n.id}
              data-node={n.id}
              className="absolute left-[var(--mx)] top-[var(--my)] -translate-x-1/2 -translate-y-1/2 sm:left-[var(--x)] sm:top-[var(--y)]"
              style={{ "--x": `${n.x}%`, "--y": `${n.y}%`, "--mx": `${n.mx}%`, "--my": `${n.my}%` } as React.CSSProperties}
            >
              <span className="ig-node flex h-9 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-card px-3 text-[12.5px] font-medium sm:h-10 sm:px-4 sm:text-[14px]">
                {n.icon}
                {g.nodes[n.id]}
              </span>
            </div>
          ))}

          <div className="ig-pill sys pointer-events-none absolute left-1/2 top-1/2 z-10 flex items-center gap-2 whitespace-nowrap rounded-full bg-blue px-3 py-1.5 text-white opacity-0 shadow-[0_10px_30px_-10px_rgba(43,92,255,0.7)]">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span className="ig-pill-text">{g.flow[0]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
