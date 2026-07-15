import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageUp, MessageCircleMore, PenLine } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/designs/designs.module.css";

const customPaths = [
  { title: "Upload a reference", description: "Share an image, moodboard or balloon idea you already love.", icon: ImageUp },
  { title: "Describe your idea", description: "Tell us the moment, colours, photo and message you have in mind.", icon: PenLine },
  { title: "Chat with our design team", description: "Start on WhatsApp when you would rather shape the idea together.", icon: MessageCircleMore },
];

export function CustomDesignInvitation() {
  return (
    <section id="custom-design" className={styles.customDesign} aria-labelledby="custom-design-title">
      <div className={`${styles.customGlow} ${styles.customGlowOne}`} />
      <div className={`${styles.customGlow} ${styles.customGlowTwo}`} />
      <div className={styles.customDesignGrid}>
        <RevealOnScroll direction="left" className={styles.customVisual}>
          <div className={styles.customVisualFrame}>
            <Image src="/occasion-surprise.png" alt="Custom photo balloon design inspiration" fill sizes="(max-width: 850px) 90vw, 46vw" style={{ objectFit: "cover", objectPosition: "center 43%" }} />
            <div className={styles.customVisualGlass}>
              <small>Made around your idea</small>
              <strong>One photo. Endless directions.</strong>
            </div>
          </div>
          <div className={styles.customLogoAccent}><Image src="/logo-transparent.png" alt="" width={108} height={135} /></div>
        </RevealOnScroll>

        <RevealOnScroll direction="right" className={styles.customCopy}>
          <span className={styles.sectionLabel}>Custom starts here</span>
          <h2 id="custom-design-title">Have Something<br />Different in Mind?</h2>
          <p>If the perfect concept is not in the catalogue, begin with whatever you already have—a reference, a rough idea or a conversation.</p>
          <div className={styles.customPathList}>
            {customPaths.map(({ title, description, icon: Icon }, index) => (
              <div key={title} className={styles.customPath}>
                <span><Icon size={21} aria-hidden="true" /></span>
                <div><small>0{index + 1}</small><h3>{title}</h3><p>{description}</p></div>
              </div>
            ))}
          </div>
          <Link href="https://wa.me/971000000000" className={styles.primaryButton}>
            Start a Custom Design <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
