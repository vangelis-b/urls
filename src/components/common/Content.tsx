import {Container, ContainerProps} from '@chakra-ui/react'

const Content = (props: ContainerProps): JSX.Element => {
  return <Container as="main" flex="1" maxW={1200} p={[4, 8]} {...props} />
}

export default Content
