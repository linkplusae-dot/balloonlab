"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "@/app/designs/designs.module.css";

export function DesignsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 76]);
  const visualRotate = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -4]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 32]);

  return (
    <section ref={sectionRef} className={styles.hero} aria-labelledby="designs-title">
      <div className={`${styles.heroGlow} ${styles.heroGlowPink}`} />
      <div className={`${styles.heroGlow} ${styles.heroGlowBlue}`} />
      <div className={styles.heroGrid}>
        <motion.div
          className={styles.heroCopy}
          style={{ y: copyY }}
          initial={reduceMotion ? false : { opacity: 0, x: -70, rotateY: -12 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 62, damping: 17, delay: 0.16 }}
        >
          <motion.span
            className={styles.eyebrow}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles size={15} aria-hidden="true" />
            Your memory, your details, your design
          </motion.span>
          <h1 id="designs-title">
            Photo Balloon Designs.
            <span>Make It Yours.</span>
          </h1>
          <p>
            Explore balloon styles created for birthdays, love, newborns, events, corporate gifting and meaningful everyday surprises.
          </p>
          <div className={styles.heroActions}>
            <Link href="#catalogue" className={styles.primaryButton}>
              Explore Designs <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#custom-design" className={styles.secondaryButton}>
              Create a Custom Design
            </Link>
          </div>
          <div className={styles.heroNote}>
            <span aria-hidden="true" />
            Every concept is a customizable starting point—not a fixed, off-the-shelf product.
          </div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          style={{ y: visualY, rotateZ: visualRotate }}
          initial={reduceMotion ? false : { opacity: 0, x: 80, rotateY: 24, scale: 0.84 }}
          animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 52, damping: 17, delay: 0.22 }}
        >
          <div className={styles.heroOrbit} aria-hidden="true" />
          <motion.div
            className={styles.featuredBalloonCard}
            animate={reduceMotion ? undefined : { y: [0, -9, 0], rotateY: [-2, 3, -2] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={styles.featuredImage}>
              <Image
                src="/occasion-birthdays.png"
                alt="Personalized birthday photo balloon design concept"
                fill
                preload
                sizes="(max-width: 800px) 88vw, 48vw"
                style={{ objectFit: "cover", objectPosition: "center 42%" }}
              />
            </div>
            <div className={styles.featuredCaption}>
              <div>
                <small>Featured direction</small>
                <strong>Celebration Spotlight</strong>
              </div>
              <span>Photo · Name · Colour</span>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.floatingDesignCard} ${styles.floatingDesignCardOne}`}
            animate={reduceMotion ? undefined : { y: [0, 8, 0], rotateZ: [-4, -1, -4], rotateY: [9, 2, 9] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: -1.4 }}
          >
            <Image src="/occasion-love.png" alt="" fill sizes="180px" style={{ objectFit: "cover", objectPosition: "center 43%" }} />
            <span>Love in Bloom</span>
          </motion.div>

          <motion.div
            className={`${styles.floatingDesignCard} ${styles.floatingDesignCardTwo}`}
            animate={reduceMotion ? undefined : { y: [0, -7, 0], rotateZ: [5, 2, 5], rotateY: [-8, -2, -8] }}
            transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: -2.2 }}
          >
            <Image src="/occasion-corporate.png" alt="" fill sizes="170px" style={{ objectFit: "cover", objectPosition: "center 44%" }} />
            <span>Brand in the Air</span>
          </motion.div>

          <motion.div
            className={styles.heroLogoBalloon}
            animate={reduceMotion ? undefined : { z: [24, 64, 24], rotateY: [-10, 12, -10], y: [0, -7, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/logo-transparent.png" alt="" width={108} height={135} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
