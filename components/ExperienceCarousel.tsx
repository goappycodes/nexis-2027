"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "./icons";
import { EXPERIENCES } from "@/lib/content";

export default function ExperienceCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Fade whichever edges have more content beyond them.
  const mask =
    atStart && atEnd
      ? "none"
      : atStart
      ? "linear-gradient(90deg,#000 82%,transparent)"
      : atEnd
      ? "linear-gradient(90deg,transparent,#000 18%)"
      : "linear-gradient(90deg,transparent,#000 12%,#000 82%,transparent)";

  return (
    <div className="relative mt-14">
      <div
        ref={ref}
        className="no-scrollbar -mx-[var(--gutter)] flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[var(--gutter)] pb-1"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
      >
        {EXPERIENCES.map((e) => (
          <article
            key={e.title}
            data-card
            className="lift group flex w-[80vw] shrink-0 snap-start flex-col overflow-hidden rounded-[4px] border border-line bg-paper hover:border-ink/30 sm:w-[54vw] md:w-[38vw] lg:w-[30%] xl:w-[26%]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
              <Image
                src={e.img}
                alt={e.title}
                fill
                sizes="(max-width:768px) 80vw, 30vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-crimson backdrop-blur">
                {e.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl leading-tight">{e.title}</h3>
                <ArrowUpRight className="mt-1 text-lg text-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>
              <p className="mt-3 flex-1 text-[0.96rem] leading-relaxed text-ink-2">
                {e.d}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition hover:border-ink disabled:opacity-30 disabled:hover:border-line"
        >
          <ArrowRight className="rotate-180 text-lg" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition hover:border-ink disabled:opacity-30 disabled:hover:border-line"
        >
          <ArrowRight className="text-lg" />
        </button>
        <span className="ml-2 text-[0.8rem] text-muted">Drag or swipe to explore</span>
      </div>
    </div>
  );
}
