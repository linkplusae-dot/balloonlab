import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import styles from "@/app/designs/designs.module.css";

export function DesignsFinalCta() {
  return (
    <section className={styles.finalCta} aria-labelledby="final-cta-title">
      <RevealOnScroll direction="scale" className={styles.finalCtaInner}>
        <div className={styles.finalOrb} aria-hidden="true" />
        <div className={styles.finalLogo}><Image src="/logo-transparent.png" alt="" width={108} height={135} /></div>
        <span className={styles.sectionLabel}>Your idea can start here</span>
        <h2 id="final-cta-title">Choose a design.<br />Personalize every detail.</h2>
        <p>Let Balloon Lab prepare something made for your moment, your photo and the feeling you want to share.</p>
        <div>
          <Link href="#catalogue" className={styles.primaryButton}>Create Yours <ArrowRight size={18} aria-hidden="true" /></Link>
          <Link href="https://wa.me/971565344544" className={styles.whatsappButton}><FaWhatsapp size={18} aria-hidden="true" /> Order on WhatsApp</Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
