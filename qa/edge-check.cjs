// Usage: node qa/edge-check.cjs <width> <height> <path...>
// Reduced motion (everything in its final place, stories in normal flow). For each section, prints the space
// between its edges and its first/last line of text, so text that sits on a section's edge stands out.
const { chromium } = require("playwright");
(async () => {
  const [w, h, ...paths] = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: +w, height: +h }, reducedMotion: "reduce" });
  for (const p of paths) {
    await page.goto("http://localhost:3100" + p, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    const rows = await page.evaluate(() => {
      const out = [];
      for (const s of document.querySelectorAll("main section, main > div > section, footer")) {
        if (s.parentElement.closest("section") && s.tagName !== "FOOTER") continue;
        const r = s.getBoundingClientRect();
        if (r.height < 40) continue;
        let top = Infinity, bottom = -Infinity, last = "";
        for (const el of s.querySelectorAll("*")) {
          if (!el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) continue;
          const hasText = [...el.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim());
          const solid = /^(IMG|BUTTON|A|INPUT|TEXTAREA|SELECT)$/.test(el.tagName) && el.offsetWidth < r.width * 0.9;
          if (!hasText && !solid) continue;
          const b = el.getBoundingClientRect();
          if (!b.height) continue;
          top = Math.min(top, b.top);
          if (b.bottom > bottom) { bottom = b.bottom; last = (el.textContent || el.tagName).trim().slice(0, 34); }
        }
        if (bottom === -Infinity) continue;
        const name = s.id || s.getAttribute("aria-labelledby") || s.className.toString().slice(0, 30) || s.tagName;
        out.push({ name, h: Math.round(r.height), top: Math.round(top - r.top), bottom: Math.round(r.bottom - bottom), last });
      }
      return out;
    });
    console.log(`\n## ${p} ${w}x${h}`);
    for (const r of rows) {
      const flag = r.bottom < (w < 700 ? 48 : 64) || r.top < (w < 700 ? 48 : 64) ? "  <-- tight" : "";
      console.log(`${String(r.name).padEnd(30)} h ${String(r.h).padStart(5)}  top ${String(r.top).padStart(4)}  bottom ${String(r.bottom).padStart(4)}  last "${r.last}"${flag}`);
    }
  }
  await browser.close();
})();
