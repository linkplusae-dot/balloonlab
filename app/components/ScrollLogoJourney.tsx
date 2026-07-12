"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

export function ScrollLogoJourney() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 52, damping: 20, mass: .7, restDelta: .0005 });
  const x = useTransform(smooth, [0,.12,.27,.43,.58,.72,.86], ["14vw","25vw","-28vw","24vw","0vw","-21vw","0vw"]);
  const y = useTransform(smooth, [0,.12,.27,.43,.58,.72,.86], ["-3vh","6vh","-2vh","5vh","-4vh","4vh","38vh"]);
  const scale = useTransform(smooth, [0,.12,.27,.43,.58,.72,.86], [1,.65,.72,.78,.5,.86,.18]);
  const rotateX = useTransform(smooth, [0,.12,.27,.43,.58,.72,.86], [0,-12,9,-8,18,-10,25]);
  const rotateY = useTransform(smooth, [0,.12,.27,.43,.58,.72,.86], [-8,28,-32,35,180,335,380]);
  const rotateZ = useTransform(smooth, [0,.12,.27,.43,.58,.72,.86], [-4,9,-12,8,0,-8,14]);
  const opacity = useTransform(smooth, [.78,.86], [1,0]);
  const ringRotate = useTransform(smooth, [0,1], [0,720]);
  const [visible, setVisible] = useState(true);
  useMotionValueEvent(opacity, "change", (value) => setVisible(value > .01));

  return (
    <motion.div className="journey-entrance" initial={{ opacity:0, scale:.62, y:80, rotateY:-35 }} animate={{ opacity:1, scale:1, y:0, rotateY:0 }} transition={{ type:"spring", stiffness:60, damping:17, mass:1, delay:.25 }}>
      <motion.div className="scroll-logo-journey" style={{ x,y,scale,rotateX,rotateY,rotateZ,opacity,visibility:visible?"visible":"hidden" }}>
        <motion.span className="journey-shadow" style={{ scaleX:scale }}/>
        <div className="journey-glow"/>
        <motion.div className="journey-logo-asset" whileHover={{ scale:1.04, rotateY:10 }} transition={{ type:"spring", stiffness:180, damping:16 }}>
          <Image src="/logo-transparent.png" alt="" width={1080} height={1350} priority/>
        </motion.div>
        <span className="journey-ring ring-a"/>
        <motion.span className="journey-ring ring-b" style={{ rotate:ringRotate }}/>
      </motion.div>
    </motion.div>
  );
}
