import type { NextConfig } from "next";

const supabase = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://rfoebtyreltajblsryep.supabase.co";
const dev = process.env.NODE_ENV !== "production";

// Pages are statically generated, so scripts cannot carry per-request nonces: inline
// scripts (theme flag, JSON-LD, Next's payload) stay allowed, but every outside origin is closed.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""} https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self' ${supabase} https://va.vercel-scripts.com${dev ? " ws: wss:" : ""}`,
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
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
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
