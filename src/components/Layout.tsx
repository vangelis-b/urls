import {Flex} from '@chakra-ui/react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <Flex as="section" flexDirection="column" minH="100vh">
      <Header />
      <Flex as="main" flex="1">
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}

export default Layout
