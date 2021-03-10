import {Link, Text} from '@chakra-ui/react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'

interface Props {
  children?: React.ReactNode
}

const Layout = ({children}: Props): JSX.Element => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <Text color="gray.500">
          Created by{' '}
          <Link href="https://github.com/vangelis-b" isExternal>
            Vangelis Bouzoukas
          </Link>
        </Text>
      </Footer>
    </>
  )
}

export default Layout
