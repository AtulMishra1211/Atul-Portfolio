"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/BrandIcons";
import { PortraitCard } from "./PortraitCard";
import { profile, stats } from "@/lib/data";
import { EASE } from "./ui/motion";


const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: EASE } },
};

const SOCIALS = [
  { href: profile.github, label: "GitHub", icon: <GitHubIcon className="h-4.5 w-4.5" /> },
  { href: profile.linkedin, label: "LinkedIn", icon: <LinkedInIcon className="h-4.5 w-4.5" /> },
  { href: profile.leetcode, label: "LeetCode", icon: <Code2 className="h-4.5 w-4.5" /> },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16"
      >
        <div className="order-last lg:order-first">
          <motion.div
            variants={item}
            className="panel mb-8 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            Open to SDE &amp; Full-Stack roles
          </motion.div>

          <motion.p variants={item} className="font-mono text-sm text-primary">
            &gt; hello_world, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="text-chrome mt-2 text-5xl font-bold leading-[1.05] tracking-tighter whitespace-nowrap sm:text-6xl xl:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2 variants={item} className="mt-6 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            Full Stack Developer
          </motion.h2>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="btn-neon group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-[1.04]"
            >
              View my work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={profile.resumeUrl}
              download="Atul_Mishra_Resume.pdf"
              className="btn-ghost group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200"
            >
              Resume
              <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            <div className="ml-1 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="btn-ghost inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-all duration-200 hover:text-primary"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="surface-card hud-corners rounded-2xl px-4 py-4 transition-all duration-300">
                <div className="text-accent-gradient text-3xl font-bold sm:text-4xl">{s.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-subtle sm:text-[11px]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={item} className="order-first py-6 lg:order-last">
          <PortraitCard />
        </motion.div>
      </motion.div>

      <motion.a
        href="#philosophy"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-subtle"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-primary" />
        </motion.span>
      </motion.a>
    </section>
  );
}
