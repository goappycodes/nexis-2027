import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CalloutCta from "@/components/CalloutCta";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recognition & Pathways | NEXIS School of Business",
  description:
    "NEXIS is NSQF-aligned and recognised through NCVET via MEPSC, under the Ministry of Skill Development & Entrepreneurship, and recognised under DPIIT's Startup India. Trusted, recognised, future-ready.",
};

const AFFILIATIONS = [
  {
    src: "/images/logos/skill-ministry.png",
    name: "Ministry of Skill Development & Entrepreneurship",
    desc: "The Government of India ministry driving the national skilling mission.",
  },
  {
    src: "/images/logos/mepsc-white.png",
    name: "MEPSC",
    desc: "The Sector Skill Council that accredits NEXIS as a Training Body.",
  },
  {
    src: "/images/logos/ncvet.png",
    name: "NCVET",
    desc: "The national regulator that recognises MEPSC as an awarding body.",
  },
  {
    src: "/images/logos/startupindia-white.png",
    name: "DPIIT · Startup India",
    desc: "Recognised under the Startup India initiative, Ministry of Commerce & Industry.",
  },
];

const PATHWAY_PARTNERS = [
  { name: "JAIN (Deemed-to-be University)", program: "Online BBA" },
  { name: "Manipal University", program: "Online BBA" },
  { name: "NMIMS Global", program: "Online BBA" },
];

const FEATURES = [
  {
    t: "Choose from diverse degree options",
    d: "Pair your NEXIS certification with a UGC-recognised online BBA from a university that suits your goals.",
  },
  {
    t: "Meets eligibility criteria",
    d: "A UGC-recognised degree keeps you eligible for jobs across India, an MBA, and further study up to PhD.",
  },
  {
    t: "Accepted by global universities",
    d: "Recognised degrees are accepted by universities worldwide, subject to each institution's own criteria.",
  },
];

const FAQS = [
  {
    q: "What are NEXIS's recognitions?",
    a: "The NEXIS program aligns with the National Skills Qualification Framework (NSQF), with recognition through NCVET via its MEPSC affiliation, under the Ministry of Skill Development & Entrepreneurship. NEXIS is also recognised under DPIIT's Startup India.",
  },
  {
    q: "Does NEXIS offer a degree?",
    a: "No. NEXIS itself does not offer a degree or diploma — it provides a nationally recognised, NSQF-aligned Certification in Business Management. Students who want a degree can pursue a UGC-recognised BBA independently, in parallel.",
  },
  {
    q: "Why doesn't NEXIS offer its own degree?",
    a: "NEXIS is built to bridge the gap between degrees and real-world readiness. The focus is industry-ready skills you can use from day one, not theory memorised for an exam.",
  },
  {
    q: "Can I pursue higher education later?",
    a: "Yes. A UGC-recognised BBA meets the eligibility for an MBA, competitive exams (CAT, GMAT, UPSC) and professional certifications such as CPA, CFA, ACCA, CMA and FRM.",
  },
];

export default function RecognitionPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Recognition & Pathways"
        title={
          <>
            Trusted. Recognised.{" "}
            <span className="serif-em text-crimson">Future-ready</span>.
          </>
        }
        lede="NEXIS is a skilling institution whose program is aligned to the NSQF and recognised through India's national skilling framework — with clear pathways to a recognised degree if you want one."
        actions={
          <>
            <a href={CONTACT.applyHref} className="btn btn-crimson">
              Apply now
              <ArrowRight className="arrow" />
            </a>
            <a href="/ug/request-callback" className="btn btn-ghost">
              Ask a question
              <ArrowUpRight className="arrow" />
            </a>
          </>
        }
      />

      {/* Affiliations */}
      <section className="shell py-12 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="kicker flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" />
              Recognitions & affiliations
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display balance mt-6 text-[clamp(2rem,4.6vw,3.5rem)]">
              Backed by the bodies that{" "}
              <span className="serif-em text-crimson">matter</span>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2">
          {AFFILIATIONS.map((a, i) => (
            <Reveal key={a.name} delay={(i % 2) * 80} className="bg-paper p-8 sm:p-10">
              <div className="flex h-12 items-center">
                {/* white logos, shown dark-on-light */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.src}
                  alt={a.name}
                  className="h-10 w-auto max-w-[170px] object-contain object-left opacity-85 [filter:brightness(0)]"
                />
              </div>
              <h3 className="mt-6 font-serif text-lg leading-tight sm:text-xl">
                {a.name}
              </h3>
              <p className="mt-3 text-[0.94rem] leading-relaxed text-ink-2">
                {a.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 max-w-3xl text-[0.95rem] leading-relaxed text-muted">
          <p>
            In short: NEXIS is a Training Body accredited by{" "}
            <span className="font-medium text-ink-2">MEPSC</span> — an awarding
            body recognised by{" "}
            <span className="font-medium text-ink-2">NCVET</span> — offering an{" "}
            <span className="font-medium text-ink-2">NSQF-aligned</span>{" "}
            Certification in Business Management. NEXIS does not confer degrees.
          </p>
        </Reveal>
      </section>

      {/* Degree pathways */}
      <section className="border-t border-line bg-paper-2/50">
        <div className="shell py-12 sm:py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kicker flex items-center gap-3">
                  <span className="h-px w-8 bg-crimson" />
                  Degree pathways
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display balance mt-6 text-[clamp(2rem,4.4vw,3.2rem)]">
                  Want a degree too? Add one in{" "}
                  <span className="serif-em text-crimson">parallel</span>.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-ink-2">
                  Many students pair their NEXIS certification with a UGC-recognised
                  online BBA — so they graduate with real, industry-ready skills
                  and a recognised degree. These are optional, student-chosen
                  pathways.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-md rounded-[2px] border border-line bg-paper p-4 text-[0.85rem] leading-relaxed text-muted">
                  Please note: NEXIS does not award the degree and is not a
                  partner to any of these universities. Students enrol
                  independently, based on their own choice.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-3 lg:mt-1">
                {PATHWAY_PARTNERS.map((p, i) => (
                  <Reveal
                    key={p.name}
                    delay={i * 80}
                    className="rounded-[2px] border border-line bg-paper p-6"
                  >
                    <p className="kicker text-crimson">{p.program}</p>
                    <h3 className="mt-4 font-serif text-lg leading-tight">
                      {p.name}
                    </h3>
                  </Reveal>
                ))}
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {FEATURES.map((f, i) => (
                  <Reveal
                    key={f.t}
                    delay={i * 80}
                    className="rounded-[2px] border border-line bg-paper p-6"
                  >
                    <h3 className="font-serif text-base leading-tight">{f.t}</h3>
                    <p className="mt-3 text-[0.88rem] leading-relaxed text-ink-2">
                      {f.d}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="shell py-12 sm:py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="kicker flex items-center gap-3">
                <span className="h-px w-8 bg-crimson" />
                Questions
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display balance mt-6 text-[clamp(2rem,4.2vw,3rem)]">
                The honest{" "}
                <span className="serif-em text-crimson">details</span>.
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
        kicker="Admissions open"
        title={
          <>
            A recognised path to a real{" "}
            <span className="serif-em">career</span>.
          </>
        }
        lede="Talk to our team about recognition, degree pathways and what you'll actually earn at NEXIS."
        primary={{ label: "Apply now", href: CONTACT.applyHref }}
        secondary={{ label: "Request a callback", href: "/ug/request-callback" }}
      />

      <SiteFooter />
    </main>
  );
}
