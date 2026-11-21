import Link from "next/link";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import { getClinicContent } from "@/lib/clinic";
import { doctors } from "@/lib/doctors";

export const metadata = {
  title: "Врачи — Ветеринарная клиника «Белый кот»",
  description:
    "Специалисты ветеринарной клиники «Белый кот» в Электростали: хирурги, терапевты, стоматологи, офтальмологи и другие.",
};

export default function SpecialistsPage() {
  const { clinic } = getClinicContent();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SiteHeader />

      {/* Заголовок */}
      <section className="w-full px-6 py-12 text-center lg:py-16">
        <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8E8C]">
          Наша команда
        </span>
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-[#1A1A1A] lg:text-4xl">
          Врачи
        </h1>
        <p className="mx-auto max-w-2xl text-[14px] leading-[1.7] text-[#5A5A5A]">
          В клинике работают специалисты различных профилей — от терапевтов до
          хирургов и стоматологов. Каждый врач объясняет каждый шаг обследования
          и лечения понятным языком.
        </p>
      </section>

      {/* Сетка врачей */}
      <section className="mx-auto w-full max-w-[1200px] px-6 py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {doctors.map((doctor) => (
            <article
              key={doctor.slug}
              className="group flex flex-col overflow-hidden rounded-[18px] bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
            >
              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#EEF2E6]">
                <span className="text-5xl font-semibold text-[#4A7C59]">
                  {doctor.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-7">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[17px] font-semibold leading-[1.3] text-[#1A1A1A]">
                    {doctor.name}
                  </h2>
                  <span className="text-[14px] text-[#5A5A5A]">{doctor.role}</span>
                  <span className="text-[12px] text-[#8A8E8C]">
                    {doctor.experience}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {doctor.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#E6EBE6] px-3 py-1 text-[11px] font-medium text-[#4A7C59]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/specialists/${doctor.slug}`}
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-[#75C043] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#65a83a]"
                >
                  Подробнее
                  <span className="text-lg leading-none">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#EEF2E6] px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#1A1A1A]">
          Запишитесь на приём
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-[15px] text-[#5A5A5A]">
          Подберём специалиста и удобное время — просто позвоните или оставьте
          заявку.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center justify-center rounded-lg bg-[#75C043] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#65a83a]"
          >
            Позвонить: {clinic.phone}
          </a>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-lg border border-[#75C043] px-8 py-4 text-sm font-semibold text-[#75C043] transition-all hover:bg-[#75C043] hover:text-white"
          >
            Записаться онлайн
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
