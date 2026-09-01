import type { Metadata } from "next";
import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import FormLayout from "@/components/FormLayout";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import { SITE_NAV, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us | NEXIS School of Business",
  description:
    "Get in touch with NEXIS School of Business in Siliguri — admissions, careers, partnerships or general enquiries. Call, WhatsApp, email or send us a note.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <SiteNav links={SITE_NAV} applyHref={CONTACT.applyHref} logoHref="/" />

      <FormLayout
        kicker="Contact"
        title={
          <>
            Let&rsquo;s <span className="serif-em text-crimson">talk</span>.
          </>
        }
        lede="Questions about the programme, admissions, careers or a partnership? Tell us what you need and the right NEXIS team in Siliguri will pick up the conversation."
        aside={
          <div className="space-y-9">
            <figure className="overflow-hidden rounded-[5px] border border-line bg-paper">
              <div className="relative aspect-[16/10] bg-paper-2">
                <Image
                  src="/images/campus/tour6.jpg"
                  alt="The reception at the NEXIS campus in Siliguri"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center gap-2 border-t border-line px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-ink-2">
                <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                Come see NEXIS in person
              </figcaption>
            </figure>
            <ContactDetails />
          </div>
        }
      >
        <ContactForm />
      </FormLayout>

      <SiteFooter />
    </main>
  );
}
