/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oracle: {
          bg: "#fafafa",
          surface: "#f4f4f5",
          elevated: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-sm": "0 0 40px -12px rgba(59, 130, 246, 0.35)",
        "glow-lg": "0 0 80px -24px rgba(59, 130, 246, 0.2)",
        card: "0 24px 48px -28px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 32px 64px -24px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
