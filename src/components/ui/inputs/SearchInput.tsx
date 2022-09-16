import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { SearchIcon } from '@chakra-ui/icons'

const SearchInput = () => {
  return (
    <InputGroup
      height='34px'
      maxWidth='690px'
      margin='0 auto'
    >
      <InputLeftElement
        height='100%'
        pointerEvents='none'
        children={
          <SearchIcon
            color='gray.500'
          />
        }
      />
      <Input
        type='text'
        placeholder='Rechercher dans Reddit'
        height='100%'
        fontSize='14px'
        bgColor='gray.100'
        _placeholder={{
          color: 'gray.500'
        }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500'
        }}
        _focusVisible={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500'
        }}
      />
    </InputGroup>
  )
}

export default SearchInput
