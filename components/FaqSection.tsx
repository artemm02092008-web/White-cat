"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import type { ClinicContent } from "@/lib/clinic";

type FaqContent = ClinicContent["faq"];

function FaqRow({
  item,
  isOpen,
  onToggle,
  reduceMotion,
  isLast = false,
}: {
  item: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  reduceMotion: boolean | null;
  isLast?: boolean;
}) {
  return (
    <div className={isLast ? "" : "border-b border-[#D1CFC7]"}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[#75C043] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F2F0E9]"
      >
        <span className="text-[15px] font-medium text-[#2C2C2C] sm:text-[16px]">
          {item.question}
        </span>
        <span className="shrink-0 text-[#2C2C2C]">
          {isOpen ? (
            <Minus className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
          ) : (
            <Plus className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <p className="max-w-[620px] pb-6 text-[14px] leading-[1.6] text-[#424242]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection({ data }: { data: FaqContent }) {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setForced(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  const reveal = (amount = 0.3) =>
    forced
      ? ({ animate: "visible" } as const)
      : ({ whileInView: "visible", viewport: { once: true, amount } } as const);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? -1 : index));

  return (
    <section id="faq" className="w-full bg-[#F2F0E9] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Левая колонка: заголовок и телефон */}
          <motion.div
            className="lg:col-span-4"
            variants={fadeUp}
            initial="hidden"
            {...reveal(0.3)}
            transition={{ duration: 0.6 }}
          >
            <span
              className="mb-5 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8E8C]"
              style={data.badge ? undefined : { display: "none" }}
            >
              {data.badge}
            </span>

            <h2 className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#2C2C2C] sm:text-[40px] lg:text-[44px]">
              <span className="block">{data.headingLine1}</span>
              <span className="block">{data.headingLine2}</span>
            </h2>

            <p className="mt-5 max-w-[340px] text-[15px] leading-[1.6] text-[#5A5A5A]">
              {data.lead}
            </p>

            <Link
              href={data.phoneHref}
              className="mt-6 inline-block text-[19px] font-semibold text-[#2C2C2C] transition-colors hover:text-[#75C043] lg:text-[20px]"
            >
              {data.phone}
            </Link>
          </motion.div>

          {/* Правая колонка: аккордеон */}
          <motion.div
            className="lg:col-span-8"
            variants={fadeUp}
            initial="hidden"
            {...reveal(0.2)}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              {data.mainItems.map((item, index) => (
                <FaqRow
                  key={item.question}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                  reduceMotion={reduceMotion}
                  isLast={!showMore && index === data.mainItems.length - 1}
                />
              ))}
            </div>

            {showMore && (
              <div>
                {data.moreItems.map((item, index) => (
                  <FaqRow
                    key={item.question}
                    item={item}
                    isOpen={openIndex === data.mainItems.length + index}
                    onToggle={() => toggle(data.mainItems.length + index)}
                    reduceMotion={reduceMotion}
                    isLast={index === data.moreItems.length - 1}
                  />
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowMore((value) => !value)}
              className="mt-8 inline-flex items-center gap-2 pb-1 text-sm font-medium text-[#424242] transition-colors hover:text-[#75C043] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-2"
            >
              {showMore ? data.lessLabel : data.moreLabel}
              {showMore ? (
                <Minus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Plus className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}