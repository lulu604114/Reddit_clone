import { MenuItem } from '@chakra-ui/menu'
import { VscAdd } from 'react-icons/vsc'

const CreateCommunityMenuItems = () => {
  return (
    <MenuItem
      icon={<VscAdd />}
      fontSize='13'
      sx={{
        '& > .chakra-menu__icon-wrapper': {
          display: 'flex',
          fontSize: '20'
        }
      }}
    >
      Create Community
    </MenuItem>
  )
}

export default CreateCommunityMenuItems
