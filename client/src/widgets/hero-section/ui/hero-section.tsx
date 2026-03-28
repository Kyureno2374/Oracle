"use client";

import dynamic from "next/dynamic";

const HeroAbstractModel = dynamic(
  () =>
    import("@/shared/ui/hero-abstract-model").then((mod) => mod.HeroAbstractModel),
  {
    ssr: false,
    loading: () => (
      <div
        className="mx-auto aspect-square w-full max-w-[340px] animate-pulse rounded-3xl bg-zinc-200/60 ring-1 ring-zinc-300/80 md:w-[380px] md:max-w-[380px]"
        aria-hidden
      />
    ),
  },
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-oracle-bg pt-28 md:pt-32">
      <div className="mesh-bg pointer-events-none absolute inset-0" />
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-90" />

      <div className="relative mx-auto flex min-h-[calc(100svh-8.25rem)] max-w-7xl flex-col items-center justify-center gap-12 px-5 py-10 md:min-h-[calc(100svh-9rem)] md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-14 lg:gap-16">
        <div className="w-full min-w-0 max-w-xl text-center md:max-w-none md:min-w-0 md:flex-[1.08] md:pl-[calc((min(100vw,80rem)-min(100vw,72rem))*0.5+1.5rem)] md:text-left lg:flex-[1.12]">
          <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-zinc-500 md:mb-5 md:text-xs">
            Веб-студия
          </p>

          <h1 className="font-display w-full max-w-full text-[clamp(1.85rem,8.5vw,3.25rem)] font-extrabold leading-[0.92] tracking-normal text-zinc-900 md:max-w-full md:text-[clamp(2.35rem,calc(1.1rem+3.75vw),4.35rem)] md:tracking-tight lg:text-[clamp(2.6rem,calc(1rem+3.1vw),5rem)]">
            <span className="text-gradient isolate block w-full max-w-full text-center md:text-left">
              ORACLE
            </span>
            <span className="mt-1 block w-full max-w-full text-center text-[clamp(1.1rem,4.2vw,1.65rem)] font-bold tracking-tight text-zinc-600 md:mt-2 md:text-left md:text-[clamp(1.25rem,calc(0.7rem+1.6vw),2.35rem)] lg:text-[clamp(1.35rem,calc(0.65rem+1.35vw),2.65rem)]">
              STUDIO
            </span>
          </h1>

          <div className="mx-auto mt-6 h-px w-16 glow-line md:mx-0 md:mt-8 md:w-20" />

          <p className="mx-auto mt-6 max-w-md text-base font-semibold leading-relaxed text-zinc-600 md:mx-0 md:mt-8 md:max-w-lg md:text-lg">
            Создаём цифровые продукты от идеи до реализации.
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Веб-сайты, Телеграм и Дискорд боты, полный цикл разработки.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500 md:mt-10 md:justify-start md:gap-x-6 md:text-xs">
            <span className="text-zinc-600">Веб-сайты</span>
            <span className="hidden text-zinc-400 md:inline">/</span>
            <span className="text-zinc-600">Телеграм боты</span>
            <span className="hidden text-zinc-400 md:inline">/</span>
            <span className="text-zinc-600">Дискорд боты</span>
          </div>

          <div className="mt-10 flex justify-center md:mt-12 md:justify-start">
            <a
              href="https://t.me/kyurenodev"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-zinc-900 px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-shadow duration-400 hover:shadow-glow-sm"
            >
              <span className="relative z-10">Обсудить проект</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-400/25 to-blue-500/0 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="w-full min-w-0 max-w-md shrink-0 md:max-w-none md:flex-[0.92] md:pl-4 lg:flex-[0.88]">
          <HeroAbstractModel />
        </div>
      </div>
    </section>
  );
}
