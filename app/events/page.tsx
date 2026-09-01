import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FormLayout from "@/components/FormLayout";
import EnquiryForm from "@/components/EnquiryForm";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events at NEXIS | Campus Tours, Masterclasses & More",
  description:
    "Experience NEXIS in person — day visits and information sessions, founder masterclasses, startup weekenders, hackathons and campus fests. Register for an upcoming session.",
};

const FORMATS = [
  {
    t: "Day @ NEXIS",
    tag: "Campus tour + info session",
    d: "A guided campus tour and a UG information session with the admissions team — the best way to see NEXIS for yourself.",
    href: "/ug/book-campus-tour",
    cta: "Book a tour",
    img: "/images/campus/tour7.jpg",
  },
  {
    t: "Founder Masterclass",
    tag: "Learn from operators",
    d: "Sit in on a session with a founder or CXO and hear how modern businesses are actually built and scaled.",
    href: "/ug/book-founder-connect",
    cta: "Meet a founder",
    img: "/images/ug/highlight-faculty.jpg",
  },
  {
    t: "BizNEX & PitchTank",
    tag: "Compete",
    d: "Business challenges and pitch battles where students turn ideas into ventures in front of a live panel.",
    href: "/ug/request-callback",
    cta: "Enquire",
    img: "/wp-media/2025/03/stage1.jpg",
  },
  {
    t: "Startup Weekender",
    tag: "Build in 48 hours",
    d: "An intense weekend where teams go from idea to prototype to pitch — the NEXIS method, condensed.",
    href: "/ug/request-callback",
    cta: "Enquire",
    img: "/images/campus/tour9.jpg",
  },
  {
    t: "Hackathons",
    tag: "Ship something",
    d: "AI and business hackathons where students build real tools and solve real problems, fast.",
    href: "/ug/request-callback",
    cta: "Enquire",
    img: "/images/ug/learn-ai.jpg",
  },
  {
    t: "Fests & Cultural Nights",
    tag: "Celebrate",
    d: "Freshers, musical nights, Diwali and more — the moments that turn a cohort into a community.",
    href: "/ug/student-life",
    cta: "See life at NEXIS",
    img: "/images/ug/day-houses.jpg",
  },
];

export default function EventsPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Events"
        title={
          <>
            Catch a glimpse of life at{" "}
            <span className="serif-em text-crimson">NEXIS</span>.
          </>
        }
        lede="From day visits and founder masterclasses to startup weekenders, hackathons and fests — here's how to experience NEXIS in person."
        actions={
          <>
            <a href="/ug/book-campus-tour" className="btn btn-crimson">
              Book a campus tour
              <ArrowRight className="arrow" />
            </a>
            <a href="#register" className="btn btn-ghost">
              Register for a session
              <ArrowUpRight className="arrow" />
            </a>
          </>
        }
      >
        <Reveal delay={260} className="group relative aspect-[16/10] overflow-hidden rounded-[5px] bg-paper-2 lg:col-span-12 lg:aspect-[21/7]">
          <Image
            src="/wp-media/2025/03/stage1.jpg"
            alt="A live student pitch event at NEXIS"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 sm:p-7">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-crimson">Inside the room</p>
              <p className="mt-2 max-w-lg font-serif text-2xl leading-tight text-white sm:text-3xl">Pitch nights, build sprints and campus celebrations—with students at the centre.</p>
            </div>
            <span className="hidden rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[0.68rem] uppercase tracking-[0.12em] text-white/75 backdrop-blur sm:block">Siliguri · On campus</span>
          </div>
        </Reveal>
      </PageHero>

      {/* Formats */}
      <section className="shell py-8 sm:py-16 lg:py-22">
        <div className="max-w-3xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              What&rsquo;s on
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
              Ways to experience{" "}
              <span className="serif-em text-crimson">NEXIS</span>.
            </h2>
          </Reveal>
        </div>

        <div className="-mx-[var(--gutter)] mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-3 [scrollbar-width:none] sm:mt-16 md:mx-0 md:grid md:grid-cols-2 md:px-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {FORMATS.map((f, i) => (
            <Reveal
              key={f.t}
              delay={(i % 3) * 80}
              className="lift group flex w-[82vw] max-w-[330px] shrink-0 snap-start flex-col overflow-hidden rounded-[5px] border border-line bg-paper md:w-auto md:max-w-none"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                <Image
                  src={f.img}
                  alt={f.t}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[0.58rem] font-semibold tracking-[0.14em] text-white backdrop-blur">0{i + 1}</span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <span className="kicker text-crimson">{f.tag}</span>
                <h3 className="mt-4 font-serif text-xl leading-tight sm:text-2xl">
                  {f.t}
                </h3>
                <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-ink-2">
                  {f.d}
                </p>
                <a
                  href={f.href}
                  className="ulink mt-5 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-ink"
                >
                  {f.cta}
                  <ArrowRight className="text-[0.9em]" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Register */}
      <div id="register" className="scroll-mt-24 border-t border-line bg-paper-2/50">
        <FormLayout
          headingLevel="h2"
          kicker="Register"
          title={
            <>
              Save your <span className="serif-em text-crimson">spot</span>.
            </>
          }
          lede="Tell us a little about yourself and we'll get you registered for an upcoming session — a campus tour, an information session, or the next big event on the calendar."
          aside={
            <p className="text-[0.9rem] text-muted">
              Prefer to talk? Call{" "}
              <a href={CONTACT.phoneHref} className="ulink font-medium text-ink-2">
                {CONTACT.phone}
              </a>
              , {CONTACT.hours}.
            </p>
          }
        >
          <EnquiryForm submitLabel="Register now" defaultPurpose="Campus Visit" />
        </FormLayout>
      </div>

      <SiteFooter />
    </main>
  );
}
