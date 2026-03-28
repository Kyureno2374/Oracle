"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function CtaArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M17 7H9" />
      <path d="M17 7V15" />
    </svg>
  );
}

const navLinkClass =
  "relative text-[0.65rem] font-bold uppercase tracking-[0.2em] transition-colors duration-300 md:text-xs";

const menuEase = "cubic-bezier(0.32, 0.72, 0, 1)";
const burgerEase = "cubic-bezier(0.34, 1.4, 0.64, 1)";

const MOBILE_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/projects", label: "Проекты" },
  { href: "/team", label: "Команда" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const linkInactive = `${navLinkClass} text-zinc-500 after:absolute after:bottom-[-3px] after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-zinc-900 after:transition-all after:duration-300 hover:text-zinc-900 hover:after:w-full`;
  const linkActive = `${navLinkClass} text-zinc-900 after:absolute after:bottom-[-3px] after:left-1/2 after:h-[2px] after:w-full after:-translate-x-1/2 after:rounded-full after:bg-zinc-900`;

  return (
    <>
      <button
        type="button"
        aria-label="Закрыть меню"
        className={`fixed inset-0 z-40 bg-zinc-950/30 backdrop-blur-[4px] transition-[opacity,backdrop-filter] duration-500 ease-out md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 pt-5 md:px-6 md:pt-6">
          <div className="flex flex-col">
            <div className="relative flex items-center justify-between gap-3 rounded-full border border-black/[0.07] bg-[#f5f5f5] px-5 py-2.5 shadow-[0_6px_28px_rgba(0,0,0,0.07)] md:gap-6 md:px-8 md:py-3">
              <Link
                href="/"
                className="font-display min-w-0 max-w-[calc(100%-3.25rem)] shrink text-[clamp(0.8125rem,4vw,1.125rem)] font-extrabold leading-none tracking-tight md:max-w-none md:shrink-0 md:text-xl"
              >
                <span className="text-gradient isolate block text-left">ORACLE</span>
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors duration-300 hover:bg-black/[0.06] active:bg-black/[0.08] md:hidden"
                aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={menuOpen}
              >
                {/* Три полоски: ровная колонка flex */}
                <span
                  className={`absolute flex h-3.5 w-[22px] flex-col justify-between transition-all duration-400 ease-out ${
                    menuOpen ? "pointer-events-none scale-75 opacity-0" : "opacity-100"
                  }`}
                  style={{ transitionTimingFunction: burgerEase }}
                  aria-hidden
                >
                  <span className="block h-0.5 w-full shrink-0 rounded-full bg-zinc-800" />
                  <span className="block h-0.5 w-full shrink-0 rounded-full bg-zinc-800" />
                  <span className="block h-0.5 w-full shrink-0 rounded-full bg-zinc-800" />
                </span>
                {/* Крестик */}
                <span
                  className={`absolute flex h-[22px] w-[22px] items-center justify-center transition-all duration-400 ease-out ${
                    menuOpen ? "opacity-100" : "pointer-events-none scale-75 opacity-0"
                  }`}
                  style={{ transitionTimingFunction: menuEase }}
                  aria-hidden
                >
                  <span className="absolute h-0.5 w-[22px] rounded-full bg-zinc-800 transition-transform duration-400 ease-out rotate-45" />
                  <span className="absolute h-0.5 w-[22px] rounded-full bg-zinc-800 transition-transform duration-400 ease-out -rotate-45" />
                </span>
              </button>

              <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex lg:gap-9">
                <Link href="/" className={pathname === "/" ? linkActive : linkInactive}>
                  Главная
                </Link>
                <Link href="/projects" className={pathname === "/projects" ? linkActive : linkInactive}>
                  Проекты
                </Link>
                <Link href="/team" className={pathname === "/team" ? linkActive : linkInactive}>
                  Команда
                </Link>
                <a
                  href="https://t.me/kyurenodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkInactive}
                >
                  Контакты
                </a>
              </nav>

              <a
                href="https://t.me/kyurenodev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative ml-auto hidden items-center gap-2 overflow-hidden rounded-full bg-zinc-900 py-2.5 pl-6 pr-1.5 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white shadow-sm ring-1 ring-black/10 transition-all duration-400 hover:scale-[1.03] hover:bg-zinc-800 hover:shadow-glow-sm hover:ring-black/20 active:scale-[0.98] md:inline-flex md:text-xs"
              >
                <span className="relative z-10 whitespace-nowrap pr-1">Обсудить проект</span>
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-600 text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-zinc-500">
                  <CtaArrowIcon />
                </span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/15 to-blue-500/0 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              </a>
            </div>

            <div
              className={`overflow-hidden md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
              style={{
                maxHeight: menuOpen ? "28rem" : "0px",
                marginTop: menuOpen ? "0.75rem" : "0px",
                transition: `max-height 520ms ${menuEase}, margin 420ms ${menuEase}`,
              }}
            >
              <nav
                className={`rounded-[1.35rem] border border-black/[0.08] bg-[#f5f5f5]/95 p-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] ring-1 ring-white/60 backdrop-blur-xl ${
                  menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
                style={{
                  transition: `transform 480ms ${menuEase}, opacity 420ms ease-out`,
                }}
              >
                <div className="flex flex-col gap-1 p-1">
                  {MOBILE_LINKS.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-2xl px-4 py-3.5 transition-[transform,background-color,color] duration-500 ease-out active:scale-[0.99] active:bg-black/[0.06] ${
                        menuOpen ? "translate-y-0" : "-translate-y-1"
                      } ${
                        pathname === item.href
                          ? "bg-black/[0.06] " + linkActive
                          : `${navLinkClass} text-zinc-500 hover:bg-black/[0.04] hover:text-zinc-900`
                      }`}
                      style={{
                        transitionDelay: menuOpen ? `${60 + i * 45}ms` : `${(MOBILE_LINKS.length - i) * 35}ms`,
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href="https://t.me/kyurenodev"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className={`${navLinkClass} rounded-2xl px-4 py-3.5 text-zinc-500 transition-[transform,background-color,color] duration-500 ease-out hover:bg-black/[0.04] hover:text-zinc-900 active:bg-black/[0.06] ${
                      menuOpen ? "translate-y-0" : "-translate-y-1"
                    }`}
                    style={{
                      transitionDelay: menuOpen ? `${60 + MOBILE_LINKS.length * 45}ms` : "0ms",
                    }}
                  >
                    Контакты
                  </a>
                </div>

                <div className="p-2 pt-0">
                  <a
                    href="https://t.me/kyurenodev"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-zinc-900 py-3.5 pl-6 pr-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white ring-1 ring-black/15 transition-[transform,opacity,box-shadow] duration-500 ease-out hover:shadow-glow-sm active:scale-[0.99] ${
                      menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    }`}
                    style={{
                      transitionDelay: menuOpen ? "260ms" : "60ms",
                    }}
                  >
                    <span className="relative z-10">Обсудить проект</span>
                    <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-600 transition-all group-hover:bg-zinc-500">
                      <CtaArrowIcon />
                    </span>
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/15 to-blue-500/0 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
