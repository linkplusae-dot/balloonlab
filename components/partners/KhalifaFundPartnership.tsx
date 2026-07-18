"use client";

import Image from "next/image";
import { Building2, Handshake, Sparkles, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./KhalifaFundPartnership.module.css";

const benefits = [
  {
    icon: Building2,
    title: "UAE-rooted growth",
    text: "Building a thoughtful gifting brand with ambition grounded in the UAE.",
  },
  {
    icon: TrendingUp,
    title: "Entrepreneurial progress",
    text: "Growing with purpose while creating more meaningful customer experiences.",
  },
] as const;

export function KhalifaFundPartnership() {
  const reduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0, y: 76, rotateX: 14, scale: 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 58,
        damping: 18,
        staggerChildren: 0.08,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 34, rotateY: -10, z: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      z: 0,
      transition: { type: "spring" as const, stiffness: 70, damping: 18 },
    },
  };

  return (
    <section className={styles.section} aria-labelledby="partnership-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.pinkGlow} aria-hidden="true" />
      <div className={styles.blueGlow} aria-hidden="true" />

      <motion.div
        className={styles.card}
        variants={reduceMotion ? undefined : sectionVariants}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: false, amount: 0.24, margin: "-6% 0px -6% 0px" }}
      >
        <motion.div className={styles.copy} variants={reduceMotion ? undefined : itemVariants}>
          <p className={styles.kicker}><Handshake size={16} aria-hidden="true" /> Our strategic partner</p>
          <h2 id="partnership-title">Growing meaningful ideas, <span>together.</span></h2>
          <p className={styles.description}>
            Balloon Lab is proud to partner with Khalifa Fund. This partnership reflects a shared
            commitment to entrepreneurship, thoughtful innovation, and sustainable business growth
            in the UAE.
          </p>

          <div className={styles.benefits}>
            {benefits.map(({ icon: Icon, title, text }) => (
              <motion.article key={title} variants={reduceMotion ? undefined : itemVariants}>
                <span><Icon size={20} aria-hidden="true" /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.stage}
          variants={reduceMotion ? undefined : itemVariants}
          aria-label="Balloon Lab in partnership with Khalifa Fund"
        >
          <div className={styles.orbitOne} aria-hidden="true" />
          <div className={styles.orbitTwo} aria-hidden="true" />
          <motion.div
            className={styles.logoPlaque}
            animate={reduceMotion ? undefined : { y: [0, -9, 0], rotateY: [-4, 4, -4], rotateX: [2, -1, 2] }}
            transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className={styles.logoLabel}>In partnership with</span>
            <div className={styles.partnerLogo}>
              <Image
                src="/KhalifaFund_Logo.svg"
                alt="Khalifa Fund"
                fill
                sizes="(max-width: 700px) 72vw, 440px"
              />
            </div>
            <span className={styles.logoCaption}>Supporting enterprise and ambition in the UAE</span>
          </motion.div>

          <motion.div
            className={styles.brandOrb}
            animate={reduceMotion ? undefined : { y: [0, 7, 0], rotateZ: [-3, 3, -3] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/logo-transparent.png" alt="" width={108} height={135} />
            <small>Balloon Lab</small>
          </motion.div>
          <div className={styles.trustPill}><Sparkles size={15} /><span><b>Built in the UAE</b><small>Made to grow with purpose</small></span></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
