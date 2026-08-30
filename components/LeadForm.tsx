"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { FORM_OPTIONS } from "@/lib/content";
import { ArrowRight } from "./icons";

const inputCls =
  "min-w-0 w-full rounded-[2px] border border-line bg-paper px-3 py-3 text-[0.95rem] text-ink outline-none transition-colors focus:border-ink placeholder:text-muted sm:px-4";
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
    <label className="block min-w-0">
      <span className={labelCls}>
        {label}
        {required && <span className="text-crimson"> *</span>}
      </span>
      {children}
    </label>
  );
}

/** Short, conversion-focused lead form for the paid-ads landing page.
    Contact fields in two columns. Routes to /ug/thank-you on submit (no backend wired). */
export default function LeadForm({
  submitLabel = "Send my enquiry",
}: {
  submitLabel?: string;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    router.push("/ug/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-4">
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

        <Field label="Phone" required>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 …"
            className={inputCls}
          />
        </Field>

        <Field label="Alternate phone">
          <input
            name="altPhone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            className={inputCls}
          />
        </Field>

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

      </div>

      <Field label="Current grade" required>
        <div className="relative">
          <select
            name="grade"
            required
            defaultValue=""
            className={`${inputCls} appearance-none pr-10`}
          >
            <option value="" disabled>
              Select…
            </option>
            {FORM_OPTIONS.grade.map((g) => (
              <option key={g} value={g}>
                {g}
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

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-crimson w-full justify-center disabled:opacity-70"
      >
        {submitting ? "Submitting…" : submitLabel}
        <ArrowRight className="arrow" />
      </button>

    </form>
  );
}
