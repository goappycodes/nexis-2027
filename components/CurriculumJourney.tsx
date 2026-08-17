"use client";

import { useEffect, useRef, useState } from "react";
import { UG_CURRICULUM, TOOL_MARKS } from "@/lib/content";

/** Every semester in programme order, each carrying the year it sits in. */
const TRACK = UG_CURRICULUM.flatMap((y, yi) =>
  y.semesters.map((s) => ({ ...s, yi, year: y.year, theme: y.theme }))
);

/** A tool students actually work in. Real logo files can be dropped in later
    (set `src` in TOOL_MARKS); until then it reads as a monogram tile. */
function ToolMark({ id }: { id: string }) {
  const t = TOOL_MARKS[id];
  if (!t) return null;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3.5 transition-colors duration-300 hover:border-white/25">
      {t.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={t.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-6 w-6 rounded-[3px] bg-white/90 object-contain p-0.5"
        />
      ) : (
        <span
          aria-hidden
          className="grid h-6 w-6 place-items-center rounded-[3px] bg-white/10 font-serif text-[0.6rem] leading-none text-white/80"
        >
          {t.mark}
        </span>
      )}
      <span className="text-[0.78rem] leading-none text-white/65">{t.name}</span>
    </span>
  );
}

/** Small uppercase group label with a hairline running off to the right. */
function GroupLabel({ children, tone }: { children: string; tone: "lime" | "crimson" | "muted" }) {
  const color =
    tone === "lime"
      ? "text-lime"
      : tone === "crimson"
      ? "text-crimson"
      : "text-white/40";
  return (
    <div className="flex items-center gap-3">
      <span
        className={`text-[0.6rem] font-semibold uppercase tracking-[0.16em] ${color}`}
      >
        {children}
      </span>
      <span className="h-px flex-1 bg-white/10" />
    </div>
  );
}

/** The full three-year syllabus. The year rail on the left stays put while the
    six semesters scroll past it, and highlights whichever semester is being
    read — no clicking involved. */
export default function CurriculumJourney() {
  const [active, setActive] = useState(0);
  const panels = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    /* The last semester whose heading has crossed the reading line — a third of
       the way down the viewport, clear of the two sticky rails above it. Read
       straight off scroll position rather than through an observer, so the rail
       stays exact when the reader flings the page or resizes mid-way. Six rect
       reads per event is cheap enough to skip any throttling. */
    const measure = () => {
      const els = panels.current.filter(Boolean) as HTMLElement[];
      if (!els.length) return;
      const line = window.innerHeight * 0.34;
      let next = 0;
      els.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= line) next = i;
      });
      setActive(next);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const cur = TRACK[active];

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      {/* Compact readout on phones, where the year rail has no room */}
      <div className="sticky top-[112px] z-20 rounded-[4px] border border-white/10 bg-[#0e0e11]/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="flex items-baseline justify-between gap-3">
          <p className="truncate text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-lime">
            {cur.year} · {cur.theme}
          </p>
          <p className="shrink-0 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/40">
            {cur.n} / {TRACK.length}
          </p>
        </div>
        <p className="mt-1 font-serif text-base leading-tight text-white">
          {cur.label}
        </p>
        <div className="mt-2.5 h-px w-full bg-white/10">
          <div
            className="h-px bg-crimson transition-[width] duration-500 ease-premium"
            style={{ width: `${(cur.n / TRACK.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Year rail — sticks alongside the semesters and follows the scroll */}
      <div className="hidden lg:col-span-4 lg:block">
        <div className="sticky top-[7.5rem] flex flex-col gap-3">
          {UG_CURRICULUM.map((y, yi) => {
            const on = yi === cur.yi;
            return (
              <div
                key={y.n}
                aria-current={on ? "true" : undefined}
                className={`relative overflow-hidden rounded-[4px] border p-5 transition-all duration-500 ease-premium ${
                  on
                    ? "border-crimson bg-crimson text-white shadow-[0_18px_44px_-22px_rgba(239,58,93,0.9)]"
                    : "border-white/10 bg-[#0e0e11] text-white/60"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="min-w-0">
                    <span
                      className={`block text-[0.6rem] font-semibold uppercase tracking-[0.14em] ${
                        on ? "text-white/70" : "text-white/35"
                      }`}
                    >
                      Course curriculum
                    </span>
                    <span className="mt-1.5 block font-serif text-lg leading-tight">
                      {y.year}
                    </span>
                    <span
                      className={`mt-0.5 block text-[0.78rem] leading-snug ${
                        on ? "text-white/80" : "text-white/40"
                      }`}
                    >
                      {y.theme}
                    </span>
                  </span>
                  <span
                    className={`display shrink-0 text-3xl leading-none ${
                      on ? "text-white/90" : "text-white/15"
                    }`}
                  >
                    {y.n}
                  </span>
                </div>

                <div className="mt-4 flex gap-2">
                  {y.semesters.map((s) => {
                    const live = s.n === cur.n;
                    return (
                      <span
                        key={s.n}
                        className={`rounded-full px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                          live
                            ? "bg-lime text-ink"
                            : on
                            ? "bg-white/15 text-white/75"
                            : "bg-white/5 text-white/35"
                        }`}
                      >
                        Sem {s.n}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <p className="mt-1 text-[0.72rem] leading-relaxed text-white/30">
            Keep scrolling — the rail follows the semester you are reading.
          </p>
        </div>
      </div>

      {/* The six semesters, in order */}
      <div className="space-y-10 sm:space-y-14 lg:col-span-8">
        {TRACK.map((s, i) => (
          <article
            key={s.n}
            ref={(el) => {
              panels.current[i] = el;
            }}
            className="scroll-mt-[9rem]"
          >
            <header className="flex items-start gap-4">
              <span className="display shrink-0 text-3xl leading-none text-white/15 sm:text-4xl">
                {String(s.n).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-lime">
                  {s.year} · {s.label}
                </p>
                <h4 className="mt-1.5 font-serif text-lg leading-tight text-white sm:text-xl">
                  {s.focus}
                </h4>
              </div>
            </header>

            <div className="mt-6">
              <GroupLabel tone="muted">In class</GroupLabel>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {s.inClass.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-[4px] border border-white/10 bg-[#0e0e11] p-5"
                  >
                    <h5 className="font-serif text-[1.02rem] leading-tight text-white">
                      {b.title}
                    </h5>
                    <ul className="mt-3 space-y-2">
                      {b.items.map((it) => (
                        <li
                          key={it}
                          className="flex gap-3 text-[0.86rem] leading-relaxed text-white/65"
                        >
                          <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-crimson" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <GroupLabel tone="crimson">Outclass</GroupLabel>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {s.outClass.map((e) => (
                  <div
                    key={e.t}
                    className="rounded-[4px] border border-crimson/25 bg-crimson/[0.07] p-5"
                  >
                    <h5 className="font-serif text-[1.02rem] leading-tight text-white">
                      {e.t}
                    </h5>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-white/60">
                      {e.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[4px] border border-white/10 bg-[#0e0e11] p-5">
              <GroupLabel tone="lime">Tools you will work in</GroupLabel>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tools.map((id) => (
                  <ToolMark key={id} id={id} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
