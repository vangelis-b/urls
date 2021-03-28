interface RssFeedItem {
  description: string
  isoDate: Date
  link: string
  title: string
  thumbnail: {
    $: {
      url: string
    }
  }
}

export default RssFeedItem
