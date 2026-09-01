import type { Metadata } from "next";
import Image from "next/image";
import UgDetailShell from "@/components/UgDetailShell";
import Reveal from "@/components/Reveal";
import Recognition from "@/components/Recognition";
import { AccentRule, CARD_DARK, CARD_LIGHT, Kicker } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Career Prospects — What Happens After NEXIS | Careers & Ventures",
  description:
    "Access to 75+ recruiters through the NEXIS Career Bootcamp, or build a real venture through BYOB with funding and mentorship. Two clear paths to a career you'll be proud of.",
  alternates: { canonical: "/ug/career-prospect" },
};

const BOOTCAMP = [
  "Résumé building & LinkedIn profiling",
  "1:1 career counselling",
  "Personal branding & soft skills",
  "Guesstimate & case-study mastery",
  "HR & technical interview prep",
  "Industry-specific exam prep",
];

const BYOB = [
  "Startup incubation with funding support",
  "1:1 mentorship from startup leaders",
  "Access to 25+ VCs and 50+ networking opportunities",
  "Monthly business-automation workshops",
];

const BYOB_STEPS = [
  "Form a team with peers who complement your strengths",
  "Develop and launch a genuinely viable business",
  "Get ongoing mentorship as you build",
  "Pitch to potential investors",
  "Scale after the programme if it is working",
];

const PATHWAYS = [
  {
    eyebrow: "For the job seekers",
    title: "Career Bootcamp",
    description:
      "A focused two-month sprint to sharpen how you present, solve and interview—followed by access to the NEXIS recruiter network.",
    image: "/images/ug/career-jobs.jpg",
    imageAlt: "NEXIS students in a career bootcamp session",
    list: BOOTCAMP,
    noteLabel: "Specialised internship",
    note: "Six months in your field of interest, applying your skills inside a real team.",
    dark: false,
  },
  {
    eyebrow: "For the entrepreneurs",
    title: "BYOB — Build Your Own Business",
    description:
      "An eight-month programme for aspiring entrepreneurs and family-business builders, centred on launching a venture rather than writing a hypothetical plan.",
    image: "/images/ug/career-entrepreneurship.jpg",
    imageAlt: "A NEXIS student building a venture through BYOB",
    list: BYOB,
    noteLabel: "What you will do",
    note: BYOB_STEPS.join(" · "),
    dark: true,
  },
];

export default function CareerProspectsPage() {
  return (
    <UgDetailShell
      eyebrow="UG in Business Management · Career prospects"
      title={<>Two routes out. Both begin with <span className="serif-em text-crimson">proof</span>.</>}
      lede="Build the portfolio, professional confidence and network to pursue a strong role—or use the same three years to take a venture from idea to market."
      image="/images/ug/career-jobs.jpg"
      imageAlt="NEXIS students preparing for careers through a live workshop"
      facts={[
        { label: "Recruiter network", value: "75+" },
        { label: "Career bootcamp", value: "2 mo" },
        { label: "Final internship", value: "6 mo" },
        { label: "BYOB programme", value: "8 mo" },
      ]}
      ctaTitle={<>Start building a career that feels like <span className="serif-em">yours</span>.</>}
    >
      <section className="bg-paper text-ink">
        <div className="shell py-12 sm:py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <Kicker>Choose your direction</Kicker>
            <h2 className="display balance mt-5 text-[clamp(2rem,5vw,3.8rem)]">
              The job track and founder track share one rule: <span className="serif-em text-crimson">show the work</span>.
            </h2>
            <p className="mt-5 max-w-2xl text-[0.96rem] leading-relaxed text-ink-2">
              Both pathways are designed around visible evidence—projects, conversations, decisions and outcomes you can discuss with confidence.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2">
            {PATHWAYS.map((path, index) => (
              <Reveal
                key={path.title}
                delay={index * 80}
                className={`group flex flex-col overflow-hidden ${path.dark ? `${CARD_DARK} text-white` : CARD_LIGHT}`}
              >
                <AccentRule />
                <div className="relative aspect-[16/10] overflow-hidden bg-paper-2 sm:aspect-[16/9]">
                  <Image
                    src={path.image}
                    alt={path.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/45 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                    Path 0{index + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-crimson">{path.eyebrow}</p>
                  <h3 className="mt-3 font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-tight">{path.title}</h3>
                  <p className={`mt-4 text-[0.94rem] leading-relaxed ${path.dark ? "text-white/68" : "text-ink-2"}`}>
                    {path.description}
                  </p>
                  <ul className={`mt-6 space-y-3 border-t pt-6 ${path.dark ? "border-white/15" : "border-line"}`}>
                    {path.list.map((item) => (
                      <li key={item} className={`flex gap-3 text-[0.9rem] ${path.dark ? "text-white/78" : "text-ink-2"}`}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-7 rounded-[4px] p-5 ${path.dark ? "bg-white/[0.06]" : "bg-paper-2"}`}>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-crimson">{path.noteLabel}</p>
                    <p className={`mt-2 text-[0.84rem] leading-relaxed ${path.dark ? "text-white/62" : "text-ink-2"}`}>{path.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/55 text-ink">
        <div className="shell grid gap-8 py-12 sm:grid-cols-3 sm:py-16 lg:py-20">
          {[
            ["01", "Build", "Projects and internships create evidence before placement season."],
            ["02", "Sharpen", "Mentors help turn that work into a clear professional story."],
            ["03", "Meet the room", "Recruiters, founders and investors pressure-test where you go next."],
          ].map(([number, title, description], index) => (
            <Reveal key={number} delay={index * 70} className="border-t border-line pt-5">
              <span className="text-[0.64rem] font-semibold tracking-[0.15em] text-crimson">{number}</span>
              <h3 className="mt-4 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-[0.88rem] leading-relaxed text-ink-2">{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Recognition />
    </UgDetailShell>
  );
}
