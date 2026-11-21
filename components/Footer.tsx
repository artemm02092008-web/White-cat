import React from 'react';
import Link from 'next/link';

const FOOTER_LINKS = [
  { label: "О нас", href: "/about" },
  { label: "Услуги и цены", href: "/services" },
  { label: "Врачи", href: "/specialists" },
  { label: "Отзывы", href: "/#reviews" },
  { label: "Частые вопросы", href: "/#faq" },
  { label: "Контакты", href: "/#contacts" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#1D3B2E] text-white pt-16 pb-8 px-6 lg:px-12 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col">
        
        {/* ВЕРХНЯЯ ЧАСТЬ: ЛОГОТИП, НАВИГАЦИЯ, КОНТАКТЫ, СЛОГАН */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 items-start pb-12 border-b border-white/10">
          
          {/* Логотип и описание */}
          <div className="md:col-span-4 flex flex-col gap-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              белый кот
            </Link>
            <span className="text-[11px] text-white/60 font-light">
              Ветеринарная клиника в Электростали
            </span>
            <span className="mt-4 max-w-[260px] text-[13px] leading-[1.6] text-white/60 font-light">
              Заботимся о здоровье питомцев — от первого осмотра до сложного
              лечения. Ежедневно, без выходных.
            </span>
          </div>

          {/* Навигация */}
          <div className="md:col-span-3 flex flex-col gap-3 pt-1">
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Разделы
            </span>
            <div className="flex flex-col gap-2 text-[13px] text-white/80 font-light">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Контакты */}
          <div className="md:col-span-3 flex flex-col gap-3 pt-1">
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Контакты
            </span>
            <div className="flex flex-col gap-2 text-[13px] text-white/80 font-light">
              <a
                href="tel:+79257222580"
                className="text-base font-semibold text-white transition-colors hover:text-[#A8D37B]"
              >
                +7 (925) 722-25-80
              </a>
              <span className="leading-[1.6]">
                Московская область, Электросталь,
                <br />
                улица Мира, 27/1
              </span>
              <span className="leading-[1.6]">Ежедневно 10:00–21:00</span>
            </div>
          </div>

          {/* Слоган */}
          <div className="md:col-span-2 flex md:justify-end pt-1">
            <span className="text-[13px] text-[#A8D37B] font-light">
              С заботой о каждом хвосте.
            </span>
          </div>
        </div>

        {/* НИЖНЯЯ ЧАСТЬ: КОПИРАЙТ, ДОКУМЕНТЫ, ДИСКЛЕЙМЕР */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-6 text-[10px] text-white/50 font-light">
          
          {/* Копирайт */}
          <div className="md:col-span-4">
            © Белый кот, 2026
          </div>

          {/* Ссылка на политику */}
          <div className="md:col-span-5">
            <Link href="#" className="hover:text-white/80 transition-colors">
              Политика конфиденциальности
            </Link>
          </div>

          {/* Дисклеймер */}
          <div className="md:col-span-3 md:text-right">
            Информация не заменяет консультацию ветеринарного врача.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
