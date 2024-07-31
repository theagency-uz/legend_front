/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ru",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/admin/login",
        permanent: true,
      },
    ];
  },

  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    domains: [
      "localhost",
      "192.168.0.133",
      "*.ngrok-free.app",
      "c805-94-158-62-166.ngrok-free.app",
    ],
  },
};

export default nextConfig;
