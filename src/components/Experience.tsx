import { ArrowUpRight } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { TiltCard } from "./ui/TiltCard";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02"
          kicker="Career log"
          title="Where I've worked"
          description="A path through fast-moving product teams — from ML research to owning backend systems and shipping full-stack features in production."
        />

        <div className="relative">
          {/* Glowing spine */}
          <div className="absolute top-2 bottom-2 left-4 w-px bg-linear-to-b from-primary via-violet/60 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.6)] sm:left-6" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05}>
                <div className="relative pl-12 sm:pl-20">
                  {/* Node */}
                  <div className="absolute top-6 left-4 -translate-x-1/2 sm:left-6">
                    <span className="relative flex h-4 w-4 items-center justify-center">
                      {exp.current && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                      )}
                      <span className="relative h-3 w-3 rotate-45 border border-primary bg-background shadow-[0_0_14px_var(--primary)]" />
                    </span>
                  </div>

                  <TiltCard className="group" maxTilt={2}>
                    <div className="surface-card overflow-hidden rounded-2xl p-6 transition-[box-shadow,border-color] duration-300 md:p-8">
                      {exp.current && (
                        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
                      )}

                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-xs text-subtle sm:text-sm">{exp.period}</p>
                          <h3 className="mt-1.5 text-xl font-semibold text-foreground md:text-2xl">
                            {exp.role} <span className="text-subtle">@</span>{" "}
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-accent-gradient inline-flex items-center gap-1 hover:underline"
                              >
                                {exp.company}
                                <ArrowUpRight size={18} className="text-primary" />
                              </a>
                            ) : (
                              <span className="text-accent-gradient">{exp.company}</span>
                            )}
                          </h3>
                        </div>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-live/30 bg-live/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-live">
                            <span className="h-1.5 w-1.5 rounded-full bg-live shadow-[0_0_8px_var(--live)]" />
                            Current
                          </span>
                        )}
                      </div>

                      <ul className="mt-5 space-y-3">
                        {exp.points.map((p) => (
                          <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/80" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="chip rounded-md px-2.5 py-1 font-mono text-[11px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
