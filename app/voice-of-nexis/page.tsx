import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CalloutCta from "@/components/CalloutCta";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Voice of NEXIS — Brand Ambassador Program | Class XII Students",
  description:
    "Become a Voice of NEXIS. Represent NEXIS in your school, get 1:1 mentorship from the founders, earn a 10% scholarship and a letter of recommendation. Round 2 is live.",
};

const REACH = [
  { k: "2", l: "students per school" },
  { k: "50+", l: "schools" },
  { k: "150+", l: "districts" },
  { k: "100+", l: "young business leaders" },
];

const RESPONSIBILITIES = [
  "Be the face of NEXIS and its events within your school and social groups",
  "Bring in student leads for NEXIS programs and initiatives",
  "Promote NEXIS business challenges and workshops, online and offline",
  "Gain practical experience and build your résumé as you go",
];

const PERKS = [
  {
    t: "10% scholarship",
    d: "Selected ambassadors receive a 10% scholarship for the NEXIS 3-year UG program.",
  },
  {
    t: "1:1 founder mentorship",
    d: "Get mentored directly by the NEXIS founders as you represent the brand.",
  },
  {
    t: "Featured as a young leader",
    d: "A chance to be featured on NEXIS social media as a Young Business Leader, among 100+ peers.",
  },
  {
    t: "Exclusive access",
    d: "Access to exclusive paid workshops and hackathons run by NEXIS.",
  },
  {
    t: "Grand Launch recognition",
    d: "Special recognition for ambassadors at the NEXIS Grand Launch.",
  },
  {
    t: "Certificate & LOR",
    d: "A certificate and a personalised Letter of Recommendation from the founders to boost your CV.",
  },
];

export default function VoiceOfNexisPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Voice of NEXIS · Round 2 is live"
        title={
          <>
            Become a{" "}
            <span className="serif-em text-crimson">Voice of NEXIS</span>.
          </>
        }
        lede="An ambassador program built exclusively for Class XII students. Represent NEXIS in your school, get mentored by the founders, and build your résumé and network — before you've even joined."
        actions={
          <>
            <a href={CONTACT.applyHref} className="btn btn-crimson">
              Apply now
              <ArrowRight className="arrow" />
            </a>
            <a href="/ug/book-founder-connect" className="btn btn-ghost">
              Book a founder meet
              <ArrowUpRight className="arrow" />
            </a>
          </>
        }
      />

      {/* Reach */}
      <div className="border-y border-line bg-paper-2/50">
        <div className="shell grid grid-cols-2 divide-line sm:grid-cols-4 sm:divide-x">
          {REACH.map((s, i) => (
            <Reveal key={s.l} delay={i * 60} className="py-5 sm:py-7 sm:px-6 sm:first:pl-0">
              <p className="display text-[clamp(1.9rem,3vw,2.6rem)] text-crimson">
                {s.k}
              </p>
              <p className="mt-1 text-[0.82rem] text-ink-2">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <section className="shell py-8 sm:py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                The role
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2rem,4.4vw,3.2rem)]">
                Lead, represent,{" "}
                <span className="serif-em text-crimson">grow</span>.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink-2">
                As a Voice of NEXIS, you&rsquo;ll be the brand&rsquo;s presence in your
                school — and gain real, practical experience that starts building
                your profile from day one.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {RESPONSIBILITIES.map((r, i) => (
                <Reveal
                  key={r}
                  delay={i * 70}
                  className="flex gap-4 rounded-[2px] border border-line bg-paper p-5"
                >
                  <span className="section-index shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.98rem] leading-relaxed text-ink-2">
                    {r}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="border-t border-line bg-paper-2/50">
        <div className="shell py-8 sm:py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                What&rsquo;s in it for you
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
                More than a title on your{" "}
                <span className="serif-em text-crimson">CV</span>.
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {PERKS.map((p, i) => (
              <Reveal key={p.t} delay={(i % 3) * 80} className="bg-paper p-7 sm:p-8">
                <h3 className="font-serif text-xl leading-tight">{p.t}</h3>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-2">
                  {p.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CalloutCta
        kicker="Round 2 is live"
        title={
          <>
            Ready to be a Voice of{" "}
            <span className="serif-em">NEXIS</span>?
          </>
        }
        lede="Apply now, or book a founder meet to learn more about the ambassador program for Class XII students."
        primary={{ label: "Apply now", href: CONTACT.applyHref }}
        secondary={{ label: "Book a founder meet", href: "/ug/book-founder-connect" }}
      />

      <SiteFooter />
    </main>
  );
}
