import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight } from "./icons";
import { BATCH, CONTACT } from "@/lib/content";

export default function CtaBand() {
  return (
    <section id="apply" className="scroll-mt-24 bg-crimson text-white">
      <div className="shell py-8 sm:py-16 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-white/75">
                <span className="h-px w-8 bg-white/50" />
                Admissions open · {BATCH.cohort}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2.4rem,6vw,5rem)] text-white">
                Begin an education
                <br />
                that <span className="serif-em">lasts</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-white/85">
                Applications are open for the {BATCH.cohort} in {BATCH.city}.
                Take the first step toward a business education built for how the
                world actually works.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <Reveal delay={200} className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={CONTACT.applyHref}
                className="btn btn-light w-full justify-center sm:w-auto lg:w-full"
              >
                Apply now
                <ArrowRight className="arrow" />
              </a>
              <a
                href={CONTACT.brochureHref}
                target="_blank"
                rel="noreferrer"
                className="btn w-full justify-center border-white/40 bg-transparent text-white hover:bg-white/10 sm:w-auto lg:w-full"
              >
                Download prospectus
                <ArrowUpRight className="arrow" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
