"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { ReactNode } from "react";

const MAX_TILT = 3.5;

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const rotateX = useSpring(0, { stiffness: 220, damping: 22, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22, mass: 0.4 });
  const glowX = useSpring(50, { stiffness: 200, damping: 26 });
  const glowY = useSpring(50, { stiffness: 200, damping: 26 });

  const glowBackground = useMotionTemplate`radial-gradient(360px circle at ${glowX}% ${glowY}%, var(--primary-soft), transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * MAX_TILT * 2);
    rotateX.set(-(py - 0.5) * MAX_TILT * 2);
    glowX.set(px * 100);
    glowY.set(py * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 900,
      }}
      className={className}
    >
      <div className="relative h-full">
        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glowBackground }}
          />
        )}
        {children}
      </div>
    </motion.div>
  );
}
