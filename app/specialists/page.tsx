import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow, SectionHeading } from "@/components/ui/Typography";
import { getClinicContent } from "@/lib/clinic";
import { doctors } from "@/lib/doctors";

export const metadata = {
  title: "Врачи",
  description:
    "Специалисты ветеринарной клиники «Белый кот» в Электростали: хирурги, терапевты, стоматологи, офтальмологи и другие.",
};

export default function SpecialistsPage() {
  const { clinic } = getClinicContent();

  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <SiteHeader />

      {/* Заголовок */}
      <section className="relative overflow-hidden bg-canvas pb-12 pt-14 lg:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-sage/60 blur-[110px]"
        />
        <Container className="relative max-w-[720px]">
          <Reveal>
            <Eyebrow>Наша команда</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionHeading as="h1" className="mt-5">
              Врачи клиники
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[16px] leading-[1.75] text-ink-soft">
              В клинике работают специалисты разных профилей — от терапевтов до
              хирургов и стоматологов. Каждый врач объясняет каждый шаг обследования
              и лечения понятным языком.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Сетка врачей */}
      <section className="pb-16 lg:pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {doctors.map((doctor, i) => (
              <Reveal key={doctor.slug} delay={i * 0.05} as="article" className="h-full">
                <div className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(20,24,26,0.24)]">
                  <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-sage">
                    <div
                      aria-hidden="true"
                      className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/40 blur-2xl"
                    />
                    <span className="relative text-[56px] font-semibold tracking-tight text-accent-deep">
                      {doctor.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-7">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[17px] font-semibold leading-[1.3] text-ink">
                        {doctor.name}
                      </h2>
                      <span className="text-[14px] text-ink-soft">{doctor.role}</span>
                      <span className="text-[12px] text-ink-muted">{doctor.experience}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {doctor.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-sage px-3 py-1 text-[11px] font-medium text-accent-deep"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/specialists/${doctor.slug}`}
                      className="mt-auto inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-ink transition-colors hover:text-accent-strong"
                    >
                      Подробнее
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-mist/50 py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-[620px] text-center">
              <h2 className="text-[clamp(1.7rem,3.6vw,2.4rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">
                Запишитесь на приём
              </h2>
              <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-[1.7] text-ink-soft">
                Подберём специалиста и удобное время — просто позвоните или оставьте
                заявку онлайн.
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
