import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1', '127.0.0.1:3000', '192.168.1.10', '192.168.1.10:3000' , '192.168.1.13:3000', '192.168.1.13', '100.110.228.18', 'localhost:3000', 'localhost'],
};

export default nextConfig;

