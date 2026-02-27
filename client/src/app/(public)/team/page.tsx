import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Команда",
  description:
    "Команда Oracle Studio — full-stack разработчики с опытом в React, Next.js, Go, Python, Telegram и Discord ботах.",
  alternates: { canonical: "/team" },
};

const members = [
  {
    name: "Kyureno",
    avatar: "https://github.com/Kyureno2374.png",
    role: "Full-stack Developer",
    portfolio: "https://portfolio-v3-five-lyart.vercel.app",
    bio: "Full-stack разработчик, в IT с 2021 года — уже более 4 лет в разработке.",
    stacks: [
      {
        label: "Frontend",
        items: ["TypeScript", "React", "Next.js", "Vue.js", "Nuxt", "Tailwind", "Sass"],
      },
      {
        label: "Backend",
        items: ["Go", "Python", "Node.js", "Express", "Fastify"],
      },
      {
        label: "Базы данных",
        items: ["PostgreSQL", "MongoDB", "Redis"],
      },
    ],
  },
  {
    name: "horr1ble",
    avatar: "https://github.com/horr1ble171.png",
    role: "Full-stack Developer",
    portfolio: "https://horr1ble171.github.io/portfolio",
    bio: "Full-stack разработчик, специализируется на Telegram ботах и веб-приложениях. Полный цикл разработки от архитектуры до деплоя.",
    stacks: [
      {
        label: "Frontend",
        items: ["HTML", "CSS", "JavaScript"],
      },
      {
        label: "Backend",
        items: ["Python", "Telegram API", "Aiogram"],
      },
      {
        label: "Базы данных",
        items: ["SQLite", "PostgreSQL"],
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white pt-28 md:pt-36 pb-16 md:pb-24 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-black/40 text-center mb-3 md:mb-4">
          Кто мы
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-center text-black mb-3 md:mb-4">
          Команда
        </h1>
        <div className="w-10 md:w-16 h-[2px] bg-black mx-auto mb-6 md:mb-8" />
        <p className="text-center text-black/50 font-bold text-sm md:text-base max-w-lg mx-auto mb-16 md:mb-24">
          Команда разработчиков, готовая воплотить ваши идеи в жизнь
        </p>

        <div className="space-y-12 md:space-y-16">
          {members.map((member) => (
            <article
              key={member.name}
              className="border-t border-black/10 pt-10 md:pt-14"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-14">
                <div className="flex flex-col items-center md:items-start shrink-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-[3px] border-black"
                  />
                  <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight mt-5">
                    {member.name}
                  </h2>
                  <p className="text-[10px] md:text-xs font-bold text-black/40 uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black pb-0.5 hover:text-black/60 hover:border-black/60 transition-colors"
                  >
                    Портфолио
                  </a>
                </div>

                <div className="flex-1 space-y-6 md:space-y-8">
                  <p className="text-base md:text-lg font-bold text-black leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
                    {member.stacks.map((stack) => (
                      <div key={stack.label}>
                        <h3 className="text-xs font-black uppercase tracking-widest text-black mb-3">
                          {stack.label}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {stack.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs font-bold text-black/60 bg-black/[0.04] px-3 py-1.5 rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center border-t border-black/10 mt-16 md:mt-24 pt-10">
          <p className="text-black/40 font-bold text-xs md:text-sm max-w-md mx-auto">
            Мы всегда рады рабочим рукам, но пока не готовы кого-то набирать
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
