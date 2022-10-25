import { Button, Image } from '@chakra-ui/react'
import { auth } from '../../../../firebase/clientApp'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const GoogleLoginButton = () => {
  const [ signInWithGoogle ] = useSignInWithGoogle(auth)

  const handleClick = () => {
    signInWithGoogle()
  }

  return (
    <Button
      leftIcon={<Image src='/images/google_logo_icon.svg' alt='google_logo_icon' />}
      variant='oauth'
      width='100%'
      onClick={handleClick}
    >
      Continuer avec google
    </Button>
  )
}

export default GoogleLoginButton
