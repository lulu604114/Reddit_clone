import { Link } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../store/atoms/ModalState'

const SignupLink = () => {
  const setAuthModalState = useSetRecoilState(authModalState)

  const handleClick = () => {
    setAuthModalState(state => ({
      ...state,
      view: 'singUp'
    }))
  }

  return (
    <Link
      color='blue.500'
      fontWeight='bold'
      onClick={handleClick}
    >
      S’INSCRIRE
    </Link>
  )
}

export default SignupLink
