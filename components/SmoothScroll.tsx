"use client";

import { useEffect } from "react";

/** How much of the remaining distance is covered each frame. Low enough to add
    a short glide, high enough that the page never feels like it is floating. */
const EASE = 0.16;

/** A light easing layer over wheel scrolling — the page catches up to the
    wheel over ~200ms instead of snapping. Deliberately conservative: touch
    devices, reduced-motion users, zoom gestures and anything with its own
    scrollbar (carousels, dialogs) are all left on native scrolling. */
export default function SmoothScroll() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    )
      return;

    let target = window.scrollY;
    let current = target;
    let raf = 0;
    let running = false;

    const limit = () =>
      Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

    /** True if the pointer is over something that scrolls on its own — those
        keep native behaviour so nested panes never fight the page. */
    const overNestedScroller = (node: EventTarget | null) => {
      let el = node instanceof Element ? node : null;
      while (el && el !== document.body && el !== document.documentElement) {
        const { overflowY } = getComputedStyle(el);
        if (
          /(auto|scroll|overlay)/.test(overflowY) &&
          el.scrollHeight > el.clientHeight + 1
        )
          return true;
        el = el.parentElement;
      }
      return false;
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const frame = () => {
      const gap = target - current;
      current = Math.abs(gap) < 0.5 ? target : current + gap * EASE;
      window.scrollTo({ top: current, behavior: "instant" as ScrollBehavior });
      if (current === target) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const onWheel = (e: WheelEvent) => {
      // Pinch-zoom, page/line deltas, horizontal intent and modified scrolls
      // all stay native.
      if (e.ctrlKey || e.metaKey || e.altKey || e.defaultPrevented) return;
      if (e.deltaMode !== 0) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      if (overNestedScroller(e.target)) return;

      e.preventDefault();
      if (!running) current = window.scrollY;
      target = Math.min(
        limit(),
        Math.max(0, (running ? target : window.scrollY) + e.deltaY)
      );
      if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };

    // Anything else that moves the page — keys, the scrollbar, an anchor jump —
    // hands control straight back to the browser.
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", stop);
    window.addEventListener("mousedown", stop);
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("resize", stop);

    return () => {
      stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", stop);
      window.removeEventListener("mousedown", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("resize", stop);
    };
  }, []);

  return null;
}
