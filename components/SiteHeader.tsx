"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { getClinicContent } from "@/lib/clinic";
import CtaButton from "@/components/ui/CtaButton";
import Container from "@/components/ui/Container";

const LINKS = [
  { label: "О нас", href: "/about" },
  { label: "Услуги и цены", href: "/services" },
  { label: "Врачи", href: "/specialists" },
  { label: "Отзывы", href: "/#reviews" },
  { label: "Контакты", href: "/#contacts" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { clinic } = getClinicContent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Верхняя информационная полоса */}
      <div className="hidden bg-accent-deep text-white lg:block">
        <Container className="flex h-9 items-center justify-between text-[12px]">
          <div className="flex items-center gap-6 text-white/85">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.8} aria-hidden="true" />
              {clinic.address.cityName}, {clinic.address.street}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-accent" strokeWidth={1.8} aria-hidden="true" />
              {clinic.hours}
            </span>
          </div>
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-accent"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
            {clinic.phone}
          </a>
        </Container>
      </div>

      <div
        className={`w-full border-b transition-colors duration-300 ${
          scrolled
            ? "border-line bg-white/85 backdrop-blur-xl"
            : "border-transparent bg-white"
        }`}
      >
        <Container className="flex items-center justify-between py-3.5">
          <Link href="/" className="group flex flex-col leading-none">
            <span className="text-[19px] font-bold tracking-tight text-ink transition-colors group-hover:text-accent-strong">
              {clinic.name}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.16em] text-ink-muted">
              {clinic.tagline}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                    active ? "text-accent-strong" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <CtaButton
              href="/booking"
              variant="dark"
              size="md"
              withArrow
              className="hidden sm:inline-flex"
            >
              Записаться
            </CtaButton>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink transition-colors hover:border-line-strong lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink transition-colors hover:bg-mist"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={clinic.phoneHref}
                className="mt-2 inline-flex items-center gap-2 px-3 text-[15px] font-semibold text-ink"
              >
                <Phone className="h-4 w-4 text-accent" strokeWidth={1.8} />
                {clinic.phone}
              </a>
              <CtaButton href="/booking" variant="dark" size="md" withArrow className="mt-3 w-full">
                Записаться на приём
              </CtaButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
