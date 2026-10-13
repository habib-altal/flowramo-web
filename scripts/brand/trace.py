import sys, numpy as np
from PIL import Image
import potrace

SRC = sys.argv[1]; OUT = sys.argv[2]
SCALE = 3
im = Image.open(SRC).convert("RGB")
im = im.resize((im.width * SCALE, im.height * SCALE), Image.LANCZOS)
a = np.asarray(im).astype(int)
r, g, b = a[..., 0], a[..., 1], a[..., 2]
masks = {
    # Brand blue mark: strong blue, little red.
    "mark": (b > 150) & (r < 120) & (b - r > 90),
    # Black wordmark.
    "word": (r < 110) & (g < 110) & (b < 110),
}

def fmt(v):
    return f"{v / SCALE:.2f}".rstrip("0").rstrip(".")

def to_path(mask):
    # potracer fills dark pixels, so hand it the inverse of the shape mask.
    bm = potrace.Bitmap(~mask)
    plist = bm.trace(turdsize=20, alphamax=1.0, opticurve=True, opttolerance=0.2)
    d = []
    for curve in plist:
        sp = curve.start_point
        d.append(f"M{fmt(sp.x)} {fmt(sp.y)}")
        for seg in curve.segments:
            if seg.is_corner:
                d.append(f"L{fmt(seg.c.x)} {fmt(seg.c.y)}L{fmt(seg.end_point.x)} {fmt(seg.end_point.y)}")
            else:
                d.append(f"C{fmt(seg.c1.x)} {fmt(seg.c1.y)} {fmt(seg.c2.x)} {fmt(seg.c2.y)} {fmt(seg.end_point.x)} {fmt(seg.end_point.y)}")
        d.append("Z")
    return "".join(d)

def bbox(mask):
    ys, xs = np.nonzero(mask)
    return xs.min() / SCALE, ys.min() / SCALE, (xs.max() + 1) / SCALE, (ys.max() + 1) / SCALE

import json
res = {k: {"d": to_path(m), "bbox": bbox(m)} for k, m in masks.items()}
json.dump(res, open(OUT, "w"))
for k, v in res.items():
    print(k, "bbox", [round(x, 1) for x in v["bbox"]], "len", len(v["d"]))
