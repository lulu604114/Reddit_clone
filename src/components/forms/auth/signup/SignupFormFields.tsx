import { Input } from '@chakra-ui/input'
import { ChangeEvent } from 'react'

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SignupFormFields = ({ onChange }: Props) => {
  return (
    <>
      <Input
        name='email'
        type='email'
        placeholder='Email'
        required
        onChange={onChange}
      />
      <Input
        name='password'
        type='password'
        placeholder='Password'
        required
        onChange={onChange}
      />
      <Input
        name='confirmPassword'
        type='password'
        placeholder='Confirm password'
        required
        onChange={onChange}
      />
    </>
  )
}

export default SignupFormFields
