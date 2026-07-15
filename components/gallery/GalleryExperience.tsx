"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Camera, ChevronLeft, ChevronRight, Heart, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "@/app/gallery/gallery.module.css";

const categories = ["All", "Birthdays", "Love", "Kids & Newborns", "Events", "Corporate", "Behind the Scenes"] as const;
type Category = (typeof categories)[number];

type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  alt: string;
  caption: string;
  tone: string;
  shape: "portrait" | "landscape" | "standard";
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "A birthday in royal blue",
    category: "Birthdays",
    image: "/occasion-birthdays.png",
    alt: "Blue and purple personalized birthday photo balloon",
    caption: "A polished birthday arrangement shaped around one favourite photo.",
    tone: "Royal blue · Lavender",
    shape: "portrait",
  },
  {
    id: 2,
    title: "Made for two",
    category: "Love",
    image: "/occasion-love.png",
    alt: "Pink personalized photo balloon created for a romantic celebration",
    caption: "Soft pink details, a meaningful portrait and a finish made for the moment.",
    tone: "Hot pink · Soft blush",
    shape: "landscape",
  },
  {
    id: 3,
    title: "Little moments, beautifully held",
    category: "Kids & Newborns",
    image: "/occasion-kids.png",
    alt: "Blue personalized balloon for a child or newborn celebration",
    caption: "A gentle blue keepsake for a welcome, milestone or joyful first birthday.",
    tone: "Sky blue · Pearl",
    shape: "standard",
  },
  {
    id: 4,
    title: "A centrepiece with a story",
    category: "Events",
    image: "/occasion-events.png",
    alt: "Personalized photo balloon arranged as an event centrepiece",
    caption: "A dimensional focal point designed to carry the story of the occasion.",
    tone: "Cyan · Royal blue",
    shape: "landscape",
  },
  {
    id: 5,
    title: "The team, elevated",
    category: "Corporate",
    image: "/occasion-corporate.png",
    alt: "Corporate photo balloon with a team portrait and navy ribbon",
    caption: "A clean corporate gift for teams, launches, milestones and branded moments.",
    tone: "Deep navy · Silver",
    shape: "portrait",
  },
  {
    id: 6,
    title: "A surprise without a reason",
    category: "Love",
    image: "/occasion-surprise.png",
    alt: "Pastel personalized balloon created as a thoughtful surprise",
    caption: "Because an ordinary day can still become a memory worth keeping.",
    tone: "Purple · Pastel pink",
    shape: "standard",
  },
  {
    id: 7,
    title: "Inside the Balloon Lab palette",
    category: "Behind the Scenes",
    image: "/balloon-gallery.png",
    alt: "Three Balloon Lab photo balloon styles arranged together in the studio",
    caption: "Colour, ribbon and photo placement come together before the final reveal.",
    tone: "Studio palette · UAE",
    shape: "landscape",
  },
];

const cardVariants = {
  hidden: (index: number) => ({ opacity: 0, y: 64, rotateX: 16, rotateY: index % 2 ? 7 : -7, scale: 0.91, z: -80 }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    z: 0,
    transition: { type: "spring" as const, stiffness: 68, damping: 18, delay: (index % 4) * 0.045 },
  }),
  exit: { opacity: 0, y: -28, rotateX: -8, scale: 0.96, transition: { duration: 0.22 } },
};

export function GalleryExperience() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const visibleItems = useMemo(
    () => activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );
  const selectedIndex = galleryItems.findIndex((item) => item.id === selectedId);
  const selectedItem = selectedIndex >= 0 ? galleryItems[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedId(null);
    window.setTimeout(() => lastTriggerRef.current?.focus(), 0);
  };
  const moveLightbox = (direction: number) => {
    if (selectedIndex < 0) return;
    const nextIndex = (selectedIndex + direction + galleryItems.length) % galleryItems.length;
    setSelectedId(galleryItems[nextIndex].id);
  };

  useEffect(() => {
    if (!selectedItem) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") moveLightbox(1);
      if (event.key === "ArrowLeft") moveLightbox(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <>
      <section ref={heroRef} className={styles.hero} aria-labelledby="gallery-title">
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroGlowPink} aria-hidden="true" />
        <div className={styles.heroGlowBlue} aria-hidden="true" />
        <motion.div
          className={styles.heroCopy}
          initial={reduceMotion ? false : { opacity: 0, x: -72, rotateY: -14, z: -90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0, z: 0 }}
          transition={{ type: "spring", stiffness: 58, damping: 17, delay: 0.16 }}
        >
          <p className={styles.eyebrow}><Camera size={15} aria-hidden="true" /> Balloon Lab gallery</p>
          <h1 id="gallery-title">Moments made <span>visible.</span></h1>
          <p className={styles.heroLead}>Browse photo balloon inspiration for birthdays, love, little ones, events and thoughtful gifting across the UAE.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#gallery-collection">View the gallery <ArrowRight size={18} /></a>
            <Link className={styles.secondaryButton} href="/designs">Explore designs <ArrowUpRight size={18} /></Link>
          </div>
          <div className={styles.heroNote}><Sparkles size={16} /><span><b>Made around your memory</b><small>Every design begins with your photo or idea.</small></span></div>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          style={reduceMotion ? undefined : { y: heroY, rotateZ: heroRotate }}
          initial={reduceMotion ? false : { opacity: 0, x: 80, rotateY: 24, scale: 0.86 }}
          animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 52, damping: 17, delay: 0.25 }}
          aria-label="A selection of Balloon Lab photo balloon styles"
        >
          <div className={styles.heroHalo} aria-hidden="true" />
          <div className={`${styles.heroPhoto} ${styles.heroPhotoMain}`}><Image src="/balloon-gallery.png" alt="Three personalized photo balloon styles" fill priority sizes="(max-width: 760px) 88vw, 50vw" /></div>
          <div className={`${styles.heroPhoto} ${styles.heroPhotoLeft}`}><Image src="/occasion-love.png" alt="Pink romantic photo balloon" fill sizes="180px" /></div>
          <div className={`${styles.heroPhoto} ${styles.heroPhotoRight}`}><Image src="/occasion-kids.png" alt="Blue kids photo balloon" fill sizes="180px" /></div>
          <span className={styles.heroLens} aria-hidden="true"><Image src="/logo-transparent.png" alt="" width={108} height={135} /></span>
        </motion.div>
      </section>

      <section id="gallery-collection" className={styles.collection} aria-labelledby="collection-title">
        <motion.div
          className={styles.collectionHeading}
          initial={reduceMotion ? false : { opacity: 0, y: 54, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ type: "spring", stiffness: 70, damping: 18 }}
        >
          <p className={styles.sectionKicker}><Heart size={14} fill="currentColor" /> Find your feeling</p>
          <h2 id="collection-title">One gallery.<br/><span>Many reasons to celebrate.</span></h2>
          <p>Choose an occasion or explore the full collection.</p>
        </motion.div>

        <div className={styles.categoryTabs} role="group" aria-label="Filter gallery by occasion">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={activeCategory === category ? styles.activeTab : undefined}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.galleryGrid} aria-live="polite">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.article
                layout
                key={item.id}
                custom={index}
                variants={reduceMotion ? undefined : cardVariants}
                initial={reduceMotion ? false : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                exit={reduceMotion ? undefined : "exit"}
                viewport={{ once: false, amount: 0.16 }}
                className={`${styles.galleryCard} ${styles[item.shape]}`}
              >
                <button
                  ref={(node) => { if (node && selectedId === item.id) lastTriggerRef.current = node; }}
                  type="button"
                  className={styles.cardButton}
                  onClick={(event) => {
                    lastTriggerRef.current = event.currentTarget;
                    setSelectedId(item.id);
                  }}
                  aria-label={`Open ${item.title}`}
                >
                  <span className={styles.cardImage}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 31vw" /></span>
                  <span className={styles.cardShade} aria-hidden="true" />
                  <span className={styles.cardIndex}>0{item.id}</span>
                  <span className={styles.cardOpen}><ArrowUpRight size={17} /></span>
                  <span className={styles.cardContent}>
                    <small>{item.category}</small>
                    <b>{item.title}</b>
                    <em>{item.tone}</em>
                  </span>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <motion.section
        className={styles.galleryCta}
        initial={reduceMotion ? false : { opacity: 0, y: 70, rotateX: 16, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.22 }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
      >
        <div className={styles.ctaOrb} aria-hidden="true"><Image src="/logo-transparent.png" alt="" width={108} height={135} /></div>
        <p><Sparkles size={15} /> Your photo. Your colours. Your moment.</p>
        <h2>Seen something you love?</h2>
        <span>Use it as inspiration and we’ll shape the details around your memory.</span>
        <a href="https://wa.me/971561315511?text=Hello%20Balloon%20Lab%2C%20I%20would%20like%20to%20create%20a%20photo%20balloon%20inspired%20by%20your%20gallery." target="_blank" rel="noreferrer">Create Something Similar <ArrowUpRight size={19} /></a>
      </motion.section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-title"
              className={styles.lightbox}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 55, rotateX: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, rotateX: -8, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              <button ref={closeButtonRef} type="button" className={styles.closeButton} onClick={closeLightbox} aria-label="Close gallery image"><X size={21} /></button>
              <motion.div
                key={selectedItem.id}
                className={styles.lightboxImage}
                drag={reduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 70) moveLightbox(info.offset.x < 0 ? 1 : -1); }}
                initial={reduceMotion ? false : { opacity: 0, rotateY: 8 }}
                animate={{ opacity: 1, rotateY: 0 }}
              >
                <Image src={selectedItem.image} alt={selectedItem.alt} fill sizes="(max-width: 760px) 94vw, 66vw" priority />
              </motion.div>
              <div className={styles.lightboxInfo}>
                <small>{selectedItem.category} · {selectedItem.tone}</small>
                <h2 id="lightbox-title">{selectedItem.title}</h2>
                <p>{selectedItem.caption}</p>
                <div className={styles.lightboxActions}>
                  <a href={`https://wa.me/971561315511?text=${encodeURIComponent(`Hello Balloon Lab, I would like to create something similar to “${selectedItem.title}”.`)}`} target="_blank" rel="noreferrer">Create Similar <ArrowUpRight size={17} /></a>
                  <Link href="/designs#catalogue">Related designs</Link>
                </div>
              </div>
              <button type="button" className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={() => moveLightbox(-1)} aria-label="Previous gallery image"><ChevronLeft /></button>
              <button type="button" className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={() => moveLightbox(1)} aria-label="Next gallery image"><ChevronRight /></button>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
