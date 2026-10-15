"use client";

import { ArrowRight, Cpu, Lightbulb, Sparkles, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { loop } from "@/lib/data";
import { Reveal, RevealItem, RevealStagger } from "./ui/Reveal";

type Pillar = {
  icon: LucideIcon;
  label: string;
  desc: string;
};

const pillars: Pillar[] = [
  {
    icon: Lightbulb,
    label: "Product",
    desc: "Start from the problem people actually have, not the framework I want to use.",
  },
  {
    icon: Cpu,
    label: "Engineering",
    desc: "Systems that hold up in production — not just in a demo.",
  },
  {
    icon: Sparkles,
    label: "Emerging tech",
    desc: "AI woven into real workflows, not bolted on for a slide.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-violet/12 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-magenta/8 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]">
                <span className="text-subtle">01</span>
                <span className="h-px w-10 bg-linear-to-r from-primary to-transparent" />
                <span className="text-primary">How I think</span>
              </div>

              <h2 className="text-chrome text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                More than a <span className="text-accent-gradient">stack.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted md:text-xl">
                <p>
                  I&apos;m a full-stack engineer who likes building at the intersection of{" "}
                  <span className="text-foreground font-medium">product</span>,{" "}
                  <span className="text-foreground font-medium">engineering</span>, and{" "}
                  <span className="text-foreground font-medium">emerging technology</span>.
                </p>
                <p>
                  I enjoy the entire journey — understanding the problem, breaking it down,
                  designing the interface, wiring the backend, shipping it, and then inevitably
                  discovering something I should&apos;ve done differently.
                </p>
                <p>
                  Lately, I&apos;ve been especially drawn to{" "}
                  <span className="text-primary font-medium">
                    AI-native products and agentic systems
                  </span>{" "}
                  — figuring out how AI can become part of real software, rather than just
                  another shiny demo.
                </p>
              </div>
            </Reveal>
          </div>

          <RevealStagger className="flex flex-col gap-4" stagger={0.1}>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <RevealItem key={pillar.label}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-start gap-4 rounded-2xl surface-card p-5 transition-colors duration-300 hover:border-border-strong"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_20px_-6px_var(--primary)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                        {pillar.label}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-[15px]">
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>

        <Reveal delay={0.15} className="mt-14 md:mt-16">
          <div className="neon-border rounded-2xl surface-card px-5 py-5 sm:px-8">
            <RevealStagger
              className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2"
              stagger={0.06}
            >
              {loop.map((step, i) => (
                <RevealItem key={step} className="flex items-center gap-1.5 sm:gap-2">
                  <span className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 font-mono text-xs sm:text-sm tracking-wide text-foreground/85 sm:px-4">
                    {step}
                  </span>
                  {i < loop.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="animate-pulse-soft shrink-0 text-primary"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  )}
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
