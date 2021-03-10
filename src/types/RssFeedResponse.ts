import RssFeedItem from './RssFeedItem'

interface RssFeedResponse {
  items: Array<RssFeedItem>
  status: string
}

export default RssFeedResponse
