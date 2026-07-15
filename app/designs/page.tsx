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

export const metadata: Metadata = {
  title: "Personalized Balloon Designs UAE",
  description: "Explore customizable photo balloon designs for birthdays, love, newborns, events, corporate gifting and meaningful surprises across the UAE.",
};

function CatalogueFallback() {
  return (
    <section className={styles.catalogueFallback} aria-label="Loading design showroom">
      <div /><div /><div />
    </section>
  );
}

export default function DesignsPage() {
  return (
    <div className={styles.page}>
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
