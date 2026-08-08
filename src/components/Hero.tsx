"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/BrandIcons";
import { profile, stats } from "@/lib/data";
import { EASE } from "./ui/motion";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-16"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.div
          variants={item}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs sm:text-sm text-muted"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
          </span>
          Open to SDE-1 &amp; Full-Stack roles
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[1.03] text-foreground"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-accent-gradient"
        >
          {profile.role}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base sm:text-lg text-muted leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-4 font-mono text-xs sm:text-sm text-subtle tracking-wide"
        >
          React.js &middot; Next.js &middot; TypeScript &middot; Node.js / Express &middot; MongoDB
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
          >
            View my work
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={profile.resumeUrl}
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-border-strong hover:bg-surface-2"
          >
            Resume
            <Download size={16} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>

          <div className="ml-1 flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground/80 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
            >
              <GitHubIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/60 text-foreground/80 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
            >
              <LinkedInIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-border pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-semibold text-foreground">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        aria-label="Scroll to experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-subtle"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
