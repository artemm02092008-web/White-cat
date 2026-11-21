import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ApproachSection from "@/components/ApproachSection";
import SiteHeader from "@/components/SiteHeader";
// Удалите импорт BookingSection, его больше нет на главной
import { getClinicContent } from "@/lib/clinic";

export const ensureStatic = "navigation";

export default function Home() {
  const { hero, about, reviews, faq } = getClinicContent();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      {/* ХЕДЕР */}
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto w-full max-w-[1440px] px-6 pb-12 lg:px-12">
        <div className="relative flex flex-col overflow-hidden rounded-[32px] bg-[#EEF2E6] lg:flex-row">
          <div className="z-10 flex flex-col justify-center p-8 lg:w-1/2 lg:p-16">
            <span className="mb-6 block text-[10px] uppercase tracking-widest text-[#5A5A5A]">
              {hero.eyebrow}
            </span>

            <h1 className="mb-8 text-5xl font-bold leading-[1.1] text-[#1A1A1A] lg:text-7xl">
              {hero.titleLines[0]}
              <br />
              {hero.titleLines[1]}
              <br />
              {hero.titleLines[2]}
            </h1>

            <p className="mb-10 max-w-md text-lg leading-relaxed text-[#5A5A5A]">
              {hero.lead}
            </p>

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              {/* Кнопка "Записаться" в Hero тоже ведет на /booking */}
              <Link
                href="/booking"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#75C043] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#65a83a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-2 active:translate-y-0 active:bg-[#5a9634]"
              >
                {hero.primaryCta}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="#approach"
                className="pb-1 text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#75C043] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-2"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative min-h-[400px] lg:min-h-[600px] lg:w-1/2">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* НАШ ПОДХОД */}
      <ApproachSection />

      <div className="section-divider" />

      {/* ОТЗЫВЫ */}
      <ReviewsSection data={reviews} />

      <div className="section-divider" />

      {/* ЧАСТЫЕ ВОПРОСЫ */}
      <FaqSection data={faq} />

      <div className="section-divider" />

      {/* КОНТАКТЫ И КАРТА */}
      <ContactSection />
      
      {/* Блок BookingSection УБРАН отсюда */}
      
      {/* ПОДВАЛ */}
      <Footer />
      
    </main>
  );
}