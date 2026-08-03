"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Plus } from "./icons";
import { FAQS } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line bg-paper-2/50 py-20 sm:py-28 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="section-index">09</span>
              <span className="h-px w-10 bg-line" />
              <span className="kicker">Questions</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-6 text-[clamp(2rem,4.2vw,3.2rem)]">
              The honest
              <br />
              <span className="serif-em text-crimson">details</span>.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-ink-2">
              Straight answers on what NEXIS is, what you earn, and how it all
              works.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-line">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-line">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg leading-snug sm:text-xl">
                      {f.q}
                    </span>
                    <Plus
                      className={`shrink-0 text-xl text-crimson transition-transform duration-500 ease-premium ${
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
                      <p className="max-w-2xl pb-7 text-[0.98rem] leading-relaxed text-ink-2">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
