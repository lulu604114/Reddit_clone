import { AuthModalViews } from '../../../../models/types/AuthModalViews'
import { Flex } from '@chakra-ui/react'
import AuthModalBgImage from './AuthModalBgImage'
import Signup from '../../../auth/signup'
import Login from '../../../auth/login'

interface Props {
  view: AuthModalViews
}

const AuthModalContent = ({ view }: Props) => {
  return (
    <Flex height='100%'>
      <AuthModalBgImage />
      <Flex
        align='center'
      >
        {view === 'login' && <Login />}
        {view === 'singUp' && <Signup />}
      </Flex>
    </Flex>
  )
}

export default AuthModalContent
