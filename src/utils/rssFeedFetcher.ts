import Parser from 'rss-parser'
import RssFeed from '../types/RssFeed'
import RssFeedItem from '../types/RssFeedItem'

const parser: Parser<RssFeed, RssFeedItem> = new Parser()

const rssFeedFetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<RssFeed> => {
  const res = await fetch(input, init)
  const text = await res.text()

  return parser.parseString(text)
}

export default rssFeedFetcher
