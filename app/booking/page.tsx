import { Clock, Phone, ShieldCheck } from "lucide-react";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import SiteHeader from "@/components/SiteHeader";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { getClinicContent } from "@/lib/clinic";

export const metadata = {
  title: "Запись на приём",
  description: "Запишитесь на приём к ветеринару в клинику «Белый кот» онлайн.",
};

export default function BookingPage() {
  const { clinic } = getClinicContent();

  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <SiteHeader />

      <section className="relative flex-grow overflow-hidden bg-canvas py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-[460px] w-[460px] rounded-full bg-sage/60 blur-[120px]"
        />
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>Запись на приём</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-5 text-[clamp(2rem,4.4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
                  Забота начинается <br className="hidden sm:block" />
                  с одного звонка
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-[440px] text-[15.5px] leading-[1.7] text-ink-soft">
                  Оставьте контакты — администратор свяжется с вами в течение 15
                  минут, чтобы подобрать удобное время и ответить на вопросы.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-col gap-4 border-t border-line pt-8">
                  <a
                    href={clinic.phoneHref}
                    className="group inline-flex items-center gap-3 text-[15px] font-semibold text-ink transition-colors hover:text-accent-strong"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage text-accent-deep transition-colors group-hover:bg-accent group-hover:text-white">
                      <Phone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                    </span>
                    {clinic.phone}
                  </a>
                  <span className="inline-flex items-center gap-3 text-[14px] text-ink-soft">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage text-accent-deep">
                      <Clock className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                    </span>
                    {clinic.hours}
                  </span>
                  <span className="inline-flex items-center gap-3 text-[14px] text-ink-soft">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage text-accent-deep">
                      <ShieldCheck className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                    </span>
                    Врачи разных профилей и диагностика на месте
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} y={28}>
              <BookingForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
