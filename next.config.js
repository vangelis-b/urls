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
            key: 'Content-Security-Policy',
            value:
              // TODO: Change default-src to 'none' and add all directives set
              // to 'self' explicitly, once the the following Chromium bug is fixed:
              // https://bugs.chromium.org/p/chromium/issues/detail?id=801561
              "default-src 'self';" +
              "child-src 'none';" +
              "connect-src 'self' vitals.vercel-insights.com;" +
              "font-src 'none';" +
              "form-action 'none';" +
              "frame-src 'none';" +
              "img-src 'self' data:;" +
              "media-src 'none';" +
              "object-src 'none';" +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval';" +
              "style-src 'self' 'unsafe-inline';" +
              "worker-src 'none';" +
              "frame-ancestors 'none';",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      // Splitbee User Analytics
      {
        source: '/sb.js',
        destination: 'https://cdn.splitbee.io/sb.js',
      },
      {
        source: '/sb-api/:slug',
        destination: 'https://hive.splitbee.io/:slug',
      },
      // RSS Feed APIs
      {
        source: '/feed-api/hackernews',
        destination: 'https://news.ycombinator.com/rss',
      },
      {
        source: '/feed-api/wired',
        destination: 'https://www.wired.com/feed',
      },
      {
        source: '/feed-api/proggit',
        destination: 'https://www.reddit.com/r/programming/.rss',
      },
      {
        source: '/feed-api/reddit',
        destination: 'https://www.reddit.com/.rss',
      },
      {
        source: '/feed-api/slashdot',
        destination: 'http://rss.slashdot.org/Slashdot/slashdot',
      },
      {
        source: '/feed-api/toptal',
        destination: 'https://www.toptal.com/blog.rss',
      },
    ]
  },
  future: {
    webpack5: true,
  },
  images: {
    domains: [
      'a.fsdn.com',
      'a.thumbs.redditmedia.com',
      'b.thumbs.redditmedia.com',
      'bs-uploads.toptal.io',
      'media.wired.com',
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,
})
