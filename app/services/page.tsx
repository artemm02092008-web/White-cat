import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";
import { serviceGroups } from "@/lib/services";
import { getClinicContent } from "@/lib/clinic";

export const metadata = {
  title: "Услуги и цены",
  description:
    "Полный список ветеринарных услуг и цены в клинике «Белый кот» в Электростали: терапия, диагностика, хирургия, стоматология.",
};

export default function ServicesPage() {
  const { clinic } = getClinicContent();

  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <SiteHeader />

      {/* Заголовок страницы */}
      <section className="relative overflow-hidden bg-canvas pb-12 pt-14 lg:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-sage/60 blur-[110px]"
        />
        <Container className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <Reveal>
              <Eyebrow>Услуги и цены</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading as="h1" className="mt-5">
                Полный список направлений
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[15.5px] leading-[1.7] text-ink-soft">
                Приём ведут врачи разных профилей, диагностика проходит на месте.
                Точную стоимость конкретной процедуры уточните у администратора.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-line bg-mist/60 px-6 py-5">
              <p className="text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                Записаться по телефону
              </p>
              <a
                href={clinic.phoneHref}
                className="mt-1.5 inline-flex items-center gap-2 text-[20px] font-semibold text-ink transition-colors hover:text-accent-strong"
              >
                <Phone className="h-4 w-4 text-accent-strong" strokeWidth={2} aria-hidden="true" />
                {clinic.phone}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Список услуг */}
      <section className="pb-8">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
            {serviceGroups.map((group, i) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.id} delay={i * 0.08} as="article" className="h-full">
                  <div className="flex h-full flex-col rounded-[26px] border border-line bg-white p-7 lg:p-8">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-accent-deep">
                      <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <h2 className="mt-6 text-[19px] font-semibold text-ink">{group.title}</h2>
                    <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">{group.summary}</p>

                    <ul className="mt-6 flex flex-1 flex-col gap-4 border-t border-line pt-6">
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-start justify-between gap-4 text-[14px] leading-snug"
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
        </Container>
      </section>

      <Container>
        <p className="mt-8 max-w-[820px] text-[12.5px] leading-[1.7] text-ink-muted">
          Цены, приведённые на сайте, не окончательные, не являются публичной
          офертой и носят информационный характер.
        </p>
      </Container>

      {/* CTA */}
      <section className="mt-16 bg-mist/50 py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[640px] text-center">
              <h2 className="text-[clamp(1.7rem,3.6vw,2.4rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
                Не нашли нужную услугу?
              </h2>
              <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-[1.7] text-ink-soft">
                Позвоните нам — подскажем, к какому специалисту обратиться и как
                подготовить питомца к приёму.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CtaButton href={clinic.phoneHref} variant="primary" size="lg" withArrow>
                  {clinic.phone}
                </CtaButton>
                <CtaButton href="/booking" variant="outline" size="lg">
                  Записаться онлайн
                </CtaButton>
              </div>
              <Link
                href="/#faq"
                className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink transition-colors hover:text-accent-strong"
              >
                Частые вопросы
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
