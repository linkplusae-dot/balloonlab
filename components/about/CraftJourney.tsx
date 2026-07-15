import { Check, ImageIcon, MessageCircleHeart, PackageCheck, Palette } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/about/about.module.css";

const steps = [
  { icon: MessageCircleHeart, title: "Listen", text: "We start with the occasion, your idea, and the feeling you want to create." },
  { icon: ImageIcon, title: "Personalize", text: "Your chosen photo becomes the visual heart of the balloon." },
  { icon: Palette, title: "Shape the look", text: "The design is brought together through colour, layout, and occasion details." },
  { icon: PackageCheck, title: "Prepare the moment", text: "The final piece is readied for the celebration and its unforgettable reveal." },
];

export function CraftJourney() {
  return (
    <section className={styles.journeySection} aria-labelledby="journey-title">
      <RevealOnScroll className={styles.journeyIntro} direction="left">
        <p className={styles.sectionKicker}>Our way of working</p>
        <h2 id="journey-title">From one photo to one unforgettable entrance.</h2>
        <p>A simple, human process keeps the experience clear while leaving room for creativity.</p>
        <div className={styles.journeyPromise}><Check size={18} /> Your memory stays at the centre of every decision.</div>
      </RevealOnScroll>
      <div className={styles.journeySteps}>
        {steps.map(({ icon: Icon, title, text }, index) => (
          <RevealOnScroll key={title} direction="right" delay={index * 0.06}>
            <article className={styles.journeyStep}>
              <span className={styles.stepNumber}>0{index + 1}</span>
              <span className={styles.stepIcon}><Icon size={21} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
