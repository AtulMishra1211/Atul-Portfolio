import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-primary/50" />
        <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">{kicker}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted text-base md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
