"use client";

import { useEffect } from "react";
import useNearViewport from "./useNearViewport";

/** Download ahead of arrival, play only on screen, and pause off screen. */
export default function LazyVideo({ src, poster, className }: {
  src: string;
  poster: string;
  className: string;
}) {
  const { ref, near } = useNearViewport<HTMLVideoElement>();

  useEffect(() => {
    const video = ref.current;
    if (!video || !near) return;
    let visible = false;
    const syncPlayback = () => {
      if (visible && !document.hidden) void video.play().catch(() => {});
      else video.pause();
    };
    const observer = typeof IntersectionObserver !== "undefined"
      ? new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          syncPlayback();
        })
      : undefined;
    if (observer) observer.observe(video);
    else { visible = true; syncPlayback(); }
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, [near, ref]);

  return <video ref={ref} src={near ? src : undefined} poster={near ? poster : undefined}
    muted loop playsInline preload={near ? "auto" : "none"}
    tabIndex={-1} className={className} data-media-ready={near} />;
}
