"use client";

import Image from "next/image";
import { Crown, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/about/about.module.css";

const leaders = [
  {
    image: "/mubarak-obaid-al-dhaheri-founder-balloon-lab-uae.webp",
    name: "Mubarak Obaid Al Dhaheri",
    role: "Founder and CEO",
    heading: "Our Founder and CEO",
    label: "Vision & creative direction",
    description: "Mubarak Obaid Al Dhaheri leads Balloon Lab UAE’s vision, growth and commitment to making personalized balloon gifting feel genuinely personal.",
    icon: Crown,
    id: "founder",
    cardClass: styles.leaderCardFirst,
    cropClass: styles.founderCrop,
  },
  {
    image: "/malik-muhammad-general-manager-balloon-lab-uae.webp",
    name: "Malik Muhammad",
    role: "General Manager",
    heading: "Our General Manager",
    label: "Company management & operations",
    description: "Malik Muhammad oversees Balloon Lab UAE’s daily operations, customer experience and coordination from the first conversation to the completed celebration.",
    icon: ShieldCheck,
    id: "general-manager",
    cardClass: styles.leaderCardSecond,
    cropClass: styles.managerCrop,
  },
  {
    image: "/zain-mustafa-operational-manager-balloon-lab-uae.png",
    name: "Zain Mustafa",
    role: "Operational Manager",
    heading: "Our Operational Manager",
    label: "Operational coordination & delivery",
    description: "Zain Mustafa manages Balloon Lab UAE’s operational workflows, coordinating day-to-day execution so each customer order moves smoothly from planning to preparation.",
    icon: Workflow,
    id: "operational-manager",
    cardClass: styles.leaderCardThird,
    cropClass: styles.operationalManagerCrop,
  },
];

export function LeadershipShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

  const firstY = useTransform(scrollYProgress, [0.15, 0.52, 0.84], [80, 0, -80]);
  const firstRotate = useTransform(scrollYProgress, [0.15, 0.52, 0.84], [-8, 0, -10]);
  const firstScale = useTransform(scrollYProgress, [0.15, 0.52, 0.84], [0.91, 1, 0.9]);
  const secondY = useTransform(scrollYProgress, [0.2, 0.58, 0.9], [145, 0, -32]);
  const secondRotate = useTransform(scrollYProgress, [0.2, 0.58, 0.9], [12, 0, 7]);
  const secondScale = useTransform(scrollYProgress, [0.2, 0.58, 0.9], [0.86, 1, 0.95]);
  const thirdY = useTransform(scrollYProgress, [0.24, 0.62, 0.92], [95, 0, -64]);
  const thirdRotate = useTransform(scrollYProgress, [0.24, 0.62, 0.92], [-10, 0, -6]);
  const thirdScale = useTransform(scrollYProgress, [0.24, 0.62, 0.92], [0.89, 1, 0.93]);

  const firstMobileX = useTransform(scrollYProgress, [0.1, 0.3, 0.43], [0, 0, -150]);
  const firstMobileY = useTransform(scrollYProgress, [0.1, 0.3, 0.43], [55, 0, -45]);
  const firstMobileRotate = useTransform(scrollYProgress, [0.1, 0.31, 0.43], [-7, 0, -15]);
  const firstMobileScale = useTransform(scrollYProgress, [0.1, 0.3, 0.43], [0.9, 1, 0.86]);
  const firstMobileOpacity = useTransform(scrollYProgress, [0.1, 0.34, 0.46], [1, 1, 0]);
  const secondMobileX = useTransform(scrollYProgress, [0.32, 0.5, 0.68], [150, 0, -150]);
  const secondMobileY = useTransform(scrollYProgress, [0.32, 0.5, 0.68], [65, 0, -45]);
  const secondMobileRotate = useTransform(scrollYProgress, [0.32, 0.5, 0.68], [15, 0, -15]);
  const secondMobileScale = useTransform(scrollYProgress, [0.32, 0.5, 0.68], [0.86, 1, 0.86]);
  const secondMobileOpacity = useTransform(scrollYProgress, [0.3, 0.43, 0.7], [0, 1, 0]);
  const thirdMobileX = useTransform(scrollYProgress, [0.6, 0.78, 0.96], [150, 0, 0]);
  const thirdMobileY = useTransform(scrollYProgress, [0.6, 0.78, 0.96], [65, 0, -15]);
  const thirdMobileRotate = useTransform(scrollYProgress, [0.6, 0.78, 0.96], [15, 0, -3]);
  const thirdMobileScale = useTransform(scrollYProgress, [0.6, 0.78, 0.96], [0.86, 1, 1]);
  const thirdMobileOpacity = useTransform(scrollYProgress, [0.58, 0.72, 0.96], [0, 1, 1]);

  const cardMotion = [
    { y: firstY, rotateY: firstRotate, scale: firstScale },
    { y: secondY, rotateY: secondRotate, scale: secondScale },
    { y: thirdY, rotateY: thirdRotate, scale: thirdScale },
  ];
  const mobileCardMotion = [
    { x: firstMobileX, y: firstMobileY, rotateY: firstMobileRotate, scale: firstMobileScale, opacity: firstMobileOpacity },
    { x: secondMobileX, y: secondMobileY, rotateY: secondMobileRotate, scale: secondMobileScale, opacity: secondMobileOpacity },
    { x: thirdMobileX, y: thirdMobileY, rotateY: thirdMobileRotate, scale: thirdMobileScale, opacity: thirdMobileOpacity },
  ];
  const nameColors = ["#6e8efb", "#a779e9", "#6e8efb"];

  return (
    <section ref={sectionRef} id="leadership" className={styles.leadershipSection} aria-labelledby="leadership-title">
      <div className={styles.leadershipHeading}>
        <p className={styles.sectionKicker}><Sparkles size={15} /> The people behind the brand</p>
        <h2 id="leadership-title">Meet Our Leadership</h2>
        <p>Balloon Lab UAE is guided by leadership focused on thoughtful design, dependable operations and a clear customer experience.</p>
      </div>

      <div className={styles.leadershipScroll}>
        <div className={styles.leadershipStage}>
          <div className={styles.leadershipGlow} aria-hidden="true" />
          {leaders.map(({ image, name, role, heading, label, description, icon: Icon, id, cardClass, cropClass }, index) => (
            <motion.article
              key={name}
              id={id}
              className={`${styles.leaderCard} ${cardClass}`}
              style={reduceMotion ? undefined : isMobile ? mobileCardMotion[index] : cardMotion[index]}
              initial={reduceMotion ? false : { opacity: 0, rotateX: 18, z: -120 }}
              whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: index * 0.12 }}
            >
              <div className={styles.leaderImage}>
                <Image
                  src={image}
                  alt={`${name}, ${role} of Balloon Lab UAE`}
                  fill
                  sizes="(max-width: 700px) 86vw, (max-width: 1100px) 30vw, 410px"
                  className={cropClass}
                />
                <span className={styles.leaderRolePill}><Icon size={15} /> {role}</span>
              </div>
              <div className={styles.leaderInfo}>
                <h2 className={styles.leaderSectionTitle}>{heading}</h2>
                <h3
                  className={styles.leaderName}
                  style={{
                    background: `linear-gradient(135deg, ${nameColors[index]} 0%, ${nameColors[index]} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    width: "fit-content",
                  }}
                >
                  {name}
                </h3>
                <p>{description}</p>
              </div>
            </motion.article>
          ))}
          <p className={styles.leadershipMobileCue}><span /> Scroll to meet the team</p>
        </div>
      </div>
    </section>
  );
}
