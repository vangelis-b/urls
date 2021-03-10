import {Box, BoxProps, useColorModeValue} from '@chakra-ui/react'

const Header = (props: BoxProps): JSX.Element => {
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <Box
      as="header"
      bgColor={bgColor}
      pos="fixed"
      top={0}
      w="100%"
      zIndex={1}
      {...props}
    />
  )
}

export default Header
