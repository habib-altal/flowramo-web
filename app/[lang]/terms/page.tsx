import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";
import { getCommon, getPages } from "@/content/dictionaries";
import { JsonLd, pageSchema } from "@/lib/schema";
import { LegalPage } from "@/components/pages/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[lang]/terms">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = getPages(lang).terms.meta;
  return pageMetadata(lang, "/terms", m.title, m.description);
}

export default async function TermsPage({ params }: PageProps<"/[lang]/terms">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getPages(lang).terms;
  return (
    <>
      <JsonLd data={pageSchema(lang, getCommon(lang), "/terms", t.meta.title, t.meta.description)} />
      <LegalPage t={t} />
    </>
  );
}
