import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DesignsHero } from "@/components/designs/DesignsHero";
import { OccasionDiscovery } from "@/components/designs/OccasionDiscovery";
import { DesignCatalogue } from "@/components/designs/DesignCatalogue";
import { CustomDesignInvitation } from "@/components/designs/CustomDesignInvitation";
import { PersonalizationProcess } from "@/components/designs/PersonalizationProcess";
import { PopularChoices } from "@/components/designs/PopularChoices";
import { DesignsFinalCta } from "@/components/designs/DesignsFinalCta";
import styles from "./designs.module.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { designs } from "@/lib/content/designs";
import { absoluteUrl, breadcrumbSchema, createPageMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createPageMetadata({
  title: "Personalized Photo Balloon Designs UAE",
  description: "Explore customizable photo balloon designs for birthdays, couples, newborns, events and corporate gifting from Balloon Lab UAE.",
  path: "/designs",
  keywords: ["personalized balloon designs UAE", "custom birthday balloons UAE", "photo balloon gifts", "corporate branded balloons Abu Dhabi", "newborn balloon gifts UAE"],
});

function CatalogueFallback() {
  return (
    <section id="catalogue" className={styles.catalogueFallback} aria-label="Loading design showroom">
      <div /><div /><div />
    </section>
  );
}

export default function DesignsPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Designs", path: "/designs" }]),
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${absoluteUrl("/designs")}#collection`,
          url: absoluteUrl("/designs"),
          name: "Personalized Photo Balloon Designs UAE",
          description: "Customizable photo balloon design directions for celebrations and gifting in the UAE.",
          inLanguage: "en-AE",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: designs.length,
            itemListElement: designs.map((design, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: design.title,
              description: design.shortDescription,
              url: `${absoluteUrl("/designs")}?design=${design.slug}#custom-design`,
              image: absoluteUrl(design.image),
            })),
          },
        },
      ]} />
      <a href="#designs-main" className={styles.skipLink}>Skip to main content</a>
      <Header />
      <main id="designs-main">
        <DesignsHero />
        <OccasionDiscovery />
        <Suspense fallback={<CatalogueFallback />}>
          <DesignCatalogue />
        </Suspense>
        <CustomDesignInvitation />
        <PersonalizationProcess />
        <PopularChoices />
        <DesignsFinalCta />
      </main>
      <Footer />
    </div>
  );
}
