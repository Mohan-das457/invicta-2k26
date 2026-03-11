import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ashv' : '',
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },
  turbopack: {
    root: path.resolve(__dirname),
  } as any,
};

export default nextConfig;
