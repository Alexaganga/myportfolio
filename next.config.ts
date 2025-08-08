import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
export const config = {
  api: {
    bodyParser: false,
  },
};