import type { MetadataRoute } from "next";

// Обязательно для output: "export" (GitHub Pages)
export const dynamic = "force-static";

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
