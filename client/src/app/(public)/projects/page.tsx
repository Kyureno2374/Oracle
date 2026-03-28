import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Проекты",
  description:
    "Проекты Oracle Studio: Дискорд боты, веб-приложения и Телеграм боты. Смотрите наши реализованные продукты.",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    name: "Azure",
    image: "/images/azure.png",
    type: "Дискорд-бот",
    description:
      "Многофункциональный Дискорд бот с системой анти-краша, продвинутой модерацией и уникальными функциями для управления сервером.",
    features: [
      "Анти-краш защита",
      "Модерация",
      "Автороли",
      "Логирование",
      "Кастомные команды",
      "Система тикетов",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-oracle-bg px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" />

      <div className="relative mx-auto max-w-5xl">
        <p className="mb-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.35em] text-zinc-500 md:mb-4 md:text-xs">
          Портфолио
        </p>
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-zinc-900 md:text-6xl">
          Проекты
        </h1>
        <div className="mx-auto mt-4 h-px w-14 glow-line md:mt-5 md:w-16" />
        <p className="mx-auto mt-6 max-w-lg text-center text-sm font-semibold text-zinc-600 md:mt-8 md:text-base">
          Наши реализованные продукты и решения
        </p>

        <div className="mt-16 space-y-12 md:mt-24 md:space-y-20">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative rounded-3xl border border-black/[0.08] bg-oracle-elevated p-8 shadow-card backdrop-blur-sm transition-all duration-500 hover:border-black/[0.12] hover:shadow-card-hover md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-100/80 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-10 md:flex-row md:gap-14">
                <div className="flex shrink-0 flex-col items-center md:items-start">
                  <div className="perspective-dramatic preserve-3d transition-transform duration-500 group-hover:[transform:rotateY(-4deg)_rotateX(4deg)]">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-24 w-24 rounded-2xl border-2 border-zinc-200 object-cover shadow-md md:h-32 md:w-32 md:border-[3px]"
                    />
                  </div>
                  <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-zinc-900 md:text-3xl">
                    {project.name}
                  </h2>
                  <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-xs">
                    {project.type}
                  </p>
                </div>

                <div className="flex-1 space-y-6">
                  <p className="text-base font-semibold leading-relaxed text-zinc-700 md:text-lg">
                    {project.description}
                  </p>

                  <div>
                    <h3 className="mb-3 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-zinc-600 md:text-xs">
                      Возможности
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-black/[0.08] bg-zinc-100/80 px-3 py-1.5 text-xs font-semibold text-zinc-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-black/[0.06] pt-12 text-center md:mt-24 md:pt-14">
          <p className="mx-auto max-w-md text-sm font-semibold text-zinc-600">
            Другие проекты сейчас находятся в разработке и скоро появятся здесь
          </p>
          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <span className="border-b border-zinc-400 pb-0.5 transition-colors group-hover:border-zinc-900">
              На главную
            </span>
            <span className="translate-x-0 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
