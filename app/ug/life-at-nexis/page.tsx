import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import StudentWall from "@/components/StudentWall";
import CalloutCta from "@/components/CalloutCta";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Life at NEXIS | Clubs, Sport, Events & Campus Culture",
  description:
    "Clubs, sport, competitions, fests and industry immersions — a living campus where you build friendships, ventures and a network that outlasts the program.",
};

const STATS = [
  { k: "5+", l: "student clubs" },
  { k: "10+", l: "outdoor experiences" },
  { k: "7+", l: "sports events" },
  { k: "2+", l: "annual fests" },
  { k: "25+", l: "industry exposures" },
];

const CLUBS = [
  {
    t: "AI Club",
    d: "Build chatbots, explore Canva AI, try no-code tools and join AI hackathons.",
    tags: ["No-code websites", "AI Hackathon", "Canva AI", "Chatbot making"],
    img: "/images/ug/learn-ai.jpg",
  },
  {
    t: "Entrepreneurship Club",
    d: "Build your own startup through PitchTank, BizNEX, case competitions and Startup Weekender.",
    tags: ["Startup Weekender", "BizNEX", "PitchTank", "AI Hackathon"],
    img: "/images/ug/career-entrepreneurship.jpg",
  },
  {
    t: "Marketing Club",
    d: "Personal branding, creative ads and creator challenges — marketing you learn by doing.",
    tags: ["Personal branding", "Ad creation", "Ad showcase", "Creators Challenge"],
    img: "/images/ug/learn-influencer.jpg",
  },
  {
    t: "Finance Club",
    d: "Mock board meetings, finance hackathons and the investor challenge — including our 1-crore Invest-a-thon.",
    tags: ["Finance Hackathon", "Investors Challenge", "1 Cr. Invest-a-thon", "Board Meeting"],
    img: "/images/ug/career-jobs.jpg",
  },
  {
    t: "Cultural Club",
    d: "From Diwali and Freshers to jamming sessions and teachers' celebrations.",
    tags: ["Teachers' Day", "Freshers", "Jamming Session", "Diwali"],
    img: "/images/ug/day-houses.jpg",
  },
  {
    t: "Sports Club",
    d: "Cricket, pickleball, tennis and badminton — with monthly inter-house competitions.",
    tags: ["Badminton", "Cricket", "Pickleball", "Tennis"],
    img: "/images/ug/day-sports.jpg",
  },
];

const SPORTS = [
  "Cricket",
  "Football",
  "Pickleball",
  "Basketball",
  "Badminton",
  "Table Tennis",
  "Chess",
  "Carrom",
  "Volleyball",
  "Swimming",
];

const EVENTS = [
  "BizNEX",
  "PitchTank",
  "Startup Weekend",
  "Hackathons",
  "Freshers",
  "Musical Night",
  "Sports Tournament",
  "Teachers' Day",
];

const BEYOND = [
  {
    t: "Industry visits",
    d: "Tour iconic factories, unicorn startups and offices to see how business runs on the ground.",
    img: "/images/campus/tour8.jpg",
  },
  {
    t: "Excursions",
    d: "Treks, mountain trips and excursions that bring the cohort together beyond the campus gates.",
    img: "/images/campus/safe-future.jpg",
  },
  {
    t: "Global immersion",
    d: "Opt into international immersion trips to Singapore and Dubai for first-hand global exposure.",
    img: "/images/campus/apex-hall.jpg",
  },
];

const FAQS = [
  {
    q: "Is life at NEXIS only about academics?",
    a: "Far from it. Collaboration zones, a cafeteria, a dedicated Startup Zone and indoor recreation spaces make the campus a place to build, socialise and unwind — not just study.",
  },
  {
    q: "What clubs, events and fests can I join?",
    a: "Finance, Marketing, Entrepreneurship, Cultural, Sports and AI clubs — plus business competitions, pitch battles, hackathons, cultural nights, open mics and guest talks through the year.",
  },
  {
    q: "What about sport and fitness?",
    a: "Outdoor sport on partnered turfs (cricket, football, pickleball, basketball, badminton, swimming, volleyball) and indoor games, with bi-weekly inter-house tournaments and regular wellness drives.",
  },
  {
    q: "Is there a uniform?",
    a: "You're provided two NEXIS T-shirts and a formal blazer. NEXIS tees on designated days, smart-casual otherwise, and the blazer for formal events, industry visits and external representation.",
  },
];

export default function LifeAtNexisPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Life at NEXIS"
        title={
          <>
            Where ambition meets{" "}
            <span className="serif-em text-crimson">belonging</span>.
          </>
        }
        lede="There's a club for every curious mind — code, culture, cameras and more. Compete every month, lead a club, travel with your cohort, and build friendships that outlast the program."
        actions={
          <>
            <a href="/ug/book-campus-tour" className="btn btn-crimson">
              Book a campus tour
              <ArrowRight className="arrow" />
            </a>
            <a href="/ug/request-callback" className="btn btn-ghost">
              Request a callback
              <ArrowUpRight className="arrow" />
            </a>
          </>
        }
      />

      {/* Stat strip */}
      <div className="border-y border-line">
        <div className="shell grid grid-cols-2 divide-line sm:grid-cols-3 lg:grid-cols-5 sm:divide-x">
          {STATS.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 60}
              className="py-5 sm:py-7 sm:px-6 sm:first:pl-0"
            >
              <p className="display text-[clamp(1.9rem,3vw,2.6rem)] text-crimson">
                {s.k}
              </p>
              <p className="mt-1 text-[0.82rem] text-ink-2">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Clubs */}
      <section className="shell py-8 sm:py-16 lg:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              Clubs at NEXIS
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
              A club for every{" "}
              <span className="serif-em text-crimson">curious mind</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CLUBS.map((c, i) => (
            <Reveal
              key={c.t}
              delay={(i % 3) * 80}
              className="lift group flex flex-col overflow-hidden rounded-[2px] border border-line bg-paper"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                <Image
                  src={c.img}
                  alt={`${c.t} at NEXIS`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-serif text-xl leading-tight sm:text-2xl">
                  {c.t}
                </h3>
                <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-ink-2">
                  {c.d}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-3 py-1 text-[0.72rem] text-ink-2"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sports + Events */}
      <section className="border-y border-line bg-paper-2/50">
        <div className="shell grid gap-12 py-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Immersive sports life
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(1.9rem,4vw,3rem)]">
                Sport, celebrated like{" "}
                <span className="serif-em text-crimson">academics</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-ink-2">
                Monthly inter-house competitions across a range of sports, on
                partnered turfs and courts across the city.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {SPORTS.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-[0.82rem] text-ink-2"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Competitions & events
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(1.9rem,4vw,3rem)]">
                The spirit of challenge &{" "}
                <span className="serif-em text-crimson">celebration</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-ink-2">
                From pitch battles and hackathons to fests and musical nights —
                there&rsquo;s always something happening on campus.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {EVENTS.map((e) => (
                  <span
                    key={e}
                    className="rounded-full border border-line bg-paper px-4 py-2 text-[0.82rem] text-ink-2"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Beyond campus */}
      <section className="shell py-8 sm:py-16 lg:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              Beyond campus
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
              Learning beyond the{" "}
              <span className="serif-em text-crimson">gates</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-5 md:grid-cols-3">
          {BEYOND.map((b, i) => (
            <Reveal
              key={b.t}
              delay={i * 90}
              className="group overflow-hidden rounded-[2px] border border-line bg-paper"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
                <Image
                  src={b.img}
                  alt={b.t}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-xl leading-tight">{b.t}</h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-2">
                  {b.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Meet the students */}
      <section className="border-t border-line bg-paper-2/50">
        <div className="shell py-8 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Meet the students
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
                The faces of{" "}
                <span className="serif-em text-crimson">NEXIS</span>.
              </h2>
            </Reveal>
          </div>
          <StudentWall />
        </div>
      </section>

      {/* FAQ — static */}
      <section className="shell py-8 sm:py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Good to know
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2rem,4.2vw,3rem)]">
                The <span className="serif-em text-crimson">everyday</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {FAQS.map((f) => (
                <Reveal key={f.q} className="border-b border-line py-6">
                  <h3 className="font-serif text-lg leading-snug sm:text-xl">
                    {f.q}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[0.96rem] leading-relaxed text-ink-2">
                    {f.a}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CalloutCta
        kicker="Come see it"
        title={
          <>
            The best way to feel it is to{" "}
            <span className="serif-em">visit</span>.
          </>
        }
        lede="Book a campus tour, sit in on a session, and experience life at NEXIS for yourself."
        primary={{ label: "Book a campus tour", href: "/ug/book-campus-tour" }}
        secondary={{ label: "Apply for 2027", href: CONTACT.applyHref }}
      />

      <SiteFooter />
    </main>
  );
}
