import useSWR from 'swr'
import RssFeed from '../types/RssFeed'
import rssFeedFetcher from '../utils/rssFeedFetcher'
import sortRssFeedItemsByIsoDate from '../utils/sortRssFeedItemsByIsoDate'

const useRssFeed = (url: string): any => {
  const {data, error} = useSWR<RssFeed>(url, rssFeedFetcher)

  let preparedData = data
  if (data) {
    preparedData = {...data, items: sortRssFeedItemsByIsoDate(data.items)}
  }

  return {
    data: preparedData,
    isError: error,
    isLoading: !error && !data,
  }
}

export default useRssFeed
