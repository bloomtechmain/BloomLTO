import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FFF6EE",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#0B2A52",
              display: "flex",
            }}
          />
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800, color: "#0B2A52" }}>
            Bloom<span style={{ color: "#EA5A0C" }}>LTO</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 58,
            fontWeight: 800,
            color: "#0B2A52",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Your LTO library, finally searchable.
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "#1B2B44" }}>
          Archive to LTO. Find anything. Restore in clicks.
        </div>
      </div>
    ),
    { ...size }
  );
}
