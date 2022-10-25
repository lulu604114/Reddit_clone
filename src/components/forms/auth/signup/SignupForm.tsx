import { ChangeEvent, FormEvent, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import SignupFormActions from './SignupFormActions'
import SignupFormFields from './SignupFormFields'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebase/clientApp'
import { Text } from '@chakra-ui/react'
import OauthButtons from '../../../auth/oauth/OauthButtons'
import OrDivider from '../../../ui/dividers/OrDivider'
import useGetFirebaseError from '../../../../hooks/useGetFirebaseError'

const SignupForm = () => {
  const [
    createUserWithEmailAndPassword,
    ,
    loading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [ loginForm, setLoginForm ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [ getFirebaseError ] = useGetFirebaseError()
  const [ errors, setErrors ] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginForm(state=> ({
      ...state,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event:  FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (errors) setErrors('')

    if (loginForm.password !== loginForm.confirmPassword) {
      setErrors('Password do not match')
      return
    }

    createUserWithEmailAndPassword(loginForm.email, loginForm.password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex
        flexDirection='column'
        gap='3'
        width='280px'
      >
        {errors || createUserError && (
          <Text
            textAlign='center'
            fontSize='sm'
            color='tomato'
          >
            {errors || getFirebaseError(createUserError)}
          </Text>
        )}
        <OauthButtons/>
        <OrDivider />
        <SignupFormFields onChange={handleChange}/>
        <SignupFormActions loading={loading}/>
      </Flex>
    </form>
  )
}

export default SignupForm
