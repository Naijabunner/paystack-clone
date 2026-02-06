import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //Add images paths
    images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.paystack.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "paystack.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
