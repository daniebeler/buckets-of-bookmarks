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
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
}

module.exports = nextConfig
