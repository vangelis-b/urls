import splitbee from '@splitbee/web'
import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {SWRConfig} from 'swr'
import {useEffect} from 'react'
import fetcher from '../utils/fetcher'
import theme from '../theme'
import {isProduction} from '../constants/env'

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  useEffect((): void => {
    if (isProduction) {
      splitbee.init({
        apiUrl: '/sb-api',
        scriptUrl: '/sb.js',
        token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,
      })
    }
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <SWRConfig value={{fetcher: fetcher}}>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  )
}

export default App
