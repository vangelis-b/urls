import {Flex, FlexProps} from '@chakra-ui/react'

const Header = (props: FlexProps): JSX.Element => {
  return <Flex as="header" w="100%" {...props} />
}

export default Header
