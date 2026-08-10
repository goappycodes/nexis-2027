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
    <section className="shell pt-5 pb-8 sm:pt-10 sm:pb-12 lg:pt-14">
      <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
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
      {children}
    </section>
  );
}
