import { ChangeEvent, useState } from 'react'
import LoginFormFields from './LoginFormFields'
import LoginFormActions from './LoginFormActions'
import { Flex, Box } from '@chakra-ui/react'
import OauthButtons from '../../../auth/oauth/OauthButtons'

const LoginForm = () => {
  const [ loginForm, setLoginForm ] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginForm(state => ({
      ...state,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <Box width='280px'>
        <OauthButtons />
        <Flex
          flexDirection='column'
          gap='3'>
          <LoginFormFields onChange={handleChange} />
          <LoginFormActions />
        </Flex>
      </Box>
    </form>
  )
}

export default LoginForm
