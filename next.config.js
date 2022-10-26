/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'it', 'es', 'pl'], // need to add  'de', 'fr', 'hr'
    defaultLocale: 'en',
  },
}

module.exports = nextConfig