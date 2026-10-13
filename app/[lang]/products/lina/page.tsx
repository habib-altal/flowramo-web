import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternates, hasLocale, url } from "@/lib/i18n";
import { getLina } from "@/content/dictionaries";
import { LinaPage } from "@/components/lina/LinaPage";

export async function generateMetadata({ params }: PageProps<"/[lang]/products/lina">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getLina(lang);
  const image = `/og/lina-${lang}.png`;
  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    alternates: alternates(lang, "/products/lina"),
    openGraph: { type: "website", url: url(lang, "/products/lina"), title: t.meta.ogTitle, description: t.meta.description, images: [{ url: image, width: 1200, height: 630, alt: t.meta.ogTitle }] },
    twitter: { card: "summary_large_image", title: t.meta.ogTitle, description: t.meta.description, images: [image] },
  };
}

export default async function LinaProductPage({ params }: PageProps<"/[lang]/products/lina">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <LinaPage lang={lang} />;
}
