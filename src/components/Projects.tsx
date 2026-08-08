"use client";

import { Eye } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { GitHubIcon } from "./icons/BrandIcons";
import { ProjectPreviewModal } from "./ProjectPreviewModal";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";

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

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.06}
              className={project.featured ? "md:col-span-2" : ""}
            >
              <TiltCard className="group h-full">
                <div
                  className={`relative h-full overflow-hidden rounded-2xl surface-card transition-[box-shadow,border-color] duration-300 ${
                    project.featured ? "p-8 md:p-10" : "p-7 md:p-8"
                  }`}
                >
                  {project.featured && (
                    <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
                  )}

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {project.featured && (
                          <span className="mb-2 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                            Featured
                          </span>
                        )}
                        <h3
                          className={`font-semibold text-foreground ${
                            project.featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p className="mt-1.5 font-mono text-xs text-subtle">{project.period}</p>
                      </div>
                      <div className="flex shrink-0 gap-2">
                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} code`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
                          >
                            <GitHubIcon className="h-3.75 w-3.75" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <button
                            type="button"
                            onClick={() => setPreview(project)}
                            aria-label={`Preview ${project.title}`}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors duration-200 hover:border-border-strong hover:text-foreground"
                          >
                            <Eye size={15} />
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
                      {project.description}
                    </p>

                    {project.featured && (
                      <ul className="mt-4 space-y-2">
                        {project.points.map((p) => (
                          <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted/90">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.liveUrl && (
                        <button
                          type="button"
                          onClick={() => setPreview(project)}
                          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-primary transition-colors duration-200 hover:text-primary-strong"
                        >
                          <Eye size={13} />
                          Quick look
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectPreviewModal project={preview} onClose={() => setPreview(null)} />
    </section>
  );
}
