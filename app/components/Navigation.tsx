"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = ["Home", "Designs",  "How It Works", "Gallery", "Contact"];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header initial={{ opacity:0, x:"-50%", y:-90, rotateX:-65, scale:.88 }} animate={{ opacity:1, x:"-50%", y:0, rotateX:0, scale:1 }} transition={{ type:"spring", stiffness:58, damping:17, mass:1.1 }} className={`reference-header ${scrolled ? "is-scrolled" : ""}`}>
        <motion.div initial={{ opacity:0, x:-35, rotateY:-55 }} animate={{ opacity:1, x:0, rotateY:0 }} transition={{ type:"spring", delay:.35, stiffness:90, damping:16 }}>
        <Link href="/" className="reference-brand" aria-label="Balloon Lab home">
          <span className="reference-logo-crop"><Image src="/logo-transparent.png" alt="" width={108} height={135} style={{scale:"2"}} priority /></span>
          <strong >Balloon <span
          style={{ font:"navera", background: "linear-gradient(to right, #F72585, #7B2CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
             Lab
            </span>
             </strong>
        </Link></motion.div>
        <nav className="reference-nav" aria-label="Main navigation">
          {navItems.map((item, index) => <motion.a initial={{opacity:0,y:-18,rotateX:-50}} animate={{opacity:1,y:0,rotateX:0}} transition={{delay:.42+index*.07,type:"spring",stiffness:120,damping:14}} whileHover={{y:-3,rotateX:8,scale:1.05}} className={index === 0 ? "active" : ""} key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>{item}</motion.a>)}
        </nav>
        <motion.a initial={{opacity:0,x:35,rotateY:45}} animate={{opacity:1,x:0,rotateY:0}} transition={{delay:.55,type:"spring",stiffness:80,damping:14}} whileHover={{scale:1.06,rotateX:-6,rotateY:8}} href="#create" className="reference-cta">Create Yours</motion.a>
        <motion.button whileTap={{scale:.88,rotateZ:8}} className="reference-menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          <i/><i/><i/>
        </motion.button>
      </motion.header>
      <AnimatePresence>{open && <motion.div initial={{opacity:0,y:-25,scale:.9,rotateX:-25}} animate={{opacity:1,y:0,scale:1,rotateX:0}} exit={{opacity:0,y:-18,scale:.94,rotateX:-15}} transition={{type:"spring",stiffness:100,damping:18}} className="reference-mobile-menu open">
        <div className="mobile-menu-head"><span className="mobile-menu-orb"><Image src="/logo-transparent.png" alt="" width={108} height={135}/></span><div><small>Floating memories</small><b>Where to next?</b></div></div>
        <nav>{navItems.map((item,index) => <motion.a initial={{opacity:0,x:-18}} animate={{opacity:1,x:0}} transition={{delay:index*.05}} key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}><span>0{index+1}</span>{item}<b>↗</b></motion.a>)}</nav>
        <a href="#create" onClick={() => setOpen(false)} className="reference-cta">Create Yours</a>
      </motion.div>}</AnimatePresence>
    </>
  );
}
