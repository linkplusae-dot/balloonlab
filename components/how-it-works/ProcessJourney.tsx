"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { CheckCircle2, ImageUp, Palette, PanelsTopLeft, Printer, ScanSearch, Sparkles, Truck, type LucideIcon } from "lucide-react";
import { useRef } from "react";
import styles from "@/app/how-it-works/how-it-works.module.css";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
};

const steps: ProcessStep[] = [
  { number: "01", title: "Share a photo or idea", description: "Send the image, reference or feeling you want the balloon to hold.", detail: "A clear, original photo usually gives the best print result.", icon: ImageUp },
  { number: "02", title: "Choose the occasion and style", description: "Select a design direction, colours and the personalization you need.", detail: "You can start from our designs or describe something custom.", icon: Palette },
  { number: "03", title: "We review the details", description: "Balloon Lab checks the image quality, requirements and order information.", detail: "If something needs attention, we guide you before production.", icon: ScanSearch },
  { number: "04", title: "Your design is prepared", description: "A design proof is prepared for approval when it applies to the selected product.", detail: "Proofing and revision rules depend on the confirmed order terms.", icon: PanelsTopLeft },
  { number: "05", title: "We print, assemble and check", description: "Your balloon is produced, finished and quality checked with care.", detail: "Photo placement, colour balance and presentation are reviewed.", icon: Printer },
  { number: "06", title: "Delivery or collection", description: "Your finished balloon is completed according to the confirmed arrangements.", detail: "Timing and delivery eligibility are agreed before the order proceeds.", icon: Truck },
];

export function ProcessJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start center", "end center"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: .45 });

  return (
    <section ref={sectionRef} id="six-step-process" className={styles.processSection} aria-labelledby="steps-title">
      <motion.div
        className={styles.sectionHeading}
        initial={reduceMotion ? false : { opacity: 0, y: 55, rotateX: 12 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: false, amount: .4 }}
        transition={{ type: "spring", stiffness: 65, damping: 18 }}
      >
        <p className={styles.sectionKicker}><Sparkles size={14} /> The Balloon Lab journey</p>
        <h2 id="steps-title">Six clear steps.<br/><span>One personal result.</span></h2>
        <p>Every stage keeps your photo, occasion and final presentation connected.</p>
      </motion.div>

      <div className={styles.processTimeline}>
        <div className={styles.timelineTrack} aria-hidden="true"><motion.i style={reduceMotion ? { scaleY: 1 } : { scaleY: lineScale }} /></div>
        {steps.map(({ number, title, description, detail, icon: Icon }, index) => (
          <motion.article
            key={number}
            className={`${styles.processCard} ${index % 2 ? styles.processCardRight : styles.processCardLeft}`}
            initial={reduceMotion ? false : { opacity: 0, x: index % 2 ? 80 : -80, y: 35, rotateY: index % 2 ? -18 : 18, z: -100, scale: .9 }}
            whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0, z: 0, scale: 1 }}
            viewport={{ once: false, amount: .3 }}
            transition={{ type: "spring", stiffness: 58, damping: 17, delay: .03 * index }}
          >
            <span className={styles.stepNumber}>{number}</span>
            <span className={styles.stepIcon}><Icon size={24} aria-hidden="true" /></span>
            <div>
              <small>Step {number}</small>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className={styles.stepDetail}><CheckCircle2 size={14} /> {detail}</span>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.aside
        className={styles.processNote}
        initial={reduceMotion ? false : { opacity: 0, y: 40, rotateX: 10, scale: .94 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: false, amount: .45 }}
        transition={{ type: "spring", stiffness: 65, damping: 18 }}
      >
        <Sparkles size={20} />
        <p><b>A quick note before you order</b><span>Exact proofing, preparation time, delivery eligibility and revision rules depend on the selected product and your confirmed order terms.</span></p>
      </motion.aside>
    </section>
  );
}
