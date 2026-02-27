import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://oracle-studio.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oracle Studio — веб-разработка под ключ",
    template: "%s | Oracle Studio",
  },
  description:
    "Студия веб-разработки полного цикла. Создаём сайты, Telegram и Discord ботов. От идеи до продакшена.",
  keywords: [
    "веб-разработка",
    "создание сайтов",
    "разработка сайтов",
    "веб-студия",
    "Oracle Studio",
    "Telegram боты",
    "Discord боты",
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
      "Студия веб-разработки полного цикла. Сайты, Telegram и Discord боты.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oracle Studio — веб-разработка под ключ",
    description:
      "Студия веб-разработки полного цикла. Сайты, Telegram и Discord боты.",
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
    <html lang="ru">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
