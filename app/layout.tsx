import type { Metadata, Viewport } from "next";
import "@fontsource-variable/instrument-sans/standard.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-400.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowramo · Lina, the AI receptionist for dental clinics",
  description:
    "Lina answers your patients on WhatsApp, books them into your calendar, follows up when they go quiet and brings them back for their next visit.",
  metadataBase: new URL("https://flowramo.com"),
  openGraph: {
    title: "Flowramo · Your clinic keeps moving. Even when you don't.",
    description: "Lina turns patient conversations into bookings, follow-ups and lasting relationships.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
