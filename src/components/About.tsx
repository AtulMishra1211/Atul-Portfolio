import { Award, GraduationCap } from "lucide-react";
import { achievements, education } from "@/lib/data";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker="Beyond the résumé" title="Education & achievements" />

        <div className="grid items-start gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl surface-card p-7 transition-[box-shadow,border-color] duration-300 hover:border-border-strong md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground md:text-xl">Education</h3>

              <div className="mt-4 space-y-5">
                {education.map((edu, i) => (
                  <div key={edu.school} className={i > 0 ? "border-t border-border pt-5" : ""}>
                    <h4 className="text-sm font-semibold text-foreground md:text-base">
                      {edu.school}
                    </h4>
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
            <div className="rounded-2xl surface-card p-7 transition-[box-shadow,border-color] duration-300 hover:border-border-strong md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Award size={20} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground md:text-xl">
                Achievements
              </h3>
              <ul className="mt-4 space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
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
