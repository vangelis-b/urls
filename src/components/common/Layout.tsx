import Head from 'next/head'
import Content from './Content'
import Footer from './Footer'
import FooterContent from './FooterContent'
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
        <FooterContent />
      </Footer>
    </>
  )
}

Layout.defaultProps = {
  pageTitle: '_urls',
}

export default Layout
