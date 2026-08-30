"use client";

import Image, { type ImageProps } from "next/image";
import useNearViewport from "./useNearViewport";

const EMPTY_IMAGE = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

/** Keep the original dimensions/fill box, but withhold network sources until
 * nearby. Priority hero images still render and preload on the server. */
export default function SmartImage({ src, priority, ...props }: ImageProps) {
  const { ref, near } = useNearViewport<HTMLImageElement>(!!priority);
  return (
    <Image
      {...props}
      ref={ref}
      src={near ? src : EMPTY_IMAGE}
      priority={priority}
      loading={priority ? undefined : near ? "eager" : "lazy"}
      decoding="async"
      data-media-ready={near}
    />
  );
}
