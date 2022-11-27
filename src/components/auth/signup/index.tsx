import { Heading, Link, Text } from '@chakra-ui/react'
import LoginLink from '../../ui/links/LoginLink'
import SignupForm from '../../forms/auth/signup/SignupForm'

const Signup = () => {
  return (
    <>
      <Heading
        as='h1'
        size='sm'
      >
        S'inscrire
      </Heading>
      <Text
        fontSize='xs'
        mt='2'
        mb='14'
      >
        En continuant, vous acceptez nos <Link color='blue.500'>Accord d'utilisation</Link> et <Link color='blue.500'>Politique de confidentialité</Link>.
      </Text>
      <SignupForm />
      <Text
        fontSize='xs'
        mt='10'
      >
        Déjà Redditor ? <LoginLink />
      </Text>
    </>
  )
}

export default Signup
