type RssFeedItemThumbnail = {
  $: {
    url: string
  }
}

interface RssFeedItem {
  ['media:content']: RssFeedItemThumbnail
  ['media:thumbnail']: RssFeedItemThumbnail
  description: string
  isoDate: Date
  link: string
  thumbnail: RssFeedItemThumbnail
  title: string
}

export default RssFeedItem
