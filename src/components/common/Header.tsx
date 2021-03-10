import {Flex, FlexProps} from '@chakra-ui/react'

const Header = (props: FlexProps): JSX.Element => {
  return (
    <Flex
      as="header"
      bgColor="white"
      pos="fixed"
      top={0}
      w="100%"
      zIndex={999}
      {...props}
    />
  )
}

export default Header
