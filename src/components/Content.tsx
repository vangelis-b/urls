import {Alert, AlertIcon, Container, SimpleGrid, Text} from '@chakra-ui/react'
import UrlsSection from './UrlsSection'
import sources from '../constants/sources'

const Content = (): JSX.Element => {
  return (
    <Container maxW={1200} p={[4, 8]}>
      {/* TODO: Remove alert when there is real data. */}
      <Alert mb={[4, 8]} colorScheme="cyan">
        <AlertIcon />
        <Text fontWeight="bold" mr={1} color="cyan.700">
          _urls
        </Text>
        <Text>is still in construction.</Text>
      </Alert>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={[4, 8]}>
        {sources.map(({title, externalSourceUrl}) => {
          return (
            <UrlsSection
              externalSourceUrl={externalSourceUrl}
              key={title}
              title={title}
            />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export default Content
