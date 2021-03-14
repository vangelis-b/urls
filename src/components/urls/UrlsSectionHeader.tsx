import NextLink from 'next/link'
import splitbee from '@splitbee/web'
import {Heading, LinkBox, LinkOverlay} from '@chakra-ui/react'

interface Props {
  title: string
}

const UrlsSectionHeader = ({title}: Props): JSX.Element => {
  return (
    <LinkBox as="header" mx={[4, 8]} my={3.5}>
      <Heading size="sm">
        <NextLink as={`/${title}`} href="/[id]" passHref>
          <LinkOverlay
            aria-label={`View ${title} Section`}
            onClick={() => splitbee.track('View Section', {section: title})}
          >
            _{title}
          </LinkOverlay>
        </NextLink>
      </Heading>
    </LinkBox>
  )
}

export default UrlsSectionHeader
