"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

export type Occasion = { title:string; number:string; image:string; position:string; href:string };

export function OccasionCylinderCarousel({ occasions }: { occasions:Occasion[] }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef(0);
  const speedRef = useRef(.000045);
  const targetSpeedRef = useRef(.000045);
  const dragging = useRef(false);
  const pointerX = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cards = useMemo(() => [...occasions,...occasions], [occasions]);

  useEffect(() => {
    const scene = sceneRef.current;
    const track = trackRef.current;
    if (!scene || !track) return;
    const nodes = Array.from(track.children) as HTMLElement[];
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { scene.dataset.reduced = "true"; return; }
    let frame = 0;
    let previous = performance.now();
    const render = (now:number) => {
      const dt = Math.min(32, now - previous); previous = now;
      if (!dragging.current) {
        speedRef.current += (targetSpeedRef.current - speedRef.current) * .035;
        phaseRef.current -= speedRef.current * dt;
      }
      const mobile = innerWidth < 640;
      const tablet = innerWidth < 1000;
      const radiusX = Math.min(innerWidth * (mobile ? .66 : tablet ? .63 : .56), mobile ? 320 : tablet ? 600 : 850);
      const depth = mobile ? 120 : tablet ? 210 : 330;
      nodes.forEach((node,index) => {
        const angle = phaseRef.current + (index / nodes.length) * Math.PI * 2;
        const wrapped = Math.atan2(Math.sin(angle), Math.cos(angle));
        const x = Math.sin(wrapped) * radiusX;
        const front = (Math.cos(wrapped) + 1) / 2;
        const z = (front - 1) * depth;
        const y = (1 - front) * (mobile ? 16 : 34);
        const rotate = -Math.sin(wrapped) * (mobile ? 22 : 48);
        const scale = (mobile ? .82 : .72) + front * (mobile ? .18 : .28);
        const opacity = .3 + front * .7;
        const blur = mobile ? 0 : (1-front) * 2.8;
        node.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateY(${rotate}deg) scale(${scale})`;
        node.style.opacity = `${opacity}`;
        node.style.filter = `blur(${blur}px) brightness(${.78 + front*.22})`;
        node.style.zIndex = `${Math.round(front*100)}`;
        node.toggleAttribute("data-front", front > .78);
      });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(frame); if (resumeTimer.current) clearTimeout(resumeTimer.current); };
  }, [cards.length]);

  const resume = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => { targetSpeedRef.current = .000045; }, 1400);
  };
  const pointerDown = (event:React.PointerEvent) => {
    dragging.current = true; targetSpeedRef.current = 0; speedRef.current = 0;
    pointerX.current = lastX.current = event.clientX; lastTime.current = performance.now();
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const pointerMove = (event:React.PointerEvent) => {
    if (!dragging.current) return;
    const now = performance.now(); const delta = event.clientX - pointerX.current;
    phaseRef.current += delta * .0032; pointerX.current = event.clientX;
    speedRef.current = -((event.clientX-lastX.current)/Math.max(1,now-lastTime.current))*.0007;
    lastX.current=event.clientX; lastTime.current=now;
  };
  const pointerUp = () => { dragging.current=false; targetSpeedRef.current=Math.max(-.00022,Math.min(.00022,speedRef.current)); resume(); };

  return (
    <div ref={sceneRef} className="occasion-cylinder-scene" onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={pointerUp} onPointerCancel={pointerUp} onMouseEnter={()=>{targetSpeedRef.current=.000012}} onMouseLeave={()=>{if(!dragging.current)targetSpeedRef.current=.000045}}>
      <div className="occasion-cylinder-glow glow-left"/><div className="occasion-cylinder-glow glow-right"/><div className="occasion-cylinder-floor"/>
      <div ref={trackRef} className="occasion-cylinder-track">
        {cards.map((occasion,index) => <a href={occasion.href} className="occasion-cylinder-card" key={`${occasion.title}-${index}`} aria-label={`Explore ${occasion.title}`}>
          <div className="occasion-cylinder-image"><Image src={occasion.image} alt={`${occasion.title} personalized photo balloon`} fill sizes="(max-width: 640px) 82vw, (max-width: 1000px) 42vw, 28vw" style={{objectFit:"cover",objectPosition:occasion.position}}/></div>
          <span>{occasion.number}</span><h3>{occasion.title}</h3><b>Explore <i>→</i></b>
        </a>)}
      </div>
      <div className="occasion-cylinder-bubble bubble-pink"/><div className="occasion-cylinder-bubble bubble-blue"/>
      <p className="occasion-cylinder-help">Drag or swipe to explore <span>↔</span></p>
    </div>
  );
}
