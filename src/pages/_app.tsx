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
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/favicon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/favicon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/favicon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/favicon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/favicon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon-180x180.png" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/favicon-192x192.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#00A3C4" />
        <meta name="msapplication-TileImage" content="/icons/favicon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00A3C4" />
      </Head>
      <SWRConfig value={{fetcher: fetcher}}>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  )
}

export default App
