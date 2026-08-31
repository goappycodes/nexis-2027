import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FormLayout from "@/components/FormLayout";
import CampusAmbassadorForm from "@/components/CampusAmbassadorForm";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Become a Voice of NEXIS — Campus Ambassador Registration | NEXIS",
  description:
    "Apply to become a NEXIS Campus Ambassador. Represent NEXIS at your school, build leadership and communication skills, and join a community of student changemakers.",
  alternates: { canonical: "/voice-of-nexis/registration" },
};

const PERKS = [
  "Represent NEXIS at your school and lead its initiatives.",
  "Build real leadership, communication and organising skills.",
  "Earn certificates, goodies and a standout addition to your profile.",
  "Join a community of ambitious student changemakers across the region.",
];

export default function VoiceRegistrationPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <FormLayout
        kicker="Campus Ambassador"
        title={
          <>
            Become a <span className="serif-em text-crimson">Voice of NEXIS</span>
          </>
        }
        lede="The Voice of NEXIS programme puts students at the centre. Represent NEXIS at your school, lead its initiatives, and grow the skills that set you apart — while building a network that lasts."
        aside={
          <div className="rounded-[3px] border border-line bg-paper-2/50 p-6">
            <p className="kicker text-muted">Why join</p>
            <ul className="mt-4 space-y-3">
              {PERKS.map((p) => (
                <li key={p} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <CampusAmbassadorForm />
      </FormLayout>

      <SiteFooter />
    </main>
  );
}
