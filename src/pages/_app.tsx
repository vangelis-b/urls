import Head from 'next/head'
import splitbee from '@splitbee/web'
import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {SWRConfig} from 'swr'
import {useEffect} from 'react'
import fetcher from '../utils/fetcher'
import theme from '../theme'

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  useEffect((): void => {
    splitbee.init({
      apiUrl: '/sb-api',
      scriptUrl: '/sb.js',
      token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,
    })
  }, [])

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
