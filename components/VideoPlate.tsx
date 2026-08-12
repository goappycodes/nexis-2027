"use client";

import { useCallback, useEffect, useState } from "react";

/** A poster image with a play control that opens the video in a full-screen
    overlay. The embed is only mounted once the viewer clicks, so nothing is
    requested from YouTube until then. Poster is the original file at its own
    aspect ratio — never cropped. */
export default function VideoPlate({
  poster,
  alt,
  videoId,
  width,
  height,
  label = "Watch the film",
}: {
  poster: string;
  alt: string;
  videoId: string;
  width: number;
  height: number;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${label} — opens in a full-screen player`}
        className="group relative block w-full overflow-hidden rounded-[4px] border border-white/10 bg-[#0e0e11]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-crimson shadow-[0_10px_40px_-8px_rgba(239,58,93,0.8)] transition-transform duration-500 ease-premium group-hover:scale-110 sm:h-20 sm:w-20">
            <span className="absolute inset-0 rounded-full ring-1 ring-white/30" />
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="ml-1 h-6 w-6 fill-white sm:h-7 sm:w-7"
            >
              <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
        </span>
        <span className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/55 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {label}
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-6 sm:top-6"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="aspect-video w-full max-w-5xl overflow-hidden rounded-[4px] bg-black shadow-2xl"
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}
