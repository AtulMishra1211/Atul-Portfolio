"use client";

import { ArrowUpRight, Code2, Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/BrandIcons";
import { profile } from "@/lib/data";
import { KnotScene } from "./three/Lazy";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const year = new Date().getFullYear();


  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="neon-border hud-corners surface-card relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 md:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50">
              <KnotScene />
            </div>
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-radial from-background/70 via-background/40 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[110px]" />

            <div className="relative">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              06 · Get in touch
            </span>
            <h2 className="text-chrome mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Have a project in mind? Let&apos;s build something <span className="text-accent-gradient">great.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Currently based in {profile.location}. Open to full-stack roles, freelance projects,
              and collaborations on interesting products.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="btn-neon group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-[1.04]"
              >
                <Mail size={16} />
                {profile.email}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200"
              >
                <Phone size={16} />
                {profile.phone}
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="btn-ghost inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-all duration-200 hover:text-primary"
              >
                <GitHubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="btn-ghost inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-all duration-200 hover:text-primary"
              >
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="btn-ghost inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-all duration-200 hover:text-primary"
              >
                <Code2 className="h-4.5 w-4.5" />
              </a>
            </div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 text-xs text-subtle sm:flex-row">
          <span>
            &copy; {year} {profile.name}. All rights reserved.
          </span>
          <span className="font-mono">Built with Next.js, Three.js, Tailwind CSS &amp; Framer Motion.</span>
        </footer>
      </div>
    </section>
  );
}
