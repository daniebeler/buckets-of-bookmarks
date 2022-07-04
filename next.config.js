/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/design/tools',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
