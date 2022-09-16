import { Button } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import authModalState from '../../../store/atoms/AuthModalState'

const LogInButton = () => {
  const setAuthModalState = useSetRecoilState(authModalState)

  const handleClick = () => {
    setAuthModalState(state => ({
      ...state,
      open: true,
      view: 'login'
    }))
  }

  return (
    <Button
      variant='outline'
      onClick={handleClick}
      height='28px'
    >
      Se connecter
    </Button>
  )
}

export default LogInButton
