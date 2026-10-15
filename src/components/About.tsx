import { Award, GraduationCap } from "lucide-react";
import { achievements, education } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" kicker="Beyond the résumé" title="Education & achievements" />

        <div className="grid items-start gap-6 md:grid-cols-2">
          <Reveal>
            <div className="surface-card rounded-2xl p-7 transition-[box-shadow,border-color] duration-300 md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-[0_0_20px_-6px_var(--primary)]">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground md:text-xl">Education</h3>
              </div>

              <div className="mt-6 space-y-5">
                {education.map((edu, i) => (
                  <div key={edu.school} className={i > 0 ? "border-t border-border pt-5" : ""}>
                    <h4 className="text-sm font-semibold text-foreground md:text-base">{edu.school}</h4>
                    <p className="mt-1 text-sm text-muted">{edu.degree}</p>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-subtle">
                      <span>{edu.period}</span>
                      <span className="text-primary">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-card rounded-2xl p-7 transition-[box-shadow,border-color] duration-300 md:p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-magenta/30 bg-magenta/10 text-magenta shadow-[0_0_20px_-6px_var(--magenta)]">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground md:text-xl">Achievements</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-magenta/80" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
      </div>
    </div>
  </section>
);
}
