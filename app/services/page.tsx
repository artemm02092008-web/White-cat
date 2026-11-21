import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Услуги и цены — Ветеринарная клиника «Белый кот»",
  description: "Полный список ветеринарных услуг и цены в клинике «Белый кот» в Электростали.",
};

// Данные об услугах и ценах
const servicesData = [
  {
    category: "Терапия и консультации",
    items: [
      {
        name: "Аллергология, терапия атопического дерматита",
        price: "от 1100 руб.",
      },
      {
        name: "Инъекции (подкожные, внутримышечные, внутривенные)",
        price: "от 80 руб.",
      },
    ],
  },
  {
    category: "Диагностика",
    items: [
      { name: "УЗИ глаза", price: "от 600 руб." },
      { name: "УЗИ одного органа", price: "от 500 руб." },
      { name: "ЭКГ кошек и собак", price: "от 550 руб." },
      {
        name: "Любые прочие лабораторные исследования ежедневно отправляются в стороннюю лабораторию, срок готовности от 24 часов",
        price: "от 100 руб.",
      },
    ],
  },
  {
    category: "Хирургия и стоматология",
    items: [
      {
        name: "Удаление новообразований молочных желез (мастэктомия), локальная, регионарная, унилатеральная",
        price: "от 1000 руб.",
      },
      {
        name: "Экстракция (удаление) зубов любой степени сложности",
        price: "от 500 руб.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Хедер */}
      <SiteHeader />

      {/* Сетка с услугами */}
      <section className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {servicesData.map((group) => (
            <div key={group.category} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-[#1A1A1A] border-b border-gray-200 pb-3">
                {group.category}
              </h2>
              <ul className="flex flex-col gap-4">
                {group.items.map((item) => (
                  <li key={item.name} className="flex justify-between items-baseline gap-4 text-[15px]">
                    <span className="text-[#5A5A5A]">{item.name}</span>
                    <span className="w-full border-b border-dotted border-gray-300 relative -top-1"></span>
                    <span className="font-semibold text-[#1A1A1A] whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Дисклеймер */}
      <p className="mx-auto -mt-8 mb-16 max-w-[1200px] px-6 text-[12px] leading-[1.6] text-[#8A8E8C] lg:px-0">
        Цены, приведённые на сайте, не окончательные, не являются публичной офертой и носят информационный характер.
      </p>

      {/* Блок призыва к действию (CTA) внизу */}
      <section className="w-full bg-[#EEF2E6] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Не нашли нужную услугу?</h2>
        <p className="text-[#5A5A5A] mb-8">Позвоните нам, и мы подскажем, к какому специалисту обратиться.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+79257222580"
            className="inline-flex items-center justify-center rounded-lg bg-[#75C043] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#65a83a]"
          >
            Позвонить: +7 (925) 722-25-80
          </a>
          <Link
            href="/#booking"
            className="inline-flex items-center justify-center rounded-lg border border-[#75C043] text-[#75C043] px-8 py-4 text-sm font-semibold hover:bg-[#75C043] hover:text-white transition-all"
          >
            Записаться онлайн
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}