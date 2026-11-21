"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getClinicContent } from "@/lib/clinic";

export default function SiteHeader() {
  const pathname = usePathname();
  const { clinic } = getClinicContent();

  const links = [
    { label: "О нас", href: "/about" },
    { label: "Услуги и цены", href: "/services" },
    { label: "Врачи", href: "/specialists" },
    { label: "Отзывы", href: "/#reviews" },
    { label: "Контакты", href: "/#contacts" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="group flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-[#1A1A1A] transition-colors group-hover:text-[#75C043]">
            {clinic.name}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#5A5A5A]">
            {clinic.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#1A1A1A] lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-[#75C043] ${
                pathname === link.href ? "text-[#75C043]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden flex-col items-end md:flex">
            <a
              href={clinic.phoneHref}
              className="text-sm font-bold transition-colors hover:text-[#75C043]"
            >
              {clinic.phone}
            </a>
            <span className="text-[10px] text-[#5A5A5A]">{clinic.hours}</span>
          </div>

          <Link
            href="/booking"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#75C043] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#65a83a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#75C043] focus-visible:ring-offset-2 active:translate-y-0 active:bg-[#5a9634]"
          >
            Записаться на приём
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
