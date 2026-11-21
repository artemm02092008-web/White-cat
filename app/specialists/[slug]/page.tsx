import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { getClinicContent } from "@/lib/clinic";
import { doctors, getDoctor } from "@/lib/doctors";

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
    return { title: "Врач не найден — Ветеринарная клиника «Белый кот»" };
  }

  return {
    title: `${doctor.name} — ${doctor.role} — Ветеринарная клиника «Белый кот»`,
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

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Хедер страницы врача */}
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
        <Link
          href="/specialists"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#5A5A5A] transition-colors hover:text-[#1A1A1A]"
        >
          <ArrowLeft className="h-4 w-4" />
          Все врачи
        </Link>
        <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
          {clinic.name}
        </span>
        <div className="w-20" />
      </header>

      {/* Карточка врача */}
      <section className="mx-auto w-full max-w-[1200px] px-6 py-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Аватар */}
          <div className="lg:col-span-5">
            <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[24px] bg-[#EEF2E6]">
              <span className="text-[80px] font-semibold text-[#4A7C59]">
                {doctor.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
            </div>
          </div>

          {/* Информация */}
          <div className="flex flex-col lg:col-span-7 lg:pt-4">
            <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8E8C]">
              Наша команда
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] lg:text-4xl">
              {doctor.name}
            </h1>
            <p className="mt-2 text-[16px] text-[#5A5A5A]">{doctor.role}</p>
            <p className="mt-1 text-[13px] text-[#8A8E8C]">{doctor.experience}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {doctor.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#E6EBE6] px-3 py-1 text-[11px] font-medium text-[#4A7C59]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 text-[15px] leading-[1.8] text-[#5A5A5A]">
              {doctor.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-[#75C043] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#65a83a]"
              >
                Записаться к врачу
              </Link>
              <a
                href={clinic.phoneHref}
                className="self-start text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#75C043]"
              >
                {clinic.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Другие врачи */}
      <section className="mx-auto w-full max-w-[1200px] px-6 pb-16 lg:pb-24">
        <h2 className="mb-6 text-[20px] font-semibold text-[#1A1A1A]">
          Другие специалисты
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doctors
            .filter((item) => item.slug !== doctor.slug)
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/specialists/${item.slug}`}
                className="flex items-center gap-4 rounded-[16px] bg-white p-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EEF2E6] text-[15px] font-semibold text-[#4A7C59]">
                  {item.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-[#1A1A1A]">
                    {item.name}
                  </span>
                  <span className="text-[13px] text-[#5A5A5A]">{item.role}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
