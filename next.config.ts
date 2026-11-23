import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/White-cat',      // <- заменили на White-cat
  assetPrefix: '/White-cat/',  // <- заменили на White-cat

  cacheComponents: true,
  partialPrefetching: true,
  
  images: {
    unoptimized: true,
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