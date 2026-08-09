"use client";

import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  LayoutTemplate,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { type MouseEvent, useMemo } from "react";
import { skills, type SkillGroup } from "@/lib/data";
import { Reveal, RevealItem, RevealStagger } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const ICONS: Record<string, LucideIcon> = {
  Languages: Code2,
  Frontend: LayoutTemplate,
  "Backend & Database": Database,
  Tools: Wrench,
  "AI-Native Development": BrainCircuit,
  "CS Fundamentals": GraduationCap,
};

function handleTilt(e: MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const px = (x / rect.width) * 100;
  const py = (y / rect.height) * 100;
  const rotateX = ((y / rect.height) - 0.5) * -6;
  const rotateY = ((x / rect.width) - 0.5) * 6;

  card.style.setProperty("--mx", `${px}%`);
  card.style.setProperty("--my", `${py}%`);
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
}

function resetTilt(e: MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)";
}

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = ICONS[group.label] ?? Code2;

  return (
    <Reveal delay={index * 0.06}>
      <div
        onMouseMove={handleTilt}
        onMouseLeave={resetTilt}
        className="skill-card group rounded-2xl surface-card p-6 transition-[box-shadow,border-color,transform] duration-300 ease-out will-change-transform hover:border-border-strong"
      >
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon size={18} />
          </span>
          <span className="font-mono text-[11px] text-subtle">
            {String(group.skills.length).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {group.label}
        </h3>

        <RevealStagger className="mt-4 flex flex-wrap gap-2" stagger={0.03}>
          {group.skills.map((skill) => (
            <RevealItem key={skill}>
              <motion.span
                whileHover={{ y: -2, scale: 1.04 }}
                transition={{ duration: 0.15 }}
                className="inline-block rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground/85 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/[0.06] hover:text-foreground"
              >
                {skill}
              </motion.span>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </Reveal>
  );
}

export function Skills() {
  const marqueeSkills = useMemo(() => skills.flatMap((group) => group.skills), []);

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-primary/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          kicker="Toolbox"
          title="Technologies I work with"
          description="The languages, frameworks and tools I reach for to take an idea from a blank file to production."
        />

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <SkillCard key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>

      <Reveal delay={0.2} className="relative mt-14">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />

          <div className="animate-marquee flex w-max gap-3 [animation-play-state:running] hover:[animation-play-state:paused]">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
