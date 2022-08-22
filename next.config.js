/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["openweathermap.org"],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i, 
      issuer: /\.[jt]sx?$/, 
      use: ["@svgr/webpack"]
    });
    return config;
  },
}

module.exports = nextConfig
