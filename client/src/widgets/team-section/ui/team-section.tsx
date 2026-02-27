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
    <section className="py-16 md:py-32 bg-white">
      <div className="max-w-5xl w-full mx-auto px-5 md:px-8">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-black/40 text-center mb-3 md:mb-4">
          Кто мы
        </p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-3 md:mb-4 text-black">
          Команда
        </h2>
        <div className="w-10 md:w-12 h-[2px] bg-black mx-auto mb-4 md:mb-6" />
        <p className="text-center text-black/50 font-bold mb-12 md:mb-16 text-sm md:text-base max-w-lg mx-auto px-2">
          Команда разработчиков, готовая воплотить ваши идеи в жизнь
        </p>

        <div className="flex justify-center gap-12 md:gap-20 mb-12 md:mb-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-[2px] md:border-[3px] border-black mb-3 md:mb-4"
              />
              <h3 className="text-sm md:text-base font-black text-black tracking-tight">
                {member.name}
              </h3>
              <p className="text-[10px] md:text-xs font-bold text-black/40 uppercase tracking-widest mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/team"
            className="inline-block text-xs font-bold uppercase tracking-widest text-black border-b-2 border-black pb-0.5 hover:text-black/60 hover:border-black/60 transition-colors"
          >
            Подробнее о команде
          </Link>
        </div>
      </div>
    </section>
  );
}
