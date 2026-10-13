import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/meta";
import { getCommon, getPages } from "@/content/dictionaries";
import { JsonLd, pageSchema } from "@/lib/schema";
import { LegalPage } from "@/components/pages/LegalPage";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const m = getPages(lang).privacy.meta;
  return pageMetadata(lang, "/privacy", m.title, m.description);
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getPages(lang).privacy;
  return (
    <>
      <JsonLd data={pageSchema(lang, getCommon(lang), "/privacy", t.meta.title, t.meta.description)} />
      <LegalPage t={t} />
    </>
  );
}
