/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  imagae: {
    loader: 'imgix',
    path: "https://example.com/myaccount/",
  },
}

module.exports = nextConfig
