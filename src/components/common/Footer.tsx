import {Center, CenterProps} from '@chakra-ui/react'
import {FOOTER_HEIGHT} from '../../styles/sizes'

const Footer = (props: CenterProps): JSX.Element => {
  return <Center as="footer" h={FOOTER_HEIGHT} {...props} />
}

export default Footer
