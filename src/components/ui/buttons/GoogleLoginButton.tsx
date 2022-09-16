import { Button, Image } from '@chakra-ui/react'

const GoogleLoginButton = () => {
  return (
    <Button
      leftIcon={<Image src='/images/google_logo_icon.svg' alt='google_logo_icon' />}
      variant='oauth'
      width='100%'
    >
      Continuer avec google
    </Button>
  )
}

export default GoogleLoginButton
