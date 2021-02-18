import {Alert, AlertIcon, SimpleGrid, Text} from '@chakra-ui/react'
import Layout from '../components/common/Layout'
import UrlsSection from '../components/urls/UrlsSection'
import sources from '../constants/sources'

const Index = (): JSX.Element => {
  return (
    <Layout>
      {/* TODO: Remove alert when there is real data. */}
      <Alert colorScheme="cyan" mb={[4, 8]}>
        <AlertIcon />
        <Text color="cyan.700" fontWeight="bold" mr={1}>
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
    </Layout>
  )
}

export default Index
