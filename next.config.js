/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // 🔴 ESSENCIAL para Cloudflare Pages

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
