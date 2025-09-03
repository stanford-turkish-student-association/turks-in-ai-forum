import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Ensure the correct workspace root when multiple lockfiles exist on the system
    root: process.cwd(),
  },
};

export default nextConfig;
