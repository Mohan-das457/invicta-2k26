import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
  // Force Turbopack to use this project directory as the root.
  // This avoids Next.js inferring the wrong workspace root when
  // there are multiple lockfiles on the machine (which can trigger
  // macOS permission errors when scanning parent directories).
  turbopack: {
    root: path.resolve(__dirname),
  } as any,
};

export default nextConfig;
