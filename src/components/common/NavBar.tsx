import {Flex} from '@chakra-ui/react'
import DarkModeSwitch from './DarkModeSwitch'
import Logo from './Logo'
import {VIEWPORT_WIDTH} from '../../constants/styles'

const NavBar = (): JSX.Element => {
  return (
    <Flex
      as="nav"
      borderBottomWidth="1px"
      h={50}
      justify="center"
      shadow="sm"
      w="100%"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW={VIEWPORT_WIDTH}
        pl={[4, 8]}
        pr={[4, 8]}
        w="100%"
      >
        <Logo />
        <DarkModeSwitch />
      </Flex>
    </Flex>
  )
}

export default NavBar
