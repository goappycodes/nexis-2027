import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { ADMISSION_STEPS, BATCH } from "@/lib/content";
import { Spark } from "./icons";

export default function Admissions() {
  return (
    <section
      id="admissions"
      className="shell scroll-mt-24 py-12 sm:py-20 lg:py-28"
    >
      <SectionHeader
        index="08"
        kicker="Admissions"
        title={
          <>
            How you join the{" "}
            <span className="serif-em text-crimson">{BATCH.cohort.split("–")[0]}</span>.
          </>
        }
        lede="A profile-first process — there's no cut-off on board marks. We look for ambition, coachability and the drive to build."
      />

      {/* Steps */}
      <div className="mt-10 sm:mt-16 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line md:grid-cols-3">
        {ADMISSION_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 90} className="bg-paper p-6 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="display text-3xl text-crimson">{s.n}</span>
              <span className="h-px flex-1 bg-line" />
            </div>
            <h3 className="mt-6 font-serif text-xl leading-tight">{s.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">
              {s.d}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Eligibility + financing */}
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Reveal className="rounded-[4px] border border-line bg-paper p-8 sm:p-8 max-sm:p-6">
          <p className="kicker text-crimson">Eligibility</p>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-2">
            Open to students appearing for or having passed Class XII from any
            recognised board — with or without Mathematics. We evaluate
            academics alongside extracurriculars, leadership and personal
            experience.
          </p>
        </Reveal>
        <Reveal delay={90} className="rounded-[4px] border border-line bg-paper p-8 sm:p-8 max-sm:p-6">
          <p className="kicker text-crimson">Financing</p>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-2">
            Finance shouldn&rsquo;t be a barrier. We partner with Axis Bank for
            collateral-free education loans at low interest, plus semester-wise
            payment plans so you can pay in instalments.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-8 flex items-center gap-3 text-[0.9rem] text-muted">
        <Spark className="text-crimson" />
        <span>
          Scholarships available via the NEXGen Scholarship Test. Seats for the{" "}
          {BATCH.cohort} are limited.
        </span>
      </Reveal>
    </section>
  );
}
