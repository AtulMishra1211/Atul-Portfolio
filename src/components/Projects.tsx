"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Eye } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { GitHubIcon } from "./icons/BrandIcons";
import { ProjectPreviewModal } from "./ProjectPreviewModal";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";
import { EASE } from "./ui/motion";

const MAX_VISIBLE_TAGS = 4;

const HUES = [
  ["#22d3ee", "#a78bfa"],
  ["#a78bfa", "#f472b6"],
  ["#34d399", "#22d3ee"],
  ["#f472b6", "#fb923c"],
  ["#60a5fa", "#a78bfa"],
  ["#22d3ee", "#f472b6"],
];

function hostOf(url?: string) {
  if (!url) return "localhost:3000";
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

function ScreenHeader({ project, index }: { project: Project; index: number }) {
  const [a, b] = HUES[index % HUES.length];
  const initials = project.title
    .split(/[\s—-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="relative h-40 overflow-hidden rounded-xl border border-border bg-black/40">
      {/* Browser chrome */}
      <div className="relative z-10 flex items-center gap-1.5 border-b border-border bg-black/30 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]/80" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]/80" />
        <span className="ml-2 truncate rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-subtle">
          {hostOf(project.liveUrl ?? project.codeUrl)}
        </span>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle at 25% 80%, ${a}55, transparent 55%), radial-gradient(circle at 80% 30%, ${b}55, transparent 55%)`,
        }}
      />
      <div aria-hidden className="bg-grid absolute inset-0 opacity-30 mask-[linear-gradient(to_bottom,transparent,#000)]" />
      <div aria-hidden className="scanlines absolute inset-0" />
      <div aria-hidden className="animate-scan absolute inset-x-0 top-0 h-1/4 bg-linear-to-b from-transparent via-white/10 to-transparent" />

      <div
        className="absolute inset-0 flex items-center justify-center pt-6"
        style={{ transform: "translateZ(40px)" }}
      >
        <span
          className="text-5xl font-black tracking-tighter text-transparent"
          style={{
            WebkitTextStroke: `1px ${a}`,
            textShadow: `0 0 30px ${a}88`,
          }}
        >
          {initials}
        </span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onPreview,
}: {
  project: Project;
  index: number;
  onPreview: (project: Project) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagCount = project.tags.length - visibleTags.length;

  return (
    <Reveal delay={index * 0.05} className="min-w-0">
      <TiltCard className="group" maxTilt={7}>
        <div
          className={`surface-card relative overflow-hidden rounded-2xl p-4 transition-[box-shadow,border-color] duration-300 ${
            project.featured ? "neon-border" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <ScreenHeader project={project} index={index} />

          <div className="px-2 pt-5 pb-2" style={{ transform: "translateZ(24px)" }}>
            <div className="flex items-center justify-between gap-3">
              {project.featured ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_6px_var(--primary)]" />
                  Featured
                </span>
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                  {project.kind ?? "Project"}
                </span>
              )}
              <span className="shrink-0 font-mono text-[11px] text-subtle">{project.period}</span>
            </div>

            <h3 className="mt-3 truncate text-lg font-semibold text-foreground">{project.title}</h3>

            <p className="mt-2 line-clamp-2 min-h-10 text-sm text-muted">{project.description}</p>

            <div className="mt-4 flex min-h-14 flex-wrap content-start gap-2">
              {visibleTags.map((tag) => (
                <span key={tag} className="chip rounded-md px-2 py-0.5 font-mono text-[11px]">
                  {tag}
                </span>
              ))}
              {hiddenTagCount > 0 && (
                <span className="chip rounded-md px-2 py-0.5 font-mono text-[11px] text-subtle">
                  +{hiddenTagCount}
                </span>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-4">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground/80 transition-colors duration-200 hover:text-primary"
              >
                {expanded ? "Hide" : "Details"}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                />
              </button>

              <div className="flex shrink-0 items-center gap-2">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} code`}
                    className="btn-ghost inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground/70 transition-all duration-200 hover:text-primary"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.liveUrl && (
                  <>
                    <button
                      type="button"
                      onClick={() => onPreview(project)}
                      aria-label={`Preview ${project.title}`}
                      className="btn-ghost inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground/70 transition-all duration-200 hover:text-primary"
                    >
                      <Eye size={14} />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="btn-neon inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  </>
                )}
              </div>
            </div>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="overflow-hidden"
                >
                  <ul className="mt-4 space-y-2">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}

export function Projects() {
  const [preview, setPreview] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          kicker="Selected work"
          title="Things I've built"
          description="Production platforms and side projects — from courier aggregators shipped end-to-end to focused UI experiments."
        />

        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onPreview={setPreview} />
          ))}
        </div>
      </div>

      <ProjectPreviewModal project={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
