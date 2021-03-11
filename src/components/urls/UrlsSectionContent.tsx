import {Box, Divider, Flex, Image, SkeletonText} from '@chakra-ui/react'
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

  const {id} = router.query
  const isExpandedView = title === id

  return (
    <Box m={[4, 8]} mt={[2, 4]}>
      {data.items.map((rssFeedItem: RssFeedItem, index: number) => {
        const isLastUrl = data.items.length === index + 1
        const showThumbnail = isExpandedView && rssFeedItem.thumbnail

        return (
          <>
            <Flex alignItems="center">
              {showThumbnail && (
                <Image
                  boxSize={75}
                  alt="url image"
                  objectFit="cover"
                  src={rssFeedItem.thumbnail}
                  float="left"
                  mr={15}
                />
              )}
              <UrlLink
                description={rssFeedItem.title}
                externalUrl={rssFeedItem.link}
              />
            </Flex>
            {!isLastUrl && <Divider my={1} />}
          </>
        )
      })}
    </Box>
  )
}

UrlsSectionContent.defaultProps = {
  showImages: false,
}

export default UrlsSectionContent
