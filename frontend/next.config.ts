import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    "127.0.0.1:3000",
    "192.168.1.8",
    "192.168.1.8:3000",
    "192.168.1.111:3000",
    "192.168.1.111",
    "100.110.228.18",
    "localhost:3000",
    "localhost"
  ],
  async rewrites() {
    return [
      {
        source: "/_bridge/:path*",
        destination: `${process.env.LARAVEL_API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;   