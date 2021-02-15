import {Flex} from '@chakra-ui/react'
import Logo from './Logo'

const NavBar = (): JSX.Element => {
  return (
    <Flex
      align="center"
      as="nav"
      h={50}
      justify="space-between"
      pl={5}
      w="100%"
    >
      <Logo />
    </Flex>
  )
}

export default NavBar
