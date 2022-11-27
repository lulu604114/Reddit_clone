import { Button } from '@chakra-ui/react'

interface Props {
  loading: boolean
}

const SignupFormActions = ({ loading }: Props) => {
  return (
    <Button
      type='submit'
      variant='solid'
      size='md'
      isLoading={loading}
      loadingText='Submitting'
    >
      Continuer
    </Button>
  )
}

export default SignupFormActions
