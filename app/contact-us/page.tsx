import type { Metadata } from "next";
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
        lede="Questions about the program, admissions, careers or a partnership? Fill out the form and the right team will reach out as soon as possible."
        aside={<ContactDetails />}
      >
        <ContactForm />
      </FormLayout>

      <SiteFooter />
    </main>
  );
}
