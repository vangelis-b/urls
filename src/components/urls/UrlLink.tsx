import {Link, LinkProps} from '@chakra-ui/react'

interface Props extends LinkProps {
  description: string
  externalUrl: string
}

const UrlLink = ({description, externalUrl, ...rest}: Props): JSX.Element => {
  return (
    <Link
      color="cyan.600"
      data-splitbee-event="Open External Link"
      data-splitbee-href={externalUrl}
      fontSize="sm"
      fontWeight="medium"
      href={externalUrl}
      isExternal
      {...rest}
    >
      {description}
    </Link>
  )
}

export default UrlLink
