"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin, SplitText, useGSAP);
}

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const DESKTOP = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
export const MOBILE = "(max-width: 1023px) and (prefers-reduced-motion: no-preference)";

/** Document-relative top of an element, ignoring transforms. */
export function docTop(el: HTMLElement): number {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
}

/** Position of an element relative to an ancestor, ignoring transforms. */
export function relPos(el: HTMLElement, ancestor: HTMLElement): { x: number; y: number } {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== ancestor) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}

export { gsap, ScrollTrigger, SplitText, useGSAP };

/**
 * How headline words come in across the site: out of a soft blur, in place (no rise), so text
 * sharpens into view. The blur scales with the type size. Use with fromTo(..., FOCUS_TO).
 */
export function focusFrom(el: Element): gsap.TweenVars {
  const size = parseFloat(getComputedStyle(el).fontSize) || 32;
  return { autoAlpha: 0, filter: `blur(${Math.min(14, Math.max(5, size * 0.16)).toFixed(1)}px)` };
}
export const FOCUS_TO: gsap.TweenVars = { autoAlpha: 1, filter: "blur(0px)" };
export const TABLET_UP = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";
export const PHONE = "(max-width: 767px) and (prefers-reduced-motion: no-preference)";

/** Document-relative position of an element, ignoring transforms. */
export function docPos(el: HTMLElement): { x: number; y: number } {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y };
}
