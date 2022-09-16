import { Input } from '@chakra-ui/input'
import { ChangeEvent } from 'react'

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const LoginFormFields = ({ onChange }: Props) => {

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
        placeholder='Mot de passe'
        required
        onChange={onChange}
      />
    </>
  )
}

export default LoginFormFields
