import {Flex, Text} from '@chakra-ui/react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'

interface Props {
  children?: React.ReactNode
}

const Layout = ({children}: Props): JSX.Element => {
  return (
    <Flex as="section" flexDirection="column" minH="100vh">
      <Header>
        <NavBar />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <Text color="gray.400">Created by Vangelis Bouzoukas</Text>
      </Footer>
    </Flex>
  )
}

export default Layout
