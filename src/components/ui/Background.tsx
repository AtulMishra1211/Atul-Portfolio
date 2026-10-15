export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Aurora */}
      <div className="absolute -top-56 left-1/2 h-176 w-280 -translate-x-1/2 rounded-full bg-violet/13 blur-[150px] animate-float-slow" />
      <div className="absolute top-[40%] -left-48 h-136 w-136 rounded-full bg-primary/9 blur-[140px] animate-float" />
      <div className="absolute bottom-[-15%] right-[-10%] h-152 w-152 rounded-full bg-magenta/8 blur-[150px] animate-float-slow" />

      {/* Starfield */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 12% 18%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 72% 34%, #c4f1ff 50%, transparent 51%), radial-gradient(1.5px 1.5px at 38% 72%, #e9d5ff 50%, transparent 51%), radial-gradient(1px 1px at 88% 82%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 52% 8%, #fff 50%, transparent 51%), radial-gradient(1px 1px at 22% 92%, #c4f1ff 50%, transparent 51%)",
          backgroundSize: "420px 420px",
        }}
      />

      {/* Fine grid fading from the top */}
      <div className="absolute inset-0 bg-grid opacity-[0.18] mask-[radial-gradient(ellipse_70%_50%_at_50%_0%,#000_30%,transparent_100%)]" />

      <div className="noise absolute inset-0 opacity-[0.06] mix-blend-overlay" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/80" />
    </div>
  );
}
