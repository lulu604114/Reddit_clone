import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import SignupFormActions from './SignupFormActions'
import SignupFormFields from './SignupFormFields'

const SignupForm = () => {
  const [ loginForm, setLoginForm ] = useState({
    email: ''
  })

  return (
    <form>
      <Flex
        flexDirection='column'
        gap='3'
        width='280px'
      >
        <SignupFormFields />
        <SignupFormActions />
      </Flex>
    </form>
  )
}

export default SignupForm
