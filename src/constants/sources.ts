const sources = [
  {
    title: 'hackersnews',
    externalUrl: 'https://news.ycombinator.com/',
    sourceUrl:
      'https://api.rss2json.com/v1/api.json?rss_url=http://news.ycombinator.com/rss',
  },
  {
    title: 'wired',
    externalUrl: 'http://www.wired.com/',
    sourceUrl:
      'https://api.rss2json.com/v1/api.json?rss_url=https://www.wired.com/feed',
  },
  {
    title: 'proggit',
    externalUrl: 'https://www.reddit.com/r/programming/',
    sourceUrl:
      'https://api.rss2json.com/v1/api.json?rss_url=https://www.reddit.com/r/programming/.rss',
  },
  {
    title: 'reddit',
    externalUrl: 'https://www.reddit.com/',
    sourceUrl:
      'https://api.rss2json.com/v1/api.json?rss_url=https://www.reddit.com/.rss',
  },
  {
    title: 'slashdot',
    externalUrl: 'http://www.slashdot.org/',
    sourceUrl:
      'https://api.rss2json.com/v1/api.json?rss_url=http://rss.slashdot.org/Slashdot/slashdot',
  },
  {
    title: 'techmeme',
    externalUrl: 'http://www.techmeme.com/',
    sourceUrl:
      'https://api.rss2json.com/v1/api.json?rss_url=http://www.techmeme.com/index.xml',
  },
]

export default sources
