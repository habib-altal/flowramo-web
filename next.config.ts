import type { NextConfig } from "next";

const supabase = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://rfoebtyreltajblsryep.supabase.co";
const dev = process.env.NODE_ENV !== "production";

// Pages are statically generated, so scripts cannot carry per-request nonces: inline
// scripts (theme flag, JSON-LD, Next's payload) stay allowed, but every outside origin is closed.
const csp = [
  "default-src 'self'",
  // In production Vercel Analytics loads from this origin (/_vercel/insights); only dev pulls its script from the CDN.
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self' ${supabase}${dev ? " https://va.vercel-scripts.com ws: wss:" : ""}`,
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(dev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  // No includeSubDomains: n8n, evolution and docling live on flowramo.com subdomains run elsewhere, and a browser
  // that visited the site must never be forced onto HTTPS for one of them that doesn't serve it.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Only the canonical domain gets indexed; *.vercel.app deployment URLs never compete with it.
      { source: "/:path*", has: [{ type: "host", value: "(?<deployment>.+)\\.vercel\\.app" }], headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
    ];
  },
  async redirects() {
    return [
      // The Journal moved to Insights; keep every shared link working.
      { source: "/:lang(en|ar)/blog", destination: "/:lang/insights", permanent: true },
      { source: "/:lang(en|ar)/blog/:slug", destination: "/:lang/insights/:slug", permanent: true },
      // One product today: the products index opens Lina.
      { source: "/:lang(en|ar)/products", destination: "/:lang/products/lina", permanent: false },
    ];
  },
};

export default nextConfig;
