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
      "80c9-94-158-59-89.ngrok-free.app",
    ],
  },
};

export default nextConfig;
