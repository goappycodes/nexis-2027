"use client";

import { useState } from "react";
import { Plus } from "./icons";

type Item = { q: string; a: string };

/** Compact FAQ accordion — one panel open at a time (first open by default).
    `dark` renders for dark sections (light text, subtle white hairlines). */
export default function FaqAccordion({
  items,
  dark = false,
}: {
  items: Item[];
  dark?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const border = dark ? "border-white/12" : "border-line";
  const answer = dark ? "text-white/65" : "text-ink-2";

  return (
    <div className={`border-t ${border}`}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`border-b ${border}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span
                className={`font-serif text-base leading-snug sm:text-lg ${
                  dark ? "text-white" : ""
                }`}
              >
                {f.q}
              </span>
              <Plus
                className={`shrink-0 text-lg text-crimson transition-transform duration-500 ease-premium ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-500 ease-premium"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className={`max-w-2xl pb-5 text-[0.9rem] leading-relaxed ${answer}`}>
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
