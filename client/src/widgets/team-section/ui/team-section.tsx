import Link from "next/link";

const teamMembers = [
  {
    name: "Kyureno",
    avatar: "https://github.com/Kyureno2374.png",
    role: "Full-stack Developer",
  },
  {
    name: "horr1ble",
    avatar: "https://github.com/horr1ble171.png",
    role: "Full-stack Developer",
  },
];

export function TeamSection() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.06] bg-oracle-surface py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" />

      <div className="relative mx-auto w-full max-w-5xl px-5 md:px-8">
        <p className="mb-3 text-center text-[0.65rem] font-bold uppercase tracking-[0.35em] text-zinc-500 md:mb-4 md:text-xs">
          Кто мы
        </p>
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-zinc-900 md:text-5xl">
          Команда
        </h2>
        <div className="mx-auto mt-4 h-px w-12 glow-line md:mt-5 md:w-14" />
        <p className="mx-auto mt-5 max-w-lg px-2 text-center text-sm font-semibold text-zinc-600 md:mt-6 md:text-base">
          Команда разработчиков, готовая воплотить ваши идеи в жизнь
        </p>

        <div className="mx-auto mt-14 flex max-w-xl flex-wrap justify-center gap-10 md:mt-20 md:gap-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group perspective-dramatic flex flex-col items-center"
            >
              <div className="preserve-3d transition-transform duration-500 ease-out group-hover:[transform:rotateY(-6deg)_rotateX(4deg)_translateZ(0)]">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-400/25 to-zinc-900/10 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="relative h-24 w-24 rounded-full border-2 border-zinc-200 object-cover shadow-card transition-shadow duration-500 group-hover:shadow-card-hover md:h-32 md:w-32 md:border-[3px]"
                  />
                </div>
              </div>
              <h3 className="mt-4 text-base font-bold tracking-tight text-zinc-900 md:text-lg">
                {member.name}
              </h3>
              <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-zinc-500 md:text-xs">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center md:mt-16">
          <Link
            href="/team"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <span className="border-b border-zinc-400 pb-0.5 transition-colors group-hover:border-zinc-900">
              Подробнее о команде
            </span>
            <span className="translate-x-0 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
