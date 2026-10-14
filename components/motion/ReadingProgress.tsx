/** A thin blue bar under the nav that fills as the page is read (driven by ScrollFx `data-progress`). */
export function ReadingProgress() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-[68px] z-40 hidden h-[2px] [.js_&]:block" aria-hidden="true">
      <div data-progress className="h-full origin-left scale-x-0 bg-blue rtl:origin-right" />
    </div>
  );
}
