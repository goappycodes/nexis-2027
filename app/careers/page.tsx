import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, ArrowRight } from "@/components/icons";
import { AccentRule, CARD_LIGHT } from "@/components/editorial";
import { VACANCIES, postUrl } from "@/lib/blog";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers at NEXIS — Build the Future of Business Education",
  description:
    "Join the team building India's most practical business school in Siliguri. Current openings across student engagement, marketing, the founder's office and academics.",
  alternates: { canonical: "/careers" },
};

const CAREERS_EMAIL = "careerservices@nexisschool.com";

export default function CareersPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <PageHero
        kicker="Careers"
        title={
          <>
            Help build a new kind of{" "}
            <span className="serif-em text-crimson">business school</span>
          </>
        }
        lede="NEXIS is young, fast and unapologetically hands-on. If you want to shape how the next generation learns business — and do real work from day one — we'd love to meet you."
        actions={
          <a
            href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("General application — NEXIS")}`}
            className="btn btn-crimson"
          >
            Send a general application
            <ArrowRight className="arrow" />
          </a>
        }
      />

      <section className="shell pb-16 sm:pb-24">
        <Reveal>
          <div className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
            <h2 className="font-serif text-2xl leading-tight">Open roles</h2>
            <span className="text-[0.82rem] text-muted">{VACANCIES.length} positions</span>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:gap-5 lg:grid-cols-2">
          {VACANCIES.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 2) * 80} className={`flex flex-col p-6 sm:p-8 ${CARD_LIGHT}`}>
              <AccentRule />
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-crimson/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-crimson">
                  {v.type.split(" · ")[0]}
                </span>
                <span className="text-[0.78rem] text-muted">{v.location}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl leading-tight">{v.title}</h3>
              <p className="mt-1 text-[0.76rem] uppercase tracking-[0.1em] text-muted">{v.type}</p>
              <p className="mt-4 flex-1 text-[0.9rem] leading-relaxed text-ink-2">{v.summary}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
                <a href={postUrl(v.slug)} target="_blank" rel="noreferrer" className="ulink inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-ink">
                  View full role
                  <ArrowUpRight className="text-crimson" />
                </a>
                <a
                  href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application — ${v.title}`)}`}
                  className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-crimson"
                >
                  Apply
                  <ArrowRight className="text-crimson" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-[4px] border border-line bg-paper-2/50 p-7 text-center sm:p-10">
          <h2 className="display text-[clamp(1.4rem,3vw,2.1rem)]">
            Don&rsquo;t see your role?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-2">
            We&rsquo;re always looking for sharp, driven people. Tell us what you do
            and how you&rsquo;d add to NEXIS.
          </p>
          <a
            href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent("General application — NEXIS")}`}
            className="btn btn-crimson mt-6"
          >
            Write to us
            <ArrowRight className="arrow" />
          </a>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
