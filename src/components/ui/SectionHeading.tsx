import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  kicker,
  title,
  description,
}: {
  index?: string;
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]">
        {index && <span className="text-subtle">{index}</span>}
        <span className="h-px w-10 bg-linear-to-r from-primary to-transparent" />
        <span className="text-primary">{kicker}</span>
      </div>
      <h2 className="text-chrome text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
