import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ApproachSection = () => {
  return (
    <section id="approach" className="w-full bg-[#F2F0E9] py-16 px-6 lg:py-24 flex justify-center">
      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* ЛЕВАЯ КОЛОНКА: КАРТИНКА */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[550px] rounded-[32px] overflow-hidden">
            <Image
              src="/clinic-interior.jpg"
              alt="Зал ожидания ветеринарной клиники «Белый кот»"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: ЗАГОЛОВОК, КОРОТКИЙ ТЕКСТ И КНОПКА */}
        <div className="flex flex-col gap-8 lg:pl-4">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight">
              О нас<br />

            </h2>
            
            {/* Оставляем только пару предложений */}
            <p className="text-[16px] text-[#5A5A5A] leading-relaxed max-w-lg">
              Питомцы не могут рассказать, что именно их беспокоит, поэтому мы внимательно слушаем вас и подробно объясняем каждый шаг обследования и лечения. Ветеринары клиники «Белый кот» помогут выявить заболевание и подберут правильный курс.
            </p>
          </div>

          {/* Кнопка "Подробнее" */}
          <div>
            <Link
              href="/about" // Ссылка на страницу "О нас" (замените, если путь другой)
              className="inline-flex items-center gap-2 rounded-lg bg-[#75C043] px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#65a83a]"
            >
              Подробнее
              <span className="text-lg leading-none">&rarr;</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ApproachSection;