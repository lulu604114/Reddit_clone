import { Button, MenuButton } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CommunitySelected from '../../../community/CommunitySelected'

const CommunityDropDownButton = () => {
  return (
    <MenuButton
      as={Button}
      rightIcon={<ChevronDownIcon fontSize='22'/>}
      variant='dropDown'
      size='md'
      width={{
        base: 'unset',
        lg: '270px'
      }}
      ml='2'
    >
      <CommunitySelected />
    </MenuButton>
  )
}

export default CommunityDropDownButton
