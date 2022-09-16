import { IconButton, MenuButton } from '@chakra-ui/react'
import { ChevronDownIcon, SettingsIcon } from '@chakra-ui/icons'

const UserDropdownButton = () => {
  return (
    <MenuButton
      as={IconButton}
      rightIcon={<ChevronDownIcon />}
      icon={<SettingsIcon />}
      variant='outline'
      borderColor='white'
      height='28px'
      color='gray.500'
      paddingLeft={{
        base: 1,
        lg: 1,
        xl: 5
      }}
      paddingRight={{
        base: 1,
        lg: 1,
        xl: 5
      }}
      _hover={{
        bgColor: 'white',
        border: '1px solid',
        borderColor: 'gray.100'
      }}
      _active={{
        bgColor: 'white',
        border: '1px solid',
        borderColor: 'gray.100'
      }}
    />
  )
}

export default UserDropdownButton
