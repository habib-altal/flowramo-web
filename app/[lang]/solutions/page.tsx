import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";
import { getCommon, getHome, getPages } from "@/content/dictionaries";
import { getArticle } from "@/content/articles";
import type { Article } from "@/content/articles/types";
import { JsonLd, solutionsSchema } from "@/lib/schema";
import { PageCta, PageHeader } from "@/components/pages/PageHeader";
import { SolutionsNav } from "@/components/pages/SolutionsNav";
import { AmbientVideo } from "@/components/motion/AmbientVideo";

export async function generateMetadata({ params }: PageProps<"/[lang]/solutions">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = getPages(lang).solutions.meta;
  return pageMetadata(lang, "/solutions", m.seoTitle, m.description);
}

/** Insights guides for each capability, and for the closing. Slugs missing from ARTICLES are skipped. */
const GUIDES: Record<string, string[]> = {
  "ai-agents": ["ai-agents-for-business", "arabic-ai-agent-whatsapp-gulf-dialect"],
  automation: ["ai-automation-for-business-processes"],
  knowledge: ["ai-knowledge-system-for-company-documents"],
  integrations: ["whatsapp-appointment-booking-dental-clinic"],
  closing: ["how-to-scope-an-ai-project", "own-your-ai-system"],
};
const guidesFor = (key: string) => (GUIDES[key] ?? []).map(getArticle).filter((a) => a !== undefined);

/** Quiet text links to the guides: a small label, then each title as an underlined link. */
function GuideLinks({ label, guides, lang, className = "" }: { label: string; guides: Article[]; lang: Locale; className?: string }) {
  if (guides.length === 0) return null;
  return (
    <div className={`max-w-[30rem] ${className}`} data-reveal>
      <p className="text-[13px] font-medium text-ink-3">{label}</p>
      <ul className="mt-2 flex flex-col gap-2">
        {guides.map((g) => (
          <li key={g.slug} className="text-[15.5px] leading-[1.5]">
            <Link href={`/${lang}/insights/${g.slug}`} className="text-ink-2 underline decoration-line underline-offset-[4px] transition-colors hover:text-ink hover:decoration-ink-3">
              {g[lang].title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function SolutionsPage({ params }: PageProps<"/[lang]/solutions">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const common = getCommon(lang);
  const build = getHome(lang).build;
  const s = getPages(lang).solutions;
  const names = Object.fromEntries(common.capabilities.map((c) => [c.id, c.name]));
  const outcomes = Object.fromEntries(build.items.map((it) => [it.id, it.outcome]));

  return (
    <main id="main">
      <JsonLd data={solutionsSchema(lang, common, s.meta.title, s.meta.description, outcomes)} />
      <PageHeader h1={s.h1} sub={s.sub} />
      {/* Infrastructure at work, quietly (Higgsfield loop). */}
      <div className="wrap pb-[clamp(40px,5vw,72px)]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-night sm:aspect-[21/9]" data-reveal="fade">
          <AmbientVideo name="server-rack" position="72% 50%" />
        </div>
      </div>
      <SolutionsNav label={common.footer.capabilities} items={common.capabilities} />

      <div className="wrap">
        {build.items.map((it) => (
          <section key={it.id} id={it.id} data-spy className="grid scroll-mt-[150px] gap-10 border-t border-line py-[clamp(56px,7vw,96px)] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20" aria-labelledby={`${it.id}-title`}>
            <div className="md:sticky md:top-[160px] md:self-start">
              <h2 id={`${it.id}-title`} className="text-[clamp(1.9rem,3.2vw,2.9rem)] font-[560] leading-[1.12] tracking-[-0.022em]" data-split>
                {names[it.id]}
              </h2>
              <p className="mt-5 max-w-[30rem] text-[clamp(1.1rem,1.5vw,1.3rem)] leading-[1.5] text-ink-2" data-reveal>
                {it.outcome}
              </p>
              <GuideLinks label={s.guide} guides={guidesFor(it.id)} lang={lang} className="mt-7" />
            </div>
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
              <div>
                <h3 className="text-[14px] font-semibold text-ink">{s.includes}</h3>
                <ul className="mt-5 flex flex-col gap-3.5 ps-7" data-steps>
                  {it.parts.map((p, i) => (
                    <li key={p} className="relative text-[15.5px] leading-[1.5] text-ink-2" data-step>
                      {i < it.parts.length - 1 && <span className="absolute -bottom-5 -start-[23.5px] top-4 w-px bg-blue" data-step-link aria-hidden="true" />}
                      <span className="absolute -start-7 top-[6px] h-[10px] w-[10px] rounded-full border-[1.5px] border-blue bg-paper" data-step-dot aria-hidden="true" />
                      <span data-step-body>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-ink">{s.uses}</h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {s.items[it.id].map((u) => (
                    <li key={u} className="border-b border-line pb-3.5 text-[15.5px] leading-[1.5] text-ink-2 last:border-0" data-reveal>
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={`/${lang}/products/lina`} className="group flex items-start gap-3 rounded-[20px] border border-line bg-card p-5 transition-colors hover:border-blue/40 sm:col-span-2" data-reveal="scale">
                <span className="lina-dot mt-[7px] scale-75" aria-hidden="true" />
                <span className="text-[15px] leading-[1.55]">
                  <span className="font-medium text-ink">{s.inLina}</span>
                  <span className="block text-ink-2">{it.lina}</span>
                </span>
              </Link>
            </div>
          </section>
        ))}
      </div>

      <PageCta h2={s.closing.h2} text={s.closing.text} cta={s.closing.cta} href={`/${lang}/contact`}>
        <GuideLinks label={s.closing.guides} guides={guidesFor("closing")} lang={lang} className="mt-8" />
      </PageCta>
    </main>
  );
}
