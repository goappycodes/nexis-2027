"use client";

import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

// Pages were rendered from the source PDF at this pixel size.
const PAGE_W = 1100;
const PAGE_H = 854;

export default function YearbookFlipBook({ pages }: { pages: string[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState(320);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setPageWidth(Math.min(el.clientWidth, 620));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pageHeight = Math.round((pageWidth * PAGE_H) / PAGE_W);

  return (
    <div ref={wrapRef} className="mx-auto flex w-full max-w-4xl justify-center">
      {pageWidth > 0 && (
        <HTMLFlipBook
          key={pageWidth}
          width={pageWidth}
          height={pageHeight}
          size="fixed"
          minWidth={200}
          maxWidth={900}
          minHeight={150}
          maxHeight={900}
          startPage={0}
          startZIndex={10}
          autoSize={false}
          drawShadow
          flippingTime={650}
          maxShadowOpacity={0.5}
          showCover
          usePortrait
          mobileScrollSupport={false}
          clickEventForward
          useMouseEvents
          swipeDistance={20}
          showPageCorners
          disableFlipByClick={false}
          className="yearbook-flip"
          style={{}}
        >
          {pages.map((src, i) => (
            <div
              key={src}
              className="relative h-full w-full overflow-hidden bg-ink"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`NEXIS Yearbook — page ${i + 1}`}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </HTMLFlipBook>
      )}
    </div>
  );
}
