import type { MetadataRoute } from "next";
import { doctors } from "@/lib/doctors";

// Обязательно для output: "export" (GitHub Pages)
export const dynamic = "force-static";

const BASE_URL = "https://belyi-kot.ru";
const LAST_MODIFIED = new Date("2026-01-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/specialists", "/booking"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const doctorPages = doctors.map((doctor) => ({
    url: `${BASE_URL}/specialists/${doctor.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...doctorPages];
}
