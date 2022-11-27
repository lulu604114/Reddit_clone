import { Menu } from '@chakra-ui/react'
import CommunityDropdownButton from '../buttons/dropdowns/CommunityDropdownButton'
import CommunityMenuList from './menuList/CommunityMenuList'

const CommunityMenu = () => {
  return (
    <Menu variant='community'>
      <CommunityDropdownButton />
      <CommunityMenuList />
    </Menu>
  )
}

export default CommunityMenu
