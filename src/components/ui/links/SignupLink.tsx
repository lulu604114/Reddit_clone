import { Link } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import AuthModalState from '../../../store/atoms/AuthModalState'

const SignupLink = () => {
  const setAuthModalState = useSetRecoilState(AuthModalState)

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
