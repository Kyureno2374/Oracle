"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tight text-black">
          ORACLE
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        <nav className="hidden md:flex gap-10">
          <Link
            href="/"
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${
              pathname === "/" ? "text-black" : "text-black/40 hover:text-black"
            }`}
          >
            Главная
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${
              pathname === "/projects" ? "text-black" : "text-black/40 hover:text-black"
            }`}
          >
            Проекты
          </Link>
          <Link
            href="/team"
            className={`text-sm font-bold uppercase tracking-widest transition-colors ${
              pathname === "/team" ? "text-black" : "text-black/40 hover:text-black"
            }`}
          >
            Команда
          </Link>
          <a
            href="https://t.me/kyurenodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors"
          >
            Контакты
          </a>
        </nav>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col px-5 py-4 gap-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                pathname === "/" ? "text-black" : "text-black/40"
              }`}
            >
              Главная
            </Link>
            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                pathname === "/projects" ? "text-black" : "text-black/40"
              }`}
            >
              Проекты
            </Link>
            <Link
              href="/team"
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                pathname === "/team" ? "text-black" : "text-black/40"
              }`}
            >
              Команда
            </Link>
            <a
              href="https://t.me/kyurenodev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-black/40"
            >
              Контакты
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
