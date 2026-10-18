import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

/** Shared 1200×630 social card: logo, a headline with an accented tail, and trust chips. */
export async function renderOg({ title, accent, kicker }: { title: string; accent?: string; kicker?: string }) {
  const icon = await readFile(join(process.cwd(), "public/icon-192.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "radial-gradient(circle at 85% 10%, #2a2160 0%, #0b0a0f 55%)",
          color: "#f4f3f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={64} height={64} style={{ borderRadius: 16 }} alt="" />
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>FreeFlow</div>
          {kicker && (
            <div
              style={{
                marginLeft: 12,
                fontSize: 22,
                color: "#c9c1ff",
                background: "rgba(143,128,255,0.18)",
                padding: "6px 16px",
                borderRadius: 999,
              }}
            >
              {kicker}
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2.5 }}>
          <span>{title}</span>
          {accent && <span style={{ color: "#a99dff" }}>{accent}</span>}
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Free forever", "Open source (MIT)", "100% on-device", "macOS"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    ogSize,
  );
}
