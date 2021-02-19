import useSWR from 'swr'
import RssFeedResponse from '../types/RssFeedResponse'

const useRssFeed = (url: string): any => {
  return useSWR<RssFeedResponse>(url)
}

export default useRssFeed
