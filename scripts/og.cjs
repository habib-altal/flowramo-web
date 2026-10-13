// Renders Open Graph images (1200x630) and the PNG brand assets (public/logo.png, app/apple-icon.png, app/favicon.ico)
// with a real browser, so Arabic shapes correctly and the traced logo stays exact.
// Usage: npm run dev, then NODE_PATH=$(npm root -g) node scripts/og.cjs [baseUrl]
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const BASE = process.argv[2] || "http://localhost:3100";
const ROOT = path.join(__dirname, "..");
const LOGO_SVG = fs.readFileSync(path.join(ROOT, "public", "brand", "flowramo-logo.svg"), "utf8");
const MARK_SVG = fs.readFileSync(path.join(ROOT, "public", "brand", "flowramo-mark.svg"), "utf8");

/** ICO container holding PNG images (supported by every current browser). */
function ico(pngs) {
  const header = Buffer.alloc(6 + 16 * pngs.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = header.length;
  pngs.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, e);
    header.writeUInt8(size >= 256 ? 0 : size, e + 1);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(data.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...pngs.map((p) => p.data)]);
}
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
html{overflow:hidden}
body{width:1200px;height:630px;background:#faf9f6;color:#0c0c0b;font-family:${body};overflow:hidden;position:relative}
.frame{position:absolute;inset:0;overflow:hidden}
.glow{position:absolute;inset:auto -120px -260px auto;width:720px;height:520px;border-radius:50%;background:radial-gradient(closest-side,rgba(43,92,255,.16),rgba(43,92,255,0));${rtl ? "inset:auto auto -260px -120px;" : ""}}
.top{position:absolute;inset:56px 72px auto 72px;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;direction:ltr}.logo svg{height:38px;width:auto;display:block}
.kicker{display:flex;align-items:center;gap:12px;font-size:22px;color:#5d5c57;font-weight:500}
.dot{width:12px;height:12px;border-radius:99px;background:#2b5cff;box-shadow:0 0 0 6px rgba(43,92,255,.18)}
.main{position:absolute;inset:auto 72px 64px 72px}
h1{font-family:${display};font-weight:${rtl ? 600 : 560};font-size:${home ? (rtl ? 74 : 86) : rtl ? 56 : 66}px;line-height:${rtl ? 1.25 : 1.0};letter-spacing:${rtl ? 0 : "-0.042em"};font-stretch:92%;max-width:${home ? 1000 : 1040}px;text-wrap:balance}
p{margin-top:22px;font-size:${rtl ? 25 : 26}px;line-height:1.45;color:#5d5c57;max-width:900px}
.bubble{position:absolute;top:150px;${rtl ? "left" : "right"}:72px;display:flex;flex-direction:column;gap:12px;align-items:${rtl ? "flex-start" : "flex-end"}}
.b{padding:14px 20px;border-radius:24px;font-size:22px;line-height:1.35;max-width:430px}
.bp{background:#fff;border:1px solid #e6e4dd}
.bl{background:#2b5cff;color:#fff}
</style></head><body><div class="frame"><div class="glow"></div></div>
<div class="top"><div class="logo">${LOGO_SVG}</div>
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
  // Brand PNGs: the mark centred on white for structured data and Apple touch icons, transparent for the favicon.
  const markPng = async (size, { pad, bg }) => {
    await ctx.setViewportSize({ width: size, height: size });
    const inner = Math.round(size * (1 - 2 * pad));
    await ctx.setContent(
      `<body style="margin:0;width:${size}px;height:${size}px;display:grid;place-items:center;background:${bg}">` +
        `<div style="width:${inner}px;height:${inner}px">${MARK_SVG.replace("<svg ", '<svg width="100%" height="100%" ')}</div></body>`,
    );
    return ctx.screenshot({ omitBackground: bg === "transparent" });
  };
  fs.writeFileSync(path.join(ROOT, "public", "logo.png"), await markPng(512, { pad: 0.14, bg: "#ffffff" }));
  fs.writeFileSync(path.join(ROOT, "app", "apple-icon.png"), await markPng(180, { pad: 0.16, bg: "#ffffff" }));
  const sizes = [16, 32, 48];
  const pngs = [];
  for (const size of sizes) pngs.push({ size, data: await markPng(size, { pad: 0.02, bg: "transparent" }) });
  fs.writeFileSync(path.join(ROOT, "app", "favicon.ico"), ico(pngs));
  console.log("logo.png, apple-icon.png, favicon.ico");
  await browser.close();
})();
