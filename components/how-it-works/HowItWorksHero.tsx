"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Camera, Check, Sparkles } from "lucide-react";
import styles from "@/app/how-it-works/how-it-works.module.css";

export function HowItWorksHero() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay: number) => ({
    initial: reduceMotion ? false as const : { opacity: 0, y: 52, rotateX: 13, z: -70 },
    animate: { opacity: 1, y: 0, rotateX: 0, z: 0 },
    transition: { type: "spring" as const, stiffness: 62, damping: 18, delay },
  });

  return (
    <section className={styles.hero} aria-labelledby="process-title">
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroAuraPink} aria-hidden="true" />
      <div className={styles.heroAuraBlue} aria-hidden="true" />
      <div className={styles.heroCopy}>
        <motion.p {...reveal(.12)} className={styles.eyebrow}><Sparkles size={15} /> Simple, personal, considered</motion.p>
        <motion.h1 {...reveal(.2)} id="process-title">From your photo to a moment that <span>floats.</span></motion.h1>
        <motion.p {...reveal(.3)} className={styles.heroLead}>You share the memory. We guide the details, prepare the design and craft the balloon around your occasion.</motion.p>
        <motion.div {...reveal(.4)} className={styles.heroActions}>
          <a href="#six-step-process" className={styles.primaryButton}>See the six steps <ArrowDown size={18} /></a>
          <Link href="/designs" className={styles.secondaryButton}>Choose a design <ArrowUpRight size={18} /></Link>
        </motion.div>
        <motion.div {...reveal(.48)} className={styles.heroAssurance}>
          <Check size={16} /> <span><b>Guided from the first message</b><small>We confirm the important details before production begins.</small></span>
        </motion.div>
      </div>

      <motion.div
        className={styles.heroStage}
        initial={reduceMotion ? false : { opacity: 0, x: 90, rotateY: -26, scale: .84 }}
        animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 17, delay: .26 }}
        aria-label="Your memory moving through the Balloon Lab creative process"
      >
        <div className={styles.stageOrbit} aria-hidden="true" />
        <motion.div className={`${styles.stageCard} ${styles.stageCardPhoto}`} animate={reduceMotion ? undefined : { y: [0,-8,0], rotateZ: [-6,-3,-6] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}>
          <div><Image src="/occasion-love.png" alt="A meaningful photo selected for a personalized balloon" fill priority sizes="220px" /></div>
          <span><Camera size={14} /> 01 · Your memory</span>
        </motion.div>
        <motion.div className={styles.stageLens} animate={reduceMotion ? undefined : { rotateY: [0,10,0,-10,0], y: [0,-6,0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <i aria-hidden="true" />
          <Image src="/logo-transparent.png" alt="" width={108} height={135} />
          <small>Balloon Lab</small>
        </motion.div>
        <motion.div className={`${styles.stageCard} ${styles.stageCardReveal}`} animate={reduceMotion ? undefined : { y: [0,9,0], rotateZ: [5,3,5] }} transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut" }}>
          <div><Image src="/balloon-gallery.png" alt="Finished personalized photo balloons ready for a celebration" fill priority sizes="300px" /></div>
          <span><Sparkles size={14} /> 06 · The reveal</span>
        </motion.div>
        <div className={styles.stageTrail} aria-hidden="true"><b /><b /><b /></div>
      </motion.div>
    </section>
  );
}
