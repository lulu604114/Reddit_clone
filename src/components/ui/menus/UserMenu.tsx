import UserDropdownButton from '../buttons/dropdowns/UserDropdownButton'
import UserMenuList from './menuList/UserMenuList'
import { Menu } from '@chakra-ui/react'

const UserMenu = () => {
  return (
    <Menu>
      <UserDropdownButton />
      <UserMenuList />
    </Menu>
  )
}

export default UserMenu
