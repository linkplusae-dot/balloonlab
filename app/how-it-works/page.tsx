import type { Metadata } from "next";
import { HowItWorksFinalCta } from "@/components/how-it-works/HowItWorksFinalCta";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { OrderPreparation } from "@/components/how-it-works/OrderPreparation";
import { ProcessJourney } from "@/components/how-it-works/ProcessJourney";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import styles from "./how-it-works.module.css";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Balloon Lab turns your photo or idea into a personalized balloon, from customization and review to crafting and delivery across the UAE.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How Balloon Lab Works",
    description: "From your photo to a carefully crafted personalized balloon in six clear steps.",
    url: "/how-it-works",
    images: [{ url: "/balloon-gallery.png", width: 1536, height: 1024, alt: "Balloon Lab personalized photo balloon process" }],
  },
};

export default function HowItWorksPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#process-main">Skip to the process</a>
      <Header />
      <main id="process-main">
        <HowItWorksHero />
        <ProcessJourney />
        <OrderPreparation />
        <HowItWorksFinalCta />
      </main>
      <Footer />
    </div>
  );
}
