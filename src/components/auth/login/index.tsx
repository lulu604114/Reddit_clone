import { Text, Heading, Link } from '@chakra-ui/react'
import LoginForm from '../../forms/auth/login/LoginForm'
import SignupLink from '../../ui/links/SignupLink'

const Login = () => {
  return (
    <>
      <Heading
        as='h1'
        size='sm'
      >
        Se connecter
      </Heading>
      <Text
        fontSize='xs'
        mt='2'
        mb='14'
      >
        En continuant, vous acceptez nos <Link color='blue.500'>Accord d'utilisation</Link> et <Link color='blue.500'>Politique de confidentialité</Link>.
      </Text>
      <LoginForm />
      <Text
        fontSize='xs'
        mt='3'
      >
        Vous avez oublié votre <Link color='blue.500'>pseudo</Link> ou <Link color='blue.500'>mot de passe</Link> ?
      </Text>
      <Text
        fontSize='xs'
        mt='10'
      >
        Première fois sur Reddit ? <SignupLink />
      </Text>
    </>
  )
}

export default Login
