"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: number | string;
  name: string;
  avatar: string;
  description: string;
}

interface TestimonialCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[];
  showArrows?: boolean;
  showDots?: boolean;
}

const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  ({ className, testimonials, showArrows = true, showDots = true, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(1);
    const reduceMotion = useReducedMotion();

    const move = React.useCallback(
      (nextDirection: number) => {
        if (!testimonials.length) return;
        setDirection(nextDirection);
        setCurrentIndex((current) => (current + nextDirection + testimonials.length) % testimonials.length);
      },
      [testimonials.length],
    );

    const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (Math.abs(info.offset.x) > 72 || Math.abs(info.velocity.x) > 450) {
        move(info.offset.x < 0 ? 1 : -1);
      }
    };

    if (!testimonials.length) return null;
    const active = testimonials[currentIndex];

    return (
      <div ref={ref} className={cn("flex min-h-72 w-full items-center justify-center", className)} {...props}>
        <div className="relative h-72 w-full max-w-md" aria-live="polite">
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.article
              key={active.id}
              custom={direction}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 70, rotateY: direction * 10, scale: 0.94 }}
              animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -55, rotateY: direction * -8, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              drag={reduceMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.55}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 cursor-grab rounded-[2rem] border border-white/80 bg-white/80 p-7 shadow-[0_28px_70px_rgba(46,39,130,.16)] backdrop-blur-xl active:cursor-grabbing"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <Image src={active.avatar} alt="" width={72} height={72} className="h-18 w-18 rounded-full object-cover shadow-lg" />
                <h3 className="text-lg font-semibold text-[#06143D]">{active.name}</h3>
                <p className="text-sm leading-7 text-[#53617F]">{active.description}</p>
              </div>
            </motion.article>
          </AnimatePresence>

          {showArrows && (
            <div className="absolute inset-x-4 top-4 z-10 flex justify-between">
              <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial" className="grid min-h-11 min-w-11 place-items-center rounded-full bg-white/80 text-[#51607D] shadow-md transition hover:text-[#7B2CFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005BFF]">
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => move(1)} aria-label="Next testimonial" className="grid min-h-11 min-w-11 place-items-center rounded-full bg-white/80 text-[#51607D] shadow-md transition hover:text-[#7B2CFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005BFF]">
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          )}

          {showDots && (
            <div className="absolute -bottom-7 inset-x-0 flex justify-center gap-2" aria-label="Choose testimonial">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={index === currentIndex}
                  className={cn("h-3 min-w-3 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005BFF]", index === currentIndex ? "w-8 bg-[#7B2CFF]" : "bg-[#C9C6DB]")}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
);

TestimonialCarousel.displayName = "TestimonialCarousel";

export { TestimonialCarousel };
