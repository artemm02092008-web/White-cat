import type { NextConfig } from "next";

// На GitHub Pages сайт лежит в подпапке /<repo>, локально — в корне.
// Переменная окружения GITHUB_PAGES=true включает префикс (её ставит workflow).
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "/White-cat"; // ← замени на имя своего репозитория

const nextConfig: NextConfig = {
  output: "export",
  ...(isGitHubPages
    ? { basePath: repoName, assetPrefix: `${repoName}/` }
    : {}),

  images: {
    unoptimized: true, // Обязательно для GitHub Pages
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
