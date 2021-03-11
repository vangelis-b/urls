import Head from 'next/head'
import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {SWRConfig} from 'swr'
import fetcher from '../utils/fetcher'
import theme from '../theme'

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link href="favicon.png" rel="icon" type="image/png" />
        <link color="#0987A0" href="favicon.svg" rel="mask-icon" />
        <link href="favicon.svg" rel="icon" />
      </Head>
      <SWRConfig value={{fetcher: fetcher}}>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  )
}

export default App
