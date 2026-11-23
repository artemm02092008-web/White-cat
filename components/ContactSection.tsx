import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { getClinicContent } from "@/lib/clinic";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";

export default function ContactSection() {
  const { clinic } = getClinicContent();

  return (
    <section id="contacts" className="relative bg-canvas py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Левая колонка — данные */}
          <div>
            <Reveal>
              <Eyebrow>Контакты и проезд</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionHeading className="mt-5 max-w-[420px]">
                Приходите в клинику. Ждём вас и ваших питомцев
              </SectionHeading>
            </Reveal>

            <div className="mt-9 flex flex-col divide-y divide-line border-t border-line">
              <Reveal delay={0.1}>
                <a
                  href={clinic.phoneHref}
                  className="group flex items-start gap-4 py-5 transition-colors"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage text-accent-deep transition-colors group-hover:bg-accent group-hover:text-white">
                    <Phone className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                      Телефон
                    </span>
                    <span className="mt-1 text-[19px] font-semibold text-ink transition-colors group-hover:text-accent-strong">
                      {clinic.phone}
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="flex items-start gap-4 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage text-accent-deep">
                    <MapPin className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                      Адрес
                    </span>
                    <span className="mt-1 text-[15.5px] font-medium leading-snug text-ink">
                      {clinic.address.full}
                    </span>
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="flex items-start gap-4 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage text-accent-deep">
                    <Clock className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[12px] uppercase tracking-[0.12em] text-ink-muted">
                      Часы работы
                    </span>
                    <span className="mt-1 text-[15.5px] font-medium leading-snug text-ink">
                      {clinic.hours}
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CtaButton href="/booking" variant="primary" size="lg" withArrow>
                  Записаться на приём
                </CtaButton>
                <a
                  href="https://yandex.ru/maps/?text=Электросталь, улица Мира, 27/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[14px] font-semibold text-ink transition-colors hover:text-accent-strong"
                >
                  <Navigation className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  Построить маршрут
                </a>
              </div>
            </Reveal>
          </div>

          {/* Правая колонка — карта */}
          <Reveal delay={0.1} y={28}>
            <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] border border-line bg-mist lg:h-full lg:min-h-[520px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2e9e536a1e18ef27343fac05a1f31a10585946875ce947bbb4167c0160893c20&amp;source=constructor"
                width="100%"
                height="100%"
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                title="Карта: ветеринарная клиника «Белый кот», Электросталь"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
