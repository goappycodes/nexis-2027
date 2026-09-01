import type { Metadata } from "next";
import Image from "next/image";
import UgDetailShell from "@/components/UgDetailShell";
import Reveal from "@/components/Reveal";
import { AccentRule, CARD_DARK, CARD_LIGHT, Chip, Kicker } from "@/components/editorial";
import { EXPERIENCES } from "@/lib/content";

export const metadata: Metadata = {
  title: "UG Program Highlights | Learn Business by Building It — NEXIS",
  description:
    "Explore the live projects, founder mentorship, industry treks, AI builds, internships and student ventures that define the NEXIS UG experience.",
  alternates: { canonical: "/ug/highlights" },
};

const PROOF = [
  { k: "70%", l: "of programme time is hands-on" },
  { k: "Sem 1", l: "real briefs and early internships begin" },
  { k: "50+", l: "founders and CXOs in the mentor network" },
  { k: "6 mo", l: "professional internship in the final year" },
];

const WEEK = [
  { day: "Mon", title: "Decode a real brief", d: "A local brand walks in with a live problem." },
  { day: "Tue", title: "Build the answer", d: "Work in teams using the tools modern operators use." },
  { day: "Wed", title: "Meet the operator", d: "A founder pressure-tests the thinking, not the notes." },
  { day: "Thu", title: "Take it to market", d: "Run the campaign, prototype or customer conversation." },
  { day: "Fri", title: "Show the work", d: "Present what moved, what failed and what changes next." },
];

export default function HighlightsPage() {
  return (
    <UgDetailShell
      eyebrow="UG in Business Management · Highlights"
      title={<>Not a timetable. A three-year <span className="serif-em text-crimson">launchpad</span>.</>}
      lede="You will still learn the fundamentals. The difference is what happens next: briefs become campaigns, classes become build rooms, and ideas are expected to survive contact with the real world."
      image="/images/ug/highlight-curriculum.jpg"
      imageAlt="NEXIS students learning through a live business project"
      facts={PROOF.map(({ k, l }) => ({ label: l, value: k }))}
      ctaTitle={<>Bring your ambition. We&rsquo;ll give it a <span className="serif-em">real brief</span>.</>}
    >
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Kicker>The NEXIS difference</Kicker>
            <h2 className="display balance mt-5 text-[clamp(2rem,5vw,3.8rem)]">
              Six experiences. One portfolio that proves you can <span className="serif-em text-crimson">do the work</span>.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {EXPERIENCES.map((experience, index) => (
              <Reveal key={experience.tag} delay={(index % 3) * 70} className={`flex flex-col ${CARD_LIGHT}`}>
                <AccentRule />
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                  <Image
                    src={experience.img}
                    alt={experience.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <Chip>{experience.tag}</Chip>
                  <h3 className="mt-4 font-serif text-xl leading-tight">{experience.title}</h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{experience.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08080a] text-white">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Kicker dark>A week with momentum</Kicker>
              <h2 className="display balance mt-5 text-[clamp(2rem,4.6vw,3.4rem)] text-white">
                The rhythm is closer to a <span className="serif-em text-crimson">startup</span> than a lecture hall.
              </h2>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/60">
                Projects move from problem to prototype to presentation. You learn the theory because the work demands it—not because an exam is waiting.
              </p>
            </Reveal>
            <div className="space-y-3 lg:col-span-7">
              {WEEK.map((item, index) => (
                <Reveal key={item.day} delay={index * 55} className={`${CARD_DARK} flex items-start gap-5 p-5 sm:p-6`}>
                  <AccentRule />
                  <span className="w-10 shrink-0 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-crimson">{item.day}</span>
                  <div>
                    <h3 className="font-serif text-lg text-white">{item.title}</h3>
                    <p className="mt-1 text-[0.86rem] leading-relaxed text-white/55">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[5px] bg-paper-2">
              <Image src="/images/ug/highlight-brands.svg" alt="Student-built brands at NEXIS" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain p-8" />
            </Reveal>
            <Reveal>
              <Kicker>Leave with evidence</Kicker>
              <h2 className="display balance mt-5 text-[clamp(2rem,4.6vw,3.5rem)]">
                Your portfolio should say more than your <span className="serif-em text-crimson">marksheet</span>.
              </h2>
              <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-2">
                Campaigns, consulting work, prototypes, ventures, internships and presentations accumulate across all six semesters. By graduation, you can show recruiters, investors and universities how you think and what you have built.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </UgDetailShell>
  );
}
