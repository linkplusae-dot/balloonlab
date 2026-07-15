"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Image, MapPin, MessageSquareText, Sparkles } from "lucide-react";
import styles from "@/app/how-it-works/how-it-works.module.css";

const essentials = [
  { icon: Image, number: "01", title: "Your photo or reference", text: "Use the clearest original image available." },
  { icon: CalendarDays, number: "02", title: "Occasion and date", text: "Tell us what you are celebrating and when." },
  { icon: MessageSquareText, number: "03", title: "Name or message", text: "Share the words you would like included." },
  { icon: MapPin, number: "04", title: "Delivery area", text: "Provide the UAE area for fulfilment guidance." },
];

export function OrderPreparation() {
  const reduceMotion = useReducedMotion();
  return (
    <section className={styles.prepareSection} aria-labelledby="prepare-title">
      <motion.div
        className={styles.prepareCopy}
        initial={reduceMotion ? false : { opacity: 0, x: -65, rotateY: -10 }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: false, amount: .35 }}
        transition={{ type: "spring", stiffness: 62, damping: 18 }}
      >
        <p className={styles.sectionKicker}><Sparkles size={14} /> Before you message us</p>
        <h2 id="prepare-title">Four things make ordering <span>faster.</span></h2>
        <p>A little preparation helps us understand the idea clearly and respond with the right next step.</p>
      </motion.div>
      <div className={styles.essentialsGrid}>
        {essentials.map(({ icon: Icon, number, title, text }, index) => (
          <motion.article
            key={number}
            initial={reduceMotion ? false : { opacity: 0, y: 60, rotateX: 16, rotateY: index % 2 ? -8 : 8, scale: .9 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: false, amount: .3 }}
            transition={{ type: "spring", stiffness: 65, damping: 18, delay: index * .055 }}
          >
            <span><Icon size={23} /></span>
            <small>{number}</small>
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
