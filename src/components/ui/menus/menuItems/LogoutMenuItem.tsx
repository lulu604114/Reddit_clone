import { auth } from '../../../../firebase/clientApp'
import { signOut } from '@firebase/auth'
import { MenuItem } from '@chakra-ui/menu'
import { Icon } from '@chakra-ui/react'
import { MdOutlineLogout } from 'react-icons/md'

const LogoutMenuItem = () => {
  const handleClick = () => {
    signOut(auth)
  }

  return (
    <MenuItem
      onClick={handleClick}
      icon={<Icon as={MdOutlineLogout} />}
    >
      Se déconnecter
    </MenuItem>
  )
}

export default LogoutMenuItem
