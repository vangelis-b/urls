import {Link} from '@chakra-ui/react'

interface Props {
  description: string
  externalUrl: string
}

const UrlLink = ({description, externalUrl}: Props): JSX.Element => {
  return (
    <Link
      color="cyan.600"
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
