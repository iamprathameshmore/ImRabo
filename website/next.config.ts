import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["logo.clearbit.com"], // Allow Clearbit images
  },
  /* config options here */
};

export default nextConfig;
