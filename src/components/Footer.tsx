import {Flex, Text} from '@chakra-ui/react'

const Footer = (): JSX.Element => {
  return (
    <Flex align="center" as="footer" h={50} justify="center" w="100%">
      <Text color="gray.400">Created by Vangelis Bouzoukas</Text>
    </Flex>
  )
}

export default Footer
