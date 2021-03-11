import {SimpleGrid} from '@chakra-ui/react'
import {useRouter} from 'next/dist/client/router'
import ErrorMessage from '../components/common/ErrorMessage'
import Layout from '../components/common/Layout'
import UrlsSection from '../components/urls/UrlsSection'
import sources from '../constants/sources'

const Index = (): JSX.Element => {
  const router = useRouter()
  const {id} = router.query
  const source = sources.find((source) => source.title === id)

  if (!source) {
    return (
      <Layout>
        <SimpleGrid columns={1} spacing={[4, 8]}>
          <ErrorMessage title={`The urls for _${id} are not available!`} />
        </SimpleGrid>
      </Layout>
    )
  }

  return (
    <Layout pageTitle={`_${source.title} - _urls`}>
      <SimpleGrid columns={1} spacing={[4, 8]}>
        <UrlsSection sourceUrl={source.sourceUrl} title={source.title} />
      </SimpleGrid>
    </Layout>
  )
}

export default Index
