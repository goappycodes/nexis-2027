import type { ReactNode } from "react";
import Image from "next/image";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import CalloutCta from "./CalloutCta";
import Reveal from "./Reveal";
import { ArrowRight, ArrowUpRight } from "./icons";
import { CONTACT } from "@/lib/content";

export const UG_DETAIL_NAV = [
  { label: "Highlights", href: "/ug/highlights" },
  { label: "Curriculum", href: "/ug/curriculum" },
  { label: "Admissions & fees", href: "/ug/admissions-fees" },
  { label: "Career prospects", href: "/ug/career-prospect" },
  { label: "Student life", href: "/ug/student-life" },
  { label: "Our batches", href: "/ug/founding-batch" },
];

export type UgFact = { label: string; value: string; note?: string };

export default function UgDetailShell({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
  facts,
  children,
  ctaTitle,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  image: string;
  imageAlt: string;
  facts?: UgFact[];
  children: ReactNode;
  ctaTitle: ReactNode;
}) {
  return (
    <main className="relative font-poppins lp-poppins">
      <SiteNav applyHref={CONTACT.applyHref} logoHref="/" branding="2027" />

      <section className="relative isolate overflow-hidden bg-[#08080a] text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#08080a] via-transparent to-black/25" />

        <div className="shell grid min-h-[620px] items-end gap-10 pb-10 pt-20 sm:min-h-[660px] sm:pb-14 lg:grid-cols-12 lg:pb-16 lg:pt-28">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-crimson">
                <span className="h-px w-8 bg-crimson" />
                {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display balance mt-5 max-w-4xl text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.98] text-white">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-white/72 sm:text-[1.08rem]">
                {lede}
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={CONTACT.applyHref} className="btn btn-crimson justify-center sm:justify-start">
                Apply for 2027
                <ArrowRight className="arrow" />
              </a>
              <a href="/ug/book-campus-tour" className="btn justify-center border-white/25 bg-black/25 text-white backdrop-blur sm:justify-start">
                Take a campus tour
                <ArrowUpRight className="arrow" />
              </a>
            </Reveal>
          </div>

          {facts && (
            <Reveal delay={260} className="grid grid-cols-2 gap-px overflow-hidden rounded-[5px] border border-white/15 bg-white/15 backdrop-blur-md lg:col-span-4">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-black/55 p-4 sm:p-5">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-crimson">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-serif text-xl leading-none text-white sm:text-2xl">
                    {fact.value}
                  </p>
                  {fact.note && <p className="mt-1 text-[0.72rem] leading-snug text-white/45">{fact.note}</p>}
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      <nav aria-label="UG programme pages" className="sticky top-0 z-30 border-y border-line bg-paper/95 backdrop-blur-md">
        <div className="shell flex snap-x gap-6 overflow-x-auto py-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {UG_DETAIL_NAV.map((item) => (
            <a key={item.href} href={item.href} className="shrink-0 snap-start text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-ink-2 transition-colors hover:text-crimson">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {children}

      <CalloutCta
        kicker="Admissions open · Batch of 2027–2030"
        title={ctaTitle}
        lede="Come see the campus, meet the people behind the programme and decide if this is where you want to build your next three years."
        primary={{ label: "Start your application", href: CONTACT.applyHref }}
        secondary={{ label: "Book a campus tour", href: "/ug/book-campus-tour" }}
      />
      <SiteFooter />
    </main>
  );
}
