import {
  ChakraProvider as Chakra,
  ChakraProviderProps,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react'
import {GetServerSideProps} from 'next'
import theme from '../../theme'

interface Props extends ChakraProviderProps {
  cookies: any
}

const ChakraProvider = ({cookies, children}: Props) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <Chakra colorModeManager={colorModeManager} theme={theme}>
      {children}
    </Chakra>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      // First time users will not have any cookies and we cannot return
      // undefined here, hence ?? is necessary
      cookies: context.req.headers.cookie ?? '',
    },
  }
}

export default ChakraProvider
