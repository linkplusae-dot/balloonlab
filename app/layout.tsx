import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balloonlab.ae"),
  title: {
    default: "Balloon Lab | Memories Made",
    template: "%s | Balloon Lab",
  },
  description: "Personalized photo balloons crafted for unforgettable moments across the UAE.",
  applicationName: "Balloon Lab",
  keywords: ["personalized photo balloons", "photo balloons UAE", "custom balloons Abu Dhabi", "Balloon Lab"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "/",
    siteName: "Balloon Lab",
    title: "Balloon Lab | Memories Made",
    description: "Personalized photo balloons crafted for unforgettable moments across the UAE.",
  },
  twitter: {
    card: "summary",
    title: "Balloon Lab | Memories Made",
    description: "Personalized photo balloons crafted for unforgettable moments across the UAE.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Balloon Lab",
              url: "https://balloonlab.ae",
              logo: "https://balloonlab.ae/favicon.png",
              slogan: "Memories Made",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abu Dhabi",
                addressCountry: "AE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971-56-534-4544",
                contactType: "customer service",
              },
              sameAs: [
                "https://instagram.com/balloonlabae",
                "https://www.tiktok.com/@balloonlabae",
                "https://www.linkedin.com/in/balloonlab-ae-95bb74420/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
