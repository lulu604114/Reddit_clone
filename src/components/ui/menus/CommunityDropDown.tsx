import { Menu } from '@chakra-ui/react'
import CommunityDropDownButton from './dropDowns/CommunityDropDownButton'
import CommunityDropDownMenu from './menuLists/CommunityDropDownMenu'

const CommunityDropDown = () => {
  return (
    <Menu>
      <CommunityDropDownButton />
      <CommunityDropDownMenu />
    </Menu>
  )
}

export default CommunityDropDown
