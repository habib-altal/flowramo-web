import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Plus } from "lucide-react";
import { alternates, formatDate, hasLocale, url } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";
import { ARTICLES, getArticle } from "@/content/articles";
import { JsonLd, articleSchema } from "@/lib/schema";
import { Blocks } from "@/components/blog/Blocks";
import { Inline, plain } from "@/components/blog/Inline";
import { ReadingProgress, Toc } from "@/components/blog/Toc";
import { DemoButton } from "@/components/Demo";
import { Footer } from "@/components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = getArticle(slug);
  if (!hasLocale(lang) || !article) return {};
  const body = article[lang];
  const image = `/og/${slug}-${lang}.png`;
  return {
    title: body.seoTitle,
    description: body.description,
    keywords: body.keywords,
    alternates: alternates(lang, `/blog/${slug}`),
    openGraph: {
      type: "article",
      url: url(lang, `/blog/${slug}`),
      title: body.title,
      description: body.description,
      publishedTime: article.published,
      modifiedTime: article.updated,
      images: [{ url: image, width: 1200, height: 630, alt: body.title }],
    },
    twitter: { card: "summary_large_image", title: body.title, description: body.description, images: [image] },
  };
}

export default async function ArticlePage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  const article = getArticle(slug);
  if (!hasLocale(lang) || !article) notFound();
  const t = getDictionary(lang);
  const b = t.blog;
  const body = article[lang];
  const toc = body.blocks.flatMap((x) => (x.t === "h2" ? [{ id: x.id, text: x.text }] : []));
  const related = article.related.map(getArticle).filter((a) => a !== undefined);

  return (
    <main className="pt-[68px]">
      <JsonLd data={articleSchema(lang, t, article)} />
      <ReadingProgress />

      <article>
        <header className="wrap pb-10 pt-12 lg:pb-14 lg:pt-20">
          <nav aria-label="Breadcrumb" className="mb-8 text-[13.5px] text-ink-3">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href={`/${lang}`} className="hover:text-ink">
                  {b.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/${lang}/blog`} className="hover:text-ink">
                  {b.title}
                </Link>
              </li>
            </ol>
          </nav>
          <div className="max-w-[54rem]">
            <h1 className="article-title text-[clamp(2.3rem,4.8vw,4.3rem)] font-[560] leading-[1] tracking-[-0.042em]" style={{ fontStretch: "92%" }}>
              {body.title}
            </h1>
            <p className="lede mt-6 max-w-[42rem]">{body.description}</p>
            <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-ink-3">
              <span className="font-medium text-ink-2">{b.by}</span>
              <span aria-hidden="true">·</span>
              <span>
                {b.updated} <time dateTime={article.updated}>{formatDate(lang, article.updated)}</time>
              </span>
              <span aria-hidden="true">·</span>
              <span>{b.minutes.replace("{n}", String(body.minutes))}</span>
            </p>
          </div>
        </header>

        <div className="wrap grid gap-12 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[250px_minmax(0,46rem)]">
          <aside className="hidden lg:block">
            <div className="sticky top-[110px]">
              <Toc items={toc} label={b.toc} />
            </div>
          </aside>

          <div className="min-w-0">
            {/* The quotable answer comes first: it is what readers and AI search engines take away. */}
            <section aria-labelledby="short-answer" className="rounded-[24px] border border-line bg-card p-6 sm:p-8">
              <h2 id="short-answer" className="flex items-center gap-2.5 text-[13.5px] font-medium text-blue">
                <span className="lina-dot scale-75" aria-hidden="true" />
                {b.answer}
              </h2>
              <p className="mt-3 text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.55] tracking-[-0.01em] text-ink">
                <Inline text={body.answer} />
              </p>
            </section>

            <section aria-labelledby="takeaways" className="mt-8 px-1">
              <h2 id="takeaways" className="text-[13.5px] font-medium text-ink-3">
                {b.takeaways}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {body.takeaways.map((k) => (
                  <li key={k} className="flex gap-3 text-[16.5px] leading-[1.55] text-ink-2">
                    <Check size={18} className="mt-[3px] flex-none text-blue" aria-hidden="true" />
                    <span>
                      <Inline text={k} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <details className="group mt-8 rounded-[18px] border border-line bg-card lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-[15px] font-medium">
                {b.toc}
                <Plus size={18} className="transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <ol className="flex flex-col gap-1 px-5 pb-4 text-[15px] text-ink-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="block py-1 hover:text-ink">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </details>

            <div className="prose-f mt-4">
              <Blocks blocks={body.blocks} cta={b.cta} />
            </div>

            <section aria-labelledby="faq" className="mt-20">
              <h2 id="faq" className="text-[clamp(1.6rem,2.4vw,2.1rem)] font-[560] tracking-[-0.03em]">
                {b.faq}
              </h2>
              <div className="mt-6 border-t border-line">
                {body.faq.map((f) => (
                  <details key={f.q} className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[17.5px] font-medium leading-snug">
                      <h3>{f.q}</h3>
                      <Plus size={20} className="mt-0.5 flex-none text-ink-3 transition-transform group-open:rotate-45" aria-hidden="true" />
                    </summary>
                    <p className="pb-6 pe-10 text-[16.5px] leading-[1.7] text-ink-2">
                      <Inline text={f.a} />
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section aria-labelledby="sources" className="mt-16">
              <h2 id="sources" className="text-[13.5px] font-medium text-ink-3">
                {b.sources}
              </h2>
              <ol className="mt-4 flex list-decimal flex-col gap-2 ps-5 text-[14px] leading-[1.5] text-ink-2 marker:text-ink-3">
                {body.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener" className="break-words underline decoration-line underline-offset-[3px] hover:decoration-ink-3">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related" className="wrap mt-28">
          <div className="flex items-end justify-between gap-6 border-b border-line pb-5">
            <h2 id="related" className="text-[clamp(1.6rem,2.4vw,2.1rem)] font-[560] tracking-[-0.03em]">
              {b.related}
            </h2>
            <Link href={`/${lang}/blog`} className="text-[14.5px] font-medium text-ink-2 hover:text-ink">
              {b.back}
            </Link>
          </div>
          <ul className="grid gap-4 pt-6 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/${lang}/blog/${r.slug}`}
                  className="group flex h-full flex-col rounded-[24px] border border-line bg-card p-6 transition-colors hover:border-ink-3 sm:p-7"
                >
                  <span className="text-[13px] text-ink-3">{b.minutes.replace("{n}", String(r[lang].minutes))}</span>
                  <span className="mt-3 text-[clamp(1.25rem,1.8vw,1.5rem)] font-[560] leading-[1.2] tracking-[-0.025em]">{r[lang].title}</span>
                  <span className="mt-3 line-clamp-2 text-[15px] leading-[1.6] text-ink-2">{plain(r[lang].description)}</span>
                  <span className="mt-auto flex items-center gap-1.5 pt-6 text-[14.5px] font-medium">
                    {b.read}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="wrap flex flex-col items-center py-32 text-center">
        <span className="lina-dot" aria-hidden="true" />
        <p className="mt-6 max-w-[16ch] text-[clamp(2rem,4.4vw,3.6rem)] font-[560] leading-[1.02] tracking-[-0.04em]" style={{ fontStretch: "92%" }}>
          {b.cta.title}
        </p>
        <p className="lede mt-5 max-w-[32rem]">{b.cta.sub}</p>
        <DemoButton className="btn btn-ink mt-9">{b.cta.button}</DemoButton>
      </section>

      <Footer />
    </main>
  );
}
