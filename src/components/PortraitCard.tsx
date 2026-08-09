import Image from "next/image";
import { craftStatement, profile } from "@/lib/data";

export function PortraitCard() {
  return (
    <div
      tabIndex={0}
      className="group portrait-frame relative mx-auto aspect-4/5 w-full max-w-xs overflow-hidden rounded-3xl surface-card outline-none sm:max-w-sm"
    >
      <Image
        src={profile.photo}
        alt={profile.name}
        fill
        priority
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 70vw"
        className="object-cover"
      />

      <div
        className="absolute inset-x-0 bottom-0 flex h-1/5 min-h-16 translate-y-full items-center justify-center border-t border-white/30 bg-white/20 px-5 text-center opacity-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-2xl transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
        aria-hidden="true"
      >
        <p className="text-xs leading-snug text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.55)] sm:text-sm">
          {craftStatement}
        </p>
      </div>
    </div>
  );
}
