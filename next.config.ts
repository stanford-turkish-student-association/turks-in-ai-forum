import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Ensure the correct workspace root when multiple lockfiles exist on the system
    root: process.cwd(),
  },
  // Configure for GitHub Pages static export
  output: "export",
  images: { unoptimized: true },
  basePath: "/turks-in-ai-forum",
  assetPrefix: "/turks-in-ai-forum/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/turks-in-ai-forum",
  },
};

export default nextConfig;
