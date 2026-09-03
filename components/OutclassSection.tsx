"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight } from "./icons";

/** One floating photo slot in a semester collage. Position and size are
    percentages of the collage box; `r` is a slight rotation. Left empty
    (placeholder tiles) for now — real photos drop in later. */
type Slot = {
  top: string;
  left: string;
  w: string;
  h: string;
  r: string;
  z: number;
  src?: string;
  objectPosition?: string;
};

type Semester = {
  n: string;
  title: string;
  desc: string;
  slots: Slot[];
};

// Three distinct scatter arrangements so each semester reads as its own
// visual chapter while scrolling. 5 slots each, different sizes + offsets.
const SEMESTERS: Semester[] = [
  {
    n: "01",
    title: "Drop-shipping & Local Business Consulting",
    desc: "Students launch real drop-shipping stores and consult local businesses — learning sales, operations, marketing and customer growth by doing, not just studying.",
    slots: [
      { top: "3%", left: "0%", w: "45%", h: "50%", r: "-4deg", z: 2, src: "/images/outclass/sem1/photo-1.jpg" },
      { top: "0%", left: "50%", w: "38%", h: "37%", r: "3deg", z: 1, src: "/images/outclass/sem1/photo-2.jpg" },
      { top: "31%", left: "58%", w: "41%", h: "45%", r: "-3deg", z: 3, src: "/images/outclass/sem1/photo-6.jpg" },
      { top: "57%", left: "3%", w: "40%", h: "39%", r: "2.5deg", z: 2, src: "/images/outclass/sem1/photo-4.jpg" },
      { top: "49%", left: "37%", w: "30%", h: "33%", r: "6deg", z: 4, src: "/images/outclass/sem1/photo-5.jpg" },
    ],
  },
  {
    n: "02",
    title: "The Creator's Challenge",
    desc: "A hands-on sprint where students build an audience from scratch — content, personal brand and community — and put it to the test in the real world.",
    slots: [
      { top: "2%", left: "2%", w: "47%", h: "37%", r: "-2deg", z: 2, src: "/images/outclass/sem2/photo-1.webp", objectPosition: "center 68%" },
      { top: "2%", left: "51%", w: "47%", h: "37%", r: "2deg", z: 1, src: "/images/outclass/sem2/photo-2.webp" },
      { top: "43%", left: "3%", w: "29%", h: "52%", r: "1.5deg", z: 2, src: "/images/outclass/sem2/photo-3.webp", objectPosition: "center 62%" },
      { top: "40%", left: "34%", w: "34%", h: "55%", r: "-2.5deg", z: 3, src: "/images/outclass/sem2/photo-4.webp", objectPosition: "center 64%" },
      { top: "42%", left: "69%", w: "29%", h: "52%", r: "2deg", z: 2, src: "/images/outclass/sem2/photo-7.webp", objectPosition: "center 58%" },
    ],
  },
  {
    n: "03",
    title: "AI Build - Lab",
    desc: "Spend two weeks inside a real business before you write a single line of AI instructions — then spend two months actually building something that business ends up using, with the numbers to prove it worked.",
    slots: [
      { top: "2%", left: "2%", w: "47%", h: "37%", r: "-2deg", z: 2, src: "/images/outclass/sem3/photo-1.webp", objectPosition: "center 58%" },
      { top: "2%", left: "51%", w: "47%", h: "37%", r: "2deg", z: 1, src: "/images/outclass/sem3/photo-2.webp", objectPosition: "center 60%" },
      { top: "43%", left: "3%", w: "29%", h: "52%", r: "1.5deg", z: 2, src: "/images/outclass/sem3/photo-3.webp", objectPosition: "center 46%" },
      { top: "40%", left: "34%", w: "34%", h: "55%", r: "-2.5deg", z: 3, src: "/images/outclass/sem3/photo-4.webp", objectPosition: "center 52%" },
      { top: "42%", left: "69%", w: "29%", h: "52%", r: "2deg", z: 2, src: "/images/outclass/sem3/photo-5.webp", objectPosition: "center 52%" },
    ],
  },
];

function PhotoSlot({ slot }: { slot: Slot }) {
  return (
    <div
      className="absolute overflow-hidden rounded-xl border border-white/12 bg-gradient-to-br from-white/[0.09] to-white/[0.02] shadow-[0_14px_34px_-18px_rgba(0,0,0,0.8)]"
      style={{
        top: slot.top,
        left: slot.left,
        width: slot.w,
        height: slot.h,
        transform: `rotate(${slot.r})`,
        zIndex: slot.z,
      }}
    >
      {slot.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={slot.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: slot.objectPosition }}
          draggable={false}
        />
      ) : (
        <>
          {/* Empty placeholder — a faint image glyph marks the photo slot */}
          <div className="flex h-full w-full items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-6 w-6 text-white/15"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.4}
            >
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="9" cy="10" r="1.6" />
              <path d="M21 16l-5-5-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* subtle pink corner accent for a premium touch */}
          <span className="absolute right-0 top-0 h-6 w-6 bg-gradient-to-bl from-crimson/40 to-transparent" />
        </>
      )}
    </div>
  );
}

function SemesterCard({
  semester,
  duplicate = false,
}: {
  semester: Semester;
  duplicate?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex h-[39rem] w-[min(86vw,28rem)] shrink-0 flex-col overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.015] p-5 sm:h-[43rem] sm:p-7">
      {/* soft crimson glow bleeding in from a corner */}
      <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-crimson/20 blur-[70px]" />

      <div className="relative flex items-center gap-3">
        <span className="font-serif text-[1.6rem] leading-none text-crimson">
          SEM {semester.n}
        </span>
        <span className="h-px flex-1 bg-white/12" />
      </div>
      <h3 className="relative mt-2 min-h-[3.25rem] text-[1.15rem] font-semibold leading-snug text-white sm:text-[1.3rem]">
        {semester.title}
      </h3>

      {/* Floating editorial collage of 5 empty photo slots */}
      <div className="relative mt-5 h-[300px] w-full sm:h-[350px]">
        {semester.slots.map((slot, i) => (
          <PhotoSlot key={i} slot={slot} />
        ))}
      </div>

      {/* Expanding description */}
      <div
        className="grid transition-all duration-500 ease-premium"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <p className="pt-5 text-[0.92rem] leading-relaxed text-white/70">
            {semester.desc}
          </p>
        </div>
      </div>

      {/* Know More → gradient bar */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        tabIndex={duplicate ? -1 : undefined}
        className="group/km mt-auto flex w-full items-center justify-between rounded-full bg-gradient-to-r from-crimson to-[#ff5c7c] px-5 py-3 transition-transform duration-300 hover:-translate-y-0.5"
      >
        <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white">
          {open ? "Show less" : "Know more"}
        </span>
        <ArrowRight
          className={`text-white transition-transform duration-300 ${
            open ? "-rotate-90" : "group-hover/km:translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

export default function OutclassSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const interaction = useRef({
    dragging: false,
    focused: false,
    hovered: false,
    moved: false,
    pointerId: -1,
    startScrollLeft: 0,
    startX: 0,
  });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const sequenceWidth = carousel.scrollWidth / 3;
    carousel.scrollLeft = sequenceWidth;

    let frame = 0;
    let previousTime = performance.now();

    const animate = (time: number) => {
      const state = interaction.current;
      const elapsed = Math.min(time - previousTime, 50) / 1000;
      previousTime = time;

      if (!reducedMotion && !state.dragging && !state.focused && !state.hovered) {
        carousel.scrollLeft += 72 * elapsed;
      }

      if (carousel.scrollLeft >= sequenceWidth * 2) {
        carousel.scrollLeft -= sequenceWidth;
      } else if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft += sequenceWidth;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-[#111114] py-10 text-white sm:py-16">
      <div className="shell">
        <Reveal className="mx-auto max-w-xl">
          <p className="kicker flex items-center gap-2.5 text-white/55">
            <span className="h-px w-7 bg-crimson" />
            The Curriculum
          </p>
          <h2 className="display balance mt-3 text-[clamp(1.7rem,4.8vw,3rem)] text-white">
            The <span className="serif-em text-crimson">OUTCLASS</span>{" "}
            semesters.
          </h2>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-white/70 sm:text-[1rem]">
            Learn practically by doing projects
          </p>
        </Reveal>
      </div>

      <div
        ref={carouselRef}
        className="no-scrollbar marquee-mask mt-8 flex cursor-grab touch-pan-y select-none items-start gap-5 overflow-x-auto active:cursor-grabbing sm:gap-6"
        tabIndex={0}
        aria-label="OUTCLASS semesters. Drag horizontally to browse. Focus or hover to pause automatic scrolling."
        onMouseEnter={() => {
          interaction.current.hovered = true;
        }}
        onMouseLeave={() => {
          interaction.current.hovered = false;
        }}
        onFocusCapture={() => {
          interaction.current.focused = true;
        }}
        onBlurCapture={(event) => {
          const nextTarget = event.relatedTarget as Node | null;
          if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
            interaction.current.focused = false;
          }
        }}
        onPointerDown={(event) => {
          const target = event.target as HTMLElement;
          if (target.closest("button, a")) return;

          const state = interaction.current;
          state.dragging = true;
          state.moved = false;
          state.pointerId = event.pointerId;
          state.startX = event.clientX;
          state.startScrollLeft = event.currentTarget.scrollLeft;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          const state = interaction.current;
          if (!state.dragging || state.pointerId !== event.pointerId) return;

          const distance = event.clientX - state.startX;
          if (Math.abs(distance) > 4) state.moved = true;
          event.currentTarget.scrollLeft = state.startScrollLeft - distance;
          event.preventDefault();
        }}
        onPointerUp={(event) => {
          const state = interaction.current;
          if (state.pointerId !== event.pointerId) return;
          state.dragging = false;
          state.pointerId = -1;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={() => {
          interaction.current.dragging = false;
          interaction.current.pointerId = -1;
        }}
        onClickCapture={(event) => {
          if (!interaction.current.moved) return;
          event.preventDefault();
          event.stopPropagation();
          interaction.current.moved = false;
        }}
      >
          {[...SEMESTERS, ...SEMESTERS, ...SEMESTERS].map((semester, index) => {
            const duplicate =
              index < SEMESTERS.length || index >= SEMESTERS.length * 2;

            return (
              <div
                key={`${semester.n}-${index}`}
                aria-hidden={duplicate || undefined}
                className="shrink-0"
              >
                <SemesterCard
                  semester={semester}
                  duplicate={duplicate}
                />
              </div>
            );
          })}
      </div>
    </section>
  );
}
