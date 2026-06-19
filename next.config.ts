import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  // Compression and optimization
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  
  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance: optimize package imports
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
