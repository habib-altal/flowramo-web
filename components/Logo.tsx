export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
        <circle cx="11" cy="11" r="10" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1.25" />
        <circle cx="11" cy="11" r="4.5" fill="var(--color-blue)" />
      </svg>
      <span className="text-[19px] font-[620] tracking-[-0.03em]" style={{ fontStretch: "94%" }}>
        Flowramo
      </span>
    </span>
  );
}
