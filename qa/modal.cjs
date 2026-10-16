const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = [];
  p.on("pageerror", (e) => errs.push(String(e)));
  await p.goto("http://localhost:3200", { waitUntil: "networkidle" });
  await p.waitForTimeout(800);
  await p.getByRole("button", { name: "Book a Demo" }).first().click();
  await p.waitForTimeout(500);
  await p.screenshot({ path: "qa/modal.png" });
  await p.keyboard.press("Escape");
  await p.waitForTimeout(300);
  console.log("dialog open after Esc:", await p.locator("[role=dialog]").count(), "errors", JSON.stringify(errs));
  await b.close();
})();
