// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.nike.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org", // agar logo ke liye chahiye
      },
    ],
  },
};

module.exports = nextConfig;
