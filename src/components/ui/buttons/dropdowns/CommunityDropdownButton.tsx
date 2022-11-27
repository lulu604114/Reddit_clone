import { MenuButton } from '@chakra-ui/react'
import CommunitySelected from '../../../community/CommunitySelected'
import DropdownButton from './DropdownButton'

const CommunityDropdownButton = () => {
  return (
    <MenuButton
      as={DropdownButton}
      width={{
        base: 'unset',
        xl: '270px'
      }}
      ml='2'
    >
      <CommunitySelected />
    </MenuButton>
  )
}

export default CommunityDropdownButton
