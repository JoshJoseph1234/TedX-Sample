/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'media.licdn.com',         // LinkedIn
      'res.cloudinary.com',      // Cloudinary
      // Add other domains as needed
    ],
  },
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
