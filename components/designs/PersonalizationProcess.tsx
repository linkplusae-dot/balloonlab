import { Check, ImageUp, MessageSquareText, Palette, ScanSearch, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/designs/designs.module.css";

const steps = [
  { title: "Choose a design", description: "Begin with the direction that feels closest.", icon: ScanSearch },
  { title: "Upload your image", description: "Share the photo you want at the heart of it.", icon: ImageUp },
  { title: "Add your words", description: "Include a name, date or short message.", icon: MessageSquareText },
  { title: "Select colours", description: "Match the palette to your moment or brand.", icon: Palette },
  { title: "Review the preview", description: "Confirm the design proof when applicable.", icon: Sparkles },
  { title: "Confirm the order", description: "Finalize timing, delivery and order details.", icon: Check },
];

export function PersonalizationProcess() {
  return (
    <section className={styles.personalization} aria-labelledby="personalization-title">
      <RevealOnScroll className={styles.centeredHeading}>
        <span className={styles.sectionLabel}>What can be changed?</span>
        <h2 id="personalization-title">From inspiration<br />to something unmistakably yours.</h2>
        <p>The exact proofing and preparation process depends on the chosen product and confirmed order details.</p>
      </RevealOnScroll>
      <ol className={styles.processGrid}>
        {steps.map(({ title, description, icon: Icon }, index) => (
          <li key={title}>
            <RevealOnScroll delay={index * 0.045} direction={index % 2 ? "right" : "left"}>
              <div className={styles.processCard}>
                <span className={styles.processNumber}>0{index + 1}</span>
                <div className={styles.processIcon}><Icon size={23} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </RevealOnScroll>
          </li>
        ))}
      </ol>
    </section>
  );
}
