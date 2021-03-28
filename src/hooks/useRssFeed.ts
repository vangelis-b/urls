import useSWR from 'swr'
import RssFeed from '../types/RssFeed'
import rssFeedFetcher from '../utils/rssFeedFetcher'

const useRssFeed = (url: string): any => {
  const {data, error} = useSWR<RssFeed>(url, rssFeedFetcher)

  return {
    data,
    isError: error,
    isLoading: !error && !data,
  }
}

export default useRssFeed
