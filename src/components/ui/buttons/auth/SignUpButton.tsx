import { Button } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../../store/atoms/ModalState'

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
      height='30px'
    >
      {`S'inscrire`}
    </Button>
  )
}

export default SignUpButton
