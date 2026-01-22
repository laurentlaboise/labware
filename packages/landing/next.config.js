/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['@labware/shared', '@labware/ui'],
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://app.labware.icu',
  },
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
