import { Flex } from '@chakra-ui/react'
import LogInButton from '../../ui/buttons/auth/LogInButton'
import SignUpButton from '../../ui/buttons/auth/SignUpButton'
import AuthModal from '../../ui/modals/auth/AuthModal'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'

const AuthActions = () => {
  const [ user ] = useAuthState(auth)

  if (user) {
    return <></>
  }

  return (
    <Flex
      align='center'
      gap={{
        base: 1,
        lg: 1,
        xl: 5
      }}
      display={{
        base: 'none',
        lg: 'flex'
      }}
    >
      <AuthModal />
      <LogInButton />
      <SignUpButton />
    </Flex>
  )
}

export default AuthActions
