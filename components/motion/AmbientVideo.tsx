"use client";

import { useEffect, useRef } from "react";

/*
  A muted background loop (Higgsfield footage) that plays only while it is on screen.
  The still is always rendered first, so the frame is complete without JS, with reduced
  motion, and before the video arrives. With `portrait`, tall screens (phones, iPad
  portrait) get that still instead and never load the video.
*/
export function AmbientVideo({
  name,
  portrait,
  position = "50% 50%",
  className = "",
}: {
  /** Base name in /public/media: <name>.webp (1920), <name>-960.webp, <name>.webm, <name>.mp4 */
  name: string;
  /** Optional tall still for portrait screens, e.g. "studio-night-portrait" */
  portrait?: string;
  /** object-position of the still and the video */
  position?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting && video.offsetWidth > 0 ? video.play().catch(() => {}) : video.pause()),
      { rootMargin: "120px 0px" },
    );
    io.observe(video);
    return () => {
      io.disconnect();
      video.pause();
    };
  }, []);

  const tall = "(max-aspect-ratio: 4/5)";
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <picture>
        {portrait && <source media={tall} srcSet={`/media/${portrait}.webp`} />}
        <img
          src={`/media/${name}.webp`}
          srcSet={`/media/${name}-960.webp 960w, /media/${name}.webp 1920w`}
          sizes="100vw"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
      </picture>
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover motion-reduce:hidden ${portrait ? "[@media(max-aspect-ratio:4/5)]:hidden" : ""}`}
        style={{ objectPosition: position }}
        muted
        loop
        playsInline
        preload="none"
        poster={`/media/${name}.webp`}
      >
        <source src={`/media/${name}.webm`} type="video/webm" />
        <source src={`/media/${name}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}
