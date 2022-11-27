import { MenuGroup, MenuList } from '@chakra-ui/menu'
import CreateCommunityMenuItems from '../menuItems/CreateCommunityMenuItems'
import CommunityListFilterInput from '../../inputs/CommunityListFilterInput'

const CommunityMenuList = () => {
  return (
    <MenuList width='270px'>
      <CommunityListFilterInput />
      <MenuGroup title='Your communities'>
        <CreateCommunityMenuItems />
      </MenuGroup>
      <MenuGroup title='Feeds'>
      </MenuGroup>
      <MenuGroup title='Other'>
      </MenuGroup>
    </MenuList>
  )
}

export default CommunityMenuList
