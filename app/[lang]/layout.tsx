import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "@fontsource-variable/instrument-sans/standard.css";
import "@fontsource-variable/alexandria/index.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-400.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-500.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-600.css";
import "../globals.css";
import { LOCALES, SITE_URL, alternates, dirOf, hasLocale, url } from "@/lib/i18n";
import { getDictionary } from "@/content/dictionaries";
import { I18nProvider } from "@/components/I18n";
import { DemoProvider } from "@/components/Demo";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.title, template: "%s · Flowramo" },
    description: t.meta.description,
    applicationName: "Flowramo",
    alternates: alternates(lang),
    openGraph: {
      type: "website",
      siteName: "Flowramo",
      locale: lang === "ar" ? "ar_SA" : "en_GB",
      alternateLocale: lang === "ar" ? ["en_GB"] : ["ar_SA"],
      url: url(lang),
      title: t.meta.ogTitle,
      description: t.meta.description,
      images: [{ url: `/og/home-${lang}.png`, width: 1200, height: 630, alt: t.meta.ogTitle }],
    },
    twitter: { card: "summary_large_image", title: t.meta.ogTitle, description: t.meta.description, images: [`/og/home-${lang}.png`] },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang);
  return (
    <html lang={lang} dir={dirOf(lang)} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <I18nProvider locale={lang} t={t}>
          <DemoProvider>
            <SmoothScroll />
            <Nav />
            {children}
          </DemoProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
