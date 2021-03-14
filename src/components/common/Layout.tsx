import Head from 'next/head'
import {Link, Text} from '@chakra-ui/react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'

interface Props {
  children?: React.ReactNode
  pageTitle?: string
}

const Layout = ({children, pageTitle}: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header>
        <NavBar />
      </Header>
      <Content>{children}</Content>
      <Footer>
        <Text color="gray.500">
          Created by{' '}
          <Link
            data-splitbee-event="Open External Link"
            data-splitbee-href="https://github.com/vangelis-b"
            data-splitbee-title="vangelis-b (Vangelis) · GitHub"
            href="https://github.com/vangelis-b"
            isExternal
          >
            Vangelis Bouzoukas
          </Link>
        </Text>
      </Footer>
    </>
  )
}

Layout.defaultProps = {
  pageTitle: '_urls',
}

export default Layout
