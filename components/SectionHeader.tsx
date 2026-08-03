import Reveal from "./Reveal";
import type { ReactNode } from "react";

type Props = {
  index: string;
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "between";
};

/** Numbered, editorial section header used across the page. */
export default function SectionHeader({
  index,
  kicker,
  title,
  lede,
  align = "left",
}: Props) {
  return (
    <div
      className={`flex flex-col gap-8 ${
        align === "between" ? "lg:flex-row lg:items-end lg:justify-between" : ""
      }`}
    >
      <div className={align === "between" ? "lg:max-w-2xl" : "max-w-3xl"}>
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="section-index">{index}</span>
            <span className="h-px w-10 bg-line" />
            <span className="kicker">{kicker}</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
            {title}
          </h2>
        </Reveal>
        {lede && (
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink-2">
              {lede}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
