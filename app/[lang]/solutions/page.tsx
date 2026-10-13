import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";
import { getCommon, getHome, getPages } from "@/content/dictionaries";
import { JsonLd, pageSchema } from "@/lib/schema";
import { PageCta, PageHeader } from "@/components/pages/PageHeader";

export async function generateMetadata({ params }: PageProps<"/[lang]/solutions">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = getPages(lang).solutions.meta;
  return pageMetadata(lang, "/solutions", m.title, m.description);
}

export default async function SolutionsPage({ params }: PageProps<"/[lang]/solutions">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const common = getCommon(lang);
  const build = getHome(lang).build;
  const s = getPages(lang).solutions;
  const names = Object.fromEntries(common.capabilities.map((c) => [c.id, c.name]));

  return (
    <main id="main">
      <JsonLd data={pageSchema(lang, common, "/solutions", s.meta.title, s.meta.description, "CollectionPage")} />
      <PageHeader h1={s.h1} sub={s.sub}>
        <nav aria-label={common.footer.capabilities} className="mt-10 flex flex-wrap gap-2">
          {common.capabilities.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="chip h-9 px-3.5 text-[14px] text-ink-2 transition-colors hover:border-ink-3 hover:text-ink">
              {c.name}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="wrap">
        {build.items.map((it) => (
          <section key={it.id} id={it.id} className="grid scroll-mt-[96px] gap-10 border-t border-line py-[clamp(56px,7vw,96px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20" aria-labelledby={`${it.id}-title`}>
            <div>
              <h2 id={`${it.id}-title`} className="text-[clamp(1.9rem,3.2vw,2.9rem)] font-[560] leading-[1.05] tracking-[-0.035em]">
                {names[it.id]}
              </h2>
              <p className="mt-5 max-w-[30rem] text-[clamp(1.1rem,1.5vw,1.3rem)] leading-[1.5] text-ink-2">{it.outcome}</p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
              <div>
                <h3 className="text-[14px] font-semibold text-ink">{s.includes}</h3>
                <ul className="relative mt-5 flex flex-col gap-3.5 ps-7">
                  <span className="absolute bottom-[8px] start-[4.5px] top-[8px] w-px bg-line-strong" aria-hidden="true" />
                  {it.parts.map((p) => (
                    <li key={p} className="relative text-[15.5px] leading-[1.5] text-ink-2">
                      <span className="absolute -start-7 top-[6px] h-[10px] w-[10px] rounded-full border-[1.5px] border-blue bg-paper" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-ink">{s.uses}</h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {s.items[it.id].map((u) => (
                    <li key={u} className="border-b border-line pb-3.5 text-[15.5px] leading-[1.5] text-ink-2 last:border-0">
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href={`/${lang}/products/lina`} className="group flex items-start gap-3 rounded-[20px] border border-line bg-card p-5 transition-colors hover:border-blue/40 sm:col-span-2">
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

      <PageCta h2={s.closing.h2} text={s.closing.text} cta={s.closing.cta} href={`/${lang}/contact`} />
    </main>
  );
}
