import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-glow-sm transition-all duration-300 hover:bg-blue-500 hover:shadow-glow-lg disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:opacity-50 disabled:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
