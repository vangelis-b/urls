import RssFeedItem from './RssFeedItem'

interface RssFeedResponse {
  status: string
  items: Array<RssFeedItem>
}

export default RssFeedResponse
