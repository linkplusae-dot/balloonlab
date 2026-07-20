import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Balloon Lab UAE — Memories Made",
    short_name: "Balloon Lab",
    description: "Personalized photo balloons crafted for unforgettable moments across the UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#EEF7FF",
    theme_color: "#005BFF",
    icons: [
      { src: "/favicon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
