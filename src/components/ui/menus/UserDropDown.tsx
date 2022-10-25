import UserDropdownButton from './dropDowns/UserDropdownButton'
import UserDropDownMenu from './menuLists/UserDropDownMenu'
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
