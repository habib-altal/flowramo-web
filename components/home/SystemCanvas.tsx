"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { MARK_PATH, MARK_VIEWBOX } from "../brand-paths";
import { useI18n } from "../I18n";
import { useHome } from "../PageDict";

/*
  The hero's one memorable moment: what a Flowramo system is, drawn as a system.
  Five inputs flow into the Monolith F core and leave as five outcomes. The final
  state is plain SVG markup, so the drawing is complete without JavaScript; GSAP
  draws it once, then sends a quiet signal along one route at a time.
*/

type Pt = { x: number; y: number };
type Layout = {
  w: number;
  h: number;
  inputs: { x: number; y: number; w: number; h: number }[];
  outputs: { x: number; y: number; w: number; h: number }[];
  core: { cx: number; cy: number; size: number };
  inPath: (i: number) => string;
  outPath: (i: number) => string;
  font: number;
};

const [mvx, mvy, mvs] = MARK_VIEWBOX.split(" ").map(Number);

function desktopLayout(rtl: boolean): Layout {
  const w = 1200, h = 370, pw = 196, ph = 46, cx = 600, cy = 185, size = 176;
  const ys = [33, 109, 185, 261, 337];
  const X = (x: number) => (rtl ? w - x : x);
  const inputs = ys.map((y) => ({ x: rtl ? w - pw : 0, y: y - ph / 2, w: pw, h: ph }));
  const outputs = ys.map((y) => ({ x: rtl ? 0 : w - pw, y: y - ph / 2, w: pw, h: ph }));
  const coreIn = (y: number) => cy + (y - cy) * 0.32;
  const inPath = (i: number) => {
    const y = ys[i], a = X(pw), b = X(cx - size / 2), y2 = coreIn(y), d = rtl ? -1 : 1;
    return `M ${a} ${y} C ${a + 150 * d} ${y}, ${b - 150 * d} ${y2}, ${b} ${y2}`;
  };
  const outPath = (i: number) => {
    const y = ys[i], a = X(cx + size / 2), b = X(w - pw), y1 = coreIn(y), d = rtl ? -1 : 1;
    return `M ${a} ${y1} C ${a + 150 * d} ${y1}, ${b - 150 * d} ${y}, ${b} ${y}`;
  };
  return { w, h, inputs, outputs, core: { cx, cy, size }, inPath, outPath, font: 15 };
}

function mobileLayout(rtl: boolean): Layout {
  const w = 360, h = 500, ch = 38, cw = 108, gap = 8, cx = 180, cy = 250, size = 124;
  const row = (count: number, y: number) => {
    const total = count * cw + (count - 1) * gap;
    const x0 = (w - total) / 2;
    return Array.from({ length: count }, (_, i) => ({ x: x0 + i * (cw + gap), y, w: cw, h: ch }));
  };
  const order = (items: Layout["inputs"]) => (rtl ? items.map((p) => ({ ...p, x: w - p.x - p.w })) : items);
  const inputs = order([...row(3, 8), ...row(2, 56)]);
  const outputs = order([...row(3, h - 46 - 48), ...row(2, h - 46)]);
  const top = (p: Layout["inputs"][number]) => ({ x: p.x + p.w / 2, y: p.y + p.h });
  const bottom = (p: Layout["inputs"][number]) => ({ x: p.x + p.w / 2, y: p.y });
  const curve = (a: Pt, b: Pt) => `M ${a.x} ${a.y} C ${a.x} ${a.y + 60}, ${b.x} ${b.y - 60}, ${b.x} ${b.y}`;
  const coreTop = (i: number): Pt => ({ x: cx + (i - 2) * 14, y: cy - size / 2 });
  const coreBottom = (i: number): Pt => ({ x: cx + (i - 2) * 14, y: cy + size / 2 });
  return {
    w, h, inputs, outputs, core: { cx, cy, size },
    inPath: (i) => curve(top(inputs[i]), coreTop(i)),
    outPath: (i) => curve(coreBottom(i), bottom(outputs[i])),
    font: 12.5,
  };
}

function Drawing({ layout, variant, active, setActive }: { layout: Layout; variant: string; active: number | null; setActive: (i: number | null) => void }) {
  const c = useHome().hero.canvas;
  const { w, h, inputs, outputs, core, font } = layout;
  const k = (core.size * 0.62) / mvs;
  const dim = (i: number) => (active === null || active === i ? 1 : 0.28);

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={`sc sc-${variant} block h-auto w-full`} aria-hidden="true" style={{ fontSize: font }}>
      <g className="sc-routes" fill="none" strokeWidth="1.5" strokeLinecap="round">
        {inputs.map((_, i) => (
          <g key={i} style={{ opacity: dim(i), transition: "opacity 300ms" }}>
            <path className="sc-in" d={layout.inPath(i)} stroke={active === i ? "var(--color-blue)" : "var(--color-line-strong)"} />
            <path className="sc-out" d={layout.outPath(i)} stroke={active === i ? "var(--color-blue)" : "var(--color-line-strong)"} />
          </g>
        ))}
      </g>

      {inputs.map((p, i) => (
        <g key={i} className="sc-node sc-input" style={{ opacity: dim(i), transition: "opacity 300ms" }} onPointerEnter={() => setActive(i)} onPointerLeave={() => setActive(null)}>
          <rect x={p.x} y={p.y} width={p.w} height={p.h} rx={p.h / 2} fill="var(--color-card)" stroke="var(--color-line)" />
          <text x={p.x + p.w / 2} y={p.y + p.h / 2 + font * 0.35} textAnchor="middle" fill="var(--color-ink-2)">
            {c.inputs[i]}
          </text>
        </g>
      ))}

      <g className="sc-core">
        <rect
          x={core.cx - core.size / 2}
          y={core.cy - core.size / 2}
          width={core.size}
          height={core.size}
          rx={core.size * 0.22}
          fill="var(--color-card)"
          stroke="var(--color-line)"
        />
        <rect
          className="sc-halo"
          x={core.cx - core.size / 2 - 10}
          y={core.cy - core.size / 2 - 10}
          width={core.size + 20}
          height={core.size + 20}
          rx={core.size * 0.22 + 10}
          fill="none"
          stroke="var(--color-blue)"
          strokeOpacity="0.18"
        />
        <g transform={`translate(${core.cx - (mvs * k) / 2} ${core.cy - (mvs * k) / 2 - core.size * 0.06}) scale(${k}) translate(${-mvx} ${-mvy})`}>
          <path d={MARK_PATH} fill="var(--color-blue)" fillRule="evenodd" />
        </g>
        <text x={core.cx} y={core.cy + core.size / 2 - core.size * 0.1} textAnchor="middle" fill="var(--color-ink)" fontWeight="600" style={{ fontSize: font * 0.92 }}>
          {c.core}
        </text>
      </g>

      {outputs.map((p, i) => (
        <g key={i} className="sc-node sc-output" style={{ opacity: dim(i), transition: "opacity 300ms" }} onPointerEnter={() => setActive(i)} onPointerLeave={() => setActive(null)}>
          <rect
            x={p.x}
            y={p.y}
            width={p.w}
            height={p.h}
            rx={p.h / 2}
            fill={active === i ? "var(--color-blue-soft)" : "var(--color-card)"}
            stroke={active === i ? "var(--color-blue)" : "var(--color-line)"}
          />
          <rect className="sc-flash" x={p.x} y={p.y} width={p.w} height={p.h} rx={p.h / 2} fill="none" stroke="var(--color-blue)" strokeWidth="1.5" opacity="0" />
          <text x={p.x + p.w / 2} y={p.y + p.h / 2 + font * 0.35} textAnchor="middle" fill="var(--color-ink)" fontWeight="500">
            {c.outputs[i]}
          </text>
        </g>
      ))}

      <g className="sc-signals">
        {inputs.map((_, i) => (
          <circle key={i} className="sc-dot" r={variant === "m" ? 3.5 : 4.5} fill="var(--color-blue)" opacity="0" />
        ))}
      </g>
    </svg>
  );
}

export function SystemCanvas() {
  const root = useRef<HTMLDivElement>(null);
  const { rtl } = useI18n();
  const c = useHome().hero.canvas;
  const [active, setActive] = useState<number | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const host = root.current!;
        const svgs = gsap.utils.toArray<SVGSVGElement>(host.querySelectorAll("svg.sc"));
        const timelines: gsap.core.Timeline[] = [];

        svgs.forEach((svg) => {
          if (!svg.getBoundingClientRect().width) return; // the layout hidden at this breakpoint
          const q = gsap.utils.selector(svg);
          const intro = gsap.timeline({ defaults: { ease: "power2.out" }, delay: 0.25 });
          intro
            .from(q(".sc-input"), { opacity: 0, x: rtl ? 12 : -12, duration: 0.6, stagger: 0.07 })
            .from(q(".sc-in"), { drawSVG: "0%", duration: 0.9, stagger: 0.06, ease: "power1.inOut" }, 0.25)
            .from(q(".sc-core"), { opacity: 0, scale: 0.94, transformOrigin: "50% 50%", duration: 0.8 }, 0.55)
            .from(q(".sc-out"), { drawSVG: "0%", duration: 0.9, stagger: 0.06, ease: "power1.inOut" }, 0.95)
            .from(q(".sc-output"), { opacity: 0, x: rtl ? -12 : 12, duration: 0.6, stagger: 0.07 }, 1.2);

          // One signal at a time travels input → core → outcome, round-robin.
          const dots = q(".sc-dot");
          const ins = Array.from(svg.querySelectorAll<SVGPathElement>(".sc-in"));
          const outs = Array.from(svg.querySelectorAll<SVGPathElement>(".sc-out"));
          const flashes = q(".sc-flash");
          const loop = gsap.timeline({ repeat: -1, delay: 2.4, paused: false });
          [0, 2, 4, 1, 3].forEach((i, n) => {
            const at = n * 1.6;
            loop
              .set(dots[i], { opacity: 1 }, at)
              .to(dots[i], { motionPath: { path: ins[i], align: ins[i], alignOrigin: [0.5, 0.5] }, duration: 1.1, ease: "power1.inOut" }, at)
              .to(dots[i], { motionPath: { path: outs[i], align: outs[i], alignOrigin: [0.5, 0.5] }, duration: 1.1, ease: "power1.inOut" }, at + 1.15)
              .set(dots[i], { opacity: 0 }, at + 2.25)
              .fromTo(flashes[i], { opacity: 1 }, { opacity: 0, duration: 0.9, ease: "power1.out", immediateRender: false }, at + 2.25);
          });
          timelines.push(intro, loop);
        });
        gsap.set(host, { opacity: 1 });

        // Pause the signal loop while the canvas is off screen.
        const st = gsap.timeline({
          scrollTrigger: {
            trigger: host,
            start: "top bottom",
            end: "bottom top",
            onLeave: () => timelines.forEach((t) => t.pause()),
            onLeaveBack: () => timelines.forEach((t) => t.pause()),
            onEnter: () => timelines.forEach((t) => t.resume()),
            onEnterBack: () => timelines.forEach((t) => t.resume()),
          },
        });
        return () => st.kill();
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [rtl] },
  );

  return (
    <div ref={root} className="sc-host relative">
      <p className="sr-only">{c.label}</p>
      <div className="hidden md:block">
        <Drawing layout={desktopLayout(rtl)} variant="d" active={active} setActive={setActive} />
      </div>
      <div className="md:hidden">
        <Drawing layout={mobileLayout(rtl)} variant="m" active={active} setActive={setActive} />
      </div>
    </div>
  );
}
