import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { HomeDict } from "@/content/dictionaries/en/home";
import { SystemCanvas } from "./SystemCanvas";
import { TryLinaLink } from "../lina/TryLina";

/*
  Server-rendered so the headline paints with the first byte (it is the LCP element).
  The canvas below it is the page's one orchestrated motion moment.
*/
export function HomeHero({ t, lang }: { t: HomeDict; lang: Locale }) {
  const h = t.hero;
  return (
    <section className="relative pb-[clamp(72px,9vw,128px)] pt-[clamp(120px,9.5vw,140px)]" aria-labelledby="home-title">
      <div className="wrap">
        <h1 id="home-title" className="hero-title home-title max-w-[17ch] rtl:max-w-[24ch]">
          <span className="block">{h.h1a}</span>
          <span className="block">{h.h1b}</span>
        </h1>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <p className="lede max-w-[40rem]">{h.sub}</p>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <Link href={`/${lang}/contact`} className="btn btn-ink">
                {h.primary}
              </Link>
              <a href="#lina" className="btn btn-line">
                {h.secondary}
              </a>
            </div>
            <p className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-ink-2">
              <span className="lina-dot mt-[6px] scale-75" aria-hidden="true" />
              <span>
                {h.proof.text}{" "}
                <TryLinaLink
                  message={t.lina.chat.patient}
                  source="home-hero"
                  className="inline-flex items-center gap-1.5 whitespace-nowrap font-medium text-ink underline decoration-line-strong decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {h.proof.link}
                </TryLinaLink>
              </span>
            </p>
          </div>
        </div>

        <figure className="mt-[clamp(48px,4.5vw,64px)]">
          <SystemCanvas />
          <figcaption className="mt-6 max-w-[34rem] text-[14px] leading-[1.55] text-ink-3 md:mt-8">{h.canvas.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
