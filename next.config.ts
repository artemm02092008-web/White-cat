import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/White-cat',      // Название вашего репозитория
  assetPrefix: '/White-cat/',  // Название вашего репозитория

  images: {
    unoptimized: true,         // Обязательно для GitHub Pages
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