import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { BrandStory } from "@/components/about/BrandStory";
import { LeadershipShowcase } from "@/components/about/LeadershipShowcase";
import { BrandValues } from "@/components/about/BrandValues";
import { CraftJourney } from "@/components/about/CraftJourney";
import { AboutFinalCta } from "@/components/about/AboutFinalCta";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Balloon Lab | Personalized Gifting in the UAE",
  description:
    "Meet the people and purpose behind Balloon Lab, a UAE personalized gifting brand turning meaningful photos into floating memories.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#about-main">Skip to main content</a>
      <Header />
      <main id="about-main">
        <AboutHero />
        <BrandStory />
        <LeadershipShowcase />
        <BrandValues />
        <CraftJourney />
        <AboutFinalCta />
      </main>
      <Footer />
    </div>
  );
}
