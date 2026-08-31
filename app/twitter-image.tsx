// Reuse the Open Graph card for Twitter/X (summary_large_image).
// runtime/dynamic are declared as literals here so Next can statically read
// them (re-exporting them triggers a build warning).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export { default, alt, size, contentType } from "./opengraph-image";
