"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type RevealDirection = "up" | "left" | "right" | "scale";

const variants: Record<RevealDirection, Variants> = {
  up: { hidden: { opacity: 0, y: 54, rotateX: 8 }, visible: { opacity: 1, y: 0, rotateX: 0 } },
  left: { hidden: { opacity: 0, x: -64, rotateY: -8 }, visible: { opacity: 1, x: 0, rotateY: 0 } },
  right: { hidden: { opacity: 0, x: 64, rotateY: 8 }, visible: { opacity: 1, x: 0, rotateY: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9, z: -90 }, visible: { opacity: 1, scale: 1, z: 0 } },
};

export function RevealOnScroll({
  children,
  className,
  direction = "up",
  delay = 0,
  amount = 0.18,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  amount?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      variants={reduceMotion ? undefined : variants[direction]}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount }}
      transition={{ type: "spring", stiffness: 74, damping: 18, delay }}
    >
      {children}
    </motion.div>
  );
}
