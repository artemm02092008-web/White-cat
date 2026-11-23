import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceGroups } from "@/lib/services";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-canvas py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[560px]">
            <Reveal>
              <Eyebrow>Услуги и цены</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5">
                Всё для здоровья питомца — в одном месте
              </SectionHeading>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[380px] text-[15px] leading-[1.7] text-ink-soft lg:pb-2">
              Полный список услуг и цен — на отдельной странице. Ниже — основные
              направления клиники «Белый кот».
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          {serviceGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.id} delay={i * 0.08} as="article" className="h-full">
                <div className="group flex h-full flex-col rounded-[26px] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_50px_-28px_rgba(20,24,26,0.28)] lg:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-accent-deep transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-[19px] font-semibold text-ink">{group.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                    {group.summary}
                  </p>

                  <ul className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-start justify-between gap-4 text-[13.5px] leading-snug"
                      >
                        <span className="text-ink-soft">{item.name}</span>
                        <span className="shrink-0 font-semibold tabular-nums text-ink">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaButton href="/services" variant="dark" size="lg" withArrow>
              Смотреть все услуги и цены
            </CtaButton>
            <Link
              href="/specialists"
              className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink transition-colors hover:text-accent-strong"
            >
              Наши врачи
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
