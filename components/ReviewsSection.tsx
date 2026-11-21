"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import type { ClinicContent } from "@/lib/clinic";

type ReviewsContent = ClinicContent["reviews"];

export default function ReviewsSection({ data }: { data: ReviewsContent }) {
  const reduceMotion = useReducedMotion();
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

  return (
    <section
      id="reviews"
      className="w-full bg-[#F2F0E9] py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <motion.span
              className="mb-5 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8E8C]"
              variants={fadeUp}
              initial="hidden"
              {...reveal(0.4)}
              transition={{ duration: 0.5 }}
              style={data.badge ? undefined : { display: "none" }}
            >
              {data.badge}
            </motion.span>

            <motion.h2
              className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1A1A1A] sm:text-[40px] lg:text-[44px]"
              variants={fadeUp}
              initial="hidden"
              {...reveal(0.4)}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {data.heading}
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-col gap-2 lg:items-end lg:pt-1 lg:text-right"
            variants={fadeUp}
            initial="hidden"
            {...reveal(0.4)}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-3xl font-bold text-[#1A1A1A] lg:text-4xl">
              {data.rating.value}
            </span>
            <span className="text-sm text-[#5A5A5A]">
              {data.rating.label}
            </span>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
          {data.items.map((review, index) => {
            return (
              <motion.article
                key={review.author}
                variants={fadeUp}
                initial="hidden"
                {...reveal(0.3)}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, boxShadow: "0 12px 32px rgba(26, 26, 26, 0.08)" }
                }
                className="flex flex-col rounded-[18px] bg-white p-7 transition-colors lg:p-8 shadow-sm"
              >
                <div className="mb-6 flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <Star
                      key={star}
                      className="h-[13px] w-[13px] fill-[#F2B24A] text-[#F2B24A]"
                    />
                  ))}
                </div>

                <p className="m-0 text-[14px] leading-[1.55] text-[#5A5A5A] lg:text-[15px]">
                  {review.text}
                </p>

                <div className="mt-6 pt-4 text-[11px] text-[#9BA09E]">
                  {review.author} · {review.date}
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-10 text-[12px] text-[#8A8E8C]">{data.footer}</p>
      </div>
    </section>
  );
}