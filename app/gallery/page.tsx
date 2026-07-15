import type { Metadata } from "next";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import styles from "./gallery.module.css";

export const metadata: Metadata = {
  title: "Photo Balloon Gallery",
  description:
    "Explore personalized photo balloon inspiration for birthdays, love, newborns, events and corporate gifting across the UAE.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Photo Balloon Gallery | Balloon Lab",
    description: "Thoughtful photo balloon ideas for the moments worth remembering.",
    url: "/gallery",
    images: [{ url: "/balloon-gallery.png", width: 1536, height: 1024, alt: "Balloon Lab photo balloon collection" }],
  },
};

export default function GalleryPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#gallery-main">Skip to gallery</a>
      <Header />
      <main id="gallery-main">
        <GalleryExperience />
      </main>
      <Footer />
    </div>
  );
}
