/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i1.wp.com" },
      { protocol: "https", hostname: "nexisschool.com" },
    ],
  },
};

export default nextConfig;
