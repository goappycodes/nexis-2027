import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CalloutCta from "@/components/CalloutCta";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Campus | NEXIS School of Business, Siliguri",
  description:
    "A modern campus in the heart of Siliguri — smart classrooms, workshop rooms, idea pods and social spaces, with 24/7 safety and student well-being built in.",
};

const FACILITIES = [
  {
    t: "Smart Classrooms",
    d: "Interactive digital boards, high-speed internet and cutting-edge audio-visual technology make learning truly immersive.",
    img: "/images/campus/apex-hall.jpg",
  },
  {
    t: "Workshop Room",
    d: "A space for hands-on learning, innovation and skill development — whether you're prototyping ideas or sharpening skills.",
    img: "/images/campus/legacy-hall.jpg",
  },
  {
    t: "Idea Pods",
    d: "Designed for collaboration, these pods inspire students to exchange ideas, debate strategies and refine concepts.",
    img: "/images/campus/tour8.jpg",
  },
  {
    t: "Seminar Room",
    d: "Perfect for guest lectures, talks, student discussions and events.",
    img: "/images/campus/tour9.jpg",
  },
  {
    t: "Recreation Zone",
    d: "A place to unwind, socialise and recharge between sessions.",
    img: "/images/campus/tour7.jpg",
  },
  {
    t: "Cafeteria & Social Zone",
    d: "Where great food meets great conversations.",
    img: "/images/campus/cafeteria.jpg",
  },
];

const SAFETY = [
  {
    t: "Secure by design",
    d: "24/7 security surveillance with CCTV and access-controlled entry across the campus.",
  },
  {
    t: "Health on hand",
    d: "On-campus medical facilities plus tie-ups with nearby hospitals for anything more serious.",
  },
  {
    t: "Mind & well-being",
    d: "Mental-wellness programs and counselling in collaboration with YourDOST.",
  },
  {
    t: "Emergency ready",
    d: "Clear emergency response systems so help is never far away.",
  },
];

const LIVING = [
  {
    t: "Hygiene & safety first",
    d: "Clean, secure, well-maintained accommodation options close to campus.",
  },
  {
    t: "24×7 student support",
    d: "Help at hand whenever students need it, day or night.",
  },
  {
    t: "Prime location benefits",
    d: "Stay minutes from campus, in the heart of Siliguri.",
  },
  {
    t: "Exclusive NEXIS privileges",
    d: "Student discounts and perks reserved for the NEXIS community.",
  },
];

export default function CampusPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Our Campus"
        title={
          <>
            Where innovation meets{" "}
            <span className="serif-em text-crimson">inspiration</span>.
          </>
        }
        lede="Nestled in the heart of Siliguri, the NEXIS campus is designed to inspire learning, innovation and collaboration. Modern classrooms, studios and vibrant student spaces — where future leaders are shaped."
        actions={
          <>
            <a href="/ug/book-campus-tour" className="btn btn-crimson">
              Book a campus tour
              <ArrowRight className="arrow" />
            </a>
            <a href={CONTACT.applyHref} className="btn btn-ghost">
              Apply now
              <ArrowUpRight className="arrow" />
            </a>
          </>
        }
      >
        <Reveal delay={260} className="relative aspect-[16/10] overflow-hidden rounded-[5px] bg-paper-2 lg:col-span-12 lg:aspect-[21/7]">
          <Image
            src="/images/campus/legacy-hall.jpg"
            alt="Students learning inside Legacy Hall at NEXIS"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-crimson">Inside NEXIS</p>
            <p className="mt-2 max-w-xl font-serif text-2xl leading-tight text-white sm:text-3xl">A working campus for presentations, workshops, team debates and the moments between them.</p>
          </div>
        </Reveal>
      </PageHero>

      {/* Tour info strip */}
      <div className="border-y border-line bg-paper-2/50">
        <div className="shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.95rem] text-ink-2">
            <span className="font-medium text-ink">Campus tours</span> ·{" "}
            {CONTACT.hours} · UG information session + guided tour
          </p>
          <a href="/ug/book-campus-tour" className="ulink text-[0.9rem] font-medium text-crimson">
            Register for a day @ NEXIS →
          </a>
        </div>
      </div>

      {/* Facilities */}
      <section className="shell py-8 sm:py-16 lg:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              A campus designed for excellence
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
              Every space, built to{" "}
              <span className="serif-em text-crimson">do</span>.
            </h2>
          </Reveal>
        </div>

        <div className="-mx-[var(--gutter)] mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-3 [scrollbar-width:none] sm:mt-16 md:mx-0 md:grid md:grid-cols-2 md:px-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 70} className="group flex w-[82vw] max-w-[330px] shrink-0 snap-start flex-col overflow-hidden rounded-[5px] border border-line bg-paper md:w-auto md:max-w-none">
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                <Image src={f.img} alt={f.t} fill sizes="(max-width: 768px) 82vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[0.58rem] font-semibold tracking-[0.14em] text-white backdrop-blur">0{i + 1}</span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-xl leading-tight">{f.t}</h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-2">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Safety & well-being — dark */}
      <section className="bg-ink text-paper">
        <div className="shell py-8 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <p className="kicker flex items-center gap-3 text-white/55">
                <span className="h-px w-8 bg-crimson" />
                Safety & well-being
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-5 text-[clamp(2rem,4.6vw,3.5rem)]">
                A campus that looks{" "}
                <span className="serif-em text-crimson">after you</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-px overflow-hidden rounded-[2px] border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {SAFETY.map((s, i) => (
              <Reveal key={s.t} delay={i * 80} className="bg-ink p-7 sm:p-8">
                <h3 className="font-serif text-lg leading-tight sm:text-xl">
                  {s.t}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-white/60">
                  {s.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Living spaces */}
      <section className="shell py-8 sm:py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Comfortable living spaces
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2rem,4.4vw,3.2rem)]">
                A place to live, close to it{" "}
                <span className="serif-em text-crimson">all</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink-2">
                NEXIS is an opt-in residential program. We help students who wish
                to live close to campus connect with secure, vetted accommodation
                — including our associated PGs: Sanskar PG, Jain PG (with separate
                wings for boys and girls) and Cinderella PG.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2">
              {LIVING.map((l, i) => (
                <Reveal key={l.t} delay={i * 80} className="bg-paper p-7 sm:p-8">
                  <h3 className="font-serif text-lg leading-tight sm:text-xl">
                    {l.t}
                  </h3>
                  <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-2">
                    {l.d}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CalloutCta
        kicker="Visit us"
        title={
          <>
            See the campus for{" "}
            <span className="serif-em">yourself</span>.
          </>
        }
        lede="Book a guided tour and an information session at our campus in the heart of Siliguri."
        primary={{ label: "Book a campus tour", href: "/ug/book-campus-tour" }}
        secondary={{ label: "Talk to admissions", href: "/ug/request-callback" }}
      />

      <SiteFooter />
    </main>
  );
}
