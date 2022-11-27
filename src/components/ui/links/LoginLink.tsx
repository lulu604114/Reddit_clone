import { useSetRecoilState } from 'recoil'
import { Link } from '@chakra-ui/react'
import { authModalState } from '../../../store/atoms/ModalState'

const LoginLink = () => {
  const setAuthModalState = useSetRecoilState(authModalState)

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
