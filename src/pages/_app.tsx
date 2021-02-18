import Head from 'next/head'
import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import theme from '../theme'

const MyApp = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>_urls</title>
        <link href="favicon.png" rel="icon" type="image/png" />
        <link color="#0987A0" href="favicon.svg" rel="mask-icon" />
        <link href="favicon.svg" rel="icon" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
