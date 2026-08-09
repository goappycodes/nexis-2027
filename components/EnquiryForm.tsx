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

function Chevron() {
  return (
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
  );
}

function Select({
  label,
  options,
  required,
  defaultValue,
}: {
  label: string;
  options: string[];
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <Field label={label} required={required}>
      <div className="relative">
        <select
          required={required}
          defaultValue={defaultValue ?? ""}
          className={`${inputCls} appearance-none pr-10`}
        >
          <option value="" disabled>
            Select…
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <Chevron />
      </div>
    </Field>
  );
}

/** The shared UG enquiry / callback form. No backend is wired — on submit
    it routes to the thank-you page (mirrors the WordPress flow). */
export default function EnquiryForm({
  submitLabel = "Submit enquiry",
  defaultPurpose,
}: {
  submitLabel?: string;
  defaultPurpose?: string;
}) {
  const router = useRouter();
  const [slot, setSlot] = useState(FORM_OPTIONS.timeSlot[0]);
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
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Select label="Grade" options={FORM_OPTIONS.grade} required />
        <Field label="School">
          <input
            name="school"
            type="text"
            placeholder="School name"
            className={inputCls}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Select label="Board" options={FORM_OPTIONS.board} />
        <Select label="Stream" options={FORM_OPTIONS.stream} />
      </div>

      <Select
        label="Purpose of enquiry"
        options={FORM_OPTIONS.purpose}
        defaultValue={defaultPurpose}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred date of visit">
          <input name="date" type="date" className={inputCls} />
        </Field>
        <div>
          <span className={labelCls}>Preferred time slot</span>
          <div className="grid grid-cols-2 gap-2.5">
            {FORM_OPTIONS.timeSlot.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSlot(t)}
                aria-pressed={slot === t}
                className={`rounded-[2px] border px-3 py-3 text-[0.85rem] transition-colors ${
                  slot === t
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-ink-2 hover:border-ink"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn btn-crimson w-full justify-center disabled:opacity-70"
      >
        {submitting ? "Submitting…" : submitLabel}
        <ArrowRight className="arrow" />
      </button>

      <p className="text-[0.78rem] leading-relaxed text-muted">
        We use your details only to respond to this enquiry and to share our
        brochure over WhatsApp. No spam, and no sharing with third parties.
      </p>
    </form>
  );
}
