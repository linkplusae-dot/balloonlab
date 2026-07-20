import { ImageResponse } from "next/og";

export const alt = "Balloon Lab UAE story and leadership";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "70px 82px",
          color: "#06143D",
          background: "linear-gradient(125deg,#FFF0F8 0%,#F3ECFF 48%,#DDEEFF 100%)",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", width: 430, height: 430, right: -70, top: -95, borderRadius: 999, background: "radial-gradient(circle at 32% 24%,#55D6FF,#005BFF 36%,#06143D 75%,#7B2CFF)", boxShadow: "0 40px 90px rgba(0,91,255,.28)" }} />
        <div style={{ position: "absolute", width: 330, height: 330, right: 170, bottom: -200, borderRadius: 999, border: "3px solid rgba(255,255,255,.85)", boxShadow: "0 0 60px rgba(247,37,133,.22)" }} />
        <div style={{ display: "flex", flexDirection: "column", width: 720, position: "relative" }}>
          <div style={{ display: "flex", color: "#F72585", fontSize: 24, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>Our story and leadership</div>
          <div style={{ display: "flex", marginTop: 25, fontSize: 76, fontWeight: 800, lineHeight: 1.02 }}>About Balloon Lab UAE</div>
          <div style={{ display: "flex", marginTop: 30, fontSize: 28, lineHeight: 1.45, color: "#465172" }}>Personalized balloon gifts and memorable celebrations across the United Arab Emirates.</div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 42, fontSize: 24, fontWeight: 700, color: "#005BFF" }}>
            <span style={{ display: "flex", width: 16, height: 16, marginRight: 12, borderRadius: 99, background: "linear-gradient(135deg,#F72585,#7B2CFF,#005BFF)" }} />
            Memories Made
          </div>
        </div>
      </div>
    ),
    size,
  );
}
