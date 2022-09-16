import UserDropdownButton from '../../ui/buttons/UserDropdownButton'
import UserDropDownMenu from '../menus/UserDropDownMenu'
import { Menu } from '@chakra-ui/react'

const UserDropDown = () => {
  return (
    <Menu>
      <UserDropdownButton />
      <UserDropDownMenu />
    </Menu>
  )
}

export default UserDropDown
