import {Box} from '@chakra-ui/react'
import UrlsSectionContent from './UrlsSectionContent'
import UrlsSectionHeader from './UrlsSectionHeader'

interface UrlsSectionProps {
  externalSourceUrl: string
  title: string
}

const UrlsSection = ({
  externalSourceUrl,
  title,
}: UrlsSectionProps): JSX.Element => {
  return (
    <Box as="article" borderWidth="1px" shadow="sm" w="100%">
      <UrlsSectionHeader externalSourceUrl={externalSourceUrl} title={title} />
      <UrlsSectionContent />
    </Box>
  )
}

export default UrlsSection
