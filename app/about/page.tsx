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
import { FounderLinkedInBadge } from "@/components/about/FounderLinkedInBadge";
import { KhalifaFundPartnership } from "@/components/partners/KhalifaFundPartnership";
import styles from "./about.module.css";
import { absoluteUrl, siteConfig } from "@/lib/seo/site";

const description = "Founder and CEO Mubarak Obaid Al Dhaheri and General Manager Malik Muhammad. Operational Manager Zain Mustafa. Learn about our leadership, values, and how we create personalized balloon gifts and memorable celebrations across the United Arab Emirates.";
const socialDescription = "Meet the team behind Balloon Lab UAE and discover how we create personalized balloon gifts and memorable celebrations across the United Arab Emirates.";

export const metadata: Metadata = {
  title: { absolute: "About Balloon Lab UAE | Founder, Leadership & Our Story" },
  description,
  keywords: [
    "About Balloon Lab UAE",
    "founder Mubarak Obaid Al Dhaheri",
    "General Manager Malik Muhammad",
    "Operational Manager Zain Mustafa",
    "personalized balloon company UAE",
    "photo balloons UAE",
    "Mubarak Obaid Al Dhaheri",
    "Malik Muhammad Balloon Lab",
    "Zain Mustafa Balloon Lab",
  ],
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: absoluteUrl("/about"),
    title: "About Balloon Lab UAE | Our Story and Leadership",
    description: socialDescription,
    images: [{ url: "/about/opengraph-image", width: 1200, height: 630, alt: "Balloon Lab UAE story and leadership" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Balloon Lab UAE | Our Story and Leadership",
    description: socialDescription,
    images: ["/about/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  const aboutUrl = absoluteUrl("/about");
  const organizationId = `${absoluteUrl("/")}#organization`;

  return (
    <div className={styles.page}>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": `${aboutUrl}#breadcrumb`,
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "About Balloon Lab UAE", item: aboutUrl },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": `${aboutUrl}#webpage`,
          url: aboutUrl,
          name: "About Balloon Lab UAE",
          description,
          inLanguage: siteConfig.language,
          isPartOf: { "@id": `${absoluteUrl("/")}#website` },
          breadcrumb: { "@id": `${aboutUrl}#breadcrumb` },
          about: { "@id": organizationId },
          mainEntity: [
            { "@id": `${aboutUrl}#mubarak-obaid-al-dhaheri` },
            { "@id": `${aboutUrl}#malik-muhammad` },
            { "@id": `${aboutUrl}#zain-mustafa` },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${aboutUrl}#mubarak-obaid-al-dhaheri`,
          name: "Mubarak Obaid Al Dhaheri",
          jobTitle: "Founder and CEO",
          image: absoluteUrl("/mubarak-obaid-al-dhaheri-founder-balloon-lab-uae.webp"),
          url: `${aboutUrl}#founder`,
          worksFor: { "@id": organizationId },
          sameAs: "https://ae.linkedin.com/in/mubarak-obaid-al-dhaheri-95bb74420",
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${aboutUrl}#malik-muhammad`,
          name: "Malik Muhammad",
          jobTitle: "General Manager",
          image: absoluteUrl("/malik-muhammad-general-manager-balloon-lab-uae.webp"),
          url: `${aboutUrl}#general-manager`,
          worksFor: { "@id": organizationId },
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${aboutUrl}#zain-mustafa`,
          name: "Zain Mustafa",
          jobTitle: "Operational Manager",
          image: absoluteUrl("/zain-mustafa-operational-manager-balloon-lab-uae.webp"),
          url: `${aboutUrl}#operational-manager`,
          worksFor: { "@id": organizationId },
        },
      ]} />
      <a className={styles.skipLink} href="#about-main">Skip to main content</a>
      <Header />
      <main id="about-main">
        <AboutHero />
        <LeadershipShowcase />
        <FounderLinkedInBadge />
        <BrandStory />
        <CraftJourney />
        <BrandValues />
        <KhalifaFundPartnership />
        <AboutFinalCta />
      </main>
      <Footer />
    </div>
  );
}
