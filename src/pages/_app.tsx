import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {Head} from 'next/document'
import theme from '../theme'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>_urls</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
