/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.dicebear.com",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
