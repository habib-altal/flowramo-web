import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { alternates, formatDate, hasLocale, url } from "@/lib/i18n";
import { getCommon } from "@/content/dictionaries";
import { ARTICLES, coverOf } from "@/content/articles";
import { JsonLd, blogSchema } from "@/lib/schema";
import { Inline, plain } from "@/components/blog/Inline";
import { DemoButton } from "@/components/Demo";

export async function generateMetadata({ params }: PageProps<"/[lang]/insights">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getCommon(lang);
  return {
    title: t.blog.title,
    description: t.blog.sub,
    alternates: alternates(lang, "/insights"),
    openGraph: { type: "website", url: url(lang, "/insights"), title: t.blog.title, description: t.blog.sub },
  };
}

export default async function BlogIndex({ params }: PageProps<"/[lang]/insights">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getCommon(lang);
  const b = t.blog;
  const [featured, ...rest] = ARTICLES;
  const minutes = (n: number) => b.minutes.replace("{n}", String(n));

  return (
    <main id="main" className="pt-[68px]">
      <JsonLd data={blogSchema(lang, t, ARTICLES)} />

      <header className="wrap pb-14 pt-16 lg:pb-20 lg:pt-24">
        <p className="flex items-center gap-2.5 text-[14px] font-medium text-ink-2">
          <span className="lina-dot scale-75" aria-hidden="true" />
          Flowramo
        </p>
        <h1 className="display-lg mt-5 max-w-[14ch]" data-split>
          {b.title}
        </h1>
        <p className="lede mt-6 max-w-[38rem]" data-reveal>
          {b.sub}
        </p>
      </header>

      <section className="wrap" aria-label={b.title}>
        <Link
          href={`/${lang}/insights/${featured.slug}`}
          className="group grid overflow-hidden rounded-[28px] border border-line bg-card transition-colors hover:border-ink-3 lg:grid-cols-[1.15fr_1fr]"
          data-reveal="scale"
        >
          <img src={coverOf(featured.slug)} alt="" width={1280} height={720} fetchPriority="high" decoding="async" className="aspect-[16/9] w-full border-b border-line object-cover object-[70%_50%] sm:aspect-[21/9] lg:col-span-2" />
          <div className="flex flex-col p-7 sm:p-10">
            <span className="text-[13.5px] text-ink-3">
              <time dateTime={featured.published}>{formatDate(lang, featured.published)}</time> · {minutes(featured[lang].minutes)}
            </span>
            <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.9rem)] font-[560] leading-[1.04] tracking-[-0.035em]" style={{ fontStretch: "92%" }}>
              {featured[lang].title}
            </h2>
            <p className="mt-5 max-w-[34rem] text-[16.5px] leading-[1.6] text-ink-2">{plain(featured[lang].description)}</p>
            <span className="mt-auto flex items-center gap-1.5 pt-8 text-[15px] font-medium">
              {b.read}
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
            </span>
          </div>
          <div className="flex flex-col justify-center border-t border-line bg-paper-2/60 p-7 sm:p-10 lg:border-s lg:border-t-0">
            <p className="flex items-center gap-2.5 text-[13.5px] font-medium text-blue">
              <span className="lina-dot scale-75" aria-hidden="true" />
              {b.answer}
            </p>
            <p className="mt-4 text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.6] text-ink">
              <Inline text={plain(featured[lang].answer)} />
            </p>
          </div>
        </Link>

        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {rest.map((a) => (
            <li key={a.slug} data-reveal>
              <Link
                href={`/${lang}/insights/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-card transition-colors hover:border-ink-3"
              >
                <img src={coverOf(a.slug)} alt="" width={1280} height={720} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover object-[70%_50%]" />
                <span className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-[13px] text-ink-3">{minutes(a[lang].minutes)}</span>
                <h2 className="mt-3 text-[clamp(1.25rem,1.7vw,1.45rem)] font-[560] leading-[1.2] tracking-[-0.025em]">{a[lang].title}</h2>
                <p className="mt-3 line-clamp-3 text-[15px] leading-[1.6] text-ink-2">{plain(a[lang].description)}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-6 text-[14.5px] font-medium">
                  {b.read}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap flex flex-col items-center py-32 text-center">
        <span className="lina-dot" aria-hidden="true" />
        <p className="mt-6 max-w-[16ch] text-[clamp(2rem,4.4vw,3.6rem)] font-[560] leading-[1.02] tracking-[-0.04em]" style={{ fontStretch: "92%" }}>
          {b.ctaStudio.title}
        </p>
        <p className="lede mt-5 max-w-[32rem]">{b.ctaStudio.sub}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href={`/${lang}/contact`} className="btn btn-ink">
            {b.ctaStudio.button}
          </Link>
          <DemoButton className="btn btn-line">{b.cta.button}</DemoButton>
        </div>
      </section>

    </main>
  );
}
