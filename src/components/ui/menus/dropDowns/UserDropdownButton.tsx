import { Button, MenuButton } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { HiOutlineUser } from 'react-icons/hi';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../../firebase/clientApp'
import CurrentUserInfo from '../../../user/CurrentUserInfo'


const UserDropdownButton = () => {
  const [ user ] = useAuthState(auth)

  return (
    <MenuButton
      as={Button}
      rightIcon={<ChevronDownIcon fontSize='22' />}
      variant='dropDown'
    >
      {user ? <CurrentUserInfo /> : <HiOutlineUser fontSize='20' />}
    </MenuButton>
  )
}

export default UserDropdownButton
