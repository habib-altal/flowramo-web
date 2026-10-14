import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternates, hasLocale } from "@/lib/i18n";
import { getCommon, getHome } from "@/content/dictionaries";
import { JsonLd, companySchema } from "@/lib/schema";
import { PageDictProvider } from "@/components/PageDict";
import { HomeHero } from "@/components/home/HomeHero";
import { Problem } from "@/components/home/Problem";
import { Capabilities } from "@/components/home/Capabilities";
import { LinaShowcase } from "@/components/home/LinaShowcase";
import { Process } from "@/components/home/Process";
import { Ownership } from "@/components/home/Ownership";
import { HomeClosing } from "@/components/home/HomeClosing";
import { Faq } from "@/components/Faq";
import { JournalTeaser } from "@/components/JournalTeaser";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getHome(lang);
  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    alternates: alternates(lang),
  };
}

/*
  The company home. Order follows the reader's questions: what do you do (hero),
  why would I need it (problem), what exactly (capabilities), does it work (Lina),
  how (process), what do I keep (ownership), what about… (FAQ), then the ask.
*/
export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getHome(lang);
  const common = getCommon(lang);
  return (
    <PageDictProvider value={t}>
      <main id="main">
        <JsonLd data={companySchema(lang, common, t.faq.items)} />
        <HomeHero t={t} lang={lang} />
        <Problem />
        <Capabilities />
        <LinaShowcase />
        <Process />
        <Ownership />
        <Faq t={t.faq} />
        <JournalTeaser lang={lang} t={common} />
        <HomeClosing t={t.closing} lang={lang} email={common.footer.email} />
      </main>
    </PageDictProvider>
  );
}
