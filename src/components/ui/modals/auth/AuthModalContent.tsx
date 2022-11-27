import { AuthModalViews } from '../../../../models/types/AuthModalViews'
import { Box } from '@chakra-ui/react'
import Signup from '../../../auth/signup'
import Login from '../../../auth/login'

interface Props {
  view: AuthModalViews
}

const AuthModalContent = ({ view }: Props) => {
  return (
    <Box width='280px'>
      {view === 'login' && <Login />}
      {view === 'singUp' && <Signup />}
    </Box>
  )
}

export default AuthModalContent
