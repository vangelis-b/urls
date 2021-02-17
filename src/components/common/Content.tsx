import {Container, ContainerProps} from '@chakra-ui/react'
import {VIEWPORT_WIDTH} from '../../constants/styles'

const Content = (props: ContainerProps): JSX.Element => {
  return (
    <Container as="main" flex="1" maxW={VIEWPORT_WIDTH} p={[4, 8]} {...props} />
  )
}

export default Content
