import type { Metadata } from "next";
import { HeroSection } from "@/widgets/hero-section";
import { TeamSection } from "@/widgets/team-section";

export const metadata: Metadata = {
  title: "Oracle Studio — веб-разработка под ключ",
  description:
    "Студия веб-разработки полного цикла. Создаём сайты, Telegram и Discord ботов. От идеи до продакшена.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Oracle Studio",
  description:
    "Студия веб-разработки полного цикла. Создаём сайты, Telegram и Discord ботов.",
  url: "https://oracle-studio.ru",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://t.me/kyurenodev",
  },
  knowsAbout: [
    "Веб-разработка",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "Telegram боты",
    "Discord боты",
  ],
  areaServed: {
    "@type": "Country",
    name: "Россия",
  },
  serviceType: [
    "Разработка сайтов",
    "Разработка Telegram ботов",
    "Разработка Discord ботов",
    "Full-stack разработка",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TeamSection />
    </>
  );
}
