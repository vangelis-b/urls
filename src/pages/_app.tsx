import Head from 'next/head'
import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import theme from '../theme'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>_urls</title>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="mask-icon" href="favicon.svg" color="#0987A0" />
        <link rel="icon" href="favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
