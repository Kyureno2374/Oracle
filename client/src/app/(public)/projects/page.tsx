import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Проекты",
  description:
    "Проекты Oracle Studio: BeamBuilds, Дискорд-боты, веб-приложения и Телеграм-боты.",
  alternates: { canonical: "/projects" },
};

type SimpleProject = {
  variant: "simple";
  name: string;
  image: string;
  type: string;
  description: string;
  features: string[];
};

type ExtendedSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type ExtendedProject = {
  variant: "extended";
  name: string;
  type: string;
  sections: ExtendedSection[];
  closingNote: string;
};

const projects: (SimpleProject | ExtendedProject)[] = [
  {
    variant: "simple",
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
  {
    variant: "extended",
    name: "BeamBuilds",
    type: "Веб-платформа · от нас двоих",
    sections: [
      {
        title: "О проекте",
        paragraphs: [
          "BeamBuilds закрывает задачу единого каталога: вместо разрозненных ссылок и чатов — структурированные карточки, поиск и фильтры, профили авторов и социальные сигналы (комментарии, лайки).",
        ],
      },
      {
        title: "Возможности для пользователя",
        bullets: [
          "Каталог сборок: теги, категории, умный поиск, сортировки.",
          "Карточка сборки: описание, изображения, файлы, внешние источники модов.",
          "Регистрация и вход, профиль, настройки (в т.ч. оформление профиля).",
          "Лайки и комментарии к сборкам.",
        ],
      },
      {
        title: "Возможности для команды",
        bullets: [
          "Админка: создание и редактирование сборок, загрузка медиа и архивов.",
          "Глобальные настройки SEO (метаданные, Open Graph, индексация).",
          "Аналитика посещений: графики, популярные страницы, рефереры, устройства.",
          "Юридически аккуратный блок: контакты, условия, раздел для правообладателей.",
        ],
      },
      {
        title: "Технологический стек",
        paragraphs: [
          "Клиент: Next.js (App Router), React, TypeScript, Tailwind CSS, TanStack Query, Zustand, axios, Recharts.",
          "Сервер: Node.js, Express, TypeScript, PostgreSQL, Prisma, JWT и роли пользователей.",
          "Связка фронта и API: единый контракт ответов ({ success, data } или { success, error }), маршруты /api/v1, CORS для фронтенда.",
        ],
      },
      {
        title: "Принципы разработки",
        bullets: [
          "Разделение frontend и backend в одном репозитории.",
          "Схема БД через Prisma, изменения только миграциями.",
          "Защищённые эндпоинты через middleware, секреты в переменных окружения.",
          "Типизация TypeScript на клиенте и сервере.",
        ],
      },
      {
        title: "Код и репозиторий",
        paragraphs: [
          "Репозиторий проекта приватный. Исходный код, конфигурации и сопутствующие материалы не предназначены для публичного доступа: просмотр, копирование, распространение или иное ознакомление без явного разрешения правообладателя запрещены. На презентации описывается только суть продукта и стек, без выдачи доступа к кодовой базе проекта.",
        ],
      },
    ],
    closingNote:
      "BeamBuilds — рабочий продукт для нишевого сообщества, собранный как законченная архитектура, а не как демо-страница. Готов обсудить детали и ответить на вопросы.",
  },
];

function ExtendedProjectArticle({ project }: { project: ExtendedProject }) {
  return (
    <article className="group relative rounded-3xl border border-black/[0.08] bg-oracle-elevated p-8 shadow-card backdrop-blur-sm transition-all duration-500 hover:border-black/[0.12] hover:shadow-card-hover md:p-10">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-zinc-100/80 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-col gap-10 md:flex-row md:gap-14">
        <div className="flex shrink-0 flex-col items-center md:items-start">
          <div className="perspective-dramatic preserve-3d transition-transform duration-500 group-hover:[transform:rotateY(-4deg)_rotateX(4deg)]">
            <div
              className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-zinc-200 bg-gradient-to-br from-zinc-800 via-zinc-700 to-blue-900 text-lg font-extrabold tracking-tight text-white shadow-md md:h-32 md:w-32 md:border-[3px] md:text-xl"
              aria-hidden
            >
              BB
            </div>
          </div>
          <h2 className="mt-5 text-center text-2xl font-extrabold tracking-tight text-zinc-900 md:text-left md:text-3xl">
            {project.name}
          </h2>
          <p className="mt-1 text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-left md:text-xs">
            {project.type}
          </p>
        </div>

        <div className="min-w-0 flex-1 space-y-8">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h3 className="mb-3 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-zinc-600 md:text-xs">
                {section.title}
              </h3>
              {section.paragraphs?.length ? (
                <div className="space-y-3">
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={`${section.title}-${i}`}
                      className="text-sm font-semibold leading-relaxed text-zinc-700 md:text-base"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ) : null}
              {section.bullets?.length ? (
                <ul className="list-disc space-y-2 pl-5 text-sm font-semibold leading-relaxed text-zinc-700 marker:text-blue-600 md:text-base">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <p className="rounded-2xl border border-black/[0.06] bg-zinc-100/60 px-4 py-3 text-sm font-semibold leading-relaxed text-zinc-700 md:text-base">
            {project.closingNote}
          </p>
        </div>
      </div>
    </article>
  );
}

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
          {projects.map((project) =>
            project.variant === "simple" ? (
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
            ) : (
              <ExtendedProjectArticle key={project.name} project={project} />
            ),
          )}
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
