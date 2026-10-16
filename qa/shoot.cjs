// Usage: node qa/shoot.cjs <name> <width> <height> <spec...>
// spec = "<sectionId>:<fraction>" scrolls to that point inside a section (fraction of its scroll length)
//        or "y:<pixels>" for an absolute scroll position, optional "@<ms>" wait suffix.
const { chromium } = require("playwright");
(async () => {
  const [name, w, h, ...specs] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: +(process.env.DPR || 1) });
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(process.env.URL || "http://localhost:3100", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  let i = 0;
  for (const raw of specs) {
    const [spec, wait] = raw.split("@");
    const y = await page.evaluate((s) => {
      const [a, b] = s.split(":");
      if (a === "y") return +b;
      const el = document.getElementById(a);
      if (!el) return 0;
      let top = 0, n = el;
      while (n) { top += n.offsetTop; n = n.offsetParent; }
      const len = Math.max(0, el.offsetHeight - window.innerHeight);
      return top + len * +b;
    }, spec);
    await page.evaluate((y) => { window.__lenis ? window.__lenis.scrollTo(y, { immediate: true }) : window.scrollTo(0, y); }, y);
    await page.waitForTimeout(+(wait || 1200));
    const file = `qa/${name}-${String(i++).padStart(2, "0")}.png`;
    await page.screenshot({ path: file });
    console.log(file, spec, Math.round(y));
  }
  const sw = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log("scrollWidth", sw, "errors", JSON.stringify(errors.slice(0, 8)));
  await browser.close();
})();
