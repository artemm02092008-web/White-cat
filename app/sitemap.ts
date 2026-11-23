import type { MetadataRoute } from "next";
import { doctors } from "@/lib/doctors";

const BASE_URL = "https://belyi-kot.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/specialists", "/booking"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const doctorPages = doctors.map((doctor) => ({
    url: `${BASE_URL}/specialists/${doctor.slug}`,
    lastModified: new Date("2026-01-01"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...doctorPages];
}
