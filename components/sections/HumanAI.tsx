"use client";

import { useRef } from "react";
import { AlertTriangle, ArrowUpRight, BellRing } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useI18n } from "../I18n";

export function HumanAI() {
  const root = useRef<HTMLElement>(null);
  const { t, rtl } = useI18n();
  const h = t.human;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        const tl = gsap.timeline({
          defaults: { duration: 0.5, ease: "power3.out" },
          scrollTrigger: { trigger: q(".hx-card")[0], start: "top 72%", toggleActions: "restart none none reset" },
        });
        tl.from(q(".hx-1"), { autoAlpha: 0, y: 12 }, 0.1)
          .from(q(".hx-2"), { autoAlpha: 0, x: rtl ? 10 : -10 }, 0.9)
          .from(q(".hx-3"), { autoAlpha: 0, x: rtl ? 10 : -10 }, 1.5)
          .from(q(".hx-4"), { autoAlpha: 0, x: rtl ? 10 : -10 }, 2.1)
          .from(q(".hx-5"), { autoAlpha: 0, y: 12 }, 2.9);
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [rtl] },
  );

  return (
    <section ref={root} id="human" className="bg-paper-2/60 py-[clamp(100px,13vw,180px)]" aria-label={h.h2}>
      <div className="wrap grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <h2 className="display-md max-w-[13ch]">{h.h2}</h2>
          <p className="lede mt-6 max-w-[30rem]">{h.sub}</p>
        </div>

        <div className="hx-card rounded-[32px] border border-line bg-card p-5 sm:p-7">
          <div className="flex items-center justify-between text-[13px] text-ink-3">
            <span>{h.meta}</span>
            <span dir="ltr">{h.time}</span>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <div className="hx-1 max-w-[88%] self-start">
              <div className="bubble bubble-patient">{h.patient}</div>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <div className="hx-2 flex items-center gap-2.5 rounded-2xl bg-alert-soft px-3.5 py-2.5 text-[14px] font-medium text-alert">
                <AlertTriangle size={16} /> {h.chips[0]}
              </div>
              <div className="hx-3 flex items-center gap-2.5 rounded-2xl border border-line px-3.5 py-2.5 text-[14px] font-medium">
                <ArrowUpRight size={16} className="text-blue rtl:-scale-x-100" /> {h.chips[1]}
              </div>
              <div className="hx-4 flex items-center gap-2.5 rounded-2xl border border-line px-3.5 py-2.5 text-[14px] font-medium">
                <BellRing size={16} className="text-blue" /> {h.chips[2]}
              </div>
            </div>
            <div className="hx-5 mt-2 max-w-[88%] self-end">
              <div className="bubble bubble-lina">{h.reply}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
