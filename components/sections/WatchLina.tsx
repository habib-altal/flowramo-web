"use client";

import { useRef, useState } from "react";
import { RotateCcw, Check, CalendarClock, BellRing } from "lucide-react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";
import { useI18n } from "../I18n";

const TIMES = ["10:00", "11:00", "14:30", "16:00"];
// Free slots Lina can offer (day index-time); everything else is already taken.
const FREE = new Set(["1-14:30", "3-11:00", "2-16:00", "4-10:00"]);
const PICK = "1-14:30";

function Bubble({ who, children, cls }: { who: "p" | "l"; children: React.ReactNode; cls: string }) {
  return (
    <div className={`${cls} max-w-[86%] ${who === "l" ? "self-end" : "self-start"}`}>
      <div
        className={`bubble text-[15px] leading-[1.6] ${
          who === "l" ? "bubble-lina" : "border border-night-line bg-night-3 text-moon"
        } ${who === "p" ? "rounded-br-[6px]" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

function Typing({ cls }: { cls: string }) {
  return (
    <div className={`${cls} absolute bottom-6 left-6 motion-reduce:hidden`}>
      <div className="flex h-9 items-center gap-1 rounded-full bg-blue/20 px-3.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-bright" style={{ animationDelay: `${i * 160}ms` }} />
        ))}
      </div>
    </div>
  );
}

export function WatchLina() {
  const root = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const w = t.watch;
  const SIGNALS = w.signals;
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [done, setDone] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const q = gsap.utils.selector(root);
        const show = { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" };
        const hidden = { autoAlpha: 0, y: 10 };

        gsap.set(q(".w-msg, .w-sig, .w-done, .w-typing"), hidden);
        gsap.set(q(".w-booking"), { autoAlpha: 0 });
        gsap.set(q(".w-slot-free"), { borderColor: "rgba(255,255,255,0.08)", color: "#8d8c87" });
        gsap.set(q(".w-meter"), { scaleX: 0, transformOrigin: "left center" });

        const tl = gsap.timeline({ paused: true, onComplete: () => setDone(true), onStart: () => setDone(false) });
        tl.to(q(".w-m1"), show, 0.2);
        SIGNALS.forEach((_, i) => tl.to(q(`.w-s${i}`), show, 0.7 + i * 0.42));
        tl.to(q(".w-meter"), { scaleX: 0.84, duration: 0.9, ease: "power2.out" }, 2.4)
          .to(q(".w-t1"), show, 2.9)
          .to(q(".w-t1"), { autoAlpha: 0, duration: 0.2 }, 4.1)
          .to(q(".w-m2"), show, 4.2)
          .to(q(".w-m3"), show, 5.6)
          .to(q(".w-signals"), { autoAlpha: 0, y: -8, duration: 0.4 }, 6.1)
          .to(q(".w-booking"), { autoAlpha: 1, duration: 0.4 }, 6.3)
          .to(q(".w-slot-free"), { borderColor: "#7593ff", color: "#eeede8", duration: 0.35, stagger: 0.12 }, 6.6)
          .to(q(".w-t2"), show, 7.0)
          .to(q(".w-t2"), { autoAlpha: 0, duration: 0.2 }, 7.9)
          .to(q(".w-m4"), show, 8.0)
          .to(q(".w-m5"), show, 9.1)
          .to(q(".w-slot-pick"), { backgroundColor: "#2b5cff", borderColor: "#2b5cff", color: "#ffffff", duration: 0.35 }, 9.5)
          .to(q(".w-slot-other"), { borderColor: "rgba(255,255,255,0.08)", color: "#8d8c87", duration: 0.35 }, 9.5)
          .to(q(".w-m6"), show, 10.0)
          .to(q(".w-done"), { ...show, stagger: 0.3 }, 10.4);

        tlRef.current = tl;
        const st = gsap.timeline({ scrollTrigger: { trigger: q(".w-window")[0], start: "top 68%", once: true, onEnter: () => tl.play() } });
        return () => st.kill();
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  const replay = contextSafe(() => tlRef.current?.restart());

  return (
    <section ref={root} id="watch" data-nav="dark" className="relative bg-night pb-[clamp(90px,12vw,160px)] pt-[clamp(72px,9vw,128px)] text-moon" aria-label={w.h2}>
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <h2 className="display-md">{w.h2}</h2>
            <p className="mt-4 text-[clamp(1.05rem,1.4vw,1.2rem)] text-moon-2">{w.sub}</p>
          </div>
          <button
            onClick={replay}
            className={`btn h-10 border border-night-line px-4 text-[14px] text-moon-2 hover:text-moon ${done ? "" : "pointer-events-none opacity-0"}`}
            tabIndex={done ? 0 : -1}
          >
            <RotateCcw size={15} /> {w.replay}
          </button>
        </div>

        <div className="w-window mt-10 overflow-hidden rounded-[26px] border border-night-line bg-night-2 shadow-[0_40px_120px_-40px_rgba(43,92,255,0.25)]">
          {/* Window bar */}
          <div className="flex h-14 items-center justify-between border-b border-night-line px-5 text-[13.5px]">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-night-3 text-[12px] font-semibold">{w.initials}</span>
              <div className="min-w-0 leading-tight">
                <div className="truncate font-medium">{w.patient}</div>
                <div className="truncate text-[12px] text-moon-2">{w.patientMeta}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-moon-2">
              <span className="lina-dot scale-75" aria-hidden="true" />
              <span className="hidden sm:inline">{w.handling}</span>
              <span className="sm:hidden">{w.handlingShort}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            {/* Conversation (Arabic, right-to-left) */}
            <div dir="rtl" lang="ar" className="relative flex min-h-[460px] flex-col gap-3 p-5 pb-20 sm:p-7 sm:pb-20 lg:min-h-[560px] lg:border-e lg:border-night-line">
              <Bubble who="p" cls="w-msg w-m1">أنا متردد شوي، هل الزراعة مؤلمة؟</Bubble>
              <Typing cls="w-typing w-t1" />
              <Bubble who="l" cls="w-msg w-m2">
                طبيعي تتردد، وسؤالك في محله. الزراعة تصير تحت بنج موضعي، وأغلب مرضانا يقولون إنها أخف من خلع الضرس نفسه. بعدها ممكن تحس بانزعاج بسيط يوم أو يومين. تحب أشرح لك الخطوات؟
              </Bubble>
              <Bubble who="p" cls="w-msg w-m3">طيب ممكن أحجز الأسبوع الجاي؟</Bubble>
              <Typing cls="w-typing w-t2" />
              <Bubble who="l" cls="w-msg w-m4">أكيد. عندي الثلاثاء الساعة 2:30 العصر أو الخميس 11 الصبح. أيهم يناسبك؟</Bubble>
              <Bubble who="p" cls="w-msg w-m5">الثلاثاء</Bubble>
              <Bubble who="l" cls="w-msg w-m6">تم حجزك يوم الثلاثاء 2:30 مع د. كايا. بذكّرك قبلها بيوم، ولو حسيت بأي قلق قبل الموعد اكتب لي.</Bubble>
            </div>

            {/* What Lina understands */}
            <div className="grid border-t border-night-line p-5 sm:p-7 lg:border-t-0">
              <div className="w-signals col-start-1 row-start-1 flex flex-col">
                <div className="sys mb-4 text-moon-2">{w.understands}</div>
                <dl className="flex flex-col">
                  {SIGNALS.map((s, i) => (
                    <div key={s.k} className={`w-sig w-s${i} flex items-center justify-between gap-4 border-b border-night-line py-3.5`}>
                      <dt className="text-[13.5px] text-moon-2">{s.k}</dt>
                      <dd className={`text-end text-[15px] font-medium ${i >= 3 ? "text-blue-bright" : ""}`}>{s.v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="w-sig w-s4b mt-4">
                  <div className="flex justify-between text-[12.5px] text-moon-2">
                    <span>{w.likelihood}</span>
                    <span className="tabular-nums">{w.high}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-night-3">
                    <div className="w-meter h-full w-full rounded-full bg-blue" style={{ transform: "scaleX(0.84)", transformOrigin: "left" }} />
                  </div>
                </div>
              </div>

              <div className="w-booking col-start-1 row-start-1 flex flex-col gap-5 motion-reduce:row-start-2 motion-reduce:mt-10">
                <div className="sys text-moon-2">{w.finding}</div>
                <div className="grid grid-cols-5 gap-1.5 text-center text-[12.5px]">
                  {w.days.map((d) => (
                    <div key={d} className="truncate pb-1 text-moon-2">
                      {d}
                    </div>
                  ))}
                  {TIMES.map((time) =>
                    w.days.map((_, d) => {
                      const key = `${d}-${time}`;
                      const free = FREE.has(key);
                      const pick = key === PICK;
                      return (
                        <div
                          key={key}
                          className={`rounded-lg border py-2 tabular-nums ${
                            free
                              ? `w-slot-free ${pick ? "w-slot-pick border-blue bg-blue text-white" : "w-slot-other border-blue-bright text-moon"}`
                              : "border-transparent bg-night-3/60 text-moon-2/40 line-through decoration-moon-2/30"
                          }`}
                        >
                          {time}
                        </div>
                      );
                    }),
                  )}
                </div>

                <div className="rounded-2xl border border-night-line bg-night-3/50 p-4">
                  <div className="flex items-center justify-between text-[14px]">
                    <span className="font-medium">{w.patient}</span>
                    <span className="text-moon-2">{w.consult}</span>
                  </div>
                  <ul className="mt-3 flex flex-col gap-2.5 text-[14px]">
                    <li className="w-done flex items-center gap-2.5">
                      <Check size={16} className="text-blue-bright" /> {w.done[0]}
                    </li>
                    <li className="w-done flex items-center gap-2.5">
                      <BellRing size={16} className="text-blue-bright" /> {w.done[1]}
                    </li>
                    <li className="w-done flex items-center gap-2.5">
                      <CalendarClock size={16} className="text-blue-bright" /> {w.done[2]}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
