export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-5 md:px-8 pt-20 md:pt-0">
      <div className="max-w-5xl w-full text-center">
        <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-black/40 mb-4 md:mb-6">
          Веб-студия
        </p>

        <h1 className="text-[3.5rem] md:text-[7rem] leading-[0.9] font-black tracking-tighter text-black mb-6 md:mb-8">
          ORACLE
          <span className="block text-[1.75rem] md:text-[3.5rem] font-bold tracking-tight mt-1 md:mt-2">
            STUDIO
          </span>
        </h1>

        <div className="w-10 md:w-16 h-[2px] bg-black mx-auto mb-6 md:mb-8" />

        <p className="text-base md:text-xl font-bold text-black max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
          Создаем цифровые продукты от идеи до реализации.
          <br className="hidden md:block" />
          <span className="md:hidden"> </span>
          Веб-сайты, Telegram и Discord боты, полный цикл разработки.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-12 text-xs md:text-sm font-bold uppercase tracking-widest text-black/50 mb-10 md:mb-14">
          <span>Веб-сайты</span>
          <span className="hidden md:inline text-black/20">/</span>
          <span>Telegram боты</span>
          <span className="hidden md:inline text-black/20">/</span>
          <span>Discord боты</span>
        </div>

        <a
          href="https://t.me/kyurenodev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-white bg-black px-8 py-4 hover:bg-black/80 transition-colors"
        >
          Обсудить проект
        </a>
      </div>
    </section>
  );
}
