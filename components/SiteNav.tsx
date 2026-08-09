"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE_NAV, BATCH, type NavItem } from "@/lib/content";
import { ArrowRight } from "./icons";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function SiteNav({
  links = SITE_NAV,
  applyHref = "#apply",
  logoHref = "#top",
}: {
  links?: NavItem[];
  applyHref?: string;
  logoHref?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Announcement strip */}
      <div className="relative z-[60] bg-ink text-paper">
        <div className="shell flex items-center justify-center gap-3 py-2 text-center text-[0.72rem] tracking-[0.14em] uppercase">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson" />
          <span className="opacity-90">
            Admissions open · {BATCH.cohort} · Starts {BATCH.starts}
          </span>
        </div>
      </div>

      {/* Nav */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-paper/85 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="shell flex items-center justify-between py-4">
          <a href={logoHref} className="flex items-center gap-3" aria-label="NEXIS home">
            <Image
              src="/brand/nexis-logo-dark.png"
              alt="NEXIS"
              width={254}
              height={66}
              priority
              className="h-7 w-auto"
            />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button
                    className="ulink inline-flex items-center gap-1 text-[0.82rem] font-medium text-ink-2"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <Chevron className="h-3.5 w-3.5 text-muted transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  {/* Dropdown — CSS hover/focus, with a pt-4 hover bridge */}
                  <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                    <div className="min-w-[240px] rounded-[2px] border border-line bg-paper p-2 shadow-[0_24px_60px_-24px_rgba(11,12,16,0.4)]">
                      {item.children.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          className="block rounded-[2px] px-3.5 py-2.5 text-[0.85rem] text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="ulink text-[0.82rem] font-medium text-ink-2"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <a href={applyHref} className="btn btn-crimson hidden sm:inline-flex">
              Apply for {BATCH.year}
              <ArrowRight className="arrow" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-line"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className="relative flex h-3 w-4 flex-col justify-between">
                <span
                  className={`h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-ink transition-opacity duration-300 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                    open ? "-translate-y-[5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-paper px-8 pb-12 pt-10 shadow-2xl transition-transform duration-500 ease-premium ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 pt-8">
            {links.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <p className="kicker mb-2">{item.label}</p>
                  <div className="flex flex-col">
                    {item.children.map((c) => (
                      <a
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="border-b border-line-soft py-2.5 font-serif text-lg"
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-xl"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
          <a
            href={applyHref}
            onClick={() => setOpen(false)}
            className="btn btn-crimson mt-8 w-full justify-center"
          >
            Apply for {BATCH.year}
            <ArrowRight className="arrow" />
          </a>
        </div>
      </div>
    </>
  );
}
