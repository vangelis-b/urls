import {Flex} from '@chakra-ui/react'
import {HEADER_HEIGHT, VIEWPORT_WIDTH} from '../../styles/sizes'
import DarkModeSwitch from './DarkModeSwitch'
import Logo from './Logo'

const NavBar = (): JSX.Element => {
  return (
    <Flex
      as="nav"
      borderBottomWidth="1px"
      h={HEADER_HEIGHT}
      justify="center"
      shadow="sm"
      w="100%"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW={VIEWPORT_WIDTH}
        px={[4, 8]}
        w="100%"
      >
        <Logo />
        <DarkModeSwitch />
      </Flex>
    </Flex>
  )
}

export default NavBar
