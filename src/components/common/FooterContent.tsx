import {Link, Text} from '@chakra-ui/react'

const FooterContent = (): JSX.Element => {
  return (
    <Text color="gray.600">
      Created by{' '}
      <Link
        aria-label="_urls Creator GitHub Profile"
        color="cyan"
        data-splitbee-event-href="https://github.com/vangelis-b"
        data-splitbee-event-title="vangelis-b (Vangelis) · GitHub"
        data-splitbee-event="Open External Link"
        href="https://github.com/vangelis-b"
        isExternal
      >
        Vangelis Bouzoukas
      </Link>
    </Text>
  )
}

export default FooterContent
