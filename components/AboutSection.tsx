"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import type { ClinicContent } from "@/lib/clinic";

type AboutContent = ClinicContent["about"];

export default function AboutSection({ data }: { data: AboutContent }) {
  const reduceMotion = useReducedMotion();
  // Страховка: если появление по скроллу не сработало (напр. IntersectionObserver
  // недоступен), через 1.2 c показываем блок принудительно — текст всегда виден.
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setForced(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  const imageFade = {
    hidden: { opacity: 0, scale: reduceMotion ? 1 : 1.03 },
    visible: { opacity: 1, scale: 1 },
  };

  const reveal = (amount = 0.3) =>
    forced
      ? ({ animate: "visible" } as const)
      : ({ whileInView: "visible", viewport: { once: true, amount } } as const);

  return (
    <section id="about" className="w-full bg-[#F2F0E9] py-16 md:py-24 lg:py-28">
      <div id="approach" className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Левая колонка: фотография + заголовок (заголовок выровнен по низу плитки, как в макете) */}
          <motion.div
            className="flex flex-col lg:col-span-6"
            variants={imageFade}
            initial="hidden"
            {...reveal(0.2)}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/3.6] w-full overflow-hidden rounded-[24px] bg-[#F3F2EE]">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            <motion.span
              className="mt-4 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8E8C]"
              variants={fadeUp}
              initial="hidden"
              {...reveal(0.4)}
              transition={{ duration: 0.5 }}
            >
              {data.badge}
            </motion.span>
          </motion.div>

          {/* Правая колонка: заголовок, лид, нумерованный список */}
          <div className="flex flex-col justify-center lg:col-span-6 lg:pb-16">
            <motion.h2
              className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1A1A1A] sm:text-[40px] lg:text-[44px]"
              variants={fadeUp}
              initial="hidden"
              {...reveal(0.4)}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <span className="block">{data.headingLine1}</span>
              <span className="block">{data.headingLine2}</span>
            </motion.h2>

            <motion.p
              className="mt-5 max-w-[440px] text-[15px] leading-[1.6] text-[#5A5A5A] sm:text-[16px]"
              variants={fadeUp}
              initial="hidden"
              {...reveal(0.4)}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {data.leadText}
            </motion.p>

            <div className="mt-10 space-y-7 sm:mt-11 sm:space-y-8">
              {data.items.map((item, index) => (
                <motion.div
                  key={item.number}
                  className="flex items-start gap-7 sm:gap-10"
                  variants={fadeUp}
                  initial="hidden"
                  {...reveal(0.6)}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                >
                  <span className="w-6 shrink-0 pt-[3px] text-[12px] font-medium tabular-nums text-[#9BA09E]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-[16px] font-semibold leading-[1.3] text-[#1A1A1A] sm:text-[17px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-[1.5] text-[#5A5A5A] sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Полное описание клиники */}
          <motion.div
            className="lg:col-span-12"
            variants={fadeUp}
            initial="hidden"
            {...reveal(0.15)}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mt-4 grid grid-cols-1 gap-x-16 gap-y-5 border-t border-[#E8E9E6] pt-10 lg:grid-cols-2 lg:mt-8 lg:pt-12">
              {data.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="flex items-start gap-3.5 text-[15px] leading-[1.7] text-[#5A5A5A]"
                >
                  <CircleCheck
                    className="mt-[3px] h-[17px] w-[17px] shrink-0 text-[#75C043]"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <span>{paragraph}</span>
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#75C043] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#65a83a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-2"
              >
                Посмотреть услуги
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </motion.a>
              <a
                href="#contacts"
                className="self-start border-b border-[#1A1A1A] pb-1 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#75C043] hover:text-[#75C043] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-2"
              >
                Адрес и часы работы
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
