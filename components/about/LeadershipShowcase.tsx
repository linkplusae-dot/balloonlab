"use client";

import Image from "next/image";
import { Crown, ShieldCheck, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/about/about.module.css";

const leaders = [
  {
    image: "/founder1.jpeg",
    name: "Mubarak Obaid Al Dhaheri",
    role: "Founder & CEO",
    label: "Vision & creative direction",
    description: "Guiding Balloon Lab’s vision and its promise to make personalized gifting feel truly personal.",
    icon: Crown,
  },
  {
    image: "/founder2.jpeg",
    name: "Malik Muhammad",
    role: "General Manager",
    label: "Company management & operations",
    description: "Leading the day-to-day coordination that carries each custom idea from conversation to celebration.",
    icon: ShieldCheck,
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

  const firstMobileX = useTransform(scrollYProgress, [0.18, 0.45, 0.58], [0, 0, -150]);
  const firstMobileY = useTransform(scrollYProgress, [0.18, 0.45, 0.58], [55, 0, -45]);
  const firstMobileRotate = useTransform(scrollYProgress, [0.18, 0.48, 0.58], [-7, 0, -15]);
  const firstMobileScale = useTransform(scrollYProgress, [0.18, 0.45, 0.58], [0.9, 1, 0.86]);
  const firstMobileOpacity = useTransform(scrollYProgress, [0.18, 0.48, 0.6], [1, 1, 0]);
  const secondMobileX = useTransform(scrollYProgress, [0.42, 0.6, 0.84], [150, 0, 0]);
  const secondMobileY = useTransform(scrollYProgress, [0.42, 0.6, 0.84], [65, 0, -15]);
  const secondMobileRotate = useTransform(scrollYProgress, [0.42, 0.62, 0.84], [15, 0, -3]);
  const secondMobileScale = useTransform(scrollYProgress, [0.42, 0.62, 0.84], [0.86, 1, 1]);
  const secondMobileOpacity = useTransform(scrollYProgress, [0.4, 0.55, 0.84], [0, 1, 1]);

  const cardMotion = [
    { y: firstY, rotateY: firstRotate, scale: firstScale },
    { y: secondY, rotateY: secondRotate, scale: secondScale },
  ];
  const mobileCardMotion = [
    { x: firstMobileX, y: firstMobileY, rotateY: firstMobileRotate, scale: firstMobileScale, opacity: firstMobileOpacity },
    { x: secondMobileX, y: secondMobileY, rotateY: secondMobileRotate, scale: secondMobileScale, opacity: secondMobileOpacity },
  ];

  return (
    <section ref={sectionRef} id="leadership" className={styles.leadershipSection} aria-labelledby="leadership-title">
      <div className={styles.leadershipHeading}>
        <p className={styles.sectionKicker}><Sparkles size={15} /> Meet the leadership</p>
        <h2 id="leadership-title">Led with imagination.<br /><span>Built with care.</span></h2>
        <p>Two complementary perspectives, one shared purpose: making every Balloon Lab moment feel considered from first idea to final surprise.</p>
      </div>

      <div className={styles.leadershipScroll}>
        <div className={styles.leadershipStage}>
          <div className={styles.leadershipGlow} aria-hidden="true" />
          <div className={styles.leadershipSpine} aria-hidden="true"><i /><span>01</span><span>02</span></div>
          {leaders.map(({ image, name, role, label, description, icon: Icon }, index) => (
            <motion.article
              key={name}
              className={`${styles.leaderCard} ${index === 0 ? styles.leaderCardFirst : styles.leaderCardSecond}`}
              style={reduceMotion ? undefined : isMobile ? mobileCardMotion[index] : cardMotion[index]}
              initial={reduceMotion ? false : { opacity: 0, rotateX: 18, z: -120 }}
              whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: index * 0.12 }}
            >
              <div className={styles.leaderImage}>
                <Image
                  src={image}
                  alt={`${role} at Balloon Lab`}
                  fill
                  sizes="(max-width: 700px) 86vw, (max-width: 1100px) 44vw, 520px"
                  className={index === 0 ? styles.founderCrop : styles.managerCrop}
                />
                <span className={styles.leaderNumber}>0{index + 1}</span>
                <span className={styles.leaderRolePill}><Icon size={15} /> {role}</span>
              </div>
              <div className={styles.leaderInfo}>
                <small>{label}</small>
                <h3 className={styles.leaderName} style={{
                  background: `linear-gradient(135deg, ${index === 0 ? '#6e8efb' : '#a779e9'} 0%, ${index === 0 ? '#6e8efb' : '#a779e9'} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  width: 'fit-content',
                }}>
                  {name}
                </h3>
                <p>{description}</p>
              </div>
            </motion.article>
          ))}
          <p className={styles.leadershipMobileCue}><span /> Scroll to meet the team</p>
          <div className={styles.leadershipFloor} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
