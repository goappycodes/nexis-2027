"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS, BATCH } from "@/lib/content";
import { ArrowRight } from "./icons";

type NavLink = { label: string; href: string };

export default function SiteNav({
  links = NAV_LINKS,
  applyHref = "#apply",
  logoHref = "#top",
}: {
  links?: NavLink[];
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

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="ulink text-[0.82rem] font-medium text-ink-2"
              >
                {l.label}
              </a>
            ))}
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
          className={`absolute right-0 top-0 h-full w-[84%] max-w-sm bg-paper px-8 pt-10 shadow-2xl transition-transform duration-500 ease-premium ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-1 pt-10">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line-soft py-4 font-serif text-2xl"
              >
                <span className="section-index mr-3 text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </a>
            ))}
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
