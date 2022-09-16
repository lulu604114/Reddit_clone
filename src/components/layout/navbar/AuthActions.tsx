import { Flex } from '@chakra-ui/react'
import LogInButton from '../../ui/buttons/LogInButton'
import SignUpButton from '../../ui/buttons/SignUpButton'
import AuthModal from '../../ui/modals/auth/AuthModal'

const AuthActions = () => {
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
        md: 'flex'
      }}
    >
      <AuthModal />
      <LogInButton />
      <SignUpButton />
    </Flex>
  )
}

export default AuthActions
