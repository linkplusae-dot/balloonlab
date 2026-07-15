"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  AtSign,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Designs", href: "/designs" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

const occasions = ["Birthdays", "Love & Romance", "Kids", "Events", "Corporate", "Just Because"];

const parentVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.085, delayChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: (direction: number) => ({ opacity: 0, y: 74, x: direction * 34, rotateX: 18, rotateY: direction * 14, scale: 0.9, z: -120 }),
  visible: { opacity: 1, y: 0, x: 0, rotateX: 0, rotateY: 0, scale: 1, z: 0, transition: { type: "spring", stiffness: 60, damping: 17, mass: 1.05 } },
};

export function Footer() {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? { initial: false as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: false, amount: 0.08 } };

  return (
    <motion.footer
      {...motionProps}
      variants={parentVariants}
      className="premium-footer footer-3d"
      aria-labelledby="footer-heading"
    >
      <div className="footer-3d-aura footer-3d-aura-pink" aria-hidden="true" />
      <div className="footer-3d-aura footer-3d-aura-blue" aria-hidden="true" />
      <div className="footer-3d-grid" aria-hidden="true" />

      <motion.section
        className="footer-3d-stage"
        variants={reduceMotion ? undefined : cardVariants}
        custom={-1}
      >
        <div className="footer-stage-copy">
          <p><Sparkles size={15} aria-hidden="true" /> Balloon Lab · UAE</p>
          <h2 id="footer-heading">Memories were never meant to stay still.</h2>
          <span>We make them exciting and more memorable.</span>
        </div>
        <motion.div
          className="footer-logo-sculpture"
          initial={false}
          whileHover={reduceMotion ? undefined : { rotateY: 12, rotateX: -7, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
          aria-hidden="true"
        >
          <i className="footer-orbit footer-orbit-one" />
          <i className="footer-orbit footer-orbit-two" />
          <span className="footer-logo-core">
            <Image src="/logo-transparent.png" alt="" width={108} height={135} />
          </span>
          <b>UAE</b>
        </motion.div>
      </motion.section>

      <motion.div className="footer-3d-cards" variants={parentVariants}>
        <motion.section className="footer-3d-card footer-brand-card" variants={reduceMotion ? undefined : cardVariants} custom={-1}>
          <Link href="/" className="footer-brand-lockup" aria-label="Balloon Lab home">
            <span><Image src="/logo-transparent.png" alt="" width={108} height={135} /></span>
            <strong>Balloon <em>Lab</em></strong>
          </Link>
          <p>Personalized photo balloons crafted for birthdays, events, surprises, and unforgettable moments across the UAE.</p>
          <b>Memories Made</b>
        </motion.section>

        <motion.section className="footer-3d-card" variants={reduceMotion ? undefined : cardVariants} custom={1}>
          <p className="footer-card-label">Explore</p>
          <h3>Quick Links</h3>
          <ul>{quickLinks.map((item) => <li key={item.label}><Link href={item.href}>{item.label}<ArrowUpRight size={12} /></Link></li>)}</ul>
        </motion.section>

        <motion.section className="footer-3d-card" variants={reduceMotion ? undefined : cardVariants} custom={-1}>
          <p className="footer-card-label">Celebrate</p>
          <h3>Occasions</h3>
          <ul>{occasions.map((item) => <li key={item}><Link href="/designs">{item}<ArrowUpRight size={12} /></Link></li>)}</ul>
        </motion.section>

        <motion.section className="footer-3d-card footer-contact-card" variants={reduceMotion ? undefined : cardVariants} custom={1}>
          <p className="footer-card-label">Say hello</p>
          <h3>Let’s create some joy.</h3>
          <div className="footer-contact-list">
            <a href="tel:+971565344544"><Phone size={16} /><span><small>Call / WhatsApp</small>+971 56 534 4544</span></a>
            <a href="https://instagram.com/balloonlabae"><AtSign size={16} /><span><small>Instagram</small>@balloonlabae</span></a>
            <p><MapPin size={16} /><span><small>Find us</small>Al Wahda Commercial Tower, Abu Dhabi, UAE</span></p>
          </div>
          <Link href="/designs#catalogue" className="footer-primary-cta">Start Your Balloon <ArrowUpRight size={18} /></Link>
        </motion.section>
      </motion.div>

      <motion.div className="footer-3d-bottom" variants={reduceMotion ? undefined : cardVariants} custom={0}>
        <div><p>© 2026 Balloon Lab. All rights reserved.</p><small>Personalized photo balloons in UAE</small></div>
        <nav aria-label="Social links">
          <a href="https://instagram.com/balloonlabae" aria-label="Instagram"><FaInstagram size={18} /></a>
          <a href="https://www.tiktok.com/@balloonlabae" aria-label="TikTok"><FaTiktok size={17} /></a>
          <a href="https://wa.me/971565344544" aria-label="WhatsApp"><FaWhatsapp size={19} /></a>
          <a href="https://www.linkedin.com/in/balloonlab-ae-95bb74420/" aria-label="LinkedIn"><FaLinkedinIn size={17} /></a>
        </nav>
      </motion.div>
    </motion.footer>
  );
}
