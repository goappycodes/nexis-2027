"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { ArrowRight } from "./icons";
import useNearViewport from "./useNearViewport";

// Pages were rendered from the source PDF at this pixel size.
const PAGE_W = 1100;
const PAGE_H = 854;

// Context reaches pages even when react-pageflip caches its child elements.
const ActivePage = createContext(0);
function YearbookImage({ src, index }: { src: string; index: number }) {
  const active = useContext(ActivePage);
  const inRange = index >= active - 1 && index <= active + 2;
  const [loaded, setLoaded] = useState(inRange);
  useEffect(() => { if (inRange) setLoaded(true); }, [inRange]);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={loaded || inRange ? src : undefined}
      alt={`NEXIS Yearbook — page ${index + 1}`} width={PAGE_W} height={PAGE_H}
      loading="eager" decoding="async" className="h-full w-full object-cover"
      draggable={false} />
  );
}

type FlipApi = {
  getState: () => string;
  getBoundsRect: () => { left: number; top: number; width: number; height: number };
  getFlipController: () => {
    showCorner: (point: { x: number; y: number }) => void;
    stopMove: () => void;
  };
  flipNext: (corner: "bottom") => void;
  flipPrev: (corner: "bottom") => void;
  turnToNextPage: () => void;
  turnToPrevPage: () => void;
};

export default function YearbookFlipBook({ pages }: { pages: string[] }) {
  const { ref: wrapRef, near } = useNearViewport<HTMLDivElement>();
  const bookRef = useRef<{ pageFlip: () => FlipApi }>(null);
  const hinted = useRef(false);
  const interacted = useRef(false);
  const cancelHint = useRef<() => void>(() => {});
  const currentPage = useRef(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [readyWidth, setReadyWidth] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setPageWidth(Math.floor(Math.min(el.clientWidth, 720)));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => {
      ro.disconnect();
      media.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !pageWidth || readyWidth !== pageWidth || reducedMotion || pages.length < 2) return;
    let startTimer: ReturnType<typeof setTimeout> | undefined;
    let returnTimer: ReturnType<typeof setTimeout> | undefined;
    const api = bookRef.current?.pageFlip();
    const cancel = () => {
      clearTimeout(startTimer);
      clearTimeout(returnTimer);
      if (api?.getState() === "fold_corner") api.getFlipController().stopMove();
    };
    cancelHint.current = cancel;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        cancel();
        return;
      }
      if (hinted.current || interacted.current) return;
      startTimer = setTimeout(() => {
        if (!api || interacted.current || api.getState() !== "read") return;
        hinted.current = true;
        const rect = api.getBoundsRect();
        // Lift the real paper corner, then settle back without changing pages.
        api.getFlipController().showCorner({
          x: rect.left + rect.width - 2,
          y: rect.top + rect.height - 2,
        });
        returnTimer = setTimeout(cancel, 1100);
      }, 450);
    }, { threshold: 0.45 });
    observer.observe(el);
    return () => {
      cancel();
      observer.disconnect();
      cancelHint.current = () => {};
    };
  }, [pageWidth, readyWidth, reducedMotion, pages.length]);

  const markInteraction = () => {
    interacted.current = true;
    cancelHint.current();
  };

  const turnPage = (direction: "next" | "previous") => {
    markInteraction();
    const api = bookRef.current?.pageFlip();
    if (!api || api.getState() === "flipping" || api.getState() === "user_fold") return;
    if (direction === "next" && currentPage.current < pages.length - 1) {
      if (reducedMotion) api.turnToNextPage();
      else api.flipNext("bottom");
    } else if (direction === "previous" && currentPage.current > 0) {
      if (reducedMotion) api.turnToPrevPage();
      else api.flipPrev("bottom");
    }
  };

  const pageHeight = Math.round((pageWidth * PAGE_H) / PAGE_W);
  if (pages.length === 0) return null;

  return (
    <div className="mx-auto w-full max-w-[720px]">
      <div
        ref={wrapRef}
        role="region"
        aria-label="Interactive NEXIS yearbook"
        aria-describedby="yearbook-instructions"
        tabIndex={0}
        className="relative w-full outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-4"
        style={{ aspectRatio: `${PAGE_W} / ${PAGE_H}` }}
        onPointerDownCapture={markInteraction}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            turnPage(event.key === "ArrowRight" ? "next" : "previous");
          }
        }}
      >
        {near && pageWidth > 0 && (
          <ActivePage.Provider value={pageIndex}>
          <HTMLFlipBook
            ref={bookRef}
            key={pageWidth}
            width={pageWidth}
            height={pageHeight}
            size="fixed"
            minWidth={200}
            maxWidth={900}
            minHeight={150}
            maxHeight={900}
            startPage={currentPage.current}
            startZIndex={10}
            autoSize={false}
            drawShadow
            flippingTime={reducedMotion ? 1 : 850}
            maxShadowOpacity={0.35}
            showCover={false}
            usePortrait
            mobileScrollSupport
            clickEventForward
            useMouseEvents
            swipeDistance={30}
            showPageCorners={!reducedMotion}
            disableFlipByClick={false}
            renderOnlyPageLengthChange
            onInit={() => setReadyWidth(pageWidth)}
            onFlip={({ data }: { data: number }) => {
              currentPage.current = data;
              setPageIndex(data);
            }}
            className="yearbook-flip shadow-[0_16px_40px_-22px_rgba(11,12,16,0.45)]"
            style={{}}
          >
            {pages.map((src, i) => (
              <div
                key={src}
                className="relative h-full w-full overflow-hidden bg-ink"
              >
                <YearbookImage src={src} index={i} />
              </div>
            ))}
          </HTMLFlipBook>
          </ActivePage.Provider>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <button type="button" onClick={() => turnPage("previous")} disabled={pageIndex === 0 || readyWidth !== pageWidth} aria-label="Previous yearbook page" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition hover:border-crimson hover:text-crimson focus-visible:outline-crimson disabled:opacity-30">
          <ArrowRight className="rotate-180" />
        </button>
        <div className="text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.16em] text-crimson" aria-live="polite">Page {pageIndex + 1} / {pages.length}</p>
          <p id="yearbook-instructions" className="mt-1 text-[0.76rem] text-muted">Swipe, drag a corner or use the arrows</p>
        </div>
        <button type="button" onClick={() => turnPage("next")} disabled={pageIndex === pages.length - 1 || readyWidth !== pageWidth} aria-label="Next yearbook page" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition hover:border-crimson hover:text-crimson focus-visible:outline-crimson disabled:opacity-30">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
