import { ImageResponse } from "next/og";

export const alt = "Balloon Lab personalized photo balloons in the UAE — Memories Made";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "72px 86px",
        color: "#06143D",
        background: "linear-gradient(125deg, #EEF7FF 0%, #F3ECFF 48%, #FFF0F8 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: 730 }}>
        <div style={{ display: "flex", fontSize: 26, fontWeight: 700, letterSpacing: 4, color: "#7B2CFF" }}>
          PERSONALIZED GIFTING · UAE
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 72, lineHeight: 1.05, fontWeight: 800 }}>
          Personalized photo balloons, made from your memories.
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 28, color: "#34446F" }}>
          Balloon Lab · Memories Made
        </div>
      </div>
      <div
        style={{
          width: 285,
          height: 350,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50% 50% 48% 48%",
          background: "linear-gradient(145deg, #00B8FF 0%, #005BFF 44%, #06143D 100%)",
          boxShadow: "0 32px 70px rgba(0,91,255,.3), inset 18px 12px 32px rgba(255,255,255,.3)",
        }}
      >
        <div style={{ width: 160, height: 160, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 999, border: "18px solid white", background: "#06143D" }}>
          <div style={{ width: 78, height: 78, borderRadius: 999, background: "radial-gradient(circle at 65% 35%, #FFFFFF 0 8%, #00B8FF 10% 23%, #005BFF 25% 43%, #06143D 45%)" }} />
        </div>
      </div>
    </div>,
    size,
  );
}
