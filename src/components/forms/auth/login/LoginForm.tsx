import { ChangeEvent, FormEvent, useState } from 'react'
import LoginFormFields from './LoginFormFields'
import LoginFormActions from './LoginFormActions'
import { Flex, Text } from '@chakra-ui/react'
import OauthButtons from '../../../auth/oauth/OauthButtons'
import OrDivider from '../../../ui/dividers/OrDivider'
import { auth } from '../../../../firebase/clientApp'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import useGetFirebaseError from '../../../../hooks/useGetFirebaseError'

const LoginForm = () => {
  const [
    signInWithEmailAndPassword,
    ,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)
  const [ loginForm, setLoginForm ] = useState({
    email: '',
    password: ''
  })
  const [ getFirebaseError ] = useGetFirebaseError()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginForm(state => ({
      ...state,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event:  FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    signInWithEmailAndPassword(loginForm.email, loginForm.password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        flexDirection='column'
        gap='3'>
        {error && (
          <Text
            textAlign='center'
            fontSize='sm'
            color='tomato'>
            {getFirebaseError(error)}
          </Text>
        )}
        <OauthButtons/>
        <OrDivider />
        <Flex
          flexDirection='column'
          gap='3'>
          <LoginFormFields onChange={handleChange}/>
          <LoginFormActions loading={loading}/>
        </Flex>
      </Flex>
    </form>
  )
}

export default LoginForm
