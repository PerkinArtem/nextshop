/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com']
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BASE_URL: 'https://fakestoreapi.com'
  }
}

module.exports = nextConfig
