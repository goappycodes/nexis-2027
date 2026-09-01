import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";
import { AccentRule, CARD_LIGHT } from "@/components/editorial";
import { FEATURED_POSTS, ARCHIVE_POSTS, postUrl } from "@/lib/blog";
import { SITE_NAV, CONTACT } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { blogItemListSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "The NEXIS Journal — Stories on Business, Skills & Siliguri",
  description:
    "Essays, founder interviews and student stories from NEXIS School of Business — on building skills after Class 12, entrepreneurship, and the rise of Siliguri.",
  alternates: { canonical: "/blog" },
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fmt(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export default function BlogPage() {
  const [lead, ...rest] = FEATURED_POSTS;

  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />
      <JsonLd
        data={[
          blogItemListSchema([...FEATURED_POSTS, ...ARCHIVE_POSTS]),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "The NEXIS Journal", path: "/blog" },
          ]),
        ]}
      />

      <PageHero
        kicker="The NEXIS Journal"
        title={
          <>
            Stories, interviews &amp;{" "}
            <span className="serif-em text-crimson">field notes</span>
          </>
        }
        lede="Essays, founder conversations and student dispatches on building real skills after Class 12 — and on the city of Siliguri finding its feet as a business hub."
      />

      <section className="shell pb-16 sm:pb-24">
        {/* Lead story */}
        <Reveal className={`grid overflow-hidden md:grid-cols-2 ${CARD_LIGHT}`}>
          <AccentRule />
          <a href={postUrl(lead.slug)} target="_blank" rel="noreferrer" className="relative block aspect-video overflow-hidden bg-ink md:aspect-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lead.img} alt={lead.title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-premium hover:scale-105 md:object-cover" />
          </a>
          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
            <p className="flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-crimson">
              {lead.category}
              <span className="h-1 w-1 rounded-full bg-muted" />
              <span className="text-muted">{fmt(lead.date)}</span>
            </p>
            <h2 className="mt-4 font-serif text-2xl leading-tight sm:text-3xl">
              <a href={postUrl(lead.slug)} target="_blank" rel="noreferrer" className="transition-colors hover:text-crimson">
                {lead.title}
              </a>
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">{lead.excerpt}</p>
            <a href={postUrl(lead.slug)} target="_blank" rel="noreferrer" className="ulink mt-6 inline-flex w-fit items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-ink">
              Read the story
              <ArrowUpRight className="text-crimson" />
            </a>
          </div>
        </Reveal>

        {/* Featured grid */}
        <div className="-mx-[var(--gutter)] mt-6 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto overflow-y-hidden px-[var(--gutter)] pb-3 [scrollbar-width:none] sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70} className={`flex min-w-[84%] snap-center flex-col sm:min-w-0 ${CARD_LIGHT}`}>
              <AccentRule />
              <a href={postUrl(p.slug)} target="_blank" rel="noreferrer" className="relative block aspect-video overflow-hidden bg-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-premium hover:scale-105" />
              </a>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-crimson">
                  {p.category}
                  <span className="h-1 w-1 rounded-full bg-muted" />
                  <span className="text-muted">{fmt(p.date)}</span>
                </p>
                <h3 className="mt-2.5 font-serif text-[1.05rem] leading-tight">
                  <a href={postUrl(p.slug)} target="_blank" rel="noreferrer" className="transition-colors hover:text-crimson">
                    {p.title}
                  </a>
                </h3>
                <p className="mt-2 flex-1 text-[0.85rem] leading-relaxed text-ink-2">{p.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Archive */}
        <div className="mt-14 border-t border-line pt-10 sm:mt-20">
          <Reveal>
            <h2 className="font-serif text-2xl leading-tight">More from the archive</h2>
            <p className="mt-2 text-[0.92rem] text-muted">
              {ARCHIVE_POSTS.length + FEATURED_POSTS.length} articles and counting.
            </p>
          </Reveal>
          <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
            {ARCHIVE_POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i, 8) * 30}>
                <a
                  href={postUrl(p.slug)}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-baseline justify-between gap-4 border-b border-line-soft py-3.5"
                >
                  <span className="text-[0.92rem] leading-snug text-ink-2 transition-colors group-hover:text-crimson">
                    {p.title}
                  </span>
                  <span className="shrink-0 text-[0.72rem] tabular-nums text-muted">{fmt(p.date)}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
