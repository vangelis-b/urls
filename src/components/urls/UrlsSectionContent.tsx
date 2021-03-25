import {Box, Divider, Flex, SkeletonText} from '@chakra-ui/react'
import {Fragment} from 'react'
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
        <ErrorMessage title="The urls are not available!" />
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
    <Box mx={[4, 8]} my={[2, 4]}>
      {data.items.map((rssFeedItem: RssFeedItem, index: number) => {
        const isLastUrl = data.items.length === index + 1

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

UrlsSectionContent.defaultProps = {
  showImages: false,
}

export default UrlsSectionContent
