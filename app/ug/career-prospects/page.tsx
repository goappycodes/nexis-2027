import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Recognition from "@/components/Recognition";
import CalloutCta from "@/components/CalloutCta";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Career Prospects — What Happens After NEXIS | Careers & Ventures",
  description:
    "Access to 75+ recruiters through the NEXIS Career Bootcamp, or build a real venture through BYOB with funding and mentorship. Two clear paths to a career you'll be proud of.",
};

const STATS = [
  { k: "75+", l: "recruiters" },
  { k: "2 mo", l: "career bootcamp" },
  { k: "6 mo", l: "specialised internship" },
  { k: "8 mo", l: "BYOB program" },
  { k: "25+", l: "VCs in the network" },
  { k: "50+", l: "networking opportunities" },
];

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
  "Scale after the program if it's working",
];

export default function CareerProspectsPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Career Prospects"
        title={
          <>
            What happens after{" "}
            <span className="serif-em text-crimson">NEXIS</span>?
          </>
        }
        lede="Unlock a career you always dreamt of. Whether you want to land a great job or build a business of your own, NEXIS gives you a clear, supported path — and the network to walk it."
        actions={
          <>
            <a href="/ug/request-callback" className="btn btn-crimson">
              Request a callback
              <ArrowRight className="arrow" />
            </a>
            <a href="/ug" className="btn btn-ghost">
              Explore the program
              <ArrowUpRight className="arrow" />
            </a>
          </>
        }
      />

      {/* Stat strip */}
      <div className="border-y border-line">
        <div className="shell grid grid-cols-2 divide-line sm:grid-cols-3 lg:grid-cols-6 sm:divide-x">
          {STATS.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 50}
              className="py-5 sm:py-7 sm:px-5 sm:first:pl-0"
            >
              <p className="display text-[clamp(1.7rem,2.6vw,2.4rem)] text-crimson">
                {s.k}
              </p>
              <p className="mt-1 text-[0.8rem] leading-snug text-ink-2">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Two pathways */}
      <section className="shell py-8 sm:py-16 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Career Bootcamp */}
          <Reveal className="flex flex-col rounded-[2px] border border-line bg-paper p-8 sm:p-10">
            <span className="kicker text-crimson">For the job seekers</span>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">
              Career Bootcamp
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">
              A 2-month intensive designed to help you land your dream job. Build
              the skills — and get the access to 75+ top recruiters — that make
              you stand out in today&rsquo;s job market.
            </p>
            <ul className="mt-7 space-y-3 border-t border-line pt-7">
              {BOOTCAMP.map((b) => (
                <li key={b} className="flex gap-3 text-[0.95rem] text-ink-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-[2px] bg-paper-2/70 p-5">
              <p className="kicker text-crimson">Specialised internship</p>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-2">
                Six months in your field of interest — real experience, applying
                your new skills in a real-world setting.
              </p>
            </div>
          </Reveal>

          {/* BYOB */}
          <Reveal delay={90} className="flex flex-col rounded-[2px] border border-line bg-ink p-8 text-paper sm:p-10">
            <span className="kicker text-crimson">For the entrepreneurs</span>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">
              BYOB — Build Your Own Business
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-white/75">
              An 8-month program for aspiring entrepreneurs and family-business
              enthusiasts, focused on building real ventures — with hands-on
              experience, mentorship and the resources to turn ideas into
              scalable businesses.
            </p>
            <ul className="mt-7 space-y-3 border-t border-white/15 pt-7">
              {BYOB.map((b) => (
                <li key={b} className="flex gap-3 text-[0.95rem] text-white/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-[2px] bg-white/5 p-5">
              <p className="kicker text-crimson">What you&rsquo;ll do</p>
              <ul className="mt-3 space-y-2">
                {BYOB_STEPS.map((s) => (
                  <li key={s} className="flex gap-3 text-[0.9rem] text-white/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <Recognition />

      <CalloutCta
        kicker="Your move"
        title={
          <>
            Start building the career you{" "}
            <span className="serif-em">want</span>.
          </>
        }
        lede="Talk to our team about the Career Bootcamp, BYOB and how the 75+ recruiter network opens doors."
        primary={{ label: "Request a callback", href: "/ug/request-callback" }}
        secondary={{ label: "Apply for 2027", href: CONTACT.applyHref }}
      />

      <SiteFooter />
    </main>
  );
}
