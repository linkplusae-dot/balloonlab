import { Camera, Gift, MapPin } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/about/about.module.css";

const storyNotes = [
  { icon: Camera, title: "Your photo", text: "The memory that makes the gift yours." },
  { icon: Gift, title: "Our craft", text: "A custom balloon designed around the occasion." },
  { icon: MapPin, title: "Made for the UAE", text: "Personal gifting with a local point of view." },
];

export function BrandStory() {
  return (
    <section className={styles.storySection} aria-labelledby="story-title">
      <RevealOnScroll className={styles.storyStatement} direction="left">
        <p className={styles.sectionKicker}>Why Balloon Lab UAE exists</p>
        <h2 id="story-title">Our Story</h2>
      </RevealOnScroll>
      <RevealOnScroll className={styles.storyBody} direction="right" delay={0.08}>
        <p>
          Balloon Lab UAE was founded to make balloon gifting more personal. We bring a meaningful
          photo into the celebration through a custom-designed balloon, helping families, friends
          and businesses across the UAE turn important moments into gifts that feel individual.
        </p>
        <div className={styles.storyNotes}>
          {storyNotes.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className={styles.storyNote}>
              <span><Icon size={20} aria-hidden="true" /></span>
              <div><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
