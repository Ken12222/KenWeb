/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // You can set this to '2mb', '5mb', '10mb', etc.
    },
  },
};

export default nextConfig;
