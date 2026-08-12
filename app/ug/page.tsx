import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import StudentCarousel from "@/components/StudentCarousel";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import {
  BATCH,
  CONTACT,
  PROGRAM_FACTS,
  DIFFERENTIATORS,
  CURRICULUM,
  EXPERIENCES,
  FACULTY,
  OUTCOME_STATS,
  PATHWAYS,
  CAMPUS_STATS,
  CAMPUS_IMAGES,
  ACCREDITATION,
  RECRUITER_LOGOS,
  FOUNDERS,
  ADMISSION_STEPS,
  FAQS,
} from "@/lib/content";

export const metadata: Metadata = {
  title:
    "Undergraduate Program in Business Management — Batch of 2027 | NEXIS",
  description:
    "A three-year, on-campus undergraduate program in Siliguri where you learn business by building real businesses — mentored by founders and CXOs from day one. Admissions open for the Batch of 2027.",
};

/* Eyebrow label — crimson by default, neon-lime on dark sections. */
function Eyebrow({
  children,
  lime = false,
}: {
  children: ReactNode;
  lime?: boolean;
}) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
      <span className={`h-px w-8 ${lime ? "bg-lime" : "bg-crimson"}`} />
      <span className={lime ? "text-lime" : "text-crimson"}>{children}</span>
    </p>
  );
}

function monogram(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

const DEEP = "bg-[#08080a]";

export default function UGPage() {
  return (
    <main className="relative font-poppins">
      <SiteNav applyHref="#apply" theme="dark" />

      {/* ============ HERO (dark) ============ */}
      <section id="top" className={`relative overflow-hidden ${DEEP} text-white`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-crimson/25 blur-[130px]" />
          <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-lime/10 blur-[130px]" />
        </div>

        <div className="shell relative grid items-center gap-10 pt-9 pb-11 sm:pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-20 lg:pt-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow lime>
                Undergraduate Program · {BATCH.city}
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display balance mt-5 text-[clamp(2.4rem,6.6vw,5rem)] text-white">
                Learn business by{" "}
                <span className="serif-em text-crimson">building</span> it.
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/70">
                A three-year, on-campus program in {BATCH.city} where you work on
                real businesses from your first semester — mentored by founders
                and CXOs, not just lectured at. The most practical business
                education in India.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={CONTACT.applyHref} className="btn btn-crimson">
                  Apply for the {BATCH.year} cohort
                  <ArrowRight className="arrow" />
                </a>
                <a
                  href={CONTACT.brochureHref}
                  className="btn border-white/25 bg-transparent text-white hover:bg-white/10"
                >
                  Download prospectus
                  <ArrowUpRight className="arrow" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200} className="relative">
              <figure className="relative aspect-[16/11] overflow-hidden rounded-[4px] bg-white/5 sm:aspect-[4/5] lg:aspect-[7/8]">
                <Image
                  src="/images/campus/cafeteria.jpg"
                  alt="Inside the NEXIS campus in Siliguri"
                  fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent" />
                <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/45 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  Campus · {BATCH.city}
                </figcaption>
              </figure>
              <div className="absolute -left-3 -top-3 hidden rounded-[3px] border border-white/10 bg-[#0e0e11] px-4 py-3 shadow-2xl sm:block lg:-left-7">
                <p className="display text-3xl leading-none text-lime">70%</p>
                <p className="mt-1 text-[0.64rem] uppercase tracking-[0.14em] text-white/50">
                  hands-on
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Fact rail */}
        <div className="relative border-t border-white/10">
          <div className="shell grid grid-cols-2 md:grid-cols-4">
            {PROGRAM_FACTS.map((f, i) => (
              <Reveal
                key={f.label}
                delay={i * 70}
                className={`py-5 sm:py-6 md:px-7 md:first:pl-0 ${
                  i % 2 === 0 ? "pr-4" : "pl-4 md:pl-7"
                } ${i < 2 ? "border-b border-white/10 md:border-b-0" : ""} ${
                  i > 0 ? "md:border-l md:border-white/10" : ""
                }`}
              >
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-lime">
                  {f.label}
                </p>
                <p className="mt-2 font-serif text-xl leading-tight">{f.value}</p>
                <p className="mt-0.5 text-[0.8rem] text-white/45">{f.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BACKED BY (dark) ============ */}
      <section className="bg-ink text-white">
        <div className="shell py-9 sm:py-12">
          <Reveal className="text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/45">
              Our programs are backed by
            </p>
          </Reveal>
          <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {ACCREDITATION.map((a) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={a.name}
                src={a.src}
                alt={a.name}
                className="h-9 w-auto max-w-[160px] object-contain opacity-90 sm:h-11"
              />
            ))}
          </Reveal>
          <Reveal className="mx-auto mt-9 max-w-3xl border-t border-white/10 pt-8 text-center text-[0.88rem] leading-relaxed text-white/50">
            <p>
              NEXIS is a school of business and skilling institution — a Training
              Body accredited by{" "}
              <span className="font-medium text-white/80">MEPSC</span>, an awarding
              body recognised by{" "}
              <span className="font-medium text-white/80">NCVET</span>. Every year
              of the program earns a nationally recognised,{" "}
              <span className="font-medium text-white/80">NSQF-aligned</span>{" "}
              qualification. We don&rsquo;t confer degrees — we build careers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ PROGRAM OVERVIEW (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>The Program</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)]">
                An undergraduate education, built around{" "}
                <span className="serif-em text-crimson">real work</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-ink-2">
                Three years, structured around practice. You build ventures,
                consult businesses, intern with founders and graduate with a
                portfolio of real work — not just a transcript.
              </p>
            </Reveal>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-line bg-line sm:mt-14 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <Reveal
                key={d.t}
                delay={i * 80}
                className="bg-paper p-6 transition-colors duration-500 hover:bg-paper-2/60 sm:p-10"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="display text-3xl text-crimson sm:text-5xl">
                    {d.k}
                  </span>
                  <span className="font-serif text-base leading-tight text-ink sm:text-lg">
                    {d.t}
                  </span>
                </div>
                <p className="mt-3 max-w-md text-[0.9rem] leading-relaxed text-ink-2 sm:mt-5 sm:text-[0.98rem]">
                  {d.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CURRICULUM (dark) ============ */}
      <section className={`${DEEP} text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow lime>The Curriculum</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
                A new-age curriculum for three years of{" "}
                <span className="serif-em text-crimson">transformation</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
            {CURRICULUM.map((c, i) => (
              <Reveal
                key={c.year}
                delay={i * 90}
                className="flex flex-col rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-lime">
                    {c.year}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-5 font-serif text-xl leading-tight sm:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">
                  {c.lede}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                  {c.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-[0.88rem] leading-relaxed text-white/75"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-crimson" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.74rem] leading-relaxed text-white/40">
                  {c.qualification}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MENTORS (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Faculty &amp; Mentors</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)]">
                Learn directly from{" "}
                <span className="serif-em text-crimson">industry leaders</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-ink-2">
                Not career academics — founders, CEOs and CXOs who have actually
                built and scaled companies. 50+ of them mentor on campus.
              </p>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-5 sm:mt-14 md:grid-cols-3">
            {FACULTY.map((f, i) => (
              <Reveal
                key={f.name}
                delay={i * 90}
                className="rounded-[3px] border border-line bg-paper p-6 sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-serif text-lg text-paper">
                  {monogram(f.name)}
                </div>
                <h3 className="mt-5 font-serif text-xl leading-tight">{f.name}</h3>
                <p className="mt-1 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-crimson">
                  {f.role}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-[0.92rem] leading-relaxed text-ink-2">
                  {f.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEARN BY DOING (crimson — brand signature) ============ */}
      <section className="bg-crimson text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                <span className="h-px w-8 bg-white/60" />
                Learn by doing
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
                The work is the{" "}
                <span className="serif-em">classroom</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((e, i) => (
              <Reveal
                key={e.title}
                delay={(i % 3) * 80}
                className="group relative aspect-[4/3] overflow-hidden rounded-[3px] bg-black/20"
              >
                <Image
                  src={e.img}
                  alt={e.title}
                  fill
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-lime">
                    {e.tag}
                  </span>
                  <h3 className="mt-1.5 font-serif text-lg leading-tight">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-white/75">
                    {e.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STUDENT LIFE (dark) ============ */}
      <section className="bg-ink text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow lime>Campus Life</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
                  A campus alive with{" "}
                  <span className="serif-em text-crimson">ambition</span>.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-white/65">
                  A 360° experience at a next-gen campus in the heart of Siliguri.
                  Lead clubs, represent your house, compete every month and build
                  a network — and friendships — that outlast the program.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <div className="border-t border-white/10">
                {CAMPUS_STATS.map((s, i) => (
                  <Reveal
                    key={s.l}
                    delay={i * 90}
                    className="flex items-baseline gap-5 border-b border-white/10 py-5"
                  >
                    <p className="display w-28 shrink-0 text-[clamp(1.8rem,4vw,2.6rem)] text-lime">
                      {s.k}
                    </p>
                    <p className="text-[0.92rem] leading-relaxed text-white/65">
                      {s.l}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 md:grid-cols-4">
            {CAMPUS_IMAGES.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 4) * 60}
                className="group relative aspect-[4/3] overflow-hidden rounded-[3px] bg-white/5"
              >
                <Image
                  src={img.src}
                  alt={img.cap}
                  fill
                  loading="lazy"
                  sizes="(max-width:768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 p-3 text-[0.74rem] font-medium text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {img.cap}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STUDENT WALL (dark) ============ */}
      <section className={`${DEEP} text-white py-12 sm:py-16 lg:py-20`}>
        <div className="shell mb-8 max-w-2xl">
          <Reveal>
            <Eyebrow lime>The Class of 2025</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
              Already interning, earning,{" "}
              <span className="serif-em text-crimson">winning</span>.
            </h2>
          </Reveal>
        </div>
        <StudentCarousel />
      </section>

      {/* ============ CAREER PROSPECTS (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Career Prospects</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)]">
                Where NEXIS takes{" "}
                <span className="serif-em text-crimson">you</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-6 border-y border-line py-8 sm:mt-12 lg:grid-cols-4">
            {OUTCOME_STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 70}>
                <p className="display text-[clamp(2rem,4.5vw,3.2rem)] text-ink">
                  {s.k}
                </p>
                <p className="mt-1.5 text-[0.85rem] leading-snug text-muted">
                  {s.l}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {PATHWAYS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="rounded-[3px] border border-line bg-paper p-6 sm:p-8"
              >
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-crimson">
                  {p.meta}
                </span>
                <h3 className="mt-4 font-serif text-xl leading-tight">{p.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-2">
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Recruiter marquee */}
          <Reveal className="mt-12">
            <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted">
              Where our students already work &amp; learn
            </p>
          </Reveal>
          <div className="marquee-mask mt-7 overflow-hidden">
            <div className="flex w-max items-center animate-marquee">
              {[...RECRUITER_LOGOS, ...RECRUITER_LOGOS].map((l, i) => (
                <div
                  key={`${l.name}-${i}`}
                  className="flex h-12 shrink-0 items-center justify-center px-8 sm:px-10"
                  title={l.name}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.src}
                    alt={l.name}
                    className="h-6 w-auto max-w-[130px] object-contain opacity-70 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0 sm:h-7"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ADMISSIONS (dark) ============ */}
      <section className="bg-ink text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow lime>Admissions</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)] text-white">
                How you join the{" "}
                <span className="serif-em text-crimson">
                  {BATCH.cohort.split("–")[0]}
                </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-white/65">
                A profile-first process — there&rsquo;s no cut-off on board marks.
                We look for ambition, coachability and the drive to build.
              </p>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
            {ADMISSION_STEPS.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 90}
                className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="display text-3xl text-lime">{s.n}</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="mt-5 font-serif text-xl leading-tight">{s.title}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-white/60">
                  {s.d}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-lime">
                Eligibility
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
                Open to students appearing for or having passed Class XII from any
                recognised board — with or without Mathematics. We evaluate
                academics alongside extracurriculars, leadership and experience.
              </p>
            </Reveal>
            <Reveal
              delay={90}
              className="rounded-[3px] border border-white/10 bg-[#0e0e11] p-6 sm:p-8"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-lime">
                Financing
              </p>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/70">
                Finance shouldn&rsquo;t be a barrier. We partner with Axis Bank for
                collateral-free education loans at low interest, plus semester-wise
                payment plans so you can pay in instalments.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FOUNDERS (light) ============ */}
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>The Founders</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(1.9rem,4.6vw,3.4rem)]">
                Built by alumni of India&rsquo;s{" "}
                <span className="serif-em text-crimson">finest</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-9 grid gap-5 sm:mt-14 md:grid-cols-2">
            {FOUNDERS.map((f, i) => (
              <Reveal
                key={f.name}
                delay={i * 100}
                className="flex flex-col gap-6 rounded-[3px] border border-line bg-paper p-6 sm:flex-row sm:items-start sm:p-8"
              >
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[3px] bg-paper-2 ring-1 ring-line">
                  <Image
                    src={f.img}
                    alt={f.name}
                    fill
                    sizes="120px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl leading-tight">{f.name}</h3>
                  <p className="mt-1 text-[0.85rem] text-muted">{f.role}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                    {f.creds.map((c) => (
                      <li
                        key={c}
                        className="flex items-center gap-3 text-[0.92rem] text-ink-2"
                      >
                        <span className="h-1 w-1 rounded-full bg-crimson" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ (dark) ============ */}
      <section className={`${DEEP} text-white`}>
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow lime>Questions</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-5 text-[clamp(1.9rem,4.4vw,3rem)] text-white">
                  The honest{" "}
                  <span className="serif-em text-crimson">details</span>.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={FAQS} dark />
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA (crimson) ============ */}
      <section id="apply" className="scroll-mt-24 bg-crimson text-white">
        <div className="shell py-12 sm:py-18 lg:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                  <span className="h-px w-8 bg-white/60" />
                  Admissions open · {BATCH.cohort}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-6 text-[clamp(2.2rem,5.5vw,4.4rem)] text-white">
                  Begin an education that{" "}
                  <span className="serif-em">lasts</span>.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-lg text-[1.02rem] leading-relaxed text-white/85">
                  Applications are open for the {BATCH.cohort} in {BATCH.city}.
                  Take the first step toward a business education built for how the
                  world actually works.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Reveal
                delay={200}
                className="flex flex-col gap-3 sm:flex-row lg:flex-col"
              >
                <a
                  href={CONTACT.applyHref}
                  className="btn btn-light w-full justify-center sm:w-auto lg:w-full"
                >
                  Apply now
                  <ArrowRight className="arrow" />
                </a>
                <a
                  href={CONTACT.brochureHref}
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

      <SiteFooter />
    </main>
  );
}
