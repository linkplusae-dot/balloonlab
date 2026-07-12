"use client";

import { useEffect, useRef } from "react";

export function ScrollReveal({ children, className = "", effect = "rise" }: { children: React.ReactNode; className?: string; effect?: "rise" | "left" | "right" | "scale" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add("revealed"); observer.unobserve(node); }
    }, { threshold: .15 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`scroll-reveal reveal-${effect} ${className}`}>{children}</div>;
}
