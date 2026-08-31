import type { ReactNode } from "react";
import Reveal from "./Reveal";

/* ============================================================
   Shared editorial primitives for the interior program pages
   (PG, School of AI, Participate). Mirrors the local helpers in
   app/ug/page.tsx so every page reads with one visual grammar —
   paper / ink / crimson bands, hairline-framed cards, a crimson
   AccentRule instead of a chunky shadow, and arrow bullet lists.
   ============================================================ */

/** Deepest dark band (below `bg-ink`), used for hero and immersive sections. */
export const DEEP = "bg-[#08080a]";
/** Scroll offset so in-page anchors clear the sticky nav + section rail. */
export const ANCHOR = "scroll-mt-[7.5rem]";

/** Pressed-panel surface on paper: hairline frame, soft elevation, lift on hover. */
export const CARD_LIGHT =
  "group relative overflow-hidden rounded-[4px] border border-line bg-paper " +
  "shadow-[0_1px_2px_rgba(11,12,16,0.03),0_18px_44px_-24px_rgba(11,12,16,0.22)] " +
  "transition-[transform,box-shadow,border-color] duration-500 ease-premium " +
  "hover:-translate-y-1 hover:border-ink/15 " +
  "hover:shadow-[0_1px_2px_rgba(11,12,16,0.04),0_30px_60px_-24px_rgba(11,12,16,0.3)]";

/** Pressed-panel surface on dark. */
export const CARD_DARK =
  "group relative overflow-hidden rounded-[4px] border border-white/10 bg-[#0e0e11] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_56px_-28px_rgba(0,0,0,0.9)] " +
  "transition-[transform,box-shadow,border-color] duration-500 ease-premium " +
  "hover:-translate-y-1 hover:border-white/25";

/** Hairline brand rule along a card's top edge — grows to full width on hover. */
export function AccentRule() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-10 h-px w-24 bg-gradient-to-r from-crimson to-transparent transition-[width] duration-700 ease-premium group-hover:w-full"
    />
  );
}

/** Brand pill label. */
export function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`self-start rounded-full bg-crimson px-3.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white ${className}`}
    >
      {children}
    </span>
  );
}

/** Short uppercase kicker flanked by a crimson rule. */
export function Kicker({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${
        dark ? "text-white/55" : "text-muted"
      }`}
    >
      <span className="h-px w-8 bg-crimson" />
      <span className="text-crimson">{children}</span>
    </p>
  );
}

/** Arrow bullet list — the live site's list-arrow markers. */
export function Points({ items, dark }: { items: string[]; dark: boolean }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((p) => (
        <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed">
          <span
            aria-hidden
            className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-crimson"
          />
          <span className={dark ? "text-white/65" : "text-ink-2"}>{p}</span>
        </li>
      ))}
    </ul>
  );
}

/** The original file at its own aspect ratio, served straight from /public with
    no resizing — the whole creative shows at full resolution, no crop. */
export function Plate({
  src,
  alt,
  width = 1600,
  height = 900,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`block h-auto w-full ${className}`}
    />
  );
}

/** Sticky in-page section rail (matches the /ug tab strip). */
export function SectionRail({
  sections,
}: {
  sections: { label: string; href: string }[];
}) {
  return (
    <nav
      aria-label="Page sections"
      className="sticky top-0 z-30 border-y border-white/10 bg-[#0a0a0c]/95 backdrop-blur-md"
    >
      <div className="shell flex gap-6 overflow-x-auto py-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {sections.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="whitespace-nowrap text-[0.78rem] font-medium text-white/55 transition-colors hover:text-crimson"
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export { Reveal };
