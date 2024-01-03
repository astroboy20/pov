/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "localhost",
      "api-cliqpod.koyeb.app"
    ],
  },
};

module.exports = nextConfig;
