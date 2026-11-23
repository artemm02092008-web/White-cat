import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ShieldCheck } from "lucide-react";
import { getClinicContent } from "@/lib/clinic";
import { asset } from "@/lib/asset";
import Container from "@/components/ui/Container";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Typography";

export default function Hero() {
  const { clinic, hero } = getClinicContent();

  return (
    <section className="relative overflow-hidden bg-canvas">
      {/* Мягкие цветовые пятна — вместо «бежевого блока» */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-sage/70 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-sand/40 blur-[120px]"
      />

      <Container className="relative pb-14 pt-10 lg:pb-24 lg:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Текстовый блок */}
          <div className="max-w-[560px]">
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-ink">
                {hero.titleLines[0]}
                <br />
                {hero.titleLines[1]}
                <br />
                {hero.titleLines[2]}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[460px] text-[17px] leading-[1.65] text-ink-soft">
                {hero.lead}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <CtaButton href="/booking" variant="primary" size="lg" withArrow>
                  {hero.primaryCta}
                </CtaButton>
                <CtaButton href="/#about" variant="outline" size="lg">
                  {hero.secondaryCta}
                </CtaButton>
              </div>
            </Reveal>
          </div>

          {/* Фото */}
          <Reveal delay={0.1} y={32} className="relative">
            <div className="relative mx-auto aspect-[4/4.4] w-full max-w-[520px]">
              <div className="absolute inset-0 -rotate-2 rounded-[36px] bg-sage" aria-hidden="true" />
              <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-sage shadow-[0_30px_60px_-30px_rgba(29,59,46,0.35)]">
                <Image
                  src={asset(hero.imageSrc)}
                  alt={hero.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Полоса доверия */}
        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl border border-line bg-mist/60 px-6 py-5">
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-soft">
              <MapPin className="h-4 w-4 text-accent-strong" strokeWidth={1.8} aria-hidden="true" />
              {clinic.address.full}
            </span>
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-soft">
              <Clock className="h-4 w-4 text-accent-strong" strokeWidth={1.8} aria-hidden="true" />
              {clinic.hours}
            </span>
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-ink-soft">
              <ShieldCheck className="h-4 w-4 text-accent-strong" strokeWidth={1.8} aria-hidden="true" />
              Врачи разных профилей и диагностика на месте
            </span>
            <Link
              href="/#contacts"
              className="ml-auto text-[13px] font-semibold text-ink underline-offset-4 transition-colors hover:text-accent-strong hover:underline"
            >
              Как добраться
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
