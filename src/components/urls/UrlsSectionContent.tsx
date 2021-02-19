import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Divider,
  SkeletonText,
} from '@chakra-ui/react'
import RssFeedItem from '../../types/RssFeedItem'
import UrlLink from './UrlLink'
import useRssFeed from '../../hooks/useRssFeed'

interface Props {
  sourceUrl: string
}

const UrlsSectionContent = ({sourceUrl}: Props): JSX.Element => {
  const {data, isValidating} = useRssFeed(sourceUrl)

  if (isValidating) {
    return (
      <Box m={[4, 8]}>
        <SkeletonText mt={5} noOfLines={10} spacing={5} />
      </Box>
    )
  }

  if (!data || !data.items || data.items.length === 0) {
    return (
      <Box>
        <Alert
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          status="error"
          textAlign="center"
        >
          <AlertIcon />
          <AlertTitle>These urls not available!</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>
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
