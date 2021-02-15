import {Flex} from '@chakra-ui/react'
import NavBar from './NavBar'

const Header = (): JSX.Element => {
  return (
    <Flex as="header" w="100%">
      <NavBar />
    </Flex>
  )
}

export default Header
