import Image from 'next/image'
import {Box, Divider, Flex, SkeletonText} from '@chakra-ui/react'
import {Fragment} from 'react'
import {useRouter} from 'next/router'
import ErrorMessage from '../common/ErrorMessage'
import RssFeedItem from '../../types/RssFeedItem'
import UrlLink from './UrlLink'
import useRssFeed from '../../hooks/useRssFeed'

interface Props {
  sourceUrl: string
  title: string
}

const UrlsSectionContent = ({sourceUrl, title}: Props): JSX.Element => {
  const {data, isError, isLoading} = useRssFeed(sourceUrl)
  const router = useRouter()

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

  const {id} = router.query
  const isExpandedView = title === id

  return (
    <Box mx={[4, 8]} my={[2, 4]}>
      {data.items.map((rssFeedItem: RssFeedItem, index: number) => {
        const isLastUrl = data.items.length === index + 1

        return (
          <Fragment key={rssFeedItem.title}>
            <Flex alignItems="center">
              {isExpandedView && rssFeedItem.thumbnail && (
                <Box h={75} mr={2} pos="relative" w={75}>
                  <Image
                    alt="url image"
                    layout="fill"
                    objectFit="cover"
                    src={rssFeedItem.thumbnail}
                  />
                </Box>
              )}
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
