import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // <-- ДОБАВИТЬ ЭТУ СТРОКУ

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://belyi-kot.ru/sitemap.xml",
    host: "https://belyi-kot.ru",
  };
}