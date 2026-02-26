import { Header } from "@/shared/ui/header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-white border-t border-black/5 py-8 md:py-10 px-5 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-black/30 uppercase tracking-widest">
            Oracle Studio
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-bold text-black/30">По вопросам разработки:</span>
            <a
              href="https://t.me/kyurenodev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-widest text-black hover:text-black/60 transition-colors"
            >
              @kyurenodev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
