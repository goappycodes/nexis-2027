"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { FORM_OPTIONS } from "@/lib/content";
import { ArrowRight } from "./icons";

const inputCls =
  "w-full rounded-[2px] border border-line bg-paper px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-ink placeholder:text-muted";
const labelCls = "mb-1.5 block text-[0.8rem] font-medium text-ink-2";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className={labelCls}>
        {label}
        {required && <span className="text-crimson"> *</span>}
      </span>
      {children}
    </label>
  );
}

/** General contact form. Routes to the thank-you page on submit. */
export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    router.push("/ug/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Full name" required>
        <input
          name="fullName"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputCls}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={inputCls}
          />
        </Field>
        <Field label="Mobile number" required>
          <input
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 …"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="What is this about?" required>
        <div className="relative">
          <select
            name="query"
            required
            defaultValue=""
            className={`${inputCls} appearance-none pr-10`}
          >
            <option value="" disabled>
              Select…
            </option>
            {FORM_OPTIONS.query.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Field>

      <Field label="Message" required>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className={`${inputCls} resize-none`}
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-crimson w-full justify-center disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Send message"}
        <ArrowRight className="arrow" />
      </button>

      <p className="text-[0.78rem] leading-relaxed text-muted">
        We use your details only to respond to this enquiry and to share our
        brochure over WhatsApp. No spam, and no sharing with third parties.
      </p>
    </form>
  );
}
