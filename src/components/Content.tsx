import {Container, SimpleGrid} from '@chakra-ui/react'
import UrlsSection from './UrlsSection'

const Content = (): JSX.Element => {
  return (
    <Container maxW={1200} p={8}>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
        <UrlsSection title="hackernews" />
        <UrlsSection title="proggit" />
        <UrlsSection title="reddit" />
        <UrlsSection title="toptal" />
        <UrlsSection title="slashdot" />
        <UrlsSection title="techmeme" />
        <UrlsSection title="wired" />
      </SimpleGrid>
    </Container>
  )
}

export default Content
