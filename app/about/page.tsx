import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { BrandStory } from "@/components/about/BrandStory";
import { LeadershipShowcase } from "@/components/about/LeadershipShowcase";
import { BrandValues } from "@/components/about/BrandValues";
import { CraftJourney } from "@/components/about/CraftJourney";
import { AboutFinalCta } from "@/components/about/AboutFinalCta";
import { KhalifaFundPartnership } from "@/components/partners/KhalifaFundPartnership";
import styles from "./about.module.css";
import { absoluteUrl, breadcrumbSchema, createPageMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Balloon Lab UAE",
  description: "Meet Balloon Lab’s Abu Dhabi leadership and discover how the UAE brand turns meaningful photos into personalized balloon gifts.",
  path: "/about",
  keywords: ["about Balloon Lab UAE", "personalized gifting brand Abu Dhabi", "photo balloon company UAE", "Mubarak Obaid Al Dhaheri", "Malik Muhammad Balloon Lab"],
});

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]),
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${absoluteUrl("/about")}#webpage`,
          url: absoluteUrl("/about"),
          name: "About Balloon Lab UAE",
          description: "The people, purpose and craft behind Balloon Lab’s personalized photo balloons in the UAE.",
          inLanguage: "en-AE",
          about: {
            "@id": `${absoluteUrl("/")}#organization`,
            founder: { "@type": "Person", name: "Mubarak Obaid Al Dhaheri", jobTitle: "Founder & CEO" },
            employee: { "@type": "Person", name: "Malik Muhammad", jobTitle: "General Manager" },
          },
        },
      ]} />
      <a className={styles.skipLink} href="#about-main">Skip to main content</a>
      <Header />
      <main id="about-main">
        <AboutHero />
        <BrandStory />
        <LeadershipShowcase />
        <BrandValues />
        <KhalifaFundPartnership />
        <CraftJourney />
        <AboutFinalCta />
      </main>
      <Footer />
    </div>
  );
}
