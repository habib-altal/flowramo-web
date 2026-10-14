"""Construct the Flowramo logo geometrically (2026-10-14 refinement) and write the same JSON shape trace.py produces.

The mark: three stepped bars with one shared forward slant, left edges on one vertical. It keeps the
original mark's slanted bars, replaces the play-button triangle with a solid third bar, and reads as an
F in motion on a steady base. The wordmark: FLOWRAMO in Instrument Sans at weight 640, normal width,
+4% tracking, shaped with HarfBuzz so kerning is kept, converted to outlines.

Usage (from the repo root; needs fonttools, brotli, uharfbuzz, skia-pathops):
  python scripts/brand/construct.py /tmp/constructed.json
  python scripts/brand/build.py /tmp/constructed.json
Then render the PNG assets: start the dev server on port 3100 and run scripts/og.cjs.
"""
import io
import json
import sys

import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

FONT = "node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wdth-normal.woff2"
TEXT = "FLOWRAMO"
WEIGHT, WIDTH, TRACKING = 640, 100, 0.04

# Mark, in a 120-unit square: bar height, gap, shared slant, bar lengths.
BAR_H, GAP, SLANT, X0 = 24, 10, 10, 10
LENGTHS = [100, 72, 40]


def bar_path():
    total = len(LENGTHS) * BAR_H + (len(LENGTHS) - 1) * GAP
    y = (120 - total) / 2
    parts = []
    for w in LENGTHS:
        x1 = X0 + w
        parts.append(f"M{X0} {y:g}H{x1}L{x1 - SLANT} {y + BAR_H:g}H{X0}Z")
        y += BAR_H + GAP
    return "".join(parts), [X0, (120 - total) / 2, X0 + LENGTHS[0], (120 + total) / 2]


mark_d, mark_bbox = bar_path()
mark_h = mark_bbox[3] - mark_bbox[1]

# Wordmark: instance the variable font, shape with HarfBuzz, draw each glyph through a transform.
font = TTFont(FONT)
font.flavor = None
buf = io.BytesIO()
# Variable glyphs are drawn from overlapping contours; merge them so any fill rule renders solid letters.
inst = instancer.instantiateVariableFont(font, {"wght": WEIGHT, "wdth": WIDTH}, overlap=instancer.OverlapMode.REMOVE)
inst.save(buf)
blob = buf.getvalue()
inst = TTFont(io.BytesIO(blob))
upem = inst["head"].unitsPerEm
cap = getattr(inst["OS/2"], "sCapHeight", 0) or 700

hbfont = hb.Font(hb.Face(blob))
hbbuf = hb.Buffer()
hbbuf.add_str(TEXT)
hbbuf.guess_segment_properties()
hb.shape(hbfont, hbbuf, {"kern": True, "liga": False})

# Cap height = 56% of the mark's height, caps centred on the mark, starting 26% of the mark's height after it.
scale = (mark_h * 0.56) / cap
baseline = 60 + (cap * scale) / 2
x = mark_bbox[2] + mark_h * 0.26
glyphset = inst.getGlyphSet()
order = inst.getGlyphOrder()
svg = SVGPathPen(glyphset)
bounds = BoundsPen(glyphset)
for info, pos in zip(hbbuf.glyph_infos, hbbuf.glyph_positions):
    name = order[info.codepoint]
    t = (scale, 0, 0, -scale, x + pos.x_offset * scale, baseline - pos.y_offset * scale)
    glyphset[name].draw(TransformPen(svg, t))
    glyphset[name].draw(TransformPen(bounds, t))
    x += pos.x_advance * scale + TRACKING * upem * scale

word_d = svg.getCommands()
bx0, by0, bx1, by1 = bounds.bounds

json.dump(
    {"mark": {"d": mark_d, "bbox": mark_bbox}, "word": {"d": word_d, "bbox": [round(bx0, 2), round(by0, 2), round(bx1, 2), round(by1, 2)]}},
    open(sys.argv[1], "w"),
)
print("mark", mark_bbox, "word", [round(v, 2) for v in (bx0, by0, bx1, by1)])
