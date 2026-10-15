"use client";

import { motion, useMotionTemplate, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-linear-to-r from-primary via-violet to-magenta shadow-[0_0_12px_rgba(34,211,238,0.8)]"
    />
  );
}

/** Soft neon spotlight that trails the cursor (pointer devices only). */
export function CursorGlow() {
  const x = useSpring(-500, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(-500, { stiffness: 120, damping: 20, mass: 0.4 });
  const background = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(34, 211, 238, 0.07), rgba(167, 139, 250, 0.04) 40%, transparent 70%)`;

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-[5]" style={{ background }} />;
}
