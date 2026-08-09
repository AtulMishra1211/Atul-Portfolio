"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Eye } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { GitHubIcon } from "./icons/BrandIcons";
import { ProjectPreviewModal } from "./ProjectPreviewModal";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";
import { EASE } from "./ui/motion";

const MAX_VISIBLE_TAGS = 4;

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
    <Reveal delay={index * 0.05}>
      <TiltCard className="group">
        <div
          className={`relative overflow-hidden rounded-2xl surface-card p-6 transition-[box-shadow,border-color] duration-300 ${
            project.featured ? "ring-1 ring-primary/20" : ""
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            {project.featured ? (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                Featured
              </span>
            ) : (
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
                {project.kind ?? "Project"}
              </span>
            )}
            <span className="shrink-0 font-mono text-xs text-subtle">{project.period}</span>
          </div>

          <h3 className="mt-3 truncate text-[15px] font-medium text-foreground sm:text-base">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-1 text-sm text-muted">{project.description}</p>

          <div className="mt-4 flex min-h-16 flex-wrap content-start gap-2">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
            {hiddenTagCount > 0 && (
              <span className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs text-subtle">
                +{hiddenTagCount}
              </span>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 transition-colors duration-200 hover:text-foreground"
            >
              View details
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
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                </a>
              )}
              {project.liveUrl && (
                <button
                  type="button"
                  onClick={() => onPreview(project)}
                  aria-label={`Preview ${project.title}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
                >
                  <Eye size={14} />
                </button>
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
                <ul className="mt-5 space-y-2 border-t border-border pt-5">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
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
          kicker="Selected work"
          title="Things I've built"
          description="Production products and side projects — from full platforms shipped end-to-end to focused UI experiments."
        />

        <div className="grid items-start gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onPreview={setPreview} />
          ))}
        </div>
      </div>

      <ProjectPreviewModal project={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
