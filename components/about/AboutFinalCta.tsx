import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { siteConfig } from "@/lib/seo/site";
import styles from "@/app/about/about.module.css";

export function AboutFinalCta() {
  return (
    <>
      <section className={styles.finalSection} aria-labelledby="promise-title">
        <RevealOnScroll className={styles.finalCard} direction="scale">
          <div className={styles.finalOrb} aria-hidden="true">
            <Image src="/logo-transparent.png" alt="" width={108} height={135} />
          </div>
          <p className={styles.sectionKicker}>Personal from idea to reveal</p>
          <h2 id="promise-title">Our Promise</h2>
          <p>We listen carefully, communicate clearly and shape every Balloon Lab UAE creation around the memory, recipient and occasion you share with us.</p>
          <div className={styles.finalActions}>
            <Link href="/designs" className={styles.primaryButton}>Explore our designs <ArrowRight size={18} /></Link>
            <Link href="/gallery" className={styles.secondaryButton}>View the gallery</Link>
          </div>
        </RevealOnScroll>
      </section>

      <section id="contact" className={styles.contactSection} aria-labelledby="about-contact-title">
        <RevealOnScroll className={styles.contactCard} direction="scale">
          <p className={styles.sectionKicker}>Official Balloon Lab UAE contact</p>
          <h2 id="about-contact-title">Contact Balloon Lab UAE</h2>
          <p>
            The official website of Balloon Lab UAE is{" "}
            <a href={siteConfig.url}>www.balloonlab.ae</a>. Contact our team to discuss a
            personalized balloon for your celebration in the United Arab Emirates.
          </p>
          <div className={styles.contactActions}>
            <a href={`mailto:${siteConfig.email}`}><Mail size={18} /> {siteConfig.email}</a>
            <a href={`tel:${siteConfig.phoneE164}`}><Phone size={18} /> {siteConfig.phoneDisplay}</a>
            <a href={siteConfig.whatsapp}><FaWhatsapp size={18} /> WhatsApp Balloon Lab UAE</a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
