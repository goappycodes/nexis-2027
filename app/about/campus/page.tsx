import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CalloutCta from "@/components/CalloutCta";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT, CAMPUS_IMAGES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Campus | NEXIS School of Business, Siliguri",
  description:
    "A modern campus in the heart of Siliguri — smart classrooms, workshop rooms, idea pods and social spaces, with 24/7 safety and student well-being built in.",
};

const FACILITIES = [
  {
    t: "Smart Classrooms",
    d: "Interactive digital boards, high-speed internet and cutting-edge audio-visual technology make learning truly immersive.",
  },
  {
    t: "Workshop Room",
    d: "A space for hands-on learning, innovation and skill development — whether you're prototyping ideas or sharpening skills.",
  },
  {
    t: "Idea Pods",
    d: "Designed for collaboration, these pods inspire students to exchange ideas, debate strategies and refine concepts.",
  },
  {
    t: "Seminar Room",
    d: "Perfect for guest lectures, talks, student discussions and events.",
  },
  {
    t: "Recreation Zone",
    d: "A place to unwind, socialise and recharge between sessions.",
  },
  {
    t: "Cafeteria & Social Zone",
    d: "Where great food meets great conversations.",
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
      />

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
      <section className="shell py-12 sm:py-20 lg:py-28">
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

        <div className="mt-10 sm:mt-16 grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 80} className="bg-paper p-8 sm:p-9">
              <h3 className="font-serif text-xl leading-tight">{f.t}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">
                {f.d}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {CAMPUS_IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 60}
              className="group relative aspect-[4/3] overflow-hidden rounded-[2px] bg-paper-2"
            >
              <Image
                src={img.src}
                alt={img.cap}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 flex items-center gap-2 p-4 text-[0.8rem] font-medium text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                {img.cap}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Safety & well-being — dark */}
      <section className="bg-ink text-paper">
        <div className="shell py-12 sm:py-20 lg:py-28">
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
      <section className="shell py-12 sm:py-20 lg:py-28">
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
