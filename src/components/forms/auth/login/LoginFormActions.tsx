import { Button } from '@chakra-ui/react'

interface Props {
  loading: boolean
}

const LoginFormActions = ({ loading }: Props) => {
  return (
    <Button
      variant='solid'
      type='submit'
      isLoading={loading}
      loadingText='Connexion...'
    >
      Se connecter
    </Button>
  )
}

export default LoginFormActions
