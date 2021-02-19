import {Divider, Heading, LinkBox, LinkOverlay} from '@chakra-ui/react'

interface UrlsSectionHeaderProps {
  externalUrl: string
  title: string
}

const UrlsSectionHeader = ({
  externalUrl,
  title,
}: UrlsSectionHeaderProps): JSX.Element => {
  return (
    <LinkBox as="header" mx={5}>
      <Heading my={4} size="sm">
        <LinkOverlay href={externalUrl} isExternal>
          _{title}
        </LinkOverlay>
      </Heading>
      <Divider />
    </LinkBox>
  )
}

export default UrlsSectionHeader
