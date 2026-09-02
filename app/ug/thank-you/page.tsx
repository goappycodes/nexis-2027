import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thank You | NEXIS School of Business",
  description:
    "Thank you for your interest in the NEXIS three-year Undergraduate Program in Business Management. Our team will be in touch shortly.",
};

const HIGHLIGHTS = [
  "A future-ready curriculum with AI and tech woven through it",
  "30+ masterclasses each semester from founders and industry leaders",
  "A living campus of events, sport, clubs, real projects and internships",
  "Learn alongside the sharpest students in the region",
];

export default function ThankYouPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <section className="shell py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="m5 13 4 4L19 7" />
              </svg>
            </span>
          </Reveal>
          <Reveal delay={80}>
            <p className="kicker mt-7">Enquiry received</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="display balance mt-4 text-[clamp(2.6rem,6vw,4.6rem)]">
              Thank <span className="serif-em text-crimson">you</span>.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-2">
              Thank you for your interest in the NEXIS 3-Year Undergraduate
              Program in Business Management. Our team will connect with you
              shortly to understand your goals and answer your questions.
            </p>
          </Reveal>
        </div>

        <Reveal delay={100} className="mx-auto mt-10 max-w-4xl">
          <figure className="overflow-hidden rounded-[3px] border border-line bg-ink shadow-[0_28px_70px_-48px_rgba(11,12,16,0.8)]">
            <Image
              src="/images/campus/life-at-nexis.jpg"
              alt="A collage of student activities and events at NEXIS"
              width={1440}
              height={652}
              sizes="(max-width: 1023px) 100vw, 70vw"
              className="h-auto w-full"
            />
            <figcaption className="flex items-center gap-3 border-t border-white/10 px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:px-5">
              <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
              Campus in motion
            </figcaption>
          </figure>
        </Reveal>

        {/* Keep exploring */}
        <Reveal delay={120} className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-[2px] border border-line bg-paper p-6 shadow-[0_30px_70px_-50px_rgba(11,12,16,0.5)] sm:p-9">
            <p className="kicker text-crimson">While you wait</p>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="/ug" className="btn btn-crimson w-full justify-center sm:w-auto">
            Explore the UG program
            <ArrowRight className="arrow" />
          </a>
          <a href={CONTACT.brochureHref} className="btn btn-ghost w-full justify-center sm:w-auto">
            Download brochure
            <ArrowUpRight className="arrow" />
          </a>
          <a href={CONTACT.phoneHref} className="btn btn-ghost w-full justify-center sm:w-auto">
            Call {CONTACT.phone}
          </a>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
