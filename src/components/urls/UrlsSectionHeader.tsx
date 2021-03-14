import NextLink from 'next/link'
import {Divider, Heading, Link, LinkBox} from '@chakra-ui/react'

interface Props {
  title: string
}

const UrlsSectionHeader = ({title}: Props): JSX.Element => {
  return (
    <LinkBox as="header" mx={5}>
      <Heading my={4} size="sm">
        <NextLink href={`/${title}`} passHref>
          <Link
            data-splitbee-event-section={title}
            data-splitbee-event="View Section"
          >
            _{title}
          </Link>
        </NextLink>
      </Heading>
      <Divider />
    </LinkBox>
  )
}

export default UrlsSectionHeader
