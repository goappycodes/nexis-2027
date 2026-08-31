import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
/* Generated on-demand (not at build): @vercel/og's asset loader throws
   "Invalid URL" when prerendered on Windows, but renders fine on the Linux
   deploy runtime. Deferring generation sidesteps the local build error. */
export const dynamic = "force-dynamic";
export const alt =
  "NEXIS School of Business — India's most practical business school, Siliguri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Inter (700) is bundled at public/fonts so the card renders with no network
   dependency during the build (satori needs TTF/OTF/WOFF, not WOFF2). */
async function interBold() {
  return readFile(join(process.cwd(), "public/fonts/Inter-Bold.ttf"));
}

export default async function OpengraphImage() {
  const font = await interBold();
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0c10",
          padding: 72,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              backgroundColor: "#ef3a5d",
              marginRight: 16,
            }}
          />
          <div
            style={{
              color: "#fbfaf7",
              fontSize: 32,
              letterSpacing: 12,
              fontWeight: 700,
            }}
          >
            NEXIS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#fbfaf7",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 980,
            }}
          >
            {"India's most practical business school."}
          </div>
          <div
            style={{
              marginTop: 30,
              height: 5,
              width: 96,
              backgroundColor: "#ef3a5d",
            }}
          />
          <div
            style={{
              marginTop: 30,
              color: "rgba(251,250,247,0.62)",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {"Learn by building · Siliguri"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(251,250,247,0.5)",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <div>{"UG · PGP · School of AI"}</div>
          <div>nexisschool.com</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: font, weight: 700, style: "normal" }],
    },
  );
}
