import {Box, Divider, SkeletonText} from '@chakra-ui/react'
import ErrorMessage from '../common/ErrorMessage'
import RssFeedItem from '../../types/RssFeedItem'
import UrlLink from './UrlLink'
import useRssFeed from '../../hooks/useRssFeed'

interface Props {
  sourceUrl: string
}

const UrlsSectionContent = ({sourceUrl}: Props): JSX.Element => {
  const {data, isError, isLoading} = useRssFeed(sourceUrl)

  if (isError) {
    return (
      <Box>
        <ErrorMessage title="The urls are not avaiable!" />
      </Box>
    )
  }

  if (isLoading) {
    return (
      <Box m={[4, 8]}>
        <SkeletonText mt={5} noOfLines={10} spacing={5} />
      </Box>
    )
  }

  return (
    <Box m={[4, 8]} mt={[2, 4]}>
      {data.items.map((rssFeedItem: RssFeedItem, index: number) => {
        const isLastUrl = data.items.length === index + 1

        return (
          <Box key={rssFeedItem.link}>
            <UrlLink
              description={rssFeedItem.title}
              externalUrl={rssFeedItem.link}
            />
            {!isLastUrl && <Divider my={1} />}
          </Box>
        )
      })}
    </Box>
  )
}

export default UrlsSectionContent
