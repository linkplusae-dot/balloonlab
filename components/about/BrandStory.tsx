import { Camera, Gift, MapPin } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/about/about.module.css";

const storyNotes = [
  { icon: Camera, title: "Your photo", text: "The memory that makes the gift yours." },
  { icon: Gift, title: "Our craft", text: "A balloon designed around the moment." },
  { icon: MapPin, title: "Made for the UAE", text: "Personal gifting with a local heart." },
];

export function BrandStory() {
  return (
    <section className={styles.storySection} aria-labelledby="story-title">
      <RevealOnScroll className={styles.storyStatement} direction="left">
        <p className={styles.sectionKicker}>Why Balloon Lab exists</p>
        <h2 id="story-title">More personal than a gift. More memorable than a balloon.</h2>
      </RevealOnScroll>
      <RevealOnScroll className={styles.storyBody} direction="right" delay={0.08}>
        <p>
          The best gifts hold a story. We bring that story into the room by placing a meaningful
          photo at the centre of a beautifully designed balloon—so the surprise feels emotional
          before a single word is spoken.
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
