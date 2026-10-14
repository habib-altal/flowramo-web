"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { MARK_PATH, MARK_VIEWBOX } from "../brand-paths";
import { useI18n } from "../I18n";
import { useHome } from "../PageDict";

/*
  The hero's one memorable moment: what a Flowramo system is, drawn as a system.
  Five inputs run into a shared bus, through the Monolith F core, and out to five
  outcomes. Routes are orthogonal with rounded corners (an engineered diagram, not a
  tangle), and signals travel at one constant speed, passing behind the core without
  stopping. The final state is plain SVG, complete without JavaScript.
*/

type Box = { x: number; y: number; w: number; h: number };
type Layout = {
  w: number;
  h: number;
  inputs: Box[];
  outputs: Box[];
  core: { cx: number; cy: number; size: number };
  inPath: (i: number) => string;
  outPath: (i: number) => string;
  route: (i: number) => string;
  font: number;
  labelBelow: boolean;
};

const [mvx, mvy, mvs] = MARK_VIEWBOX.split(" ").map(Number);

type Spec = { w: number; pw: number; ph: number; gap: number; top: number; size: number; font: number; labelBelow?: boolean; extra?: number };

const SPECS = {
  d: { w: 1200, pw: 196, ph: 46, gap: 76, top: 33, size: 176, font: 15 },
  t: { w: 720, pw: 146, ph: 42, gap: 64, top: 27, size: 124, font: 14 },
  m: { w: 360, pw: 108, ph: 36, gap: 50, top: 22, size: 66, font: 12, labelBelow: true, extra: 34 },
} satisfies Record<string, Spec>;

function makeLayout(spec: Spec, rtl: boolean): Layout {
  const { w, pw, ph, gap, top, size, font } = spec;
  const ys = [0, 1, 2, 3, 4].map((i) => top + i * gap);
  const cy = ys[2];
  const cx = w / 2;
  const h = ys[4] + top + (spec.extra ?? 0);
  const X = (x: number) => (rtl ? w - x : x);
  const box = (x: number, y: number): Box => ({ x: rtl ? w - x - pw : x, y: y - ph / 2, w: pw, h: ph });
  const inputs = ys.map((y) => box(0, y));
  const outputs = ys.map((y) => box(w - pw, y));

  // Bus lines sit halfway between the pills and the core.
  const coreL = cx - size / 2;
  const coreR = cx + size / 2;
  const busIn = pw + (coreL - pw) / 2;
  const busOut = coreR + (w - pw - coreR) / 2;
  const r = Math.min(14, gap / 3);

  // Input i: across to the bus, along the bus to the core's height, across into the core.
  const inPath = (i: number) => {
    const y = ys[i];
    if (y === cy) return `M ${X(pw)} ${y} H ${X(coreL)}`;
    const s = Math.sign(cy - y);
    return `M ${X(pw)} ${y} H ${X(busIn - r)} Q ${X(busIn)} ${y} ${X(busIn)} ${y + s * r} V ${cy - s * r} Q ${X(busIn)} ${cy} ${X(busIn + r)} ${cy} H ${X(coreL)}`;
  };
  // Output i: out of the core, along the bus, across to the outcome.
  const outTail = (i: number) => {
    const y = ys[i];
    if (y === cy) return `H ${X(w - pw)}`;
    const s = Math.sign(y - cy);
    return `H ${X(busOut - r)} Q ${X(busOut)} ${cy} ${X(busOut)} ${cy + s * r} V ${y - s * r} Q ${X(busOut)} ${y} ${X(busOut + r)} ${y} H ${X(w - pw)}`;
  };
  const outPath = (i: number) => `M ${X(coreR)} ${cy} ${outTail(i)}`;
  // The whole journey for a signal: one continuous path, through the core.
  const route = (i: number) => `${inPath(i)} H ${X(coreR)} ${outTail(i)}`;

  return { w, h, inputs, outputs, core: { cx, cy, size }, inPath, outPath, route, font, labelBelow: !!spec.labelBelow };
}

function Drawing({ layout, variant, active, setActive }: { layout: Layout; variant: string; active: number | null; setActive: (i: number | null) => void }) {
  const c = useHome().hero.canvas;
  const { w, h, inputs, outputs, core, font } = layout;
  const k = (core.size * (layout.labelBelow ? 0.56 : 0.5)) / mvs;
  const lift = layout.labelBelow ? 0 : core.size * 0.07;
  const lit = (i: number) => active === null || active === i;
  const stroke = (i: number) => (active === i ? "var(--color-blue)" : "var(--color-line-strong)");
  const radius = core.size * 0.24;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={`sc sc-${variant} block h-auto w-full`} aria-hidden="true" style={{ fontSize: font }}>
      {/* Routes: the drawn lines, plus one invisible full path per signal. */}
      <g fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {inputs.map((_, i) => (
          <g key={i} style={{ opacity: lit(i) ? 1 : 0.3, transition: "opacity 300ms" }}>
            <path className="sc-in" d={layout.inPath(i)} stroke={stroke(i)} style={{ transition: "stroke 300ms" }} />
            <path className="sc-out" d={layout.outPath(i)} stroke={stroke(i)} style={{ transition: "stroke 300ms" }} />
          </g>
        ))}
        {inputs.map((_, i) => (
          <path key={i} className="sc-route" d={layout.route(i)} stroke="none" />
        ))}
      </g>

      {/* Signals travel under the pills and the core, so they emerge from and disappear into them. */}
      <g className="sc-signals">
        {inputs.map((_, i) => (
          <circle key={i} className="sc-dot" r={variant === "m" ? 3 : 4} fill="var(--color-blue)" opacity="0" />
        ))}
      </g>

      {inputs.map((p, i) => (
        <g key={i} className="sc-node sc-input" style={{ opacity: lit(i) ? 1 : 0.35, transition: "opacity 300ms" }} onPointerEnter={() => setActive(i)} onPointerLeave={() => setActive(null)}>
          <rect x={p.x} y={p.y} width={p.w} height={p.h} rx={p.h / 2} fill="var(--color-card)" stroke="var(--color-line)" />
          <text x={p.x + p.w / 2} y={p.y + p.h / 2 + font * 0.35} textAnchor="middle" fill="var(--color-ink-2)">
            {c.inputs[i]}
          </text>
        </g>
      ))}

      <g className="sc-core">
        <rect className="sc-halo" x={core.cx - core.size / 2 - 9} y={core.cy - core.size / 2 - 9} width={core.size + 18} height={core.size + 18} rx={radius + 9} fill="none" stroke="var(--color-blue)" strokeOpacity="0.16" />
        <rect className="sc-pulse" x={core.cx - core.size / 2} y={core.cy - core.size / 2} width={core.size} height={core.size} rx={radius} fill="none" stroke="var(--color-blue)" strokeWidth="1.5" opacity="0" />
        <rect x={core.cx - core.size / 2} y={core.cy - core.size / 2} width={core.size} height={core.size} rx={radius} fill="var(--color-card)" stroke="var(--color-line)" />
        <g transform={`translate(${core.cx - (mvs * k) / 2} ${core.cy - (mvs * k) / 2 - lift}) scale(${k}) translate(${-mvx} ${-mvy})`}>
          <path d={MARK_PATH} fill="var(--color-blue)" fillRule="evenodd" />
        </g>
        <text
          x={core.cx}
          y={layout.labelBelow ? core.cy + core.size / 2 + font * 1.75 : core.cy + core.size / 2 - core.size * 0.11}
          textAnchor="middle"
          fill="var(--color-ink)"
          fontWeight="600"
          style={{ fontSize: font * 0.92 }}
        >
          {c.core}
        </text>
      </g>

      {outputs.map((p, i) => (
        <g key={i} className="sc-node sc-output" style={{ opacity: lit(i) ? 1 : 0.35, transition: "opacity 300ms" }} onPointerEnter={() => setActive(i)} onPointerLeave={() => setActive(null)}>
          <rect x={p.x} y={p.y} width={p.w} height={p.h} rx={p.h / 2} fill={active === i ? "var(--color-blue-soft)" : "var(--color-card)"} stroke={active === i ? "var(--color-blue)" : "var(--color-line)"} />
          <rect className="sc-flash" x={p.x} y={p.y} width={p.w} height={p.h} rx={p.h / 2} fill="var(--color-blue-soft)" stroke="var(--color-blue)" strokeWidth="1.5" opacity="0" />
          <text x={p.x + p.w / 2} y={p.y + p.h / 2 + font * 0.35} textAnchor="middle" fill="var(--color-ink)" fontWeight="500">
            {c.outputs[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Units per second: one speed for every signal, so the flow reads as steady. */
const SPEED = { d: 230, t: 150, m: 80 };
/** A new signal leaves every STEP seconds; the five routes repeat every CYCLE. */
const STEP = 1.15;
const CYCLE = STEP * 5;
const ORDER = [2, 0, 3, 1, 4];

export function SystemCanvas() {
  const root = useRef<HTMLDivElement>(null);
  const { rtl } = useI18n();
  const c = useHome().hero.canvas;
  const [active, setActive] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Re-run when the breakpoint changes, since each size has its own drawing.
      mm.add({ ok: MOTION_OK, lg: "(min-width: 1024px)", md: "(min-width: 768px)" }, (ctx) => {
        const host = root.current!;
        gsap.set(host, { opacity: 1 });
        const { ok, lg, md } = ctx.conditions as { ok: boolean; lg: boolean; md: boolean };
        if (!ok) return;
        const variant: keyof typeof SPEED = lg ? "d" : md ? "t" : "m";
        const svg = host.querySelector<SVGSVGElement>(`svg.sc-${variant}`);
        if (!svg) return;
        const q = gsap.utils.selector(svg);

        // 1. The diagram draws itself once.
        const intro = gsap.timeline({ defaults: { ease: "power2.out" }, delay: 0.35 });
        intro
          .from(q(".sc-input"), { opacity: 0, x: rtl ? 10 : -10, duration: 0.6, stagger: 0.06 })
          .from(q(".sc-in"), { drawSVG: "0%", duration: 1, stagger: 0.05, ease: "power1.inOut" }, 0.2)
          .from(q(".sc-core"), { opacity: 0, scale: 0.94, transformOrigin: "50% 50%", duration: 0.8 }, 0.6)
          .from(q(".sc-out"), { drawSVG: "0%", duration: 1, stagger: 0.05, ease: "power1.inOut" }, 1)
          .from(q(".sc-output"), { opacity: 0, x: rtl ? -10 : 10, duration: 0.6, stagger: 0.06 }, 1.3);

        // 2. Then signals flow, each at the same constant speed, one leaving every STEP seconds.
        const routes = Array.from(svg.querySelectorAll<SVGPathElement>(".sc-route"));
        const ins = Array.from(svg.querySelectorAll<SVGPathElement>(".sc-in"));
        const dots = q(".sc-dot");
        const flashes = q(".sc-flash");
        const pulse = q(".sc-pulse")[0];
        const loops: gsap.core.Timeline[] = [];

        ORDER.forEach((i, n) => {
          const length = routes[i].getTotalLength();
          const travel = length / SPEED[variant];
          const atCore = ins[i].getTotalLength() / SPEED[variant];
          const tail = 0.9;
          const loop = gsap.timeline({ repeat: -1, repeatDelay: Math.max(0, CYCLE - travel - tail), delay: 2.2 + n * STEP, paused: true });
          loop
            .set(dots[i], { opacity: 1 }, 0)
            .to(dots[i], { motionPath: { path: routes[i], align: routes[i], alignOrigin: [0.5, 0.5] }, duration: travel, ease: "none" }, 0)
            .fromTo(pulse, { opacity: 0.9 }, { opacity: 0, duration: 0.7, ease: "power2.out", immediateRender: false }, atCore + 0.1)
            .fromTo(flashes[i], { opacity: 1 }, { opacity: 0, duration: tail, ease: "power2.out", immediateRender: false }, travel - 0.05)
            .set(dots[i], { opacity: 0 }, travel);
          loops.push(loop);
        });

        // Run only while the canvas is on screen.
        const st = gsap.timeline({
          scrollTrigger: {
            trigger: host,
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => loops.forEach((l) => (self.isActive ? l.resume() : l.pause())),
          },
        });
        if (st.scrollTrigger?.isActive) loops.forEach((l) => l.resume());
        return () => st.kill();
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [rtl] },
  );

  return (
    <div ref={root} className="sc-host relative">
      <p className="sr-only">{c.label}</p>
      <div className="hidden lg:block">
        <Drawing layout={makeLayout(SPECS.d, rtl)} variant="d" active={active} setActive={setActive} />
      </div>
      <div className="mx-auto hidden max-w-[760px] md:block lg:hidden">
        <Drawing layout={makeLayout(SPECS.t, rtl)} variant="t" active={active} setActive={setActive} />
      </div>
      <div className="mx-auto max-w-[420px] md:hidden">
        <Drawing layout={makeLayout(SPECS.m, rtl)} variant="m" active={active} setActive={setActive} />
      </div>
    </div>
  );
}
