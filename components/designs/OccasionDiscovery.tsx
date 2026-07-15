import { OccasionCylinderCarousel } from "@/components/designs/OccasionCylinderCarousel";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { occasionCategories } from "@/lib/content/designs";
import styles from "@/app/designs/designs.module.css";

export function OccasionDiscovery() {
  return (
    <section className={styles.occasionDiscovery} aria-labelledby="occasion-discovery-title">
      <RevealOnScroll className={styles.centeredHeading}>
        <span className={styles.sectionLabel}>Browse by occasion</span>
        <h2 id="occasion-discovery-title">Start with the moment<br />you’re celebrating.</h2>
        <p>Choose a category to open a filtered collection. You can refine every detail once you find the right direction.</p>
      </RevealOnScroll>
      <RevealOnScroll direction="scale" amount={0.08}>
        <OccasionCylinderCarousel occasions={occasionCategories} />
      </RevealOnScroll>
    </section>
  );
}
