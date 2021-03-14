import NextLink from 'next/link'
import splitbee from '@splitbee/web'
import {Button} from '@chakra-ui/react'

const Logo = (): JSX.Element => {
  return (
    <NextLink href="/" passHref>
      <Button
        aria-label="_urls logo"
        as="a"
        color="cyan.600"
        fontSize="x-large"
        fontWeight="bold"
        onClick={() => splitbee.track('Go to Homepage')}
        variant="ghost"
      >
        _urls
      </Button>
    </NextLink>
  )
}

export default Logo
