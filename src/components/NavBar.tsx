import {Flex} from '@chakra-ui/react'
import DarkModeSwitch from './DarkModeSwitch'
import Logo from './Logo'

const NavBar = (): JSX.Element => {
  return (
    <Flex
      align="center"
      as="nav"
      borderBottomWidth="1px"
      h={50}
      justify="space-between"
      pl={5}
      pr={5}
      shadow="sm"
      w="100%"
    >
      <Logo />
      <DarkModeSwitch />
    </Flex>
  )
}

export default NavBar
