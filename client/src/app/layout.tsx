import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oracle",
  description: "Full-stack application with Next.js and Go",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
