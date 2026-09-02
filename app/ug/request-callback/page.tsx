import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FormLayout from "@/components/FormLayout";
import EnquiryForm from "@/components/EnquiryForm";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Request a Callback | NEXIS School of Business",
  description:
    "Share your details and the NEXIS admissions team will call you back with personalised guidance on admissions, curriculum and career opportunities.",
};

const POINTS = [
  "A callback at a time that works for you",
  "Guidance on admissions, curriculum and career outcomes",
  "Clear answers on fees, scholarships and financing",
];

export default function RequestCallbackPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <FormLayout
        kicker="Request a Callback"
        title={
          <>
            We&rsquo;ll call <span className="serif-em text-crimson">you</span>.
          </>
        }
        lede="Share your details and our admissions team will call you back with personalised guidance on admissions, curriculum and career opportunities."
        aside={
          <div className="space-y-7">
            <figure className="flex items-center gap-4 rounded-[3px] border border-line bg-paper p-4 shadow-[0_24px_60px_-44px_rgba(11,12,16,0.7)] sm:p-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-line bg-paper-2">
                <Image
                  src="/images/counselling/moira-priya-headshot.png"
                  alt="Ms. Moira Priya Devi, Counselling Head"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <figcaption>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-crimson">
                  Admissions guidance
                </p>
                <p className="mt-1 font-serif text-lg leading-tight text-ink">
                  Ms. Moira Priya Devi
                </p>
                <p className="mt-1 text-[0.82rem] text-muted">Counselling Head</p>
              </figcaption>
            </figure>
            <ul className="space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-[0.9rem] text-muted">
              Or call us directly on{" "}
              <a href={CONTACT.phoneHref} className="ulink font-medium text-ink-2">
                {CONTACT.phone}
              </a>
              .
            </p>
          </div>
        }
      >
        <EnquiryForm submitLabel="Request callback" defaultPurpose="Admission Enquiry" />
      </FormLayout>

      <SiteFooter />
    </main>
  );
}
