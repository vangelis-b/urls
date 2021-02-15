import {Flex} from '@chakra-ui/react'
import Footer from './Footer'
import Header from './Header'

interface MainLayoutProps {
  children?: JSX.Element
}

const MainLayout = ({children}: MainLayoutProps): JSX.Element => {
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

export default MainLayout
