"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import styles from "@/app/how-it-works/how-it-works.module.css";

export function HowItWorksFinalCta() {
  const reduceMotion = useReducedMotion();
  return (
    <section className={styles.finalSection}>
      <motion.div
        className={styles.finalCard}
        initial={reduceMotion ? false : { opacity: 0, y: 75, rotateX: 17, scale: .92, z: -90 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, z: 0 }}
        viewport={{ once: false, amount: .24 }}
        transition={{ type: "spring", stiffness: 58, damping: 18 }}
      >
        <div className={styles.finalRings} aria-hidden="true" />
        <motion.span className={styles.finalLogo} animate={reduceMotion ? undefined : { y: [0,-9,0], rotateY: [0,10,0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><Image src="/logo-transparent.png" alt="" width={108} height={135} /></motion.span>
        <p><Sparkles size={15} /> Ready when your memory is</p>
        <h2>Send the photo.<br/>We’ll guide the rest.</h2>
        <span>Start with your occasion, date and delivery area so we can help you take the next step.</span>
        <a href="https://wa.me/971561315511?text=Hello%20Balloon%20Lab%2C%20I%20would%20like%20to%20start%20a%20personalized%20photo%20balloon%20order." target="_blank" rel="noreferrer"><FaWhatsapp size={18} /> Start on WhatsApp <ArrowUpRight size={18} /></a>
      </motion.div>
    </section>
  );
}
