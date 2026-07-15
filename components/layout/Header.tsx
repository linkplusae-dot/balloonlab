"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ContactRound, Home, Menu, Palette, Sparkles, UsersRound, X } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Designs", href: "/designs" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

const mobileTabs = [
  { label: "Home", href: "/", icon: Home },
  { label: "Designs", href: "/designs", icon: Palette },
  { label: "Create", href: "/designs#catalogue", icon: Sparkles, primary: true },
  { label: "About", href: "/about", icon: UsersRound },
  { label: "Contact", href: "/#contact", icon: ContactRound },
];

export function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstMobileLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) firstMobileLink.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);
  const currentLabel = pathname.startsWith("/about")
    ? "Our story"
    : pathname.startsWith("/designs")
      ? "Design studio"
      : "Floating memories";

  const entrance = reduceMotion
    ? { initial: false as const, animate: { opacity: 1, x: "-50%", y: 0 } }
    : {
        initial: { opacity: 0, x: "-50%", y: -90, rotateX: -65, scale: 0.88 },
        animate: { opacity: 1, x: "-50%", y: 0, rotateX: 0, scale: 1 },
      };

  return (
    <>
      <motion.header
        {...entrance}
        transition={{ type: "spring", stiffness: 58, damping: 17, mass: 1.1 }}
        className={`reference-header ${scrolled ? "is-scrolled" : ""}`}
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -35, rotateY: -55 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ type: "spring", delay: 0.22, stiffness: 90, damping: 16 }}
        >
          <Link href="/" className="reference-brand" aria-label="Balloon Lab home">
            <span className="reference-logo-crop">
              <Image
                src="/logo-transparent.png"
                alt=""
                width={108}
                height={135}
                style={{ scale: "2" }}
                priority
              />
            </span>
            <strong>
              Balloon{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #F72585, #7B2CFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Lab
              </span>
            </strong>
          </Link>
        </motion.div>

        <nav className="reference-nav" aria-label="Main navigation">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={reduceMotion ? false : { opacity: 0, y: -18, rotateX: -50 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3 + index * 0.055, type: "spring", stiffness: 120, damping: 14 }}
              whileHover={reduceMotion ? undefined : { y: -3, rotateX: 8, scale: 1.05 }}
            >
              <Link className={isActive(item.href) ? "active" : ""} href={item.href}>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="reference-header-cta"
          initial={reduceMotion ? false : { opacity: 0, x: 35, rotateY: 45 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.42, type: "spring", stiffness: 80, damping: 14 }}
          whileHover={reduceMotion ? undefined : { scale: 1.06, rotateX: -6, rotateY: 8 }}
        >
          <Link href="/designs#catalogue" className="reference-cta">
            Create Yours
          </Link>
        </motion.div>

        <motion.button
          type="button"
          whileTap={reduceMotion ? undefined : { scale: 0.88, rotateZ: 8 }}
          className="reference-menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span className="reference-menu-copy"><small>{currentLabel}</small><b>{open ? "Close" : "Explore"}</b></span>
          <span className="reference-menu-lens" aria-hidden="true">
            <span className="reference-menu-lens-shine" />
            {open ? <X size={19} /> : <Menu size={19} />}
          </span>
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-label="Mobile navigation"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -25, scale: 0.9, rotateX: -25 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18, scale: 0.94, rotateX: -15 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="reference-mobile-menu open"
          >
            <div className="mobile-menu-head">
              <span className="mobile-menu-orb">
                <Image src="/logo-transparent.png" alt="" width={108} height={135} />
              </span>
              <div>
                <small>Floating memories</small>
                <b>Where to next?</b>
              </div>
            </div>
            <nav aria-label="Mobile navigation links">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={reduceMotion ? false : { opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    ref={index === 0 ? firstMobileLink : undefined}
                    onClick={() => setOpen(false)}
                    href={item.href}
                  >
                    <span>0{index + 1}</span>
                    {item.label}
                    <b aria-hidden="true">↗</b>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link href="/designs#catalogue" onClick={() => setOpen(false)} className="reference-cta">
              Create Yours
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="reference-bottom-nav" aria-label="Mobile primary navigation">
        {mobileTabs.map(({ label, href, icon: Icon, primary }) => {
          const active = !primary && isActive(href);
          return (
            <Link
              key={label}
              href={href}
              className={`${primary ? "is-primary" : ""} ${active ? "is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span><Icon size={primary ? 22 : 19} strokeWidth={primary ? 2.4 : 1.9} aria-hidden="true" /></span>
              <small>{label}</small>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
