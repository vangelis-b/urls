import {Box, Divider, SkeletonText} from '@chakra-ui/react'
import UrlLink from './UrlLink'

const UrlsSectionContent = (): JSX.Element => {
  // TODO: Update with real data.
  const data: Array<number> = []
  // const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const description = 'How Tim Cook transformed Apple after Steve Jobs'
  const isLoading = true

  return (
    <Box mx={5} my={5}>
      {isLoading ? (
        <SkeletonText mt={5} noOfLines={10} spacing={5} />
      ) : (
        data.map((url, index) => {
          const isLastUrl = data.length === index + 1

          return (
            <Box key={url}>
              <UrlLink description={description} externalUrl="#" />
              {!isLastUrl && <Divider my={1} />}
            </Box>
          )
        })
      )}
    </Box>
  )
}

export default UrlsSectionContent
