import Image from "next/image";
import { Check } from "lucide-react";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { directionCards } from "@/lib/services";
import { getClinicContent } from "@/lib/clinic";
import { asset } from "@/lib/asset";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";

export const metadata = {
  title: "О клинике",
  description:
    "Ветеринарная клиника «Белый кот» в Электростали: специалисты разных профилей, диагностика, хирургия, стоматология, груминг и лаборатория.",
};

export default function AboutPage() {
  const { clinic, about } = getClinicContent();

  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <SiteHeader />

      {/* Заголовок */}
      <section className="relative overflow-hidden bg-canvas pb-12 pt-14 lg:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-sage/60 blur-[110px]"
        />
        <Container className="relative max-w-[820px]">
          <Reveal>
            <Eyebrow>О клинике</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading as="h1" className="mt-5">
              Забота о питомцах — каждый день
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[16px] leading-[1.75] text-ink-soft">
              Питомцы, в отличие от людей, требуют особого внимания к своему
              здоровью: без явных жалоб сложно определить, что именно их беспокоит.
              Поэтому заботу о здоровье животных лучше доверять профессионалам — мы
              внимательно слушаем и объясняем каждый шаг обследования и лечения.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Фото + ключевые тезисы */}
      <section className="pb-16 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal y={28}>
              <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-[32px] bg-mist">
                <Image
                  src={asset(about.imageSrc)}
                  alt={about.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="flex items-start gap-3.5 text-[15px] leading-[1.7] text-ink-soft">
                    <span className="mt-[7px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage text-accent-strong">
                      <Check className="h-3 w-3" strokeWidth={2.8} aria-hidden="true" />
                    </span>
                    <span>{paragraph}</span>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Направления — белые карточки */}
      <section className="bg-mist/50 py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading className="max-w-[560px]">
              Направления и услуги клиники
            </SectionHeading>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {directionCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={i * 0.06} as="article" className="h-full">
                  <div className="flex h-full flex-col rounded-[24px] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(20,24,26,0.24)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sage text-accent-deep">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 text-[17px] font-semibold text-ink">{card.title}</h2>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[14px] leading-[1.5] text-ink-soft"
                        >
                          <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
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

      {/* CTA */}
      <section className="bg-canvas py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[640px] text-center">
              <h2 className="text-[clamp(1.7rem,3.6vw,2.4rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
                Ждём вас ежедневно
              </h2>
              <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-[1.7] text-ink-soft">
                {clinic.address.full}
                <br />
                {clinic.hours}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CtaButton href={clinic.phoneHref} variant="primary" size="lg" withArrow>
                  {clinic.phone}
                </CtaButton>
                <CtaButton href="/booking" variant="outline" size="lg">
                  Записаться онлайн
                </CtaButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
