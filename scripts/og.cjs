// Renders Open Graph images (1200x630) and public/logo.png with a real browser, so Arabic shapes correctly.
// Usage: npm run dev, then NODE_PATH=$(npm root -g) node scripts/og.cjs [baseUrl]
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const BASE = process.argv[2] || "http://localhost:3100";
const font = (p) => `data:font/woff2;base64,${fs.readFileSync(path.join(__dirname, "..", "node_modules", p)).toString("base64")}`;
const FONTS = `
@font-face{font-family:"IS";src:url(${font("@fontsource-variable/instrument-sans/files/instrument-sans-latin-wdth-normal.woff2")}) format("woff2");font-weight:400 700;font-stretch:75% 100%}
@font-face{font-family:"AX";src:url(${font("@fontsource-variable/alexandria/files/alexandria-arabic-wght-normal.woff2")}) format("woff2");font-weight:100 900}
@font-face{font-family:"AX";src:url(${font("@fontsource-variable/alexandria/files/alexandria-latin-wght-normal.woff2")}) format("woff2");font-weight:100 900;unicode-range:U+0000-00FF}
@font-face{font-family:"PA";src:url(${font("@fontsource/ibm-plex-sans-arabic/files/ibm-plex-sans-arabic-arabic-500-normal.woff2")}) format("woff2");font-weight:500}
`;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

function page({ lang, kicker, title, sub, home }) {
  const rtl = lang === "ar";
  const display = rtl ? `"AX", "IS"` : `"IS"`;
  const body = rtl ? `"PA", "IS"` : `"IS"`;
  return `<!doctype html><html lang="${lang}" dir="${rtl ? "rtl" : "ltr"}"><head><meta charset="utf-8"><style>${FONTS}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#faf9f6;color:#0c0c0b;font-family:${body};overflow:hidden;position:relative}
.glow{position:absolute;inset:auto -120px -260px auto;width:720px;height:520px;border-radius:50%;background:radial-gradient(closest-side,rgba(43,92,255,.16),rgba(43,92,255,0));${rtl ? "inset:auto auto -260px -120px;" : ""}}
.top{position:absolute;inset:56px 72px auto 72px;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:12px;font-family:"IS";font-weight:620;font-size:30px;letter-spacing:-.03em;font-stretch:94%;direction:ltr}
.kicker{display:flex;align-items:center;gap:12px;font-size:22px;color:#5d5c57;font-weight:500}
.dot{width:12px;height:12px;border-radius:99px;background:#2b5cff;box-shadow:0 0 0 6px rgba(43,92,255,.18)}
.main{position:absolute;inset:auto 72px 64px 72px}
h1{font-family:${display};font-weight:${rtl ? 600 : 560};font-size:${home ? (rtl ? 74 : 86) : rtl ? 56 : 66}px;line-height:${rtl ? 1.25 : 1.0};letter-spacing:${rtl ? 0 : "-0.042em"};font-stretch:92%;max-width:${home ? 1000 : 1040}px;text-wrap:balance}
p{margin-top:22px;font-size:${rtl ? 25 : 26}px;line-height:1.45;color:#5d5c57;max-width:900px}
.bubble{position:absolute;top:150px;${rtl ? "left" : "right"}:72px;display:flex;flex-direction:column;gap:12px;align-items:${rtl ? "flex-start" : "flex-end"}}
.b{padding:14px 20px;border-radius:24px;font-size:22px;line-height:1.35;max-width:430px}
.bp{background:#fff;border:1px solid #e6e4dd}
.bl{background:#2b5cff;color:#fff}
</style></head><body><div class="glow"></div>
<div class="top"><div class="logo"><svg width="34" height="34" viewBox="0 0 22 22"><circle cx="11" cy="11" r="10" fill="none" stroke="#0c0c0b" stroke-opacity=".22" stroke-width="1.25"/><circle cx="11" cy="11" r="4.5" fill="#2b5cff"/></svg>Flowramo</div>
<div class="kicker"><span class="dot"></span>${esc(kicker)}</div></div>
${home ? `<div class="bubble"><div class="b bp">${rtl ? "مرحبًا، هل تقدمون زراعة الأسنان؟" : "Hi, do you offer dental implants?"}</div><div class="b bl">${rtl ? "تم حجز الاستشارة · الثلاثاء 14:30" : "Consultation booked · Tue 14:30"}</div></div>` : ""}
<div class="main"><h1>${title}</h1>${sub ? `<p>${esc(sub)}</p>` : ""}</div></body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  const reader = await browser.newPage();
  const shots = [
    { file: "home-en", lang: "en", home: true, kicker: "AI WhatsApp receptionist for dental clinics", title: "Your clinic keeps moving.<br>Even when you don't." },
    { file: "home-ar", lang: "ar", home: true, kicker: "موظفة استقبال ذكية على واتساب لعيادات الأسنان", title: "عيادتك لا تتوقف.<br>حتى عندما تتوقف أنت." },
  ];
  for (const lang of ["en", "ar"]) {
    await reader.goto(`${BASE}/${lang}/blog`, { waitUntil: "networkidle" });
    const links = await reader.$$eval(`a[href^="/${lang}/blog/"]`, (as) => [...new Set(as.map((a) => a.getAttribute("href")))]);
    for (const href of links) {
      await reader.goto(BASE + href, { waitUntil: "domcontentloaded" });
      const title = await reader.$eval("h1", (h) => h.textContent.trim());
      shots.push({ file: `${href.split("/").pop()}-${lang}`, lang, kicker: lang === "ar" ? "مدونة Flowramo" : "The Flowramo Journal", title: esc(title) });
    }
  }
  for (const s of shots) {
    await ctx.setContent(page(s), { waitUntil: "load" });
    await ctx.evaluate(() => document.fonts.ready);
    await ctx.screenshot({ path: path.join(__dirname, "..", "public", "og", `${s.file}.png`) });
    console.log("og", s.file);
  }
  // Square logo for structured data (Organization.logo).
  await ctx.setViewportSize({ width: 512, height: 512 });
  await ctx.setContent(`<body style="margin:0;background:transparent"><svg width="512" height="512" style="display:block" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="#0c0c0b"/><circle cx="32" cy="32" r="19" fill="none" stroke="#faf9f6" stroke-opacity="0.28" stroke-width="2.5"/><circle cx="32" cy="32" r="9" fill="#2b5cff"/></svg></body>`);
  await ctx.screenshot({ path: path.join(__dirname, "..", "public", "logo.png"), omitBackground: true });
  console.log("logo.png");
  await browser.close();
})();
