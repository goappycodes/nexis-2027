"use client";

import { useEffect, useRef, useState } from "react";

// One observer for the whole page. The horizontal buffer also prepares the
// next images in moving carousels without fetching the entire strip at once.
const pending = new Map<Element, () => void>();
let observer: IntersectionObserver | undefined;

export default function useNearViewport<T extends Element>(immediate = false) {
  const ref = useRef<T>(null);
  const [near, setNear] = useState(immediate);

  useEffect(() => {
    const element = ref.current;
    if (!element || near) return;
    if (immediate || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    observer ??= new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        pending.get(entry.target)?.();
        pending.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    }, { rootMargin: "900px 400px", threshold: 0 });
    pending.set(element, () => setNear(true));
    observer.observe(element);
    return () => {
      pending.delete(element);
      observer?.unobserve(element);
      if (pending.size === 0) {
        observer?.disconnect();
        observer = undefined;
      }
    };
  }, [immediate, near]);

  return { ref, near };
}
