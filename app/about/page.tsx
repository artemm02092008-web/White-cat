import Link from "next/link";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import { getClinicContent } from "@/lib/clinic";

export const metadata = {
  title: "О нас — Ветеринарная клиника «Белый кот»",
  description:
    "Ветеринарная клиника «Белый кот» в Электростали: специалисты разных профилей, диагностика, хирургия, груминг и лаборатория.",
};

const PROFILES = [
  "Хирурги",
  "Стоматологи",
  "Офтальмологи",
  "Терапевты",
  "Дерматологи",
  "Гинекологи",
  "Кардиологи",
  "Анестезиологи",
];

const DIAGNOSTICS = ["ЭКГ", "УЗИ", "Рентгенография", "Биохимический анализ крови"];

const SERVICES = [
  "Кастрация и стерилизация",
  "Дегельминтизация",
  "Удаление клещей и зубов",
  "Удаление прибылых пальцев",
  "Удаление зубного камня",
  "Инъекции",
  "Купирование хвоста",
  "Диспансеризация",
  "Стационарное лечение",
];

const GROOMING = [
  "Стрижка когтей",
  "Гигиеническая стрижка шерсти",
  "Чистка ушей",
  "Обработка от блох",
  "Мытьё",
  "Ультразвуковая чистка зубов",
  "Маникюр",
];

const RITUAL = ["Эвтаназия", "Кремация"];

const EXTRAS = [
  "Оформление ветеринарного паспорта",
  "Взвешивание животных",
  "Транспортировка животных",
];

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4 rounded-[18px] bg-white p-7 shadow-sm lg:p-8">
      <h3 className="text-[17px] font-semibold text-[#1A1A1A]">{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.5] text-[#5A5A5A]">
            <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#75C043]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  const { clinic } = getClinicContent();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Хедер */}
      <SiteHeader />

      {/* Заголовок страницы */}
      <section className="w-full px-6 py-12 text-center lg:py-16">
        <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8E8C]">
          О клинике
        </span>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-[#1A1A1A] lg:text-4xl">
          О нас
        </h1>
        <p className="mx-auto max-w-2xl text-[14px] leading-[1.7] text-[#5A5A5A]">
          Питомцы, в отличие от людей, требуют особого внимания к своему здоровью,
          так как без явных жалоб сложно определить, что именно их беспокоит. Заботу
          о здоровье животных лучше доверять профессионалам.
        </p>
      </section>

      {/* Основной текст */}
      <section className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:py-24">
        <div className="flex flex-col gap-6 text-[16px] leading-[1.8] text-[#5A5A5A]">
          <p>
            Ветеринары клиники «Белый кот» (рейтинг на Zoon.ru — 4.8) могут на
            консультации выявить различные заболевания у своих «пациентов» и
            предложить соответствующий курс лечения с использованием
            специализированных ветеринарных препаратов. Также они проводят все
            необходимые медицинские процедуры на месте.
          </p>
          <p>
            Здесь выполняются диагностические исследования, такие как ЭКГ, УЗИ и
            рентгенография. В лаборатории можно пройти биохимический анализ крови,
            сдать анализы на пироплазмоз, токсоплазмоз и панлейкопению.
          </p>
          <p>
            Например, консультация по аллергологии и терапии атопического дерматита
            стоит от 1100 рублей.
          </p>
        </div>

        {/* Сетка направлений */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
          <ListCard title="Специалисты" items={PROFILES} />
          <ListCard title="Диагностика и лаборатория" items={DIAGNOSTICS} />
          <ListCard title="Процедуры и услуги" items={SERVICES} />
          <ListCard title="Груминг-салон" items={GROOMING} />
          <ListCard title="Ритуальные услуги" items={RITUAL} />
          <ListCard title="Дополнительно" items={EXTRAS} />
        </div>
      </section>

      {/* Контакты / CTA */}
      <section className="w-full bg-[#EEF2E6] px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#1A1A1A]">
          Ждём вас ежедневно
        </h2>
        <p className="mx-auto mb-2 max-w-xl text-[15px] text-[#5A5A5A]">
          {clinic.address.full}
        </p>
        <p className="mb-8 text-[15px] text-[#5A5A5A]">
          Работаем ежедневно с 10:00 до 21:00
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center justify-center rounded-lg bg-[#75C043] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#65a83a]"
          >
            Позвонить: {clinic.phone}
          </a>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-lg border border-[#75C043] px-8 py-4 text-sm font-semibold text-[#75C043] transition-all hover:bg-[#75C043] hover:text-white"
          >
            Записаться онлайн
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
