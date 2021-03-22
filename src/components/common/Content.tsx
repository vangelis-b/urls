import {Container, ContainerProps} from '@chakra-ui/react'
import {HEADER_HEIGHT, VIEWPORT_WIDTH} from '../../theme/sizes'

const Content = (props: ContainerProps): JSX.Element => {
  return (
    <Container
      as="main"
      flex="1"
      maxW={VIEWPORT_WIDTH}
      mt={HEADER_HEIGHT}
      p={[4, 8]}
      {...props}
    />
  )
}

export default Content
