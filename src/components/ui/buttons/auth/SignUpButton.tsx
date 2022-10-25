import { Button } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import authModalState from '../../../../store/atoms/AuthModalState'

const SignUpButton = () => {
  const setAuthModalState = useSetRecoilState(authModalState)

  const handleClick = () => {
    setAuthModalState(state => ({
      ...state,
      open: true,
      view: 'singUp'
    }))
  }

  return (
    <Button
      variant='solid'
      onClick={handleClick}
      height='28px'
    >
      {`S'inscrire`}
    </Button>
  )
}

export default SignUpButton
