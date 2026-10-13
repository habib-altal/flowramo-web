"""Write the brand SVGs, the tab icon and components/brand-paths.ts from a trace produced by trace.py.

Usage (from the repo root, in a venv with pillow, numpy and potracer):
  python scripts/brand/trace.py design/brand-source/flowramo-logo.webp /tmp/traced.json
  python scripts/brand/build.py /tmp/traced.json
Then render the PNG assets: start the dev server on port 3100 and run scripts/og.cjs.
"""
import json
import sys

t = json.load(open(sys.argv[1]))
mark, word = t["mark"]["d"], t["word"]["d"]
BLUE, CYAN = "#0050F8", "#00CEFF"

mx0, my0, mx1, my1 = t["mark"]["bbox"]
side = max(mx1 - mx0, my1 - my0)


def square(pad):
    s = side * (1 + 2 * pad)
    cx, cy = (mx0 + mx1) / 2, (my0 + my1) / 2
    return f"{cx - s / 2:.2f} {cy - s / 2:.2f} {s:.2f} {s:.2f}"


lock = f"{mx0:.2f} {my0:.2f} {t['word']['bbox'][2] - mx0:.2f} {my1 - my0:.2f}"


def svg(viewbox, body):
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}" role="img" aria-label="Flowramo"><title>Flowramo</title>{body}</svg>\n'


files = {
    "public/brand/flowramo-mark.svg": svg(square(0.0), f'<path fill="{BLUE}" fill-rule="evenodd" d="{mark}"/>'),
    "public/brand/flowramo-logo.svg": svg(lock, f'<path fill="{BLUE}" fill-rule="evenodd" d="{mark}"/><path fill="#000" fill-rule="evenodd" d="{word}"/>'),
    "public/brand/flowramo-logo-white.svg": svg(lock, f'<path fill="{CYAN}" fill-rule="evenodd" d="{mark}"/><path fill="#fff" fill-rule="evenodd" d="{word}"/>'),
    # Browser tab icon: brand blue, the cyan variant when the browser chrome is dark.
    "app/icon.svg": f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{square(0.04)}"><style>path{{fill:{BLUE}}}@media (prefers-color-scheme:dark){{path{{fill:{CYAN}}}}}</style><path fill-rule="evenodd" d="{mark}"/></svg>\n',
    "components/brand-paths.ts": f'''// Traced from the official Flowramo artwork in design/brand-source/ by scripts/brand (brand blue {BLUE}; {CYAN} on dark backgrounds).
// Regenerate with scripts/brand/build.py rather than editing these paths by hand.
export const LOGO_VIEWBOX = "{lock}";
export const MARK_VIEWBOX = "{square(0.0)}";
export const BRAND_BLUE = "{BLUE}";
export const BRAND_CYAN = "{CYAN}";
export const MARK_PATH =
  "{mark}";
export const WORDMARK_PATH =
  "{word}";
''',
}
for p, c in files.items():
    open(p, "w").write(c)
    print(p, len(c))
