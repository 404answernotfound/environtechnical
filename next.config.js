/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'it'], // need to add  'de', 'fr', 'es', 'hr'
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
