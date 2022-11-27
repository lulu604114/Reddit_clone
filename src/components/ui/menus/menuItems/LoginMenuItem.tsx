import { useSetRecoilState } from 'recoil'
import { authModalState } from '../../../../store/atoms/ModalState'
import { Icon } from '@chakra-ui/react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { MenuItem } from '@chakra-ui/menu'

const LoginMenuItem = () => {
  const setAuthModalState = useSetRecoilState(authModalState)

  const handleClick = () => {
    setAuthModalState(state  => ({
      ...state,
      open: true
    }))
  }

  return (
    <MenuItem
      onClick={handleClick}
      icon={<Icon as={HiOutlineUserCircle} />}
    >
      {`Se connecter ou s'inscrire`}
    </MenuItem>
  )
}

export default LoginMenuItem
