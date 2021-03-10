import {Button} from '@chakra-ui/react'
import NextLink from 'next/link'

const Logo = (): JSX.Element => {
  return (
    <NextLink href="/">
      <Button
        color="cyan.600"
        fontSize="x-large"
        fontWeight="bold"
        variant="ghost"
      >
        _urls
      </Button>
    </NextLink>
  )
}

export default Logo
