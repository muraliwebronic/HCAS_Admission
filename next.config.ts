import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
  reactCompiler: true,
  trailingSlash: true,
  // ADD THIS SECTION
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
