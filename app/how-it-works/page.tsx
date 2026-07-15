import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { HowItWorksFinalCta } from "@/components/how-it-works/HowItWorksFinalCta";
import { HowItWorksHero } from "@/components/how-it-works/HowItWorksHero";
import { OrderPreparation } from "@/components/how-it-works/OrderPreparation";
import { ProcessJourney } from "@/components/how-it-works/ProcessJourney";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import styles from "./how-it-works.module.css";
import { absoluteUrl, breadcrumbSchema, createPageMetadata } from "@/lib/seo/site";

export const metadata: Metadata = createPageMetadata({
  title: "How to Order a Personalized Photo Balloon",
  description: "Learn how to order a personalized photo balloon from Balloon Lab UAE, from sharing your image and choosing a design to approval and fulfilment.",
  path: "/how-it-works",
  keywords: ["how to order personalized photo balloon", "custom balloon order UAE", "photo balloon process", "personalized balloon delivery UAE", "Balloon Lab ordering"],
});

const howToSteps = [
  ["Share a photo or idea", "Send the image, reference or feeling you want the balloon to hold."],
  ["Choose the occasion and style", "Select a design direction, colours and the personalization you need."],
  ["We review the details", "Balloon Lab checks the image quality, requirements and order information."],
  ["Your design is prepared", "A design proof is prepared for approval when it applies to the selected product."],
  ["We print, assemble and check", "Your balloon is produced, finished and quality checked with care."],
  ["Delivery or collection", "Your finished balloon is completed according to the confirmed arrangements."],
];

export default function HowItWorksPage() {
  return (
    <div className={styles.page}>
      <JsonLd data={[
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "How It Works", path: "/how-it-works" }]),
        {
          "@context": "https://schema.org",
          "@type": "HowTo",
          "@id": `${absoluteUrl("/how-it-works")}#howto`,
          name: "How to order a personalized photo balloon from Balloon Lab",
          description: "Six steps from sharing a photo to receiving or collecting a personalized balloon in the UAE.",
          image: absoluteUrl("/balloon-gallery.png"),
          inLanguage: "en-AE",
          step: howToSteps.map(([name, text], index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name,
            text,
            url: `${absoluteUrl("/how-it-works")}#six-step-process`,
          })),
        },
      ]} />
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
