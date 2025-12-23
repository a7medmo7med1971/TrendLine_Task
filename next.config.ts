/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config:any) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["tinytales.trendline.marketing"],
  },
};

module.exports = nextConfig;
