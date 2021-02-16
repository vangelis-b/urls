import {Container, SimpleGrid} from '@chakra-ui/react'
import UrlsSection from './UrlsSection'
import sources from '../constants/sources'

const Content = (): JSX.Element => {
  return (
    <Container maxW={1200} p={[4, 8]}>
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
