import type { Metadata } from "next";
import Image from "next/image";
import UgDetailShell from "@/components/UgDetailShell";
import CurriculumJourney from "@/components/CurriculumJourney";
import Reveal from "@/components/Reveal";
import { AccentRule, CARD_LIGHT, Chip, Kicker } from "@/components/editorial";
import { CURRICULUM, FACULTY } from "@/lib/content";

export const metadata: Metadata = {
  title: "UG Curriculum & Faculty | NEXIS School of Business",
  description:
    "See the complete six-semester NEXIS UG curriculum: digital sales and marketing, business analytics, entrepreneurship, live projects, tools and founder-led faculty.",
  alternates: { canonical: "/ug/curriculum" },
};

export default function CurriculumPage() {
  return (
    <UgDetailShell
      eyebrow="UG in Business Management · Curriculum"
      title={<>Learn the subject. Then <span className="serif-em text-crimson">put it to work</span>.</>}
      lede="Three years move from selling, to analysing, to building. Every semester combines business fundamentals with an OUTCLASS project and the tools used by modern teams."
      image="/images/ug/program-overview.jpg"
      imageAlt="NEXIS students working together during the UG programme"
      facts={[
        { label: "Duration", value: "3 years", note: "Six semesters" },
        { label: "Format", value: "On campus", note: "Siliguri" },
        { label: "Learning mix", value: "70%", note: "Hands-on" },
        { label: "Final stretch", value: "6 months", note: "Professional internship" },
      ]}
      ctaTitle={<>Choose a curriculum that turns learning into <span className="serif-em">momentum</span>.</>}
    >
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Kicker>The three-year arc</Kicker>
            <h2 className="display balance mt-5 text-[clamp(2rem,5vw,3.8rem)]">
              Start with a customer. End in the <span className="serif-em text-crimson">founder&rsquo;s seat</span>.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {CURRICULUM.map((year, index) => (
              <Reveal key={year.year} delay={index * 80} className={`flex flex-col p-6 sm:p-8 ${CARD_LIGHT}`}>
                <AccentRule />
                <div className="flex items-center justify-between gap-4">
                  <Chip>{year.year}</Chip>
                  <span className="display text-4xl text-line">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-tight">{year.title}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{year.lede}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {year.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.84rem] leading-relaxed text-ink-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08080a] text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Kicker dark>All six semesters</Kicker>
            <h2 className="display balance mt-5 text-[clamp(2rem,5vw,3.8rem)] text-white">
              Classwork, OUTCLASS and tools—<span className="serif-em text-crimson">side by side</span>.
            </h2>
            <p className="mt-5 max-w-2xl text-[0.96rem] leading-relaxed text-white/60">
              Follow the journey semester by semester. On phone, the progress bar stays with you; on desktop, the year rail tracks where you are.
            </p>
          </Reveal>
          <div className="mt-10 sm:mt-14">
            <CurriculumJourney />
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <Kicker>Faculty who operate</Kicker>
              <h2 className="display balance mt-5 text-[clamp(2rem,4.4vw,3.3rem)]">
                Learn from people who have <span className="serif-em text-crimson">built the thing</span>.
              </h2>
              <p className="mt-5 text-[0.94rem] leading-relaxed text-ink-2">
                The core faculty is joined by founders, specialists and CXOs for workshops, critiques and live business sessions.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
              {FACULTY.map((mentor, index) => (
                <Reveal key={mentor.name} delay={index * 80} className={`flex flex-col ${CARD_LIGHT}`}>
                  <AccentRule />
                  <div className="relative aspect-[16/10] overflow-hidden bg-paper-2 sm:aspect-[4/5]">
                    <Image src={mentor.img} alt={mentor.name} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-contain sm:object-cover sm:object-top" />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-crimson">{mentor.role}</p>
                    <h3 className="mt-2 font-serif text-lg">{mentor.name}</h3>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-ink-2">{mentor.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </UgDetailShell>
  );
}
