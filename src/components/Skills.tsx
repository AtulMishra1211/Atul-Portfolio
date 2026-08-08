"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Reveal, RevealItem, RevealStagger } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Toolbox"
          title="Technologies I work with"
          description="The languages, frameworks and tools I reach for to take an idea from a blank file to production."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="h-full rounded-2xl surface-card p-6 transition-[box-shadow,border-color] duration-300 hover:border-border-strong">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {group.label}
                </h3>
                <RevealStagger className="mt-4 flex flex-wrap gap-2" stagger={0.04}>
                  {group.skills.map((skill) => (
                    <RevealItem key={skill}>
                      <motion.span
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.15 }}
                        className="inline-block rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground/85 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
                      >
                        {skill}
                      </motion.span>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
