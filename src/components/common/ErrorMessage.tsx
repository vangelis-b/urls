import {Alert, AlertDescription, AlertIcon, AlertTitle} from '@chakra-ui/react'

interface Props {
  title: string
}

const ErrorMessage = ({title}: Props): JSX.Element => {
  return (
    <Alert
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      status="error"
      textAlign="center"
    >
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        Something went wrong. Please try again later.
      </AlertDescription>
    </Alert>
  )
}

export default ErrorMessage
