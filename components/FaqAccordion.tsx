"use client";

import { useState } from "react";
import { Plus } from "./icons";

type Item = { q: string; a: string };

/** Compact FAQ accordion — one panel open at a time (first open by default). */
export default function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-line">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base leading-snug sm:text-lg">
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
                <p className="max-w-2xl pb-5 text-[0.9rem] leading-relaxed text-ink-2">
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
