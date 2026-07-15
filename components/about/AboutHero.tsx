"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "@/app/about/about.module.css";

export function AboutHero() {
  const reduceMotion = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 48, rotateX: 12 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className={styles.hero} aria-labelledby="about-title">
      <div className={styles.heroAuraPink} />
      <div className={styles.heroAuraBlue} />
      <div className={styles.heroGrid} aria-hidden="true" />

      <div className={styles.heroCopy}>
        <motion.p {...entrance(0.18)} className={styles.eyebrow}>
          <Sparkles size={15} aria-hidden="true" /> The people behind the moments
        </motion.p>
        <motion.h1 {...entrance(0.27)} id="about-title">
          We make your memories <span>float.</span>
        </motion.h1>
        <motion.p {...entrance(0.38)} className={styles.heroLead}>
          Balloon Lab is a UAE personalized gifting brand that turns the photos you love into
          thoughtful balloons for birthdays, love moments, kids, events, and surprises.
        </motion.p>
        <motion.div {...entrance(0.48)} className={styles.heroActions}>
          <a href="#leadership" className={styles.primaryButton}>
            Meet our leaders <ArrowDown size={18} aria-hidden="true" />
          </a>
          <Link href="/designs" className={styles.secondaryButton}>
            Explore designs <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        className={styles.heroSculpture}
        initial={reduceMotion ? false : { opacity: 0, x: 80, rotateY: -30, scale: 0.82 }}
        animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 55, damping: 16, delay: 0.28 }}
        aria-hidden="true"
      >
        <div className={styles.heroOrbitOne} />
        <div className={styles.heroOrbitTwo} />
        <motion.div
          className={styles.heroBalloon}
          animate={reduceMotion ? undefined : { y: [0, -12, 0], rotateZ: [-2, 2, -2] }}
          transition={{ duration: 5.8, ease: "easeInOut", repeat: Infinity }}
        >
          <span className={styles.balloonShine} />
          <span className={styles.logoHalo}>
            <Image src="/logo-transparent.png" alt="" width={108} height={135} priority />
          </span>
          <i />
        </motion.div>
        <div className={`${styles.heroGlassTag} ${styles.heroTagTop}`}>
          <Heart size={18} fill="currentColor" />
          <span><b>Personal at heart</b><small>Made around your memory</small></span>
        </div>
        <div className={`${styles.heroGlassTag} ${styles.heroTagBottom}`}>
          <Sparkles size={18} />
          <span><b>Crafted in the UAE</b><small>For moments that matter</small></span>
        </div>
        <div className={styles.heroPedestal}><span>Floating memories</span></div>
      </motion.div>
    </section>
  );
}
