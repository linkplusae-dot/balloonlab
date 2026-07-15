import { Gem, HandHeart, MapPinned, WandSparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/about/about.module.css";

const values = [
  { icon: HandHeart, number: "01", title: "Personal first", text: "Every design begins with a real person, a real photo, and a moment worth celebrating." },
  { icon: WandSparkles, number: "02", title: "Designed with feeling", text: "Colour, composition, and detail work together to make the reveal feel as special as the memory." },
  { icon: Gem, number: "03", title: "Premium by intention", text: "A clean experience, considered presentation, and thoughtful finishing are part of the gift." },
  { icon: MapPinned, number: "04", title: "Rooted in the UAE", text: "Made for the birthdays, families, events, and surprises that bring communities together across the UAE." },
];

export function BrandValues() {
  return (
    <section className={styles.valuesSection} aria-labelledby="values-title">
      <RevealOnScroll className={styles.centerHeading}>
        <p className={styles.sectionKicker}>What guides us</p>
        <h2 id="values-title">The feeling comes first.</h2>
        <p>Our choices are shaped by the memory behind the balloon—not by decoration alone.</p>
      </RevealOnScroll>
      <div className={styles.valuesGrid}>
        {values.map(({ icon: Icon, number, title, text }, index) => (
          <RevealOnScroll key={title} direction="scale" delay={index * 0.07}>
            <article className={styles.valueCard}>
              <span className={styles.valueIcon}><Icon size={24} aria-hidden="true" /></span>
              <small>{number}</small><h3>{title}</h3><p>{text}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
