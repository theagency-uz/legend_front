/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ru",
        permanent: true,
      },
    ];
  },

  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    domains: ["localhost"],
  },
};

export default nextConfig;
