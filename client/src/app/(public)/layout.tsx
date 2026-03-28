import { Header } from "@/shared/ui/header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-oracle-bg">
      <Header />
      <main className="flex min-h-0 flex-1 flex-col">{children}</main>
      <footer className="border-t border-black/[0.06] bg-oracle-surface/80 px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-zinc-500">
            Oracle Studio
          </p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-6">
            <span className="text-[0.65rem] font-semibold text-zinc-500">
              По вопросам разработки:
            </span>
            <a
              href="https://t.me/kyurenodev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-800 transition-colors hover:text-zinc-950"
            >
              @kyurenodev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
