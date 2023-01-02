/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["raw.githubusercontent.com","library.lol","libgen.is", "cdn.dribbble.com","panotbook.com","libgen.rocks","upload.wikimedia.org"],
  },
};

module.exports = nextConfig;
