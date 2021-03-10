import {
  Box,
  Divider,
  Image,
  SkeletonText,
  Stack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import ErrorMessage from '../common/ErrorMessage'
import RssFeedItem from '../../types/RssFeedItem'
import UrlLink from './UrlLink'
import useRssFeed from '../../hooks/useRssFeed'
import {useRouter} from 'next/dist/client/router'

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
          <Stack spacing={4}>
            {showThumbnail && (
              <Image
                boxSize={75}
                alt="url image"
                objectFit="cover"
                src={rssFeedItem.thumbnail}
                d="inline-block"
              />
            )}
            <UrlLink
              description={rssFeedItem.title}
              externalUrl={rssFeedItem.link}
            />
            {!isLastUrl && <Divider my={1} />}
          </Stack>
        )

        return (
          <Wrap
            key={rssFeedItem.link}
            spacing={2}
            align="center"
            justify="start"
          >
            {showThumbnail && (
              <WrapItem>
                <Image
                  boxSize={75}
                  alt="url image"
                  objectFit="cover"
                  src={rssFeedItem.thumbnail}
                />
              </WrapItem>
            )}
            <WrapItem>
              <UrlLink
                description={rssFeedItem.title}
                externalUrl={rssFeedItem.link}
              />
            </WrapItem>
            {!isLastUrl && <Divider my={1} />}
          </Wrap>
        )
      })}
    </Box>
  )
}

UrlsSectionContent.defaultProps = {
  showImages: false,
}

export default UrlsSectionContent
