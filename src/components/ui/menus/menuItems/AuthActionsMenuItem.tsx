import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebase/clientApp'
import { MenuItem } from '@chakra-ui/menu'
import { useSetRecoilState } from 'recoil'
import authModalState from '../../../../store/atoms/AuthModalState'
import { signOut } from '@firebase/auth'
import { Icon } from '@chakra-ui/react'
import { MdOutlineLogout } from 'react-icons/md'
import { HiOutlineUserCircle } from 'react-icons/hi'

const AuthActionsMenuItem = () => {
  const [ user ] = useAuthState(auth)
  const setAuthModalState = useSetRecoilState(authModalState)

  const handleClick = () => {
    if (user) {
      signOut(auth)
      return
    }

    setAuthModalState(state  => ({
      ...state,
      open: true
    }))
  }

  return (
    <MenuItem
      onClick={handleClick}
      icon={user ? <Icon as={MdOutlineLogout} /> : <Icon as={HiOutlineUserCircle} />}
      fontSize='15'
      sx={{
        '& > .chakra-menu__icon-wrapper': {
          display: 'flex',
          fontSize: '20'
        }
      }}
    >
      {user ? 'Se déconnecter' : `Se connecter ou s'inscrire`}
    </MenuItem>
  )
}

export default AuthActionsMenuItem
