"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "@/app/about/about.module.css";

export function AboutHero() {
  const reduceMotion = useReducedMotion();
  const [positionsSwapped, setPositionsSwapped] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const swapTimer = window.setInterval(() => {
      setPositionsSwapped((current) => !current);
    }, 5200);
    return () => window.clearInterval(swapTimer);
  }, [reduceMotion]);

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
          <Sparkles size={15} aria-hidden="true" /> Our story and leadership
        </motion.p>
        <motion.h1 {...entrance(0.27)} id="about-title">
          About Balloon Lab <span>UAE</span>
        </motion.h1>
        <motion.p {...entrance(0.38)} className={styles.heroLead}>
          Balloon Lab UAE is a personalized balloon gifting company in the United Arab Emirates,
          creating custom photo balloons and celebration designs for birthdays, love, newborns,
          events, corporate gifting and meaningful surprises.
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
        className={styles.heroStory}
        initial={reduceMotion ? false : { opacity: 0, x: 80, rotateY: 22, scale: 0.86 }}
        animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 52, damping: 17, delay: 0.28 }}
        aria-label="Balloon Lab leadership"
      >
        <div className={styles.storyHalo} aria-hidden="true" />
        <motion.div
          className={`${styles.storyPortrait} ${styles.storyPortraitFounder}`}
          animate={{
            x: !reduceMotion && positionsSwapped ? "112%" : "0%",
            y: !reduceMotion && positionsSwapped ? 34 : 0,
            rotateY: !reduceMotion && positionsSwapped ? -12 : 10,
            rotateZ: !reduceMotion && positionsSwapped ? 3.5 : -3,
            scale: !reduceMotion && positionsSwapped ? 0.93 : 1,
            z: !reduceMotion && positionsSwapped ? 70 : 115,
          }}
          transition={{ type: "spring", stiffness: 48, damping: 18, mass: 1.1 }}
          style={{ zIndex: positionsSwapped ? 3 : 5 }}
        >
          <span className={styles.storyImage}>
            <Image src="/mubarak-obaid-al-dhaheri-founder-balloon-lab-uae.webp" alt="Mubarak Obaid Al Dhaheri, Founder and CEO of Balloon Lab UAE" fill preload sizes="(max-width: 700px) 58vw, 310px" />
          </span>
          <span className={styles.storyCaption}><small>Founder and CEO</small><b>Mubarak Obaid Al Dhaheri</b></span>
        </motion.div>
        <motion.div
          className={`${styles.storyPortrait} ${styles.storyPortraitManager}`}
          animate={{
            x: !reduceMotion && positionsSwapped ? "0%" : "112%",
            y: !reduceMotion && positionsSwapped ? 0 : 34,
            rotateY: !reduceMotion && positionsSwapped ? 10 : -12,
            rotateZ: !reduceMotion && positionsSwapped ? -3 : 3.5,
            scale: !reduceMotion && positionsSwapped ? 1 : 0.93,
            z: !reduceMotion && positionsSwapped ? 115 : 70,
          }}
          transition={{ type: "spring", stiffness: 48, damping: 18, mass: 1.1 }}
          style={{ zIndex: positionsSwapped ? 5 : 3 }}
        >
          <span className={styles.storyImage}>
            <Image src="/malik-muhammad-general-manager-balloon-lab-uae.webp" alt="Malik Muhammad, General Manager of Balloon Lab UAE" fill sizes="(max-width: 700px) 48vw, 260px" />
          </span>
          <span className={styles.storyCaption}><small>General Manager</small><b>Malik Muhammad</b></span>
        </motion.div>
        <div className={styles.storySeal}>
          <span><Image src="/logo-transparent.png" alt="" width={108} height={135} /></span>
          <small>UAE personalized gifting</small>
          <b>Memories Made</b>
        </div>
        <div className={styles.storyLine} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.storyGlassNote}>
          <Heart size={17} fill="currentColor" />
          <span><b>People first</b><small>Personal from idea to reveal</small></span>
        </div>
      </motion.div>
    </section>
  );
}
