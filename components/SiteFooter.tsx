import Image from "next/image";
import { NAV_LINKS, BATCH } from "@/lib/content";

const PROGRAMS = [
  { label: "UG in Business Management", href: "#program" },
  { label: "PG in Business Management", href: "#" },
  { label: "School of AI", href: "#" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Image
              src="/brand/nexis-logo-white.png"
              alt="NEXIS"
              width={400}
              height={105}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-sm font-serif text-2xl leading-tight text-white/90">
              India&rsquo;s most practical
              <span className="serif-em text-crimson"> business school.</span>
            </p>
            <p className="mt-5 max-w-sm text-[0.9rem] leading-relaxed text-white/55">
              A next-gen campus in {BATCH.city} where students learn business by
              building it — mentored by founders and CXOs from day one.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <p className="kicker text-white/50">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="ulink text-[0.92rem] text-white/80">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-4">
            <p className="kicker text-white/50">Programs</p>
            <ul className="mt-5 space-y-3">
              {PROGRAMS.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="ulink text-[0.92rem] text-white/80">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#apply" className="btn btn-crimson mt-8">
              Apply for {BATCH.year}
            </a>
          </div>
        </div>

        {/* Compliance + legal */}
        <div className="mt-16 border-t border-white/15 pt-8">
          <p className="max-w-4xl text-[0.78rem] leading-relaxed text-white/45">
            NEXIS is a private school of business and a skilling institution
            operating as a Training Body accredited by MEPSC — an awarding body
            recognised by NCVET — offering NSQF-aligned certifications in
            business-management vocational courses. NEXIS is not a college and
            does not confer any degrees.
          </p>
          <div className="mt-6 flex flex-col justify-between gap-4 text-[0.8rem] text-white/50 sm:flex-row sm:items-center">
            <p>
              &copy; {BATCH.year} NEXIS School of Business · {BATCH.city}, India
            </p>
            <div className="flex gap-6">
              <a href="#" className="ulink">
                Instagram
              </a>
              <a href="#" className="ulink">
                LinkedIn
              </a>
              <a href="#" className="ulink">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
