// node qa/sheet.cjs out.png img1 img2 ... -> grid contact sheet (4 per row)
const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const [out, ...imgs] = process.argv.slice(2);
  const html = `<html><body style="margin:0;background:#888;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:6px">${imgs
    .map((i) => `<div><img src="data:image/png;base64,${require("fs").readFileSync(i).toString("base64")}" style="width:100%;display:block"><div style="font:12px sans-serif;color:#fff">${path.basename(i)}</div></div>`)
    .join("")}</body></html>`;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1400, height: 900 } });
  await p.setContent(html);
  await p.waitForTimeout(400);
  await p.screenshot({ path: out, fullPage: true });
  await b.close();
})();
