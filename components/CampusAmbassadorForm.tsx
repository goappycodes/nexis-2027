"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
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

/** The "Voice of NEXIS" Campus-Ambassador application. Mirrors the live
    Contact Form 7 fields. No backend is wired — on submit it routes to the
    thank-you page (same pattern as the other NEXIS forms). */
export default function CampusAmbassadorForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setSubmitting(true);
    router.push("/ug/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" required>
          <input name="first_name" type="text" required autoComplete="given-name" placeholder="E.g. John" className={inputCls} />
        </Field>
        <Field label="Last name" required>
          <input name="last_name" type="text" required autoComplete="family-name" placeholder="E.g. Smith" className={inputCls} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Mobile number" required>
          <input name="mobile_number" type="tel" required autoComplete="tel" placeholder="E.g. 98765 43210" className={inputCls} />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required autoComplete="email" placeholder="you@email.com" className={inputCls} />
        </Field>
      </div>

      <Field label="School name" required>
        <input name="school_name" type="text" required placeholder="Your school" className={inputCls} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Class" required>
          <input name="cf_class" type="text" required placeholder="E.g. Class 11" className={inputCls} />
        </Field>
        <Field label="Stream" required>
          <input name="cf_stream" type="text" required placeholder="E.g. Commerce" className={inputCls} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Instagram ID" required>
          <input name="cf_instagram_id" type="text" required placeholder="@yourhandle" className={inputCls} />
        </Field>
        <Field label="Address" required>
          <input name="address" type="text" required placeholder="E.g. 123 Main Street" className={inputCls} />
        </Field>
      </div>

      <Field label="Upload your image">
        <input
          name="picture"
          type="file"
          accept="image/jpeg,image/png,image/jpg"
          className="w-full rounded-[2px] border border-line bg-paper px-4 py-2.5 text-[0.9rem] text-ink-2 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-ink file:px-4 file:py-1.5 file:text-[0.8rem] file:text-paper hover:file:bg-crimson"
        />
      </Field>

      <label className="flex cursor-pointer gap-3 rounded-[2px] border border-line bg-paper-2/40 p-4">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-crimson"
        />
        <span className="text-[0.82rem] leading-relaxed text-ink-2">
          I accept the role of NEXIS Campus Ambassador and commit to promoting
          its initiatives positively within my school. I will ensure accurate
          communication, confidentiality, and alignment with NEXIS values while
          following all guidelines.
          <span className="text-crimson"> *</span>
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-crimson w-full justify-center disabled:opacity-70"
      >
        {submitting ? "Submitting…" : "Submit application"}
        <ArrowRight className="arrow" />
      </button>
    </form>
  );
}
