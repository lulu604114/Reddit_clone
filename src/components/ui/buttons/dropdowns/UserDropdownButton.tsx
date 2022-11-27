import { MenuButton } from '@chakra-ui/react'
import { HiOutlineUser } from 'react-icons/hi';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebase/clientApp'
import CurrentUserInfo from '../../../user/CurrentUserInfo'
import DropdownButton from './DropdownButton'

const UserDropdownButton = () => {
  const [ user ] = useAuthState(auth)

  return (
    <MenuButton as={DropdownButton}>
      {user ? <CurrentUserInfo /> : <HiOutlineUser fontSize='20' />}
    </MenuButton>
  )
}

export default UserDropdownButton
