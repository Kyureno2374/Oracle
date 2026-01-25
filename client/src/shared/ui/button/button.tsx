import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
