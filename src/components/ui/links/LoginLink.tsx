import { useSetRecoilState } from 'recoil'
import AuthModalState from '../../../store/atoms/AuthModalState'
import { Link } from '@chakra-ui/react'

const LoginLink = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState)

  const handleClick = () => {
    setAuthModalState(state => ({
      ...state,
      view: 'login'
    }))
  }

  return (
    <Link
      color='blue.500'
      fontWeight='bold'
      onClick={handleClick}
    >
      SE CONNECTER
    </Link>
  )
}

export default LoginLink
