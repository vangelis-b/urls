const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: [
      'a.fsdn.com',
      'a.thumbs.redditmedia.com',
      'b.thumbs.redditmedia.com',
      'media.wired.com',
      'www.techmeme.com',
    ],
  },
})
