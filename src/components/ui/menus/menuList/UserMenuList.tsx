import { MenuDivider, MenuList } from '@chakra-ui/menu'
import AuthActionsMenuItem from '../menuItems/AuthActionsMenuItem'

const UserMenuList = () => {
  return (
    <MenuList width='260px'>
      <MenuDivider />
      <AuthActionsMenuItem />
    </MenuList>
  )
}

export default UserMenuList

