import { BRAND_BLUE, BRAND_CYAN, LOGO_VIEWBOX, MARK_PATH, MARK_VIEWBOX, WORDMARK_PATH } from "./brand-paths";

/** Flowramo lockup: the blue F mark plus the wordmark, which follows the text colour. */
export function Logo({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <svg viewBox={LOGO_VIEWBOX} className={`block h-[26px] w-auto ${className}`} role="img" aria-label="Flowramo">
      <path d={MARK_PATH} fill={onDark ? BRAND_CYAN : BRAND_BLUE} fillRule="evenodd" className="transition-[fill] duration-300" />
      <path d={WORDMARK_PATH} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

/** The F mark on its own. */
export function LogoMark({ className = "", onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={`block ${className}`} aria-hidden="true">
      <path d={MARK_PATH} fill={onDark ? BRAND_CYAN : BRAND_BLUE} fillRule="evenodd" />
    </svg>
  );
}
