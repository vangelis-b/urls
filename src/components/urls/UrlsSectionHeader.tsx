import {Divider, Heading, LinkBox, LinkOverlay} from '@chakra-ui/react'

interface UrlsSectionHeaderProps {
  externalSourceUrl: string
  title: string
}

const UrlsSectionHeader = ({
  externalSourceUrl,
  title,
}: UrlsSectionHeaderProps): JSX.Element => {
  return (
    <LinkBox as="header" mx={5}>
      <Heading my={4} size="sm">
        <LinkOverlay href={externalSourceUrl} isExternal>
          _{title}
        </LinkOverlay>
      </Heading>
      <Divider />
    </LinkBox>
  )
}

export default UrlsSectionHeader
