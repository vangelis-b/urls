import {SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/common/Layout'
import UrlsSection from '../components/urls/UrlsSection'
import sources from '../constants/sources'

const Index = (): JSX.Element => {
  return (
    <Layout>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={[4, 8]}>
        {sources.map(({sourceUrl, title}) => {
          return <UrlsSection key={title} sourceUrl={sourceUrl} title={title} />
        })}
      </SimpleGrid>
    </Layout>
  )
}

export default Index
