import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import styles from "./gallery.module.css";
import { absoluteUrl, breadcrumbSchema, createPageMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createPageMetadata({
  title: "Photo Balloon Ideas & Gallery UAE",
  description: "Browse personalized photo balloon ideas for birthdays, love, children, events and corporate gifts by Balloon Lab UAE.",
  path: "/gallery",
  keywords: ["photo balloon ideas UAE", "personalized balloon gallery", "birthday photo balloons", "romantic photo balloon ideas", "corporate balloon gifts UAE"],
});

const galleryImages = [
  ["occasion-birthdays.png", "Personalized birthday photo balloon in blue and lavender"],
  ["occasion-love.png", "Romantic pink photo balloon for couples"],
  ["occasion-kids.png", "Blue personalized balloon for children and newborn celebrations"],
  ["occasion-events.png", "Personalized photo balloon event centrepiece"],
  ["occasion-corporate.png", "Corporate team photo balloon with navy styling"],
  ["occasion-surprise.png", "Pastel personalized balloon gift for a surprise"],
];

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]),
        {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "@id": `${absoluteUrl("/gallery")}#gallery`,
          url: absoluteUrl("/gallery"),
          name: "Balloon Lab Photo Balloon Gallery",
          description: "Personalized photo balloon inspiration for celebrations and gifting across the UAE.",
          inLanguage: "en-AE",
          associatedMedia: galleryImages.map(([file, caption]) => ({
            "@type": "ImageObject",
            contentUrl: absoluteUrl(`/${file}`),
            caption,
            representativeOfPage: file === "occasion-birthdays.png",
          })),
        },
      ]} />
      <a className={styles.skipLink} href="#gallery-main">Skip to gallery</a>
      <Header />
      <main id="gallery-main">
        <GalleryExperience />
      </main>
      <Footer />
    </div>
  );
}
