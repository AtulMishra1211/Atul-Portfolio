import { ArrowUpRight, Code2, Mail, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/BrandIcons";
import { profile } from "@/lib/data";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl surface-card px-6 py-16 text-center sm:px-12 md:py-24">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]" />

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Get in touch
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Have a project in mind? Let&apos;s build something great.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Currently based in {profile.location}. Open to full-stack roles, freelance projects,
              and collaborations on interesting products.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-border-strong"
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
              >
                <GitHubIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
              >
                <LinkedInIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={profile.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
              >
                <Code2 className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 text-xs text-subtle sm:flex-row">
          <span>
            &copy; {year} {profile.name}. All rights reserved.
          </span>
          <span>Built with Next.js, Tailwind CSS &amp; Framer Motion.</span>
        </footer>
      </div>
    </section>
  );
}
