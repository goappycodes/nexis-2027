import { CONTACT } from "@/lib/content";

/** Address / phone / email / hours / social block. Used on the contact
    page and as the aside on form pages. */
export default function ContactDetails() {
  return (
    <div className="space-y-7">
      <div>
        <p className="kicker text-crimson">Visit</p>
        <address className="mt-3 not-italic text-[0.95rem] leading-relaxed text-ink-2">
          {CONTACT.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className="mt-2 text-[0.85rem] text-muted">{CONTACT.hours}</p>
      </div>

      <div>
        <p className="kicker text-crimson">Call</p>
        <p className="mt-3 text-[0.95rem] text-ink-2">
          <a href={CONTACT.phoneHref} className="ulink font-medium">
            {CONTACT.phone}
          </a>
        </p>
        <p className="mt-1 text-[0.85rem] text-muted">
          <a href={CONTACT.whatsapp} className="ulink">
            Chat on WhatsApp
          </a>
        </p>
      </div>

      <div>
        <p className="kicker text-crimson">Write</p>
        <ul className="mt-3 space-y-1.5 text-[0.95rem] text-ink-2">
          {CONTACT.emails.map((e) => (
            <li key={e.value}>
              <span className="text-muted">{e.label} · </span>
              <a href={`mailto:${e.value}`} className="ulink">
                {e.value}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 pt-1 text-[0.85rem]">
        {CONTACT.socials.map((s) => (
          <a key={s.label} href={s.href} className="ulink text-ink-2">
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
