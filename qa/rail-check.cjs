// Usage: URL=http://localhost:3100/en node qa/rail-check.cjs <width> <height>
// For every pinned stage (StageProgress), scrolls through it and reports visible content the rail sits on,
// and how close the stage's lowest visible content comes to the bottom edge at the end of the story.
const { chromium } = require("playwright");
(async () => {
  const [w, h] = process.argv.slice(2).map(Number);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(process.env.URL || "http://localhost:3100/en", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  const count = await page.evaluate(() => document.querySelectorAll(".sp").length);
  const out = [];
  for (let i = 0; i < count; i++) {
    for (const f of [0.04, 0.3, 0.6, 0.97]) {
      const y = await page.evaluate(([i, f]) => {
        const sp = document.querySelectorAll(".sp")[i];
        const host = sp.closest(".scrolly, section");
        let top = 0, n = host;
        while (n) { top += n.offsetTop; n = n.offsetParent; }
        return top + Math.max(0, host.offsetHeight - innerHeight) * f;
      }, [i, f]);
      await page.evaluate((y) => (window.__lenis ? window.__lenis.scrollTo(y, { immediate: true }) : window.scrollTo(0, y)), y);
      await page.waitForTimeout(900);
      const r = await page.evaluate(([i, f]) => {
        const sp = document.querySelectorAll(".sp")[i];
        const host = sp.closest(".scrolly, section");
        const name = host.id || host.querySelector("[id]")?.id || "?";
        if (!sp.hasAttribute("data-on")) return { name, off: true };
        const stage = sp.parentElement;
        const rail = sp.querySelector(".sp-rail").getBoundingClientRect();
        const box = { l: rail.left - 6, r: rail.right + 6, t: rail.top - 6, b: rail.bottom + 6 };
        const vpArea = innerWidth * innerHeight;
        const hits = new Set();
        let lowest = 0, lowestText = "";
        for (const el of stage.querySelectorAll("*")) {
          if (sp.contains(el)) continue;
          if (!el.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) continue;
          const b = el.getBoundingClientRect();
          if (!b.width || !b.height || b.width * b.height > vpArea * 0.5) continue;
          const cs = getComputedStyle(el);
          const text = [...el.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim());
          const solid = /^(IMG|SVG|VIDEO|CANVAS|BUTTON|INPUT)$/i.test(el.tagName) || parseFloat(cs.borderTopWidth) > 0 || (cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent");
          if (!text && !solid) continue;
          if (text && b.top < innerHeight && b.bottom > lowest) { lowest = Math.min(b.bottom, innerHeight); lowestText = el.textContent.trim().slice(0, 24); }
          if (b.right > box.l && b.left < box.r && b.bottom > box.t && b.top < box.b) {
            hits.add(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 40)} "${(el.textContent || "").trim().slice(0, 30)}"`);
          }
        }
        return { name, hits: [...hits].slice(0, 4), gap: Math.round(innerHeight - lowest), lowestText };
      }, [i, f]);
      out.push({ f, ...r });
    }
  }
  for (const r of out) {
    if (r.off) continue;
    const hit = r.hits.length ? "OVERLAP " + r.hits.join(" | ") : "ok";
    console.log(`${String(r.name).padEnd(16)} ${r.f.toFixed(2)} bottom-gap ${String(r.gap).padStart(4)} (${r.lowestText})  ${hit}`);
  }
  await browser.close();
})();
