import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Building,
  ClipboardList,
  Droplets,
  HeartPulse,
  Microscope,
  Scan,
  Scissors,
  Stethoscope,
  Syringe,
} from "lucide-react";

/* Услуги сгруппированы по направлениям. Данные лежат здесь и легко
   переносятся в Headless CMS вместе с остальным контентом. */

export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceGroup {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  items: ServiceItem[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "terapiya",
    icon: Stethoscope,
    title: "Терапия и консультации",
    summary: "Первичный приём, план обследования и лечения понятным языком.",
    items: [
      { name: "Аллергология, терапия атопического дерматита", price: "от 1 100 ₽" },
      { name: "Инъекции (подкожные, внутримышечные, внутривенные)", price: "от 80 ₽" },
    ],
  },
  {
    id: "diagnostika",
    icon: Scan,
    title: "Диагностика",
    summary: "ЭКГ, УЗИ и рентген на месте — без поездок по городу.",
    items: [
      { name: "УЗИ глаза", price: "от 600 ₽" },
      { name: "УЗИ одного органа", price: "от 500 ₽" },
      { name: "ЭКГ кошек и собак", price: "от 550 ₽" },
      {
        name: "Прочие лабораторные исследования (отправка в стороннюю лабораторию, срок от 24 часов)",
        price: "от 100 ₽",
      },
    ],
  },
  {
    id: "hirurgiya",
    icon: Scissors,
    title: "Хирургия и стоматология",
    summary: "Плановые и экстренные операции, ультразвуковая чистка зубов.",
    items: [
      {
        name: "Удаление новообразований молочных желез (мастэктомия): локальная, регионарная, унилатеральная",
        price: "от 1 000 ₽",
      },
      { name: "Экстракция (удаление) зубов любой степени сложности", price: "от 500 ₽" },
      { name: "Ультразвуковая чистка зубов и снятие зубного камня", price: "уточняйте" },
    ],
  },
];

/* Направления клиники — для страницы «О нас» */
export interface DirectionCard {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const directionCards: DirectionCard[] = [
  {
    icon: Stethoscope,
    title: "Специалисты",
    items: [
      "Хирурги",
      "Стоматологи",
      "Офтальмологи",
      "Терапевты",
      "Дерматологи",
      "Гинекологи",
      "Кардиологи",
      "Анестезиологи",
    ],
  },
  {
    icon: Microscope,
    title: "Диагностика и лаборатория",
    items: ["ЭКГ", "УЗИ", "Рентгенография", "Биохимический анализ крови"],
  },
  {
    icon: Syringe,
    title: "Процедуры и услуги",
    items: [
      "Кастрация и стерилизация",
      "Дегельминтизация",
      "Удаление клещей и зубов",
      "Удаление прибылых пальцев",
      "Удаление зубного камня",
      "Инъекции",
      "Купирование хвоста",
      "Диспансеризация",
      "Стационарное лечение",
    ],
  },
  {
    icon: Droplets,
    title: "Груминг-салон",
    items: [
      "Стрижка когтей",
      "Гигиеническая стрижка шерсти",
      "Чистка ушей",
      "Обработка от блох",
      "Мытьё",
      "Ультразвуковая чистка зубов",
      "Маникюр",
    ],
  },
  {
    icon: HeartPulse,
    title: "Забота и наблюдение",
    items: [
      "Диспансеризация",
      "Стационарное лечение",
      "Наблюдение после операций",
      "Консультации по уходу и питанию",
    ],
  },
  {
    icon: ClipboardList,
    title: "Дополнительно",
    items: [
      "Оформление ветеринарного паспорта",
      "Взвешивание животных",
      "Транспортировка животных",
      "Ритуальные услуги",
    ],
  },
];

/* Преимущества — для блока «Наш подход» */
export interface Advantage {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const advantages: Advantage[] = [
  {
    icon: Stethoscope,
    title: "Врачи разных профилей",
    text: "Хирурги, терапевты, стоматологи, офтальмологи, дерматологи, кардиологи и анестезиологи.",
  },
  {
    icon: Activity,
    title: "Диагностика на месте",
    text: "ЭКГ, УЗИ и рентгенография — без поездок по городу и ожидания.",
  },
  {
    icon: Building,
    title: "Понятный план лечения",
    text: "Подбираем курс с ветеринарными препаратами и заранее называем стоимость.",
  },
];
