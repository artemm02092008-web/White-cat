import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";
import { getClinicContent } from "@/lib/clinic";
import { doctors, getDoctor } from "@/lib/doctors";

/* Требование проекта: карточки врачей отдаются готовым HTML на этапе сборки. */
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctor(slug);

  if (!doctor) {
    return { title: "Врач не найден" };
  }

  return {
    title: `${doctor.name} — ${doctor.role}`,
    description: `${doctor.name}: ${doctor.role}, ${doctor.experience}. Ветеринарная клиника «Белый кот» в Электростали.`,
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctor(slug);

  if (!doctor) {
    notFound();
  }

  const { clinic } = getClinicContent();
  const initials = doctor.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      {/* Мини-шапка */}
      <header className="border-b border-line bg-canvas">
        <Container className="flex items-center justify-between py-5">
          <Link
            href="/specialists"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Все врачи
          </Link>
          <Link href="/" className="text-[19px] font-bold tracking-tight text-ink">
            {clinic.name}
          </Link>
        </Container>
      </header>

      {/* Карточка врача */}
      <section className="py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal y={24}>
                <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[28px] bg-sage">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-white/40 blur-3xl"
                  />
                  <span className="relative text-[88px] font-semibold tracking-tight text-accent-deep">
                    {initials}
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col lg:col-span-7 lg:pt-4">
              <Reveal>
                <Eyebrow>Наша команда</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-4 text-[clamp(1.9rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-ink">
                  {doctor.name}
                </h1>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-2 text-[16px] text-ink-soft">{doctor.role}</p>
                <p className="mt-1 text-[13px] text-ink-muted">{doctor.experience}</p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {doctor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sage px-3 py-1 text-[11.5px] font-medium text-accent-deep"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>

              <div className="mt-8 flex flex-col gap-4 border-t border-line pt-8 text-[15px] leading-[1.75] text-ink-soft">
                {doctor.about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <CtaButton href="/booking" variant="primary" size="lg" withArrow>
                    Записаться к врачу
                  </CtaButton>
                  <a
                    href={clinic.phoneHref}
                    className="inline-flex items-center gap-2 text-[15px] font-semibold text-ink transition-colors hover:text-accent-strong"
                  >
                    <Phone className="h-4 w-4 text-accent-strong" strokeWidth={2} aria-hidden="true" />
                    {clinic.phone}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Другие врачи */}
      <section className="border-t border-line py-14 lg:py-20">
        <Container>
          <h2 className="text-[22px] font-semibold text-ink">Другие специалисты</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {doctors
              .filter((item) => item.slug !== doctor.slug)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/specialists/${item.slug}`}
                  className="group flex items-center gap-4 rounded-[18px] border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(20,24,26,0.24)]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage text-[15px] font-semibold text-accent-deep">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-ink">{item.name}</span>
                    <span className="text-[13px] text-ink-soft">{item.role}</span>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-ink-muted transition-colors group-hover:text-accent-strong" />
                </Link>
              ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
