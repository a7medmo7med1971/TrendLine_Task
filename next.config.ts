/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tinytales.trendline.marketing",
      },
    ],
  },
};

module.exports = nextConfig;
