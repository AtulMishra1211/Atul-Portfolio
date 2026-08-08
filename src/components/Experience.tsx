import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          kicker="Career"
          title="Where I've worked"
          description="A path through fast-moving product teams — from ML research to shipping full-stack features in production."
        />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-border-strong via-border to-transparent sm:left-6" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05}>
                <div className="group relative pl-14 sm:pl-20">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-2 sm:h-12 sm:w-12">
                    <Briefcase size={16} className="text-primary" />
                  </div>

                  <div className="rounded-2xl surface-card p-6 transition-[box-shadow,border-color] duration-300 group-hover:border-border-strong md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground md:text-xl">
                        {exp.role} <span className="text-subtle">·</span>{" "}
                        <span className="text-primary">{exp.company}</span>
                      </h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-live/10 px-3 py-1 text-xs font-medium text-live">
                          <span className="h-1.5 w-1.5 rounded-full bg-live" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-mono text-xs text-subtle sm:text-sm">{exp.period}</p>

                    <ul className="mt-4 space-y-2.5">
                      {exp.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
