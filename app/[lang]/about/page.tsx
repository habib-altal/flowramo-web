import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";
import { getCommon, getPages } from "@/content/dictionaries";
import { JsonLd, pageSchema } from "@/lib/schema";
import { PageCta, PageHeader } from "@/components/pages/PageHeader";
import { Principles } from "@/components/pages/Principles";
import { AmbientVideo } from "@/components/motion/AmbientVideo";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = getPages(lang).about.meta;
  return pageMetadata(lang, "/about", m.title, m.description);
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const common = getCommon(lang);
  const a = getPages(lang).about;

  return (
    <main id="main">
      <JsonLd data={pageSchema(lang, common, "/about", a.meta.title, a.meta.description, "AboutPage")} />
      <PageHeader h1={a.h1} />
      <section className="wrap grid gap-10 pb-[clamp(72px,9vw,128px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-20" aria-label={a.meta.title}>
        {/* The blueprint comes before the build (Higgsfield still), cropped to the drawing itself. */}
        <div className="relative aspect-square overflow-hidden rounded-[28px] bg-night lg:aspect-[4/5]" data-reveal="fade">
          <img
            src="/media/blueprint.webp"
            srcSet="/media/blueprint-960.webp 960w, /media/blueprint.webp 1920w"
            sizes="(min-width: 1024px) 480px, 100vw"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[92%_50%]"
          />
        </div>
        <div className="flex flex-col gap-6 lg:pt-2">
          {a.intro.map((p, i) => (
            <p
              key={i}
              data-reveal=""
              className={i === 0 ? "text-[clamp(1.35rem,2.2vw,1.9rem)] font-[500] leading-[1.38] tracking-[-0.02em]" : "text-[17px] leading-[1.7] text-ink-2"}
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      <Principles h2={a.principlesH2} items={a.principles} />

      <section data-nav="dark" className="relative isolate overflow-hidden bg-night text-moon" aria-labelledby="origin-title">
        {/* Where it started: the dental clinic at night, as on the Lina page. */}
        <AmbientVideo name="night-clinic" portrait="night-clinic-portrait" position="60% 50%" className="-z-10 opacity-45" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(7,8,11,0.9),rgba(7,8,11,0.55))] rtl:-scale-x-100" aria-hidden="true" />
        <div className="wrap grid gap-10 py-[clamp(96px,12vw,160px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <h2 id="origin-title" className="display-md flex items-start gap-4" data-reveal>
            <span className="mt-[0.42em] h-2.5 w-2.5 flex-none rounded-full bg-cyan shadow-[0_0_0_5px_rgba(0,206,255,0.16)]" aria-hidden="true" />
            {a.origin.h2}
          </h2>
          <div className="flex flex-col items-start gap-6">
            {a.origin.text.map((p) => (
              <p key={p} className="max-w-[36rem] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.65] text-moon-2" data-reveal>
                {p}
              </p>
            ))}
            <Link href={`/${lang}/products/lina`} className="btn btn-moon mt-2" data-reveal>
              {a.origin.cta}
            </Link>
          </div>
        </div>
      </section>

      <PageCta h2={a.closing.h2} cta={a.closing.cta} href={`/${lang}/contact`} />
    </main>
  );
}
