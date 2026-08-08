export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_35%,transparent_100%)]" />

      <div className="absolute -top-48 left-1/2 h-[42rem] w-[64rem] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[140px] animate-float-slow" />
      <div className="absolute top-[55%] -left-40 h-[30rem] w-[30rem] rounded-full bg-primary/[0.05] blur-[130px] animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/[0.06] blur-[140px] animate-float-slow" />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/70" />
    </div>
  );
}
