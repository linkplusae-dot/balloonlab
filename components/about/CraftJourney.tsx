import Link from "next/link";
import { Check, ImageIcon, MessageCircleHeart, PackageCheck, Palette } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/about/about.module.css";

const steps = [
  { icon: MessageCircleHeart, title: "Listen", text: "We begin with the occasion, your idea and the feeling you want to create." },
  { icon: ImageIcon, title: "Personalize", text: "Your chosen photo becomes the visual heart of the balloon." },
  { icon: Palette, title: "Shape the look", text: "Colour, layout and occasion details bring the design together." },
  { icon: PackageCheck, title: "Prepare the moment", text: "The final piece is prepared for the celebration and its reveal." },
];

export function CraftJourney() {
  return (
    <section className={styles.journeySection} aria-labelledby="journey-title">
      <RevealOnScroll className={styles.journeyIntro} direction="left">
        <p className={styles.sectionKicker}>Personalized balloon creations</p>
        <h2 id="journey-title">What We Create</h2>
        <p>We create custom photo balloons and coordinated celebration designs for personal and corporate occasions. Every order follows a clear process from photo selection and design approval to preparation for the final reveal.</p>
        <div className={styles.journeyPromise}><Check size={18} /> Your memory stays at the centre of every decision.</div>
        <nav className={styles.aboutInternalLinks} aria-label="Explore Balloon Lab UAE">
          <Link href="/designs">View designs</Link>
          <Link href="/gallery">See the gallery</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/designs?occasion=Corporate+Gifting#catalogue">Corporate gifting</Link>
        </nav>
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
