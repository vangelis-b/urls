import splitbee from '@splitbee/web'
import {AppProps} from 'next/app'
import {SWRConfig} from 'swr'
import {useEffect} from 'react'
import ChakraProvider from '../components/common/ChakraProvider'
import fetcher from '../utils/fetcher'
import {isProduction} from '../constants/env'

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  useEffect((): void => {
    if (isProduction) {
      splitbee.init({
        apiUrl: '/sb-api',
        disableCookie: true,
        scriptUrl: '/sb.js',
        token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,
      })
    }
  }, [])

  return (
    <ChakraProvider cookies={pageProps.cookies}>
      <SWRConfig value={{fetcher: fetcher}}>
        <Component {...pageProps} />
      </SWRConfig>
    </ChakraProvider>
  )
}

export default App
