import { MenuGroup, MenuList } from '@chakra-ui/menu'
import CreateCommunityMenuItems from '../menuItems/CreateCommunityMenuItems'
import { Input } from '@chakra-ui/input'
import { Box } from '@chakra-ui/react'

const CommunityDropDownMenu = () => {
  return (
    <MenuList width='270px'>
      <Box px='2'>
        <Input
          placeholder='Filter'
          width='100%'
          variant='solid'/>
      </Box>
      <MenuGroup
        title='YOUR COMMUNITIES'
        fontSize='10'
        fontWeight='500'
        color='gray.500'>
        <CreateCommunityMenuItems />
      </MenuGroup>
    </MenuList>
  )
}

export default CommunityDropDownMenu
