import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Проекты",
  description:
    "Проекты Oracle Studio: Discord боты, веб-приложения и Telegram боты. Смотрите наши реализованные продукты.",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    name: "Azure",
    image: "/images/azure.png",
    type: "Discord Bot",
    description:
      "Многофункциональный Discord бот с системой анти-краша, продвинутой модерацией и уникальными функциями для управления сервером.",
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
    <div className="min-h-screen bg-white pt-28 md:pt-36 pb-16 md:pb-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-black/40 text-center mb-3 md:mb-4">
          Портфолио
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-center text-black mb-3 md:mb-4">
          Проекты
        </h1>
        <div className="w-10 md:w-16 h-[2px] bg-black mx-auto mb-6 md:mb-8" />
        <p className="text-center text-black/50 font-bold text-sm md:text-base max-w-lg mx-auto mb-16 md:mb-24">
          Наши реализованные продукты и решения
        </p>

        <div className="space-y-12 md:space-y-16">
          {projects.map((project) => (
            <article
              key={project.name}
              className="border-t border-black/10 pt-10 md:pt-14"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-14">
                <div className="flex flex-col items-center md:items-start shrink-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover border-[3px] border-black"
                  />
                  <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mt-5">
                    {project.name}
                  </h2>
                  <p className="text-[10px] md:text-xs font-bold text-black/40 uppercase tracking-widest mt-1">
                    {project.type}
                  </p>
                </div>

                <div className="flex-1 space-y-6">
                  <p className="text-base md:text-lg font-bold text-black leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-black mb-3">
                      Возможности
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs font-bold text-black/60 bg-black/[0.04] px-3 py-1.5 rounded-full"
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

        <div className="text-center border-t border-black/10 mt-16 md:mt-24 pt-10">
          <p className="text-black/40 font-bold text-xs md:text-sm max-w-md mx-auto">
            Другие проекты сейчас находятся в разработке и скоро появятся здесь
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black pb-0.5 hover:text-black/60 hover:border-black/60 transition-colors"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
