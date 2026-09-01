import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  align?: "left" | "center";
  children?: ReactNode;
};

/** Editorial hero for interior pages — matches the homepage type system. */
export default function PageHero({
  kicker,
  title,
  lede,
  actions,
  align = "left",
  children,
}: Props) {
  const centered = align === "center";
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-paper">
      <span aria-hidden className="pointer-events-none absolute -right-[0.08em] top-1/2 -z-10 -translate-y-1/2 font-serif text-[clamp(12rem,30vw,28rem)] leading-none text-ink/[0.025]">
        N
      </span>
      <div className="shell grid gap-10 pb-10 pt-8 sm:pb-14 sm:pt-12 lg:grid-cols-12 lg:items-end lg:pb-18 lg:pt-18">
      <div className={centered ? "mx-auto max-w-3xl text-center lg:col-span-12" : "max-w-3xl lg:col-span-9"}>
        <Reveal>
          <p
            className={`kicker flex items-center gap-3 ${
              centered ? "justify-center" : ""
            }`}
          >
            <span className="h-px w-8 bg-crimson" />
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display balance mt-5 text-[clamp(2.3rem,5.6vw,4.6rem)]">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={150}>
            <p
              className={`mt-6 text-[1.05rem] leading-relaxed text-ink-2 ${
                centered ? "mx-auto max-w-xl" : "max-w-xl"
              }`}
            >
              {lede}
            </p>
          </Reveal>
        )}
        {actions && (
          <Reveal delay={220}>
            <div
              className={`mt-8 flex flex-wrap items-center gap-3 ${
                centered ? "justify-center" : ""
              }`}
            >
              {actions}
            </div>
          </Reveal>
        )}
      </div>
      {!centered && (
        <Reveal delay={240} className="hidden border-l border-line pl-6 lg:col-span-3 lg:block">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-crimson">NEXIS / Siliguri</p>
          <div className="mt-5 space-y-3 text-[0.78rem] uppercase tracking-[0.1em] text-muted">
            <p>Founder-led</p>
            <p>On campus</p>
            <p>Built to do</p>
          </div>
        </Reveal>
      )}
      {children}
      </div>
    </section>
  );
}
