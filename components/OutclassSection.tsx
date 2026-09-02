"use client";

import { useState } from "react";
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
      { top: "0%", left: "6%", w: "40%", h: "40%", r: "3deg", z: 1 },
      { top: "5%", left: "54%", w: "43%", h: "49%", r: "-4deg", z: 2 },
      { top: "47%", left: "0%", w: "46%", h: "46%", r: "-2deg", z: 3 },
      { top: "53%", left: "51%", w: "38%", h: "40%", r: "4deg", z: 2 },
      { top: "33%", left: "35%", w: "29%", h: "31%", r: "-6deg", z: 4 },
    ],
  },
  {
    n: "03",
    title: "AI Build - Lab",
    desc: "Students design and ship AI-powered products in a build lab — moving from raw idea to a working prototype they can actually demo.",
    slots: [
      { top: "2%", left: "2%", w: "38%", h: "44%", r: "2deg", z: 2 },
      { top: "0%", left: "44%", w: "52%", h: "35%", r: "-3deg", z: 1 },
      { top: "40%", left: "12%", w: "44%", h: "46%", r: "-4deg", z: 3 },
      { top: "48%", left: "60%", w: "38%", h: "44%", r: "3deg", z: 2 },
      { top: "29%", left: "52%", w: "26%", h: "27%", r: "7deg", z: 4 },
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

function SemesterCard({ semester, index }: { semester: Semester; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal
      delay={index * 90}
      className="relative overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.015] p-5 sm:p-7"
    >
      {/* soft crimson glow bleeding in from a corner */}
      <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-crimson/20 blur-[70px]" />

      <div className="relative flex items-center gap-3">
        <span className="font-serif text-[1.6rem] leading-none text-crimson">
          SEM {semester.n}
        </span>
        <span className="h-px flex-1 bg-white/12" />
      </div>
      <h3 className="relative mt-2 text-[1.15rem] font-semibold leading-snug text-white sm:text-[1.3rem]">
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
        className="group/km mt-5 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-crimson to-[#ff5c7c] px-5 py-3 transition-transform duration-300 hover:-translate-y-0.5"
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
    </Reveal>
  );
}

export default function OutclassSection() {
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
        </Reveal>

        <div className="mx-auto mt-8 max-w-xl space-y-6">
          {SEMESTERS.map((s, i) => (
            <SemesterCard key={s.n} semester={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
