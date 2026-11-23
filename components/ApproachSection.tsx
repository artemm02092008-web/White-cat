import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ClinicContent } from "@/lib/clinic";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";

type AboutContent = ClinicContent["about"];

export default function ApproachSection({ data }: { data: AboutContent }) {
  return (
    <section id="about" className="relative bg-canvas py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Фото-коллаж */}
          <Reveal y={28} className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/4.3] w-full overflow-hidden rounded-[32px] bg-mist">
                <Image
                  src={data.imageSrc}
                  alt={data.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Акцентная карточка поверх фото */}
              <div className="absolute -bottom-8 right-4 w-[210px] rounded-2xl bg-accent-deep p-5 text-white shadow-[0_24px_50px_-24px_rgba(29,59,46,0.6)] lg:-right-8">
                <div className="text-[34px] font-semibold leading-none tracking-tight">
                  {data.items.length > 0 ? "8+" : "8+"}
                </div>
                <p className="mt-2 text-[12px] leading-snug text-white/75">
                  направлений и специальностей ветеринаров в одной клинике
                </p>
              </div>
            </div>
          </Reveal>

          {/* Текст */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>{data.badge.replace(/^\d+\s*\/\s*/, "")}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5 max-w-[480px]">
                {data.headingLine1} <span className="text-ink-muted">{data.headingLine2}</span>
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[460px] text-[16px] leading-[1.7] text-ink-soft">
                {data.leadText}
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col divide-y divide-line">
              {data.items.map((item, i) => (
                <Reveal key={item.number} delay={0.12 + i * 0.06} as="div">
                  <div className="group flex items-start gap-5 py-5 first:pt-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-[12px] font-semibold tabular-nums text-ink-muted transition-colors group-hover:border-accent group-hover:text-accent-strong">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-[14px] leading-[1.6] text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <CtaButton href="/services" variant="outline" size="md" withArrow>
                  Услуги и цены
                </CtaButton>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink transition-colors hover:text-accent-strong"
                >
                  Подробнее о клинике
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Короткие тезисы — в три колонки, без карточек */}
        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-6 border-t border-line pt-10 sm:grid-cols-3">
          {[
            "Врачи слушают вас и объясняют каждый шаг обследования",
            "Диагностика, хирургия и стоматология на месте",
            "Заранее называем стоимость и согласуем план",
          ].map((text, i) => (
            <Reveal key={text} delay={0.05 * i}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage text-accent-strong">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.6} aria-hidden="true" />
                </span>
                <p className="text-[14px] leading-[1.6] text-ink-soft">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
