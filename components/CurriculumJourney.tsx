"use client";

import { useState } from "react";
import { UG_CURRICULUM } from "@/lib/content";

/** The full three-year syllabus: pick a year on the left, read that year's
    courses, workshops and OUTCLASS projects on the right. The year rail is a
    horizontal strip on narrow screens and a stack from lg. */
export default function CurriculumJourney() {
  const [active, setActive] = useState(0);
  const year = UG_CURRICULUM[active];

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
      {/* Year selector */}
      <div className="lg:col-span-4">
        <div
          role="tablist"
          aria-label="Curriculum year"
          className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {UG_CURRICULUM.map((y, i) => {
            const on = i === active;
            return (
              <button
                key={y.n}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className={`group relative flex w-[230px] shrink-0 items-center justify-between gap-4 overflow-hidden rounded-[4px] border p-5 text-left transition-all duration-500 ease-premium lg:w-full ${
                  on
                    ? "border-crimson bg-crimson text-white shadow-[0_18px_44px_-22px_rgba(239,58,93,0.9)]"
                    : "border-white/10 bg-[#0e0e11] text-white/60 hover:border-white/25 hover:text-white/80"
                }`}
              >
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
                    {y.lede}
                  </span>
                </span>
                <span
                  className={`display shrink-0 text-3xl leading-none sm:text-4xl ${
                    on ? "text-white/90" : "text-white/15"
                  }`}
                >
                  {y.n}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected year */}
      <div className="lg:col-span-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {year.blocks.map((b) => (
            <div
              key={`${year.n}-${b.title}`}
              className={`rounded-[4px] border border-white/10 bg-[#0e0e11] p-5 sm:p-6 ${
                b.wide ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-lime">
                  {b.tag}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h4 className="mt-3 font-serif text-lg leading-tight text-white">
                {b.title}
              </h4>

              {b.items && (
                <ul className="mt-4 space-y-2">
                  {b.items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-3 text-[0.88rem] leading-relaxed text-white/65"
                    >
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-crimson" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}

              {b.entries && (
                <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                  {b.entries.map((e) => (
                    <div key={e.t}>
                      <dt className="text-[0.86rem] font-semibold text-white">
                        {e.t}
                      </dt>
                      <dd className="mt-1 text-[0.84rem] leading-relaxed text-white/55">
                        {e.d}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
