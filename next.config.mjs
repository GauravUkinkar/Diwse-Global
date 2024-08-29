/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.diwiseglobal.com',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
