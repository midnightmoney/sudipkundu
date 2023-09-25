/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath : "",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

module.exports = nextConfig;
