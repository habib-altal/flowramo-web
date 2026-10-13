import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";
import { getCommon, getPages } from "@/content/dictionaries";
import { JsonLd, pageSchema } from "@/lib/schema";
import { PageCta, PageHeader } from "@/components/pages/PageHeader";

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

      <section className="wrap grid gap-6 pb-[clamp(72px,9vw,128px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20" aria-label={a.meta.title}>
        <div aria-hidden="true" className="hidden lg:block" />
        <div className="flex flex-col gap-6">
          {a.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "text-[clamp(1.25rem,1.9vw,1.6rem)] font-[500] leading-[1.4] tracking-[-0.02em]" : "text-[17px] leading-[1.7] text-ink-2"}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-paper-2 py-[clamp(96px,12vw,160px)]" aria-labelledby="principles-title">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <h2 id="principles-title" className="display-md">
            {a.principlesH2}
          </h2>
          <dl className="border-t border-line-strong">
            {a.principles.map((p) => (
              <div key={p.title} className="grid gap-2 border-b border-line-strong py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8">
                <dt className="text-[clamp(1.1rem,1.5vw,1.3rem)] font-[560] leading-tight tracking-[-0.015em]">{p.title}</dt>
                <dd className="text-[16.5px] leading-[1.6] text-ink-2">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section data-nav="dark" className="bg-night text-moon" aria-labelledby="origin-title">
        <div className="wrap grid gap-10 py-[clamp(96px,12vw,160px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <h2 id="origin-title" className="display-md flex items-start gap-4">
            <span className="mt-[0.42em] h-2.5 w-2.5 flex-none rounded-full bg-cyan shadow-[0_0_0_5px_rgba(0,206,255,0.16)]" aria-hidden="true" />
            {a.origin.h2}
          </h2>
          <div className="flex flex-col items-start gap-6">
            {a.origin.text.map((p) => (
              <p key={p} className="max-w-[36rem] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.65] text-moon-2">
                {p}
              </p>
            ))}
            <Link href={`/${lang}/products/lina`} className="btn btn-moon mt-2">
              {a.origin.cta}
            </Link>
          </div>
        </div>
      </section>

      <PageCta h2={a.closing.h2} cta={a.closing.cta} href={`/${lang}/contact`} />
    </main>
  );
}
