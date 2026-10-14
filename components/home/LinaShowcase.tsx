"use client";

import { useRef } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { gsap, useGSAP, ScrollTrigger, SplitText, TABLET_UP, PHONE } from "@/lib/gsap";
import { MARK_PATH, MARK_VIEWBOX } from "../brand-paths";
import { useI18n } from "../I18n";
import { useHome } from "../PageDict";
import { TryLinaLink } from "../lina/TryLina";

/*
  Lina, shown as one example of what Flowramo builds rather than as "our work".
  The night section is the proof moment: a real conversation at 02:07 plays once
  when it scrolls into view. The markup is the finished conversation.
*/
export function LinaShowcase() {
  const root = useRef<HTMLElement>(null);
  const { locale } = useI18n();
  const l = useHome().lina;
  const c = l.chat;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const q = gsap.utils.selector(root);

      // The conversation, as one timeline: used scrubbed on tablet/desktop, played on phones.
      const conversation = (tl: gsap.core.Timeline, at: number) => {
        const [m1, m2, m3] = q(".lc-msg");
        const card = q(".lc-card")[0];
        const online = q(".lc-online")[0];
        const typing = q(".lc-typing")[0];
        gsap.set([m1, m2, m3, card], { autoAlpha: 0, y: 14 });
        gsap.set(typing, { autoAlpha: 0 });
        tl.to(m1, { autoAlpha: 1, y: 0, duration: 0.5 }, at)
          .to(online, { autoAlpha: 0, duration: 0.15 }, at + 0.6)
          .to(typing, { autoAlpha: 1, duration: 0.15 }, at + 0.6)
          .to(typing, { autoAlpha: 0, duration: 0.15 }, at + 1.4)
          .to(online, { autoAlpha: 1, duration: 0.15 }, at + 1.4)
          .to(m2, { autoAlpha: 1, y: 0, duration: 0.5 }, at + 1.4)
          .to(m3, { autoAlpha: 1, y: 0, duration: 0.5 }, at + 2.2)
          .to(card, { autoAlpha: 1, y: 0, duration: 0.6, ease: "expo.out" }, at + 3)
          .fromTo(q(".lc-ring"), { opacity: 0.9, scale: 1 }, { opacity: 0, scale: 1.06, duration: 0.9, ease: "power2.out" }, at + 3.1);
      };

      // Tablet and desktop: day turns to night, then the scene plays with the scroll.
      mm.add(TABLET_UP, () => {
        const host = root.current!;
        gsap.fromTo(
          q(".lc-stage")[0],
          { backgroundColor: "#faf9f6" },
          {
            backgroundColor: "#07080b",
            ease: "none",
            scrollTrigger: {
              trigger: host,
              start: "top 90%",
              end: "top 15%",
              scrub: true,
            },
          },
        );
        gsap.fromTo(q(".lc-photo"), { autoAlpha: 0 }, { autoAlpha: 1, ease: "none", scrollTrigger: { trigger: host, start: "top 40%", end: "top 5%", scrub: true } });
        const split = SplitText.create(q(".lc-h2")[0], {
          type: "lines",
          mask: "lines",
        });
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: host,
            start: "top 35%",
            end: "bottom bottom",
            scrub: 0.7,
          },
        });
        tl.from(q(".lc-kicker"), { autoAlpha: 0, y: 16, duration: 0.5 }, 0)
          .from(split.lines, { yPercent: 115, duration: 0.9, stagger: 0.12 }, 0.15)
          .from(q(".lc-sub"), { autoAlpha: 0, y: 24, duration: 0.7 }, 0.9)
          .from(q(".lc-show"), { autoAlpha: 0, y: 16, duration: 0.5, stagger: 0.15 }, 1.3)
          .from(q(".lc-phone"), { autoAlpha: 0, y: 90, scale: 0.96, duration: 1.2 }, 0.4)
          .from(q(".lc-glow"), { opacity: 0, scale: 0.7, duration: 1.4 }, 0.4);
        conversation(tl, 2.1);
        tl.from(q(".lc-cta"), { autoAlpha: 0, y: 16, duration: 0.5, stagger: 0.12 }, 5.4).to({}, { duration: 0.8 });
        return () => split.revert();
      });

      // Phones: the conversation plays once when the phone arrives.
      mm.add(PHONE, () => {
        const tl = gsap.timeline({
          paused: true,
          defaults: { ease: "power3.out" },
        });
        conversation(tl, 0.2);
        const st = ScrollTrigger.create({
          trigger: q(".lc-phone")[0],
          start: "top 72%",
          once: true,
          onEnter: () => void tl.play(),
        });
        return () => st.kill();
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  const [mvx, mvy, mvs] = MARK_VIEWBOX.split(" ").map(Number);

  return (
    <section ref={root} id="lina" data-nav="dark" className="relative bg-night text-moon md:h-[300vh]" aria-labelledby="lina-title">
      <div className="lc-stage relative overflow-hidden bg-night md:sticky md:top-0 md:flex md:h-svh md:items-center md:pt-[68px]">
        {/* The clinic Lina works for, at night (the Higgsfield still from the Lina page), kept dark behind the copy. */}
        <div className="lc-photo pointer-events-none absolute inset-0" aria-hidden="true">
          <picture>
            <source media="(max-aspect-ratio: 4/5)" srcSet="/media/night-clinic-portrait.webp" />
            <img src="/media/night-clinic.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-[60%_50%] opacity-60" />
          </picture>
          <div
            className="absolute inset-0 rtl:-scale-x-100"
            style={{ background: "linear-gradient(to right, rgba(7,8,11,0.94) 0%, rgba(7,8,11,0.78) 42%, rgba(7,8,11,0.3) 100%)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(7,8,11,0.85), transparent 22%, transparent 78%, rgba(7,8,11,0.9))" }} />
        </div>
        <div
          className="lc-glow pointer-events-none absolute end-[-10%] top-[10%] h-[70%] w-[60%] opacity-60"
          style={{
            background: "radial-gradient(closest-side, color-mix(in oklab, var(--color-blue) 22%, transparent), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="wrap relative grid w-full gap-16 py-[clamp(104px,13vw,184px)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-10 md:py-0 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-20">
          <div>
            <p className="lc-kicker flex items-center gap-2.5 text-[14.5px] font-medium text-moon-2">
              <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_0_4px_rgba(0,206,255,0.16)]" aria-hidden="true" />
              {l.kicker}
            </p>
            <h2 id="lina-title" className="lc-h2 display-lg mt-6 max-w-[13ch]">
              {l.h2}
            </h2>
            <p className="lc-sub mt-7 max-w-[35rem] text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.62] text-moon-2">{l.sub}</p>

            <ul className="mt-9 grid gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {l.shows.map((s) => (
                <li key={s} className="lc-show flex items-start gap-3 text-[15.5px] leading-[1.5] text-moon">
                  <Check size={16} strokeWidth={2.25} className="mt-[3px] flex-none text-cyan" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-11 flex flex-wrap gap-3">
              <Link href={`/${locale}/products/lina`} className="lc-cta btn btn-night-line">
                {l.primary}
              </Link>
              <TryLinaLink message={c.patient} source="home-lina" className="lc-cta btn btn-blue">
                {l.secondary}
              </TryLinaLink>
            </div>
          </div>

          {/* The conversation */}
          <div className="lc-phone relative mx-auto w-full max-w-[400px] md:max-w-[360px] lg:max-w-[400px]">
            <div className="overflow-hidden rounded-[34px] border border-night-line bg-night-2 shadow-[0_40px_120px_-40px_rgba(0,80,248,0.35)]">
              <div className="flex items-center gap-3 border-b border-night-line px-5 py-4">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-night-3" aria-hidden="true">
                  <svg viewBox={`${mvx} ${mvy} ${mvs} ${mvs}`} className="h-[18px] w-[18px]">
                    <path d={MARK_PATH} fill="var(--color-cyan)" fillRule="evenodd" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[15.5px] font-semibold leading-tight">{c.name}</div>
                  <div className="relative h-[18px] text-[12.5px] text-moon-2">
                    <span className="lc-online absolute inset-0">{c.online}</span>
                    <span className="lc-typing invisible absolute inset-0 text-cyan opacity-0">{c.typing}</span>
                  </div>
                </div>
                <span className="sys text-moon-2" dir="ltr">
                  {c.meta}
                </span>
              </div>

              <div className="flex flex-col gap-3 px-4 pb-5 pt-6 sm:px-5">
                <div className="lc-msg max-w-[84%] self-start rounded-[20px] rounded-es-[6px] bg-night-3 px-4 py-3 text-[15px] leading-[1.45] text-moon">{c.patient}</div>
                <div className="lc-msg max-w-[84%] self-end rounded-[20px] rounded-ee-[6px] bg-blue px-4 py-3 text-[15px] leading-[1.45] text-white">{c.lina}</div>
                <div className="lc-msg max-w-[84%] self-start rounded-[20px] rounded-es-[6px] bg-night-3 px-4 py-3 text-[15px] leading-[1.45] text-moon">{c.patient2}</div>

                <div className="lc-card relative mt-3 rounded-[22px] border border-night-line bg-night p-4">
                  <span className="lc-ring pointer-events-none absolute -inset-px rounded-[22px] border border-cyan opacity-0" aria-hidden="true" />
                  <div className="flex items-center gap-2 text-[13.5px] font-medium text-cyan">
                    <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                    {c.booked}
                  </div>
                  <div className="mt-1.5 text-[14px] text-moon-2">{c.who}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
