import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/about/about.module.css";

export function AboutFinalCta() {
  return (
    <section className={styles.finalSection} aria-labelledby="about-cta-title">
      <RevealOnScroll className={styles.finalCard} direction="scale">
        <div className={styles.finalOrb} aria-hidden="true">
          <Image src="/logo-transparent.png" alt="" width={108} height={135} />
        </div>
        <p className={styles.sectionKicker}>Your memory, our next creation</p>
        <h2 id="about-cta-title">Ready to make it float?</h2>
        <p>Bring us the photo. We’ll help turn it into a surprise made especially for them.</p>
        <div className={styles.finalActions}>
          <Link href="/designs" className={styles.primaryButton}>Start your balloon <ArrowRight size={18} /></Link>
          <a href="https://wa.me/971565344544" className={styles.secondaryButton}><FaWhatsapp size={18} aria-hidden="true" /> Chat on WhatsApp</a>
        </div>
      </RevealOnScroll>
    </section>
  );
}
