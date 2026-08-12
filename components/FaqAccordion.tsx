"use client";

import { useState } from "react";
import { Plus } from "./icons";

/** A rich answer is a list of blocks: paragraphs, sub-headings and lists.
    A plain string is still accepted and rendered as a single paragraph. */
export type FaqBlock =
  | { p: string }
  | { h: string }
  | { ul: string[] }
  | { ol: string[] };

export type FaqItem = { q: string; a: string | FaqBlock[] };

function Answer({ a, dark }: { a: string | FaqBlock[]; dark: boolean }) {
  const body = dark ? "text-white/65" : "text-ink-2";
  const head = dark ? "text-white/90" : "text-ink";
  const dot = dark ? "bg-lime" : "bg-crimson";
  const blocks: FaqBlock[] = typeof a === "string" ? [{ p: a }] : a;

  return (
    <div className={`max-w-2xl space-y-3 pb-5 text-[0.9rem] leading-relaxed ${body}`}>
      {blocks.map((b, i) => {
        if ("h" in b) {
          return (
            <p
              key={i}
              className={`pt-1 text-[0.78rem] font-semibold uppercase tracking-[0.12em] ${head}`}
            >
              {b.h}
            </p>
          );
        }
        if ("ul" in b) {
          return (
            <ul key={i} className="space-y-2">
              {b.ul.map((li) => (
                <li key={li} className="flex gap-3">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          );
        }
        if ("ol" in b) {
          return (
            <ol key={i} className="space-y-2">
              {b.ol.map((li, n) => (
                <li key={li} className="flex gap-3">
                  <span
                    className={`shrink-0 text-[0.78rem] font-semibold tabular-nums ${
                      dark ? "text-lime" : "text-crimson"
                    }`}
                  >
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <span>{li}</span>
                </li>
              ))}
            </ol>
          );
        }
        return <p key={i}>{b.p}</p>;
      })}
    </div>
  );
}

/** Compact FAQ accordion — one panel open at a time (first open by default).
    `dark` renders for dark sections (light text, subtle white hairlines). */
export default function FaqAccordion({
  items,
  dark = false,
}: {
  items: FaqItem[];
  dark?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const border = dark ? "border-white/12" : "border-line";

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
                <Answer a={f.a} dark={dark} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
