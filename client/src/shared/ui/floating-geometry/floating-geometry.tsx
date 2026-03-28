"use client";

import { useRef, useEffect } from "react";

export function FloatingGeometry() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handle = (e: MouseEvent) => {
      const r = root.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      root.style.setProperty("--ry", `${x * 22}deg`);
      root.style.setProperty("--rx", `${y * -18}deg`);
    };

    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto aspect-square w-full max-w-[min(100%,420px)] perspective-dramatic [--rx:0deg] [--ry:0deg]"
      aria-hidden
    >
      <div
        className="absolute inset-[8%] rounded-[2rem] border border-white/[0.08] bg-white/[0.02] shadow-glow-sm backdrop-blur-sm transition-transform duration-300 ease-out preserve-3d"
        style={{
          transform:
            "rotateX(calc(10deg + var(--rx))) rotateY(var(--ry)) translateZ(0)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.07] via-transparent to-blue-500/10" />
        <div className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-50 blur-xl bg-gradient-to-tr from-blue-500/20 via-transparent to-white/10 animate-pulse-glow" />
      </div>

      <div
        className="absolute inset-0 preserve-3d animate-spin-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.12]"
          style={{ transform: "rotateX(72deg) translateZ(40px)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.18]"
          style={{ transform: "rotateX(72deg) translateZ(80px)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/15 to-blue-500/25 blur-2xl"
          style={{ transform: "rotateX(72deg) translateZ(100px)" }}
        />
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/20 bg-zinc-900/80 shadow-card backdrop-blur-md animate-float-y preserve-3d">
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-80"
          style={{ transform: "translateZ(24px)" }}
        />
        <span className="font-display text-2xl font-black tracking-tighter text-white">O</span>
      </div>

      <div
        className="pointer-events-none absolute -right-4 bottom-[18%] h-16 w-24 rounded-xl border border-white/10 bg-white/[0.03] shadow-lg backdrop-blur-sm preserve-3d animate-float-y"
        style={{ animationDelay: "-1.2s", transform: "translateZ(60px) rotateY(-8deg)" }}
      />
      <div
        className="pointer-events-none absolute -left-2 top-[22%] h-14 w-20 rounded-xl border border-white/10 bg-white/[0.04] shadow-lg backdrop-blur-sm preserve-3d animate-float-y"
        style={{ animationDelay: "-2.4s", transform: "translateZ(40px) rotateY(12deg)" }}
      />
    </div>
  );
}
