import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import { SmoothScroll } from "@/shared/ui/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext", "cyrillic-ext"],
  variable: "--font-jakarta",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const SITE_URL = "https://oracle-studio.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oracle Studio — веб-разработка под ключ",
    template: "%s | Oracle Studio",
  },
  description:
    "Студия веб-разработки полного цикла. Создаём сайты, Телеграм и Дискорд ботов. От идеи до продакшена.",
  keywords: [
    "веб-разработка",
    "создание сайтов",
    "разработка сайтов",
    "веб-студия",
    "Oracle Studio",
    "Телеграм боты",
    "Дискорд боты",
    "разработка под ключ",
    "фронтенд",
    "бэкенд",
    "full-stack разработка",
    "Next.js",
    "React",
    "заказать сайт",
    "заказать бота",
  ],
  authors: [{ name: "Oracle Studio" }],
  creator: "Oracle Studio",
  publisher: "Oracle Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Oracle Studio",
    title: "Oracle Studio — веб-разработка под ключ",
    description:
      "Студия веб-разработки полного цикла. Сайты, Телеграм и Дискорд боты.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle Studio — веб-разработка под ключ",
    description:
      "Студия веб-разработки полного цикла. Сайты, Телеграм и Дискорд боты.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "ВСТАВЬ_КОД_ВЕРИФИКАЦИИ_GOOGLE",
    yandex: "ВСТАВЬ_КОД_ВЕРИФИКАЦИИ_YANDEX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${jakarta.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-oracle-bg text-zinc-900">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
