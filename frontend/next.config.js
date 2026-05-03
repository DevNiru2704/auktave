/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  experimental: { optimizePackageImports: ['lucide-react'] },
  images: { unoptimized: true },
};
module.exports = nextConfig;
