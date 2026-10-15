import Image from "next/image";
import { craftStatement, profile } from "@/lib/data";
import { TiltCard } from "./ui/TiltCard";

export function PortraitCard() {
  return (
    <div className="animate-float-slow relative mx-auto w-full max-w-60 sm:max-w-xs lg:max-w-sm">
      {/* Soft glow behind the card */}
      <div
        aria-hidden
        className="animate-pulse-soft absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-primary/30 via-violet/25 to-magenta/25 blur-3xl"
      />

      {/* Single orbit ring with a travelling dot */}
      <div aria-hidden className="pointer-events-none absolute -inset-8 sm:-inset-10">
        <div className="animate-orbit absolute inset-0 rounded-full border border-primary/15">
          <span className="absolute top-1/2 -left-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_3px_var(--primary)]" />
        </div>
      </div>

      <TiltCard className="group" maxTilt={8}>
        <div
          tabIndex={0}
          className="neon-border relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-background p-[3px] outline-none"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              priority
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 70vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div
              className="absolute inset-x-0 bottom-0 flex min-h-16 translate-y-full items-center justify-center border-t border-white/15 bg-black/40 px-5 py-4 text-center opacity-0 backdrop-blur-xl transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
              aria-hidden="true"
            >
              <p className="text-xs leading-snug text-white sm:text-sm">{craftStatement}</p>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
