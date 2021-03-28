import {Box, Divider, Flex, SkeletonText} from '@chakra-ui/react'
import {Fragment} from 'react'
import ErrorMessage from '../common/ErrorMessage'
import RssFeedItem from '../../types/RssFeedItem'
import UrlLink from './UrlLink'
import useRssFeed from '../../hooks/useRssFeed'

const NUMBER_OF_RSS_FEED_ITEMS = 10

interface Props {
  sourceUrl: string
}

const UrlsSectionContent = ({sourceUrl}: Props): JSX.Element => {
  const {data, isError, isLoading} = useRssFeed(sourceUrl)

  if (isError) {
    return (
      <Box>
        <ErrorMessage title="The urls are not available!" />
      </Box>
    )
  }

  if (isLoading) {
    return (
      <Box m={[4, 8]}>
        <SkeletonText mt={5} noOfLines={10} skeletonHeight={3.5} spacing={10} />
      </Box>
    )
  }

  const rssFeedItems = data.items.slice(0, NUMBER_OF_RSS_FEED_ITEMS)

  return (
    <Box mx={[4, 8]} my={[2, 4]}>
      {rssFeedItems.map((rssFeedItem: RssFeedItem, index: number) => {
        const isLastUrl = index + 1 === NUMBER_OF_RSS_FEED_ITEMS

        return (
          <Fragment key={rssFeedItem.title}>
            <Flex alignItems="center">
              <UrlLink
                description={rssFeedItem.title}
                externalUrl={rssFeedItem.link}
              />
            </Flex>
            {!isLastUrl && <Divider my={1.5} />}
          </Fragment>
        )
      })}
    </Box>
  )
}

export default UrlsSectionContent
