import {Box} from '@chakra-ui/react'
import UrlsSectionContent from './UrlsSectionContent'
import UrlsSectionHeader from './UrlsSectionHeader'

interface Props {
  externalUrl: string
  sourceUrl: string
  title: string
}

const UrlsSection = ({externalUrl, sourceUrl, title}: Props): JSX.Element => {
  return (
    <Box as="article" borderWidth="1px" shadow="sm" w="100%">
      <UrlsSectionHeader externalUrl={externalUrl} title={title} />
      <UrlsSectionContent sourceUrl={sourceUrl} />
    </Box>
  )
}

export default UrlsSection
