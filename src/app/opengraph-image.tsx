import { ImageResponse } from "next/og";

export const alt = "Dzirksts Studio – Kreativ. Präzise. Handwerklich.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #a6a6a6 0%, #2c2c2c 100%)",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, color: "#f59e0b", marginBottom: 16 }}>
          DZIRKSTS STUDIO
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          Kreativ. Präzise. Handwerklich.
        </div>
        <div style={{ marginTop: 28, fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
          Social Media · Fotografie · Elektrotechnik · Lettland
        </div>
      </div>
    ),
    { ...size },
  );
}
