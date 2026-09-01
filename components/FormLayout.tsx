import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
  children: ReactNode; // the form
  headingLevel?: "h1" | "h2";
};

/** Two-column conversion layout: editorial copy + aside on the left,
    a form card on the right. */
export default function FormLayout({
  kicker,
  title,
  lede,
  aside,
  children,
  headingLevel = "h1",
}: Props) {
  const Heading = headingLevel;
  return (
    <section className="shell py-7 sm:py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Copy + aside */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              {kicker}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Heading className="display balance mt-5 text-[clamp(2.1rem,4.6vw,3.4rem)]">
              {title}
            </Heading>
          </Reveal>
          {lede && (
            <Reveal delay={150}>
              <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink-2">
                {lede}
              </p>
            </Reveal>
          )}
          {aside && (
            <Reveal delay={220} className="mt-10">
              {aside}
            </Reveal>
          )}
        </div>

        {/* Form card */}
        <div className="lg:col-span-7">
          <Reveal
            delay={120}
            className="rounded-[2px] border border-line bg-paper p-5 shadow-[0_30px_70px_-50px_rgba(11,12,16,0.5)] sm:p-8 lg:p-10"
          >
            {children}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
