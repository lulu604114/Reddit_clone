import { MenuDivider, MenuList } from '@chakra-ui/menu'
import AuthActionsMenuItem from '../menuItems/AuthActionsMenuItem'

const UserDropDownMenu = () => {
  return (
    <MenuList width='260px'>
      <MenuDivider />
      <AuthActionsMenuItem />
    </MenuList>
  )
}

export default UserDropDownMenu

