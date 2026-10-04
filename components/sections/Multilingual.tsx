"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, MOTION_OK, ScrollTrigger } from "@/lib/gsap";
import { useI18n } from "../I18n";

const LANGS = [
  {
    code: "ar",
    name: "العربية",
    dir: "rtl" as const,
    patient: "مرحبا، عندي موعد تبييض بكرة الساعة ٦، أقدر أجي بدري شوي؟",
    lina: "أكيد يا ليلى، الساعة ٥:٣٠ فاضية. أغيّر موعدك لها؟",
    done: "تم التغيير · بكرة ٥:٣٠",
  },
  {
    code: "en",
    name: "English",
    dir: "ltr" as const,
    patient: "Hi, I have a whitening appointment tomorrow at 6. Could I come a little earlier?",
    lina: "Of course, Leyla. 17:30 is free. Shall I move you?",
    done: "Moved · Tomorrow 17:30",
  },
  {
    code: "tr",
    name: "Türkçe",
    dir: "ltr" as const,
    patient: "Merhaba, yarın saat 6'da beyazlatma randevum var. Biraz daha erken gelebilir miyim?",
    lina: "Tabii Leyla, 17:30 boş. Randevunu oraya alayım mı?",
    done: "Taşındı · Yarın 17:30",
  },
];

export function Multilingual() {
  const root = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const g = t.languages;
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const st = ScrollTrigger.create({ trigger: root.current, start: "top 70%", end: "bottom 30%", onToggle: (s) => setInView(s.isActive) });
    return () => st.kill();
  }, []);

  useEffect(() => {
    if (!auto || !inView) return;
    const id = window.setTimeout(() => setI((v) => (v + 1) % LANGS.length), 3400);
    return () => window.clearTimeout(id);
  }, [i, auto, inView]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          gsap.utils.selector(root)(".ml-msg"),
          { autoAlpha: 0, filter: "blur(8px)", y: 8 },
          { autoAlpha: 1, filter: "blur(0px)", y: 0, duration: 0.55, stagger: 0.18, ease: "power2.out" },
        );
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [i], revertOnUpdate: true },
  );

  const l = LANGS[i];

  return (
    <section ref={root} id="languages" className="py-[clamp(100px,14vw,190px)]" aria-label={g.h2b}>
      <div className="wrap flex flex-col items-center text-center">
        <h2 className="display-lg">
          <span className="block">{g.h2a}</span>
          <span className="block">{g.h2b}</span>
        </h2>
        <p className="lede mt-6 max-w-[34rem]">{g.sub}</p>

        <div className="mt-[clamp(48px,7vw,80px)] grid w-full max-w-[980px] items-center gap-6 text-start lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:gap-10">
          <div className="rounded-[32px] border border-line bg-card p-4 sm:p-6">
            <div role="tablist" aria-label={g.tablist} className="mx-auto flex w-fit gap-1 rounded-full bg-paper-2 p-1">
              {LANGS.map((x, k) => (
                <button
                  key={x.code}
                  role="tab"
                  aria-selected={k === i}
                  onClick={() => (setAuto(false), setI(k))}
                  className={`h-9 cursor-pointer rounded-full px-4 text-[14px] font-medium transition-colors ${
                    k === i ? "bg-card text-ink shadow-[0_2px_8px_-4px_rgba(12,12,11,0.3)]" : "text-ink-2 hover:text-ink"
                  }`}
                  lang={x.code}
                >
                  {x.name}
                </button>
              ))}
            </div>
            <div dir={l.dir} lang={l.code} className="mt-6 flex min-h-[230px] flex-col gap-3 px-1 sm:px-3">
              <div className="ml-msg max-w-[86%] self-start">
                <div className="bubble bubble-patient">{l.patient}</div>
              </div>
              <div className="ml-msg max-w-[86%] self-end">
                <div className="bubble bubble-lina">{l.lina}</div>
              </div>
              <div className="ml-msg sys flex items-center gap-2 self-end rounded-full bg-blue-soft px-3 py-1.5 text-blue-deep">
                <span className="lina-dot scale-75" aria-hidden="true" />
                {l.done}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-line p-6">
            <div className="text-[13.5px] font-medium">
              <div className="text-ink">{g.keeps}</div>
              <div className="mt-0.5 flex items-center gap-2 text-blue">
                <span className="lina-dot scale-75" aria-hidden="true" /> {g.same}
              </div>
            </div>
            <dl className="mt-4 flex flex-col">
              {g.context.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-line py-3 text-[14.5px] last:border-b-0">
                  <dt className="text-ink-3">{k}</dt>
                  <dd className="text-end font-medium">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
