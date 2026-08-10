import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight } from "./icons";

type Cta = { label: string; href: string };

/** Configurable crimson closing band for interior pages. */
export default function CalloutCta({
  kicker,
  title,
  lede,
  primary,
  secondary,
}: {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  primary: Cta;
  secondary?: Cta;
}) {
  return (
    <section className="bg-crimson text-white">
      <div className="shell py-8 sm:py-16 lg:py-22">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {kicker && (
              <Reveal>
                <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-white/75">
                  <span className="h-px w-8 bg-white/50" />
                  {kicker}
                </p>
              </Reveal>
            )}
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2.2rem,5vw,4rem)] text-white">
                {title}
              </h2>
            </Reveal>
            {lede && (
              <Reveal delay={140}>
                <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-white/85">
                  {lede}
                </p>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <Reveal
              delay={200}
              className="flex flex-col gap-3 sm:flex-row lg:flex-col"
            >
              <a
                href={primary.href}
                className="btn btn-light w-full justify-center sm:w-auto lg:w-full"
              >
                {primary.label}
                <ArrowRight className="arrow" />
              </a>
              {secondary && (
                <a
                  href={secondary.href}
                  className="btn w-full justify-center border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto lg:w-full"
                >
                  {secondary.label}
                  <ArrowUpRight className="arrow" />
                </a>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
