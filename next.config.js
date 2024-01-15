const { withNextVideo } = require('next-video/process')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  compiler: {
    styledComponents: {
      ssr: true,
    },
  },

}

module.exports = nextConfig, withNextVideo
