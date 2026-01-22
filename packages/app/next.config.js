/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@labware/shared', '@labware/ui'],
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.labware.icu',
  },
};

module.exports = nextConfig;
