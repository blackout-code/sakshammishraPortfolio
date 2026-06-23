import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   basePath: "/sakshammishraPortfolio", // Uncomment for GitHub Pages deployment
  
  // Compression and optimization
  compress: true,
  productionBrowserSourceMaps: false,
  
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
