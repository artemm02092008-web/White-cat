import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { getClinicContent } from "@/lib/clinic";
import Container from "@/components/ui/Container";

const FOOTER_LINKS = [
  { label: "О нас", href: "/about" },
  { label: "Услуги и цены", href: "/services" },
  { label: "Врачи", href: "/specialists" },
  { label: "Отзывы", href: "/#reviews" },
  { label: "Частые вопросы", href: "/#faq" },
  { label: "Контакты", href: "/#contacts" },
];

function VkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974H.791c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.372 2.708z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const { clinic } = getClinicContent();
  const year = 2026;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: `Ветеринарная клиника «${clinic.name}»`,
    telephone: clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.cityName,
      addressRegion: clinic.address.region,
      addressCountry: "RU",
    },
    openingHours: "Mo-Su 10:00-21:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating,
      reviewCount: 40,
    },
  };

  return (
    <footer className="w-full bg-accent-deep text-white">
      <Container className="flex flex-col pt-16 pb-8 lg:pt-20">
        {/* Верх: логотип + навигация + контакты */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-5">
            <Link href="/" className="text-[20px] font-bold tracking-tight">
              {clinic.name}
            </Link>
            <p className="max-w-[300px] text-[13.5px] leading-[1.7] text-white/60">
              Заботимся о здоровье питомцев — от первого осмотра до сложного лечения.
              Ежедневно, без выходных.
            </p>

            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://vk.com/whitevetcat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <VkIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/79257222580"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Разделы
            </span>
            <nav className="flex flex-col gap-2.5 text-[13.5px] text-white/75">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
              Контакты
            </span>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center gap-2.5 text-[17px] font-semibold transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" strokeWidth={2} aria-hidden="true" />
              {clinic.phone}
            </a>
            <span className="inline-flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} aria-hidden="true" />
              {clinic.address.full}
            </span>
            <span className="inline-flex items-center gap-2.5 text-[13.5px] text-white/70">
              <Clock className="h-4 w-4 text-accent" strokeWidth={2} aria-hidden="true" />
              {clinic.hours}
            </span>
          </div>
        </div>

        {/* Низ */}
        <div className="flex flex-col gap-3 pt-6 text-[11.5px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} Ветеринарная клиника «{clinic.name}»
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="transition-colors hover:text-white/80">
              Политика конфиденциальности
            </Link>
            <span>Информация не заменяет консультацию ветеринарного врача</span>
          </div>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </footer>
  );
}
