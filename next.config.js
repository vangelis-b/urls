const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'deny',
          },
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1',
          },
        ],
      },
    ]
  },
  images: {
    domains: [
      'a.fsdn.com',
      'a.thumbs.redditmedia.com',
      'b.thumbs.redditmedia.com',
      'media.wired.com',
      'www.techmeme.com',
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
})
