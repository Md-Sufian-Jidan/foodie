import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{
      source: "/api/auth/:path*",
      destination: `${process.env.BACKEND_URL}/api/auth/:path*`,
    }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.com',
      }
    ]
  }
};

export default nextConfig;
