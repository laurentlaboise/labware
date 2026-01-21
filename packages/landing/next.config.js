/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@labware/shared', '@labware/ui'],
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://app.labware.icu',
  },
};

module.exports = nextConfig;
