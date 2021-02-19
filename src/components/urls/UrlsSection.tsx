import {Box} from '@chakra-ui/react'
import UrlsSectionContent from './UrlsSectionContent'
import UrlsSectionHeader from './UrlsSectionHeader'

interface UrlsSectionProps {
  externalUrl: string
  sourceUrl: string
  title: string
}

const UrlsSection = ({
  externalUrl,
  sourceUrl,
  title,
}: UrlsSectionProps): JSX.Element => {
  return (
    <Box as="article" borderWidth="1px" shadow="sm" w="100%">
      <UrlsSectionHeader externalUrl={externalUrl} title={title} />
      <UrlsSectionContent sourceUrl={sourceUrl} />
    </Box>
  )
}

export default UrlsSection
