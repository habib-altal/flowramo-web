import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["en", "ar"] as const;

/** Pick the visitor's preferred supported language from Accept-Language (English by default). */
function preferredLocale(header: string | null): (typeof LOCALES)[number] {
  if (!header) return "en";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { lang: tag.split("-")[0], q: q ? Number(q.split("=")[1]) || 0 : 1 };
    })
    .sort((a, b) => b.q - a.q);
  const hit = ranked.find((r) => (LOCALES as readonly string[]).includes(r.lang));
  return (hit?.lang as (typeof LOCALES)[number]) ?? "en";
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request.headers.get("accept-language"))}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any file with an extension (robots.txt, sitemap.xml, llms.txt, images).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
