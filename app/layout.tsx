import type { Metadata } from "next";
import { Golos_Text } from "next/font/google";
import "./globals.css";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-golos",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://belyi-kot.ru"),
  title: {
    default: "Белый кот — ветеринарная клиника в Электростали",
    template: "%s — Белый кот",
  },
  description:
    "Ветеринарная клиника «Белый кот» в Электростали: врачи разных профилей, диагностика (УЗИ, ЭКГ, рентген), хирургия, стоматология, груминг. Ежедневно 10:00–21:00.",
  keywords: [
    "ветеринарная клиника Электросталь",
    "ветеринар Электросталь",
    "клиника Белый кот",
    "УЗИ животных",
    "груминг Электросталь",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Ветеринарная клиника «Белый кот»",
    title: "Белый кот — ветеринарная клиника в Электростали",
    description:
      "Заботимся о здоровье питомцев — от первого осмотра до сложного лечения. Ежедневно, без выходных.",
  },
  robots: { index: true, follow: true },
};

/* Требование проекта: весь сайт должен быть статическим (SSG). */
export const ensureStatic = "navigation";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={golos.variable}>
      <body className="bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
