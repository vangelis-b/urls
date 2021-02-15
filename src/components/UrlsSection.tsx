import {Box, Divider, Heading, Text} from '@chakra-ui/react'

interface UrlsSectionProps {
  title: string
  description?: string
}

const UrlsSection = ({title, description}: UrlsSectionProps): JSX.Element => {
  return (
    <Box p={5} shadow="sm" borderWidth="1px" w="100%">
      <Heading fontSize="xl">{title}</Heading>
      <Divider mt={4} />
      <Text mt={4}>{description}</Text>
    </Box>
  )
}

UrlsSection.defaultProps = {
  description: 'News feed coming soon',
}

export default UrlsSection
