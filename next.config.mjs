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
    domains: ["localhost"],
  },
};

export default nextConfig;
