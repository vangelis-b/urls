import {Flex} from '@chakra-ui/react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
    <Flex as="section" flexDirection="column" minH="100vh">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Flex>
  )
}

export default Layout
