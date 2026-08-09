import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Founders from "@/components/Founders";
import Recognition from "@/components/Recognition";
import CalloutCta from "@/components/CalloutCta";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "About NEXIS School of Business | Siliguri",
  description:
    "NEXIS is a new-generation business school in Siliguri, preparing students for the business world through practical, industry-integrated learning. Our vision, mission and the founders behind it.",
};

const PRINCIPLES = [
  {
    t: "Practice over theory",
    d: "Students learn by doing — building ventures, running campaigns and consulting real businesses from the first semester, not memorising for an exam.",
  },
  {
    t: "Mentors who've built",
    d: "Learn directly from founders, CEOs and CXOs of fast-growing companies — people who have actually built what they teach.",
  },
  {
    t: "A living campus",
    d: "Clubs, competitions, sport and real projects keep a modern campus in constant motion, all year round.",
  },
  {
    t: "Outcomes from day one",
    d: "Internships every year and a 75+ company network mean careers start the day students join, not the day they graduate.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="About NEXIS"
        title={
          <>
            A business school built for how business actually{" "}
            <span className="serif-em text-crimson">works</span>.
          </>
        }
        lede="At NEXIS, we prepare students with the skills and knowledge today's industries demand. Through practical learning, expert guidance and real-world exposure, we help you build a career with confidence and clarity."
        actions={
          <>
            <a href={CONTACT.applyHref} className="btn btn-crimson">
              Apply for the Batch of 2027
              <ArrowRight className="arrow" />
            </a>
            <a href="/ug/book-founder-connect" className="btn btn-ghost">
              Meet the founders
              <ArrowUpRight className="arrow" />
            </a>
          </>
        }
      />

      {/* Image plate */}
      <div className="shell">
        <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[2px] bg-paper-2 sm:aspect-[21/9]">
          <Image
            src="/images/campus/legacy-hall.jpg"
            alt="Inside the NEXIS campus in Siliguri"
            fill
            sizes="(max-width:1440px) 100vw, 1440px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
          <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-paper/90 px-3.5 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-ink backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
            NEXIS · {CONTACT.address.split(",")[1]?.trim() ?? "Siliguri"}
          </figcaption>
        </Reveal>
      </div>

      {/* Vision & Mission */}
      <section className="shell py-12 sm:py-20 lg:py-28">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-[2px] border border-line bg-paper p-8 sm:p-10">
            <p className="kicker text-crimson">Vision</p>
            <p className="mt-5 font-serif text-2xl leading-snug text-ink sm:text-[1.7rem]">
              To be East India&rsquo;s leading name in new-age business
              education — creating the industry leaders and entrepreneurs of
              tomorrow by replacing an outdated model with a hands-on,
              real-world method.
            </p>
          </Reveal>
          <Reveal delay={90} className="rounded-[2px] border border-line bg-paper p-8 sm:p-10">
            <p className="kicker text-crimson">Mission</p>
            <p className="mt-5 font-serif text-2xl leading-snug text-ink sm:text-[1.7rem]">
              To transform business education in eastern India and build an
              institution that equips students to excel in the business world
              through genuine, practical exposure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-line bg-paper-2/50">
        <div className="shell py-12 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                What we stand for
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
                An institution built on a single{" "}
                <span className="serif-em text-crimson">conviction</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="bg-paper p-8 sm:p-10">
                <h3 className="font-serif text-xl leading-tight sm:text-2xl">
                  {p.t}
                </h3>
                <p className="mt-4 text-[0.96rem] leading-relaxed text-ink-2">
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Founders index="" />
      <Recognition />

      <CalloutCta
        kicker="Admissions open"
        title={
          <>
            Come build your career where business is{" "}
            <span className="serif-em">done</span>.
          </>
        }
        lede="Talk to our team, meet the founders, or apply for the Batch of 2027 in Siliguri."
        primary={{ label: "Apply now", href: CONTACT.applyHref }}
        secondary={{ label: "Book a campus tour", href: "/ug/book-campus-tour" }}
      />

      <SiteFooter />
    </main>
  );
}
