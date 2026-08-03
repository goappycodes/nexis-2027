"use client";

import { useState } from "react";

/** Shows the mentor's photo if the file exists; otherwise a monogram.
    Drop a real headshot at the given src (e.g. /images/faculty/sharad.jpg)
    and it appears automatically — no code change needed. */
export default function FacultyAvatar({
  src,
  name,
}: {
  src?: string;
  name: string;
}) {
  const [failed, setFailed] = useState(!src);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  if (failed) {
    return (
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line bg-paper-2 font-serif text-lg text-crimson">
        {initials}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      className="h-16 w-16 shrink-0 rounded-full border border-line object-cover"
    />
  );
}
