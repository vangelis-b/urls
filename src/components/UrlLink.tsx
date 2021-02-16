import {Link} from '@chakra-ui/react'

interface UrlLinkProps {
  description: string
  externalUrl: string
}

const UrlLink = ({description, externalUrl}: UrlLinkProps): JSX.Element => {
  return (
    <Link
      color="cyan.700"
      fontSize="sm"
      fontWeight="medium"
      href={externalUrl}
      isExternal
    >
      {description}
    </Link>
  )
}

export default UrlLink
