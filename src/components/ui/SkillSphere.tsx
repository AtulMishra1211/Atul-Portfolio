"use client";

import { useEffect, useMemo, useRef } from "react";

/** A rotating 3D tag cloud; drag direction follows the pointer. */
export function SkillSphere({ items, radius = 190 }: { items: string[]; radius?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const points = useMemo(() => {
    const n = items.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    return items.map((_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });
  }, [items]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pts = points.map((p) => ({ ...p }));
    let vx = 0.004;
    let vy = 0.0025;
    let targetVx = vx;
    let targetVy = vy;
    let raf = 0;

    const el = containerRef.current;
    const onMove = (e: PointerEvent) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      targetVy = dx * 0.03;
      targetVx = -dy * 0.03;
    };
    const onLeave = () => {
      targetVx = 0.004;
      targetVy = 0.0025;
    };
    el?.addEventListener("pointermove", onMove);
    el?.addEventListener("pointerleave", onLeave);

    const render = () => {
      vx += (targetVx - vx) * 0.05;
      vy += (targetVy - vy) * 0.05;
      const cx = Math.cos(vx);
      const sx = Math.sin(vx);
      const cy = Math.cos(vy);
      const sy = Math.sin(vy);

      pts.forEach((p, i) => {
        // rotate around X then Y
        const y1 = p.y * cx - p.z * sx;
        const z1 = p.y * sx + p.z * cx;
        const x2 = p.x * cy + z1 * sy;
        const z2 = -p.x * sy + z1 * cy;
        p.x = x2;
        p.y = y1;
        p.z = z2;

        const tag = tagRefs.current[i];
        if (!tag) return;
        const depth = (p.z + 1) / 2; // 0 back → 1 front
        const scale = 0.6 + depth * 0.6;
        tag.style.transform = `translate(-50%, -50%) translate3d(${p.x * radius}px, ${p.y * radius}px, ${p.z * radius}px) scale(${scale})`;
        tag.style.opacity = String(0.25 + depth * 0.75);
        tag.style.zIndex = String(Math.round(depth * 100));
        tag.style.filter = depth < 0.35 ? "blur(1px)" : "none";
      });

      if (!reduce) raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      el?.removeEventListener("pointermove", onMove);
      el?.removeEventListener("pointerleave", onLeave);
    };
  }, [points, radius]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-md select-none"
      style={{ perspective: "900px" }}
    >
      {/* Orbit rings */}
      <div aria-hidden className="absolute inset-[8%] rounded-full border border-primary/20 shadow-[0_0_60px_-10px_rgba(34,211,238,0.4)_inset]" />
      <div aria-hidden className="absolute inset-[8%] rounded-full border border-violet/20 [transform:rotateX(72deg)]" />
      <div aria-hidden className="absolute inset-[8%] rounded-full border border-magenta/15 [transform:rotateY(72deg)]" />
      <div aria-hidden className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="absolute top-1/2 left-1/2" style={{ transformStyle: "preserve-3d" }}>
        {items.map((item, i) => (
          <span
            key={item}
            ref={(node) => {
              tagRefs.current[i] = node;
            }}
            className="absolute top-0 left-0 whitespace-nowrap rounded-full border border-primary/25 bg-background/70 px-2.5 py-1 font-mono text-[11px] text-foreground shadow-[0_0_14px_-4px_rgba(34,211,238,0.6)] will-change-transform"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
