import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/designs/designs.module.css";

const choices = [
  { label: "Photo-led celebrations", title: "Celebration Spotlight", image: "/occasion-birthdays.png", href: "/designs?occasion=Birthdays#catalogue", position: "center 42%" },
  { label: "Romantic directions", title: "Love in Bloom", image: "/occasion-love.png", href: "/designs?occasion=Love+%26+Romance#catalogue", position: "center 43%" },
  { label: "Branded moments", title: "Brand in the Air", image: "/occasion-corporate.png", href: "/designs?occasion=Corporate+Gifting#catalogue", position: "center 44%" },
];

export function PopularChoices() {
  return (
    <section className={styles.popularChoices} aria-labelledby="popular-title">
      <RevealOnScroll className={styles.sectionHeadingRow}>
        <div><span className={styles.sectionLabel}>Popular choices</span><h2 id="popular-title">A little direction<br />when you need it.</h2></div>
        <p>Explore a few versatile starting points customers can adapt for different recipients, colours and messages.</p>
      </RevealOnScroll>
      <div className={styles.popularGrid}>
        {choices.map((choice, index) => (
          <RevealOnScroll key={choice.title} direction="scale" delay={index * 0.06}>
            <Link href={choice.href} className={styles.popularCard}>
              <Image src={choice.image} alt={`${choice.title} balloon concept`} fill sizes="(max-width: 750px) 92vw, 31vw" style={{ objectFit: "cover", objectPosition: choice.position }} />
              <div className={styles.popularOverlay}>
                <small>{choice.label}</small>
                <h3>{choice.title}</h3>
                <span>Explore direction <ArrowRight size={17} aria-hidden="true" /></span>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
