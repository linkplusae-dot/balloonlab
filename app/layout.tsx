import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@fontsource/poppins/latin-800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Personalized Photo Balloons UAE | Balloon Lab UAE",
    template: "%s | Balloon Lab UAE",
  },
  description: "Create personalized photo balloons for birthdays, love, newborns, events and corporate gifts, crafted by Balloon Lab in Abu Dhabi for moments across the UAE.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Personalized gifts",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "Personalized Photo Balloons UAE | Balloon Lab UAE",
    description: "Turn a favourite photo into a personalized balloon for birthdays, love, newborns, events and gifts across the UAE.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personalized Photo Balloons UAE | Balloon Lab UAE",
    description: "Turn a favourite photo into a personalized balloon for meaningful moments across the UAE.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language} className="scroll-smooth">
      <body>
        {children}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "LocalBusiness"],
                "@id": `${siteConfig.url}/#organization`,
                name: siteConfig.name,
                alternateName: [siteConfig.shortName, "BalloonLab UAE"],
                url: siteConfig.url,
                logo: {
                  "@type": "ImageObject",
                  url: absoluteUrl("/favicon.png"),
                  width: 512,
                  height: 512,
                },
                slogan: siteConfig.tagline,
                description: "A UAE personalized gifting brand creating custom photo balloons for birthdays, love, newborns, events, corporate gifting and surprises.",
                telephone: siteConfig.phoneE164,
                email: siteConfig.email,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Office 26, Floor 20, Al Wahda Commercial Tower",
                  postOfficeBoxNumber: "25025",
                  addressLocality: "Abu Dhabi",
                  addressRegion: "Abu Dhabi",
                  addressCountry: "AE",
                },
                areaServed: { "@type": "Country", name: "United Arab Emirates" },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: siteConfig.phoneE164,
                  contactType: "customer service",
                  areaServed: "AE",
                  availableLanguage: ["English"],
                },
                sameAs: Object.values(siteConfig.social),
                founder: { "@id": `${absoluteUrl("/about")}#mubarak-obaid-al-dhaheri` },
                employee: [
                  { "@id": `${absoluteUrl("/about")}#malik-muhammad` },
                  { "@id": `${absoluteUrl("/about")}#zain-mustafa` },
                ],
              },
              {
                "@type": "WebSite",
                "@id": `${siteConfig.url}/#website`,
                url: siteConfig.url,
                name: siteConfig.name,
                alternateName: siteConfig.shortName,
                description: "Personalized photo balloons and custom balloon gifts in the UAE.",
                inLanguage: siteConfig.language,
                publisher: { "@id": `${siteConfig.url}/#organization` },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
