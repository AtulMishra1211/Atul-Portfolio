import { ArrowRight } from "lucide-react";
import { loop } from "@/lib/data";
import { Reveal, RevealItem, RevealStagger } from "./ui/Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary/50" />
            <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              How I think
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            More than a stack.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted md:text-xl">
            <p>
              I&apos;m a full-stack engineer who likes building at the intersection of{" "}
              <span className="text-foreground font-medium">product</span>,{" "}
              <span className="text-foreground font-medium">engineering</span>, and{" "}
              <span className="text-foreground font-medium">emerging technology</span>.
            </p>
            <p>
              I enjoy the entire journey — understanding the problem, breaking it down,
              designing the interface, wiring the backend, shipping it, and then inevitably
              discovering something I should&apos;ve done differently.
            </p>
            <p>
              Lately, I&apos;ve been especially drawn to{" "}
              <span className="text-primary font-medium">AI-native products and agentic systems</span> —
              figuring out how AI can become part of real software, rather than just another
              shiny demo.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-3" stagger={0.06}>
          {loop.map((step, i) => (
            <RevealItem key={step} className="flex items-center gap-2">
              <span className="font-mono text-sm sm:text-base tracking-wide text-foreground/80">
                {step}
              </span>
              {i < loop.length - 1 && (
                <ArrowRight
                  size={14}
                  className="animate-pulse-soft text-primary"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              )}
            </RevealItem>
          ))}
          <span className="font-mono text-sm sm:text-base tracking-wide text-subtle">.</span>
        </RevealStagger>
      </div>
    </section>
  );
}
