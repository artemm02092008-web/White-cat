import { getClinicContent } from "@/lib/clinic";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";

export default function CtaSection() {
  const { clinic } = getClinicContent();

  return (
    <section className="bg-canvas pb-20 pt-4 lg:pb-28">
      <Container>
        <Reveal y={28}>
          <div className="relative overflow-hidden rounded-[36px] bg-accent-deep px-8 py-14 text-center text-white lg:px-16 lg:py-20">
            {/* Декоративные пятна */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[90px]"
            />

            <div className="relative mx-auto max-w-[640px]">
              <h2 className="text-[clamp(1.8rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
                Забота начинается с одного звонка
              </h2>
              <p className="mx-auto mt-5 max-w-[480px] text-[15.5px] leading-[1.7] text-white/70">
                Оставьте заявку — администратор свяжется с вами, подберёт удобное
                время и ответит на вопросы.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CtaButton href="/booking" variant="primary" size="lg" withArrow>
                  {`Записаться на приём`}
                </CtaButton>
                <a
                  href={clinic.phoneHref}
                  className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/25 px-8 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5"
                >
                  {clinic.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
