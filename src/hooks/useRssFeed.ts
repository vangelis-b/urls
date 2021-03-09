import useSWR from 'swr'
import RssFeedResponse from '../types/RssFeedResponse'

const useRssFeed = (url: string): any => {
  const {data, error} = useSWR<RssFeedResponse>(url)

  return {
    data,
    isError: error,
    isLoading: !error && !data,
  }
}

export default useRssFeed
