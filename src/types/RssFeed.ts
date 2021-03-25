import RssFeedItem from './RssFeedItem'

interface RssFeed {
  feedUrl: string
  items: [RssFeedItem]
  lastBuildDate: string
  link: string
  title: string
}

export default RssFeed
