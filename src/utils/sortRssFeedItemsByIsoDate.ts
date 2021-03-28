import RssFeedItem from '../types/RssFeedItem'

const sortRssFeedItemsByIsoDate = (
  rssFeedItems: [RssFeedItem]
): [RssFeedItem] => {
  return rssFeedItems.sort((rssFeedItemA, rssFeedItemB) => {
    return +new Date(rssFeedItemB.isoDate) - +new Date(rssFeedItemA.isoDate)
  })
}

export default sortRssFeedItemsByIsoDate
