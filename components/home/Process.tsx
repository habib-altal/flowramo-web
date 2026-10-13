"use client";

import { useRef } from "react";
import { gsap, useGSAP, DESKTOP, MOBILE } from "@/lib/gsap";
import { useI18n } from "../I18n";
import { useHome } from "../PageDict";

/* Five steps in order. A blue line follows the reader along the sequence. */
export function Process() {
  const root = useRef<HTMLElement>(null);
  const { rtl } = useI18n();
  const t = useHome().process;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(root);
      mm.add(DESKTOP, () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: q("ol")[0], start: "top 78%", end: "bottom 62%", scrub: 0.6 } });
        tl.fromTo(q(".pr-line-x"), { scaleX: 0 }, { scaleX: 1, ease: "none", duration: 1, transformOrigin: rtl ? "right center" : "left center" }, 0);
        q(".pr-node").forEach((node, i) => {
          tl.fromTo(node, { borderColor: "#d3d0c6", color: "#73726d" }, { borderColor: "#0050f8", color: "#0050f8", duration: 0.05 }, i * 0.24);
        });
      });
      mm.add(MOBILE, () => {
        gsap.fromTo(q(".pr-line-y"), { scaleY: 0 }, { scaleY: 1, ease: "none", transformOrigin: "center top", scrollTrigger: { trigger: q("ol")[0], start: "top 70%", end: "bottom 70%", scrub: 0.6 } });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [rtl] },
  );

  return (
    <section ref={root} className="border-t border-line py-[clamp(96px,12vw,168px)]" aria-labelledby="process-title">
      <div className="wrap">
        <h2 id="process-title" className="display-md max-w-[22ch]">
          {t.h2}
        </h2>

        <ol className="relative mt-[clamp(56px,7vw,104px)] grid gap-10 ps-12 lg:grid-cols-5 lg:gap-8 lg:ps-0">
          {/* Desktop rail */}
          <span className="absolute inset-x-0 top-[15px] hidden h-px bg-line lg:block" aria-hidden="true" />
          <span className="pr-line-x absolute inset-x-0 top-[15px] hidden h-px bg-blue lg:block" aria-hidden="true" />
          {/* Mobile rail */}
          <span className="absolute bottom-2 start-[15px] top-2 w-px bg-line lg:hidden" aria-hidden="true" />
          <span className="pr-line-y absolute bottom-2 start-[15px] top-2 w-px bg-blue lg:hidden" aria-hidden="true" />

          {t.steps.map((s, i) => (
            <li key={s.name} className="relative">
              <span
                className="pr-node absolute -start-12 top-0 grid h-8 w-8 place-items-center rounded-full border-[1.5px] border-blue bg-paper text-[13px] font-semibold tabular-nums text-blue lg:static"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="text-[19px] font-[580] leading-tight tracking-[-0.015em] lg:mt-7">{s.name}</h3>
              <p className="mt-2.5 max-w-[24rem] text-[15.5px] leading-[1.62] text-ink-2 lg:pe-2">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
