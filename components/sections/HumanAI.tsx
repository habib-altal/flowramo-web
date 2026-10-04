"use client";

import { useRef } from "react";
import { AlertTriangle, ArrowUpRight, BellRing } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

export function HumanAI() {
  const root = useRef<HTMLElement>(null);

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
          .from(q(".hx-2"), { autoAlpha: 0, x: -10 }, 0.9)
          .from(q(".hx-3"), { autoAlpha: 0, x: -10 }, 1.5)
          .from(q(".hx-4"), { autoAlpha: 0, x: -10 }, 2.1)
          .from(q(".hx-5"), { autoAlpha: 0, y: 12 }, 2.9);
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="human" className="bg-paper-2/60 py-[clamp(100px,13vw,180px)]" aria-label="When Lina hands over to your team">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <h2 className="display-md max-w-[13ch]">Lina knows when not to be Lina.</h2>
          <p className="lede mt-6 max-w-[30rem]">
            When something is urgent, clinical, or simply needs a person, Lina hands it to your team with the full conversation, and
            tells the patient exactly what happens next.
          </p>
        </div>

        <div className="hx-card rounded-[32px] border border-line bg-card p-5 sm:p-7">
          <div className="flex items-center justify-between text-[13px] text-ink-3">
            <span>Nour Saleh · WhatsApp</span>
            <span>02:07</span>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <div className="hx-1 max-w-[88%] self-start">
              <div className="bubble bubble-patient">My face is swelling and the pain has been getting worse since last night.</div>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <div className="hx-2 flex items-center gap-2.5 rounded-2xl bg-alert-soft px-3.5 py-2.5 text-[14px] font-medium text-alert">
                <AlertTriangle size={16} /> Urgency detected
              </div>
              <div className="hx-3 flex items-center gap-2.5 rounded-2xl border border-line px-3.5 py-2.5 text-[14px] font-medium">
                <ArrowUpRight size={16} className="text-blue" /> Escalated to clinic team
              </div>
              <div className="hx-4 flex items-center gap-2.5 rounded-2xl border border-line px-3.5 py-2.5 text-[14px] font-medium">
                <BellRing size={16} className="text-blue" /> Dr. Kaya notified on WhatsApp and email
              </div>
            </div>
            <div className="hx-5 mt-2 max-w-[88%] self-end">
              <div className="bubble bubble-lina">
                I&apos;ve alerted Dr. Kaya right now and she&apos;ll call you shortly. If you have trouble breathing or swallowing, go to the
                nearest emergency room.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
